(function () {
  const SVG_NS = "http://www.w3.org/2000/svg";

  function htmlEscape(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function svgEl(name, attrs = {}) {
    const node = document.createElementNS(SVG_NS, name);
    Object.entries(attrs).forEach(([key, value]) => {
      if (value !== undefined && value !== null) node.setAttribute(key, value);
    });
    return node;
  }

  function labelLines(label) {
    if (label.length < 19) return [label];
    const splitters = [" & ", " Green ", " "];
    for (const splitter of splitters) {
      const idx = label.indexOf(splitter);
      if (idx > 4) {
        const keepSplitter = splitter.trim() === "&" ? " &" : "";
        const left = label.slice(0, idx + keepSplitter.length).trim();
        const right = label.slice(idx + splitter.length).trim();
        if (left && right) return [left, right];
      }
    }
    return [label];
  }

  function createPathwayRenderer(options) {
    const data = options.data;
    const svg = options.svg;
    const panel = options.panel;
    const filterBar = options.filterBar;
    const actionGrid = options.actionGrid;
    const nodeById = new Map(data.nodes.map((node) => [node.id, node]));
    const columnById = new Map(data.columns.map((column) => [column.id, column]));
    const rendered = { nodes: new Map(), edges: [] };

    function nodePosition(node) {
      const column = columnById.get(node.column);
      return {
        x: column.x,
        y: node.y,
        width: column.width,
        height: 76
      };
    }

    function edgePath(sourceNode, targetNode) {
      const source = nodePosition(sourceNode);
      const target = nodePosition(targetNode);
      const startX = source.x + source.width;
      const startY = source.y + source.height / 2;
      const endX = target.x;
      const endY = target.y + target.height / 2;
      const forward = endX >= startX;
      const gap = Math.abs(endX - startX);
      const bend = Math.max(52, gap * 0.42);
      if (forward) {
        return `M ${startX} ${startY} C ${startX + bend} ${startY}, ${endX - bend} ${endY}, ${endX} ${endY}`;
      }
      return `M ${source.x} ${startY} C ${source.x - bend} ${startY}, ${target.x + target.width + bend} ${endY}, ${target.x + target.width} ${endY}`;
    }

    function renderColumns() {
      const group = svgEl("g", { class: "columns" });
      data.columns.forEach((column) => {
        const lane = svgEl("rect", {
          class: `column-lane ${column.id}`,
          x: column.x - 10,
          y: 46,
          width: column.width + 20,
          height: 660,
          rx: 24
        });
        const label = svgEl("text", {
          class: "column-label",
          x: column.x + column.width / 2,
          y: 28,
          "text-anchor": "middle"
        });
        label.textContent = column.label;
        group.append(lane, label);
      });
      svg.appendChild(group);
    }

    function renderEdges() {
      const group = svgEl("g", { id: "edges" });
      data.links.forEach((link, index) => {
        const source = nodeById.get(link.source);
        const target = nodeById.get(link.target);
        if (!source || !target) return;
        const d = edgePath(source, target);
        const edgeGroup = svgEl("g", {
          class: "edge-group",
          tabindex: "0",
          role: "button",
          "aria-label": `${source.label} to ${target.label}. ${link.title}`,
          "data-index": index
        });
        const hit = svgEl("path", { class: "edge-hit", d });
        const path = svgEl("path", {
          class: `edge ${link.themes.map((theme) => `theme-${theme}`).join(" ")}`,
          d,
          "marker-end": "url(#arrow)",
          "data-index": index,
          "data-source": link.source,
          "data-target": link.target,
          "data-themes": link.themes.join(",")
        });
        edgeGroup.append(hit, path);
        edgeGroup.addEventListener("click", () => selectLink(index));
        edgeGroup.addEventListener("keydown", (event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            selectLink(index);
          }
        });
        rendered.edges.push({ group: edgeGroup, element: path, link, index });
        group.appendChild(edgeGroup);
      });
      svg.appendChild(group);
    }

    function renderIcon(nodeGroup, node) {
      const icon = data.iconRegistry[node.icon] || {};
      const imageSize = 34;
      if (icon.src) {
        const image = svgEl("image", {
          class: "node-icon-image",
          href: icon.src,
          x: 16,
          y: 21,
          width: imageSize,
          height: imageSize,
          preserveAspectRatio: "xMidYMid meet"
        });
        nodeGroup.appendChild(image);
        return;
      }
      const text = svgEl("text", { class: "icon-letter", x: 33, y: 43, "text-anchor": "middle" });
      text.textContent = icon.fallback || node.label.slice(0, 2).toUpperCase();
      nodeGroup.appendChild(text);
    }

    function renderNodes() {
      const group = svgEl("g", { id: "nodes" });
      data.nodes.forEach((node) => {
        const pos = nodePosition(node);
        const nodeGroup = svgEl("g", {
          class: `node node-${node.column}`,
          tabindex: "0",
          role: "button",
          "aria-label": `${node.label}. ${node.sublabel}`,
          "data-id": node.id,
          transform: `translate(${pos.x}, ${pos.y})`
        });
        const rect = svgEl("rect", { width: pos.width, height: pos.height, rx: 18 });
        const badge = svgEl("rect", { class: "icon-badge", x: 11, y: 17, width: 44, height: 44, rx: 14 });
        nodeGroup.append(rect, badge);
        renderIcon(nodeGroup, node);

        const lines = labelLines(node.label);
        lines.forEach((line, i) => {
          const text = svgEl("text", {
            class: "node-title",
            x: 65,
            y: lines.length === 1 ? 31 : 24 + i * 17
          });
          text.textContent = line;
          nodeGroup.appendChild(text);
        });
        const sub = svgEl("text", { class: "node-subtitle", x: 65, y: 59 });
        sub.textContent = node.sublabel;
        nodeGroup.appendChild(sub);
        nodeGroup.addEventListener("click", () => selectNode(node.id));
        nodeGroup.addEventListener("keydown", (event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            selectNode(node.id);
          }
        });
        rendered.nodes.set(node.id, nodeGroup);
        group.appendChild(nodeGroup);
      });
      svg.appendChild(group);
    }

    function renderSvg() {
      svg.innerHTML = "";
      rendered.nodes.clear();
      rendered.edges = [];

      const defs = svgEl("defs");
      const marker = svgEl("marker", {
        id: "arrow",
        viewBox: "0 0 10 10",
        refX: "8",
        refY: "5",
        markerWidth: "6",
        markerHeight: "6",
        orient: "auto-start-reverse"
      });
      marker.appendChild(svgEl("path", { d: "M 2 1 L 8 5 L 2 9", class: "arrow-head" }));
      defs.appendChild(marker);
      svg.appendChild(defs);

      renderColumns();
      renderEdges();
      renderNodes();
    }

    function hidePanel() {
      if (!panel) return;
      if (panel.classList.contains("floating-panel")) {
        panel.classList.add("is-hidden");
        panel.innerHTML = "";
      }
    }

    function positionPanel(anchorElement) {
      if (!panel || !panel.classList.contains("floating-panel")) return;
      const stage = svg.closest(".pathway-stage");
      if (!stage) return;
      panel.classList.remove("left", "right");
      panel.style.top = "76px";

      if (!anchorElement) {
        panel.classList.add("right");
        return;
      }

      const stageRect = stage.getBoundingClientRect();
      const anchorRect = anchorElement.getBoundingClientRect();
      const anchorCenterX = anchorRect.left + anchorRect.width / 2;
      const stageCenterX = stageRect.left + stageRect.width / 2;
      panel.classList.add(anchorCenterX > stageCenterX ? "left" : "right");

      const relativeTop = Math.max(72, Math.min(anchorRect.top - stageRect.top - 18, stageRect.height - 320));
      panel.style.top = `${relativeTop}px`;
    }

    function setPanel(info, anchorElement = null) {
      if (!panel) return;
      const bullets = (info.bullets || []).map((bullet) => `<li>${htmlEscape(bullet)}</li>`).join("");
      panel.innerHTML = `
        <button class="panel-close" type="button" aria-label="Close explanation">×</button>
        <span class="panel-tag">${htmlEscape(info.tag)}</span>
        <h3>${htmlEscape(info.title || info.label)}</h3>
        <p>${htmlEscape(info.body)}</p>
        <ul>${bullets}</ul>
        <div class="plain-note">${htmlEscape(data.meta.caution)}</div>
      `;
      panel.querySelector(".panel-close")?.addEventListener("click", hidePanel);
      panel.classList.remove("is-hidden");
      positionPanel(anchorElement);
    }

    function setActiveButton(activeId) {
      if (!filterBar) return;
      filterBar.querySelectorAll(".filter").forEach((button) => {
        button.classList.toggle("active", button.dataset.filter === activeId);
      });
    }

    function clearClasses() {
      rendered.nodes.forEach((node) => node.classList.remove("dim", "highlight", "selected"));
      rendered.edges.forEach(({ group, element }) => {
        group.classList.remove("selected");
        element.classList.remove("dim", "highlight");
      });
    }

    function applyHighlight(nodeIds, edgeIndexes, selectedId, selectedEdgeIndex) {
      const activeNodes = new Set(nodeIds);
      const activeEdges = new Set(edgeIndexes);
      rendered.nodes.forEach((element, id) => {
        const isActive = activeNodes.has(id);
        element.classList.toggle("highlight", isActive);
        element.classList.toggle("dim", !isActive);
        element.classList.toggle("selected", selectedId === id);
      });
      rendered.edges.forEach(({ group, element, index }) => {
        const isActive = activeEdges.has(index);
        element.classList.toggle("highlight", isActive);
        element.classList.toggle("dim", !isActive);
        group.classList.toggle("selected", selectedEdgeIndex === index);
      });
    }

    function selectTheme(themeId) {
      const theme = data.themes[themeId];
      const nodeIds = new Set(theme.nodeIds);
      const edgeIndexes = rendered.edges
        .filter(({ link }) => link.themes.includes(themeId) && nodeIds.has(link.source) && nodeIds.has(link.target))
        .map(({ index }) => index);
      applyHighlight(nodeIds, edgeIndexes, null, null);
      setActiveButton(themeId);
      setPanel(theme);
    }

    function selectNode(nodeId) {
      const node = nodeById.get(nodeId);
      const edgeIndexes = [];
      const nodeIds = new Set([nodeId]);
      rendered.edges.forEach(({ link, index }) => {
        if (link.source === nodeId || link.target === nodeId) {
          edgeIndexes.push(index);
          nodeIds.add(link.source);
          nodeIds.add(link.target);
        }
      });
      applyHighlight(nodeIds, edgeIndexes, nodeId, null);
      setActiveButton("");
      setPanel(node, rendered.nodes.get(nodeId));
    }

    function selectLink(index) {
      const item = rendered.edges.find((edge) => edge.index === index);
      if (!item) return;
      const source = nodeById.get(item.link.source);
      const target = nodeById.get(item.link.target);
      applyHighlight([item.link.source, item.link.target], [index], null, index);
      setActiveButton("");
      setPanel({
        tag: "Pathway link",
        title: item.link.title || `${source.label} -> ${target.label}`,
        body: item.link.body || `${source.label} may shape ${target.label}.`,
        bullets: item.link.bullets || []
      }, item.group);
    }

    function resetView() {
      clearClasses();
      setActiveButton("reset");
      if (panel?.classList.contains("floating-panel")) {
        hidePanel();
      } else {
        setPanel({
          tag: "Start here",
          title: "Exposure and behaviour are parallel pathways",
          body: "Built environment factors can shape environmental exposures and daily behaviours at the same time. Some exposures also change behaviour, and both pathways may influence body responses and long-term health.",
          bullets: [
            "Select a node to see its direct relationships.",
            "Select a line to see how two ideas are connected.",
            "Use the theme buttons to follow a storyline."
          ]
        });
      }
    }

    function renderFilters() {
      if (!filterBar) return;
      filterBar.innerHTML = "";
      const reset = document.createElement("button");
      reset.type = "button";
      reset.className = "filter active";
      reset.dataset.filter = "reset";
      reset.textContent = "Reset";
      reset.addEventListener("click", resetView);
      filterBar.appendChild(reset);

      Object.entries(data.themes).forEach(([id, theme]) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "filter";
        button.dataset.filter = id;
        button.textContent = theme.label;
        button.addEventListener("click", () => selectTheme(id));
        filterBar.appendChild(button);
      });
    }

    function renderActions() {
      if (!actionGrid) return;
      actionGrid.innerHTML = data.actions.map((action) => {
        const icon = data.iconRegistry[action.icon] || {};
        const visual = icon.src
          ? `<img src="${htmlEscape(icon.src)}" alt="" loading="lazy">`
          : `<span>${htmlEscape(icon.fallback || action.title.slice(0, 2).toUpperCase())}</span>`;
        return `
          <article class="mini-card">
            <span class="mini-icon">${visual}</span>
            <h3>${htmlEscape(action.title)}</h3>
            <p>${htmlEscape(action.text)}</p>
          </article>
        `;
      }).join("");
    }

    function init() {
      renderSvg();
      renderFilters();
      renderActions();
      resetView();
    }

    return { init, renderSvg, resetView, selectTheme, selectNode, selectLink };
  }

  function createFactorStoryRenderer(options) {
    const data = options.data;
    const graphData = window.pathwayGraphData;
    const tabs = options.tabs;
    const story = options.story;
    const detail = options.detail;
    let clearCurrentFocus = () => {};

    function registryIconHtml(iconId, className = "story-icon") {
      const icon = data.iconRegistry?.[iconId] || {};
      if (icon.src) return `<img class="${className}" src="${htmlEscape(icon.src)}" alt="" loading="lazy">`;
      return `<span class="${className} fallback">${htmlEscape(icon.fallback || icon.label?.slice(0, 2) || "?")}</span>`;
    }

    function graphIconHtml(iconPath, className = "story-icon") {
      if (iconPath) return `<img class="${className}" src="${htmlEscape(iconPath)}" alt="" loading="lazy">`;
      return `<span class="${className} fallback">*</span>`;
    }

    function iconSvg(name) {
      const common = 'viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"';
      const icons = {
        "icon-building": `<svg ${common}><path d="M9 23 24 10l15 13"></path><path d="M14 21v18h20V21"></path><path d="M20 39v-9h8v9"></path><path d="M17 25h4M27 25h4"></path></svg>`,
        "icon-surroundings": `<svg ${common}><path d="M8 39h32"></path><path d="M11 39V22h7v17"></path><path d="M21 39V10h10v29"></path><path d="M34 39V18h5v21"></path><path d="M14 27h1M14 32h1M26 16h1M26 22h1M26 28h1M36 24h1M36 30h1"></path></svg>`,
        "icon-transportation": `<svg ${common}><path d="M9 35c8-17 19-25 30-23"></path><path d="M10 35h9"></path><path d="M29 13l5-5 5 5"></path><circle cx="16" cy="35" r="3"></circle><circle cx="34" cy="16" r="3"></circle><path d="M19 32l11-13"></path></svg>`,
        "icon-greenness": `<svg ${common}><path d="M39 9c-15 1-26 8-28 21-1 7 4 11 10 9 11-4 16-15 18-30Z"></path><path d="M13 36c6-10 13-15 24-22"></path></svg>`,
        "icon-building-age": `<svg ${common}><rect x="12" y="12" width="20" height="25" rx="3"></rect><path d="M16 18h4M16 24h4M16 30h4M25 18h3M25 24h3"></path><path d="M34 13c4 4 5 10 3 15"></path><path d="M37 28l-4-2M37 28l2-4"></path></svg>`,
        "icon-energy-performance": `<svg ${common}><path d="M26 6 13 25h10l-2 17 14-23H25l1-13Z"></path><path d="M10 38h9M29 38h9"></path></svg>`,
        "icon-ventilation": `<svg ${common}><rect x="10" y="12" width="28" height="24" rx="3"></rect><path d="M16 18h16M16 24h16M16 30h16"></path><path d="M8 40c9-3 23-3 32 0"></path></svg>`,
        "icon-kitchen-facilities": `<svg ${common}><path d="M10 24h28v15H10z"></path><path d="M14 24v15M26 24v15"></path><path d="M17 16h14l2 8H15l2-8Z"></path><path d="M20 10c-2 3 2 4 0 7M27 9c-2 3 2 4 0 7"></path></svg>`,
        "icon-heating-system": `<svg ${common}><rect x="11" y="18" width="26" height="17" rx="3"></rect><path d="M16 18v17M22 18v17M28 18v17M34 18v17"></path><path d="M15 13h18M18 39h12"></path></svg>`,
        "icon-windows": `<svg ${common}><rect x="10" y="10" width="28" height="28" rx="3"></rect><path d="M24 10v28M10 24h28"></path><path d="M15 16h5M28 31h5"></path></svg>`,
        "icon-floor-level": `<svg ${common}><path d="M14 39h20"></path><path d="M18 34V11h12v23"></path><path d="M12 17h24M12 24h24M12 31h24"></path><path d="M36 14l4-4 4 4M40 10v25"></path></svg>`,
        "icon-urban-density": `<svg ${common}><rect x="8" y="21" width="8" height="18" rx="2"></rect><rect x="20" y="10" width="8" height="29" rx="2"></rect><rect x="32" y="17" width="8" height="22" rx="2"></rect><path d="M12 26h1M24 16h1M24 22h1M36 23h1M36 29h1"></path></svg>`,
        "icon-land-use-mix": `<svg ${common}><circle cx="15" cy="15" r="6"></circle><rect x="27" y="9" width="12" height="12" rx="3"></rect><path d="M13 32h12l-6 9Z"></path><path d="M31 32h8v8h-8z"></path></svg>`,
        "icon-urban-height": `<svg ${common}><path d="M13 39V25h7v14"></path><path d="M23 39V9h9v30"></path><path d="M35 39V18h5v21"></path><path d="M7 39h36"></path><path d="M18 19l4-4 4 4M22 15v20"></path></svg>`,
        "icon-urban-enclosure": `<svg ${common}><path d="M9 39V12h8v27"></path><path d="M31 39V12h8v27"></path><path d="M17 35c4 2 10 2 14 0"></path><path d="M20 18h8M20 25h8"></path></svg>`,
        "icon-food-environment": `<svg ${common}><path d="M11 18h26l-2 20H13l-2-20Z"></path><path d="M14 18l3-8h14l3 8"></path><path d="M18 25h8M18 31h13"></path><path d="M32 25h1"></path></svg>`,
        "icon-street-connectivity": `<svg ${common}><circle cx="13" cy="15" r="4"></circle><circle cx="35" cy="13" r="4"></circle><circle cx="18" cy="35" r="4"></circle><circle cx="36" cy="32" r="4"></circle><path d="M17 16l14-2M15 19l3 12M22 34l10-2M32 17l3 11M18 35l17-22"></path></svg>`,
        "icon-walkability": `<svg ${common}><circle cx="23" cy="9" r="4"></circle><path d="M22 15l-5 9 7 4 5-8"></path><path d="M20 27l-6 12M27 28l7 11M18 24l-7 1M29 20l8 4"></path><path d="M8 40h32"></path></svg>`,
        "icon-amenity-access": `<svg ${common}><path d="M10 38c3-11 10-18 22-24"></path><circle cx="12" cy="38" r="4"></circle><path d="M30 10h11v11H30z"></path><path d="M35.5 13v5M33 15.5h5"></path></svg>`,
        "icon-route-comfort": `<svg ${common}><path d="M11 37c4-10 10-15 26-22"></path><path d="M32 10l8 3-2 8c-5 2-9 1-12-3l6-8Z"></path><path d="M15 36h10"></path></svg>`,
        "icon-visual-greenness": `<svg ${common}><path d="M8 24s6-9 16-9 16 9 16 9-6 9-16 9S8 24 8 24Z"></path><circle cx="24" cy="24" r="4"></circle><path d="M33 13c4-4 8-5 8-5-1 6-4 9-9 10"></path></svg>`,
        "icon-access-proximity": `<svg ${common}><path d="M24 9c6 0 10 4 10 10 0 8-10 20-10 20S14 27 14 19c0-6 4-10 10-10Z"></path><circle cx="24" cy="19" r="3"></circle><path d="M8 39c8-5 24-5 32 0"></path></svg>`,
        "icon-experienced-green": `<svg ${common}><circle cx="18" cy="12" r="4"></circle><path d="M17 18l-4 8 6 3 5-7"></path><path d="M18 29l-6 10M23 30l8 9"></path><path d="M32 38V27"></path><path d="M32 28c-7 0-10-4-10-10 7 0 10 3 10 10Z"></path></svg>`,
        "icon-quality-diversity": `<svg ${common}><path d="M24 39V24"></path><path d="M24 25c-8 0-12-5-12-13 8 0 12 4 12 13Z"></path><path d="M24 25c8 0 12-5 12-13-8 0-12 4-12 13Z"></path><path d="M14 39h20"></path><path d="M38 28l2 4 4 .5-3 2.5 1 4-4-2-4 2 1-4-3-2.5 4-.5 2-4Z"></path></svg>`,
        "icon-satellite-greenness": `<svg ${common}><path d="M18 18 30 30"></path><rect x="10" y="10" width="12" height="8" rx="2" transform="rotate(45 16 14)"></rect><rect x="26" y="26" width="12" height="8" rx="2" transform="rotate(45 32 30)"></rect><path d="M9 35c10 5 20 5 30 0"></path></svg>`,
        "icon-thermal-exposure": `<svg ${common}><path d="M24 7v20"></path><path d="M19 30a7 7 0 1 0 10 0V12a5 5 0 0 0-10 0v18Z"></path><circle cx="36" cy="35" r="4"></circle><path d="M36 39v4M33 42h6"></path></svg>`,
        "icon-air-quality": `<svg ${common}><path d="M8 17h22c5 0 5-7 0-7-3 0-5 2-5 4"></path><path d="M8 25h29"></path><path d="M8 33h20c5 0 5 7 0 7-3 0-5-2-5-4"></path></svg>`,
        "icon-noise-reduction": `<svg ${common}><path d="M10 28h7l8 7V13l-8 7h-7v8Z"></path><path d="M31 18c3 3 3 9 0 12M36 13c6 6 6 17 0 22"></path><path d="M38 10 10 40"></path></svg>`,
        "icon-daylight-views": `<svg ${common}><rect x="9" y="12" width="22" height="24" rx="3"></rect><path d="M20 12v24M9 24h22"></path><circle cx="38" cy="14" r="4"></circle><path d="M38 6v2M38 20v2M30 14h2M44 14h2"></path></svg>`,
        "icon-heat-mitigation": `<svg ${common}><path d="M24 8v17"></path><path d="M20 28a6 6 0 1 0 8 0V13a4 4 0 0 0-8 0v15Z"></path><path d="M31 35c2-6 10-6 12 0"></path><path d="M37 35v8"></path></svg>`,
        "icon-dietary-exposure": `<svg ${common}><circle cx="22" cy="25" r="12"></circle><path d="M14 25h16M34 12v26"></path><path d="M37 12v26"></path><path d="M17 17c3 3 8 3 11 0"></path></svg>`,
        "icon-microbiome": `<svg ${common}><circle cx="24" cy="24" r="6"></circle><circle cx="13" cy="15" r="3"></circle><circle cx="35" cy="14" r="3"></circle><circle cx="36" cy="35" r="3"></circle><circle cx="13" cy="34" r="3"></circle><path d="M18 20l-3-3M30 20l3-4M30 29l4 4M18 29l-3 3"></path></svg>`,
        "icon-sleep": `<svg ${common}><path d="M31 8c-8 2-13 8-13 16s6 14 14 15c-3 2-7 3-11 2-9-2-15-10-13-19S18 7 27 7c2 0 3 0 4 1Z"></path><path d="M35 16h7l-7 8h7"></path></svg>`,
        "icon-restorative-activity": `<svg ${common}><path d="M24 9v8M24 31v8M9 24h8M31 24h8"></path><circle cx="24" cy="24" r="7"></circle><path d="M14 14l4 4M34 14l-4 4M14 34l4-4M34 34l-4-4"></path></svg>`,
        "icon-cooking": `<svg ${common}><path d="M12 24h24l-3 14H15l-3-14Z"></path><path d="M18 24v-3c0-5 12-5 12 0v3"></path><path d="M19 9c-2 3 2 4 0 7M26 8c-2 3 2 4 0 7"></path></svg>`,
        "icon-physical-activity": `<svg ${common}><circle cx="24" cy="9" r="4"></circle><path d="M23 15l-5 9 7 4 5-8"></path><path d="M21 27l-6 12M27 28l7 11M18 24l-7 1M29 20l8 4"></path></svg>`,
        "icon-social-behavior": `<svg ${common}><circle cx="18" cy="17" r="5"></circle><circle cx="32" cy="19" r="4"></circle><path d="M9 38c2-8 16-8 18 0"></path><path d="M25 36c2-5 11-5 13 0"></path><path d="M23 17h5"></path></svg>`,
        "icon-safety-comfort": `<svg ${common}><path d="M24 7 38 13v10c0 9-6 15-14 18-8-3-14-9-14-18V13l14-6Z"></path><path d="M17 25l5 5 10-12"></path></svg>`,
        "icon-cardiovascular": `<svg ${common}><path d="M24 39S10 30 9 18c-1-8 8-12 15-4 7-8 16-4 15 4-1 12-15 21-15 21Z"></path><path d="M14 25h6l3-6 4 11 3-5h5"></path></svg>`,
        "icon-respiratory": `<svg ${common}><path d="M24 10v28"></path><path d="M23 20c-5-7-11-7-13 2-2 8 0 15 8 15 4 0 5-4 5-9v-8Z"></path><path d="M25 20c5-7 11-7 13 2 2 8 0 15-8 15-4 0-5-4-5-9v-8Z"></path></svg>`,
        "icon-mental-health": `<svg ${common}><path d="M16 38v-7c-5-3-7-8-6-13 2-8 10-12 18-9 7 2 11 9 9 16l4 6h-6v7"></path><path d="M18 20h12M20 26h8"></path></svg>`,
        "icon-metabolic": `<svg ${common}><path d="M24 8 38 16v16l-14 8-14-8V16l14-8Z"></path><path d="M17 24h14M24 17v14"></path><path d="M16 35c5-4 11-4 16 0"></path></svg>`,
        "icon-perinatal": `<svg ${common}><circle cx="24" cy="17" r="8"></circle><path d="M15 40c1-10 17-10 18 0"></path><path d="M21 18h6"></path><path d="M24 15v6"></path></svg>`,
        "icon-mortality": `<svg ${common}><path d="M24 8 40 38H8L24 8Z"></path><path d="M24 18v9M24 34h.1"></path></svg>`
      };
      return icons[name] || "";
    }

    function semanticGlyphHtml(node, className = "story-icon") {
      const iconById = {
        building: "icon-building",
        surroundings: "icon-surroundings",
        transportation: "icon-transportation",
        greenness: "icon-greenness",
        "building-age": "icon-building-age",
        "energy-performance": "icon-energy-performance",
        ventilation: "icon-ventilation",
        "kitchen-facilities": "icon-kitchen-facilities",
        "heating-system": "icon-heating-system",
        windows: "icon-windows",
        "floor-level": "icon-floor-level",
        "urban-density": "icon-urban-density",
        "land-use-mix": "icon-land-use-mix",
        "urban-height": "icon-urban-height",
        "urban-enclosure": "icon-urban-enclosure",
        "food-environment": "icon-food-environment",
        connectivity: "icon-street-connectivity",
        walkability: "icon-walkability",
        "amenity-accessibility": "icon-amenity-access",
        "route-comfort": "icon-route-comfort",
        "visual-greenness": "icon-visual-greenness",
        "access-proximity": "icon-access-proximity",
        "experienced-green": "icon-experienced-green",
        "quality-diversity": "icon-quality-diversity",
        "remote-greenness": "icon-satellite-greenness",
        "thermal-exposure": "icon-thermal-exposure",
        "air-quality": "icon-air-quality",
        "noise-reduction": "icon-noise-reduction",
        "light-visual": "icon-daylight-views",
        "heat-mitigation": "icon-heat-mitigation",
        "diet-food": "icon-dietary-exposure",
        "dietary-exposure": "icon-dietary-exposure",
        microbiome: "icon-microbiome",
        sleep: "icon-sleep",
        restoration: "icon-restorative-activity",
        cooking: "icon-cooking",
        "cooking-food-practices": "icon-cooking",
        "physical-activity": "icon-physical-activity",
        "social-cohesion": "icon-social-behavior",
        "comfort-safety": "icon-safety-comfort",
        cardiovascular: "icon-cardiovascular",
        respiratory: "icon-respiratory",
        "mental-health": "icon-mental-health",
        metabolic: "icon-metabolic",
        perinatal: "icon-perinatal",
        mortality: "icon-mortality"
      };
      const svg = iconSvg(iconById[node?.id]);
      const fallback = node?.label?.slice(0, 2)?.toUpperCase() || "**";
      return `<span class="${className} semantic-glyph ${htmlEscape(node?.type || "metric")}" aria-hidden="true">${svg || htmlEscape(fallback)}</span>`;
    }

    function setText(id, value) {
      const element = document.getElementById(id);
      if (element && value) element.textContent = value;
    }

    function renderCardGrid(element, cards) {
      if (!element) return;
      element.innerHTML = cards.map((card) => `
        <article class="visual-card ${htmlEscape(card.tone || "shared")} ${card.background ? "has-card-bg" : ""} ${card.backgroundKey ? `bg-${htmlEscape(card.backgroundKey)}` : ""}" aria-label="${htmlEscape(`${card.region || ""}. ${card.title}. ${card.text || ""}`)}">
          ${card.background ? "" : `<span class="visual-card-mark">${registryIconHtml(card.icon)}</span>`}
          ${card.region ? `<span class="visual-card-region">${htmlEscape(card.region)}</span>` : ""}
          <h3>${htmlEscape(card.title)}</h3>
          ${card.text ? `<p>${htmlEscape(card.text)}</p>` : ""}
        </article>
      `).join("");
    }

    function showDetail(info) {
      if (!detail) return;
      if (detail.parentElement !== document.body) {
        document.body.append(detail);
      }
      detail.innerHTML = `
        <button class="detail-close" type="button" aria-label="Close explanation">x</button>
        <span class="detail-tag">${htmlEscape(info.tag || "Pathway")}</span>
        <h3>${htmlEscape(info.title || info.label)}</h3>
        <p>${htmlEscape(info.body || info.text || "")}</p>
      `;
      detail.classList.remove("is-hidden");
      detail.querySelector(".detail-close")?.addEventListener("click", (event) => {
        event.stopPropagation();
        detail.classList.add("is-hidden");
      });
    }

    function autoPort(source, target) {
      const sourceRow = Number(source.row);
      const targetRow = Number(target.row);
      if (Number.isFinite(sourceRow) && Number.isFinite(targetRow) && sourceRow !== targetRow) {
        return sourceRow < targetRow ? "bottom" : "top";
      }
      const dx = (target.xPx ?? target.x ?? 0) - (source.xPx ?? source.x ?? 0);
      const dy = (target.y || 0) - (source.y || 0);
      if (Math.abs(dx) > Math.abs(dy) / 2) return dx >= 0 ? "right" : "left";
      return dy >= 0 ? "bottom" : "top";
    }

    function portVector(port) {
      if (port === "top") return { x: 0, y: -1 };
      if (port === "right") return { x: 1, y: 0 };
      if (port === "bottom") return { x: 0, y: 1 };
      if (port === "left") return { x: -1, y: 0 };
      return { x: 0, y: 1 };
    }

    function edgePoint(node, other, port) {
      const chosen = port || autoPort(node, other);
      const width = node.widthUnits || 0;
      const height = node.height || 168;
      if (chosen === "top") return { x: node.x, y: node.y - height / 2, port: chosen };
      if (chosen === "right") return { x: node.x + width / 2, y: node.y, port: chosen };
      if (chosen === "bottom") return { x: node.x, y: node.y + height / 2, port: chosen };
      if (chosen === "left") return { x: node.x - width / 2, y: node.y, port: chosen };
      return { x: node.x, y: node.y, port: chosen };
    }

    function pathD(source, target, edge = {}) {
      const start = edgePoint(source, target, edge.sourcePort);
      const end = edgePoint(target, source, edge.targetPort);
      const startVector = portVector(start.port);
      const endVector = portVector(end.port);
      const canvasWidth = source.canvasWidth || target.canvasWidth || 390;
      const dxPx = (end.x - start.x) / 100 * canvasWidth;
      const dyPx = end.y - start.y;
      const distancePx = Math.hypot(dxPx, dyPx);
      const handlePx = Math.max(40, Math.min(170, distancePx * 0.36));
      const handleX = handlePx / canvasWidth * 100;
      const c1x = start.x + startVector.x * handleX;
      const c1y = start.y + startVector.y * handlePx;
      const c2x = end.x + endVector.x * handleX;
      const c2y = end.y + endVector.y * handlePx;
      return `M ${start.x} ${start.y} C ${c1x} ${c1y}, ${c2x} ${c2y}, ${end.x} ${end.y}`;
    }

    function sortedGroups(graph) {
      return [...(graph.groups || [])].sort((a, b) => Number(a.row) - Number(b.row) || String(a.label).localeCompare(String(b.label)));
    }

    function computeGraphLayout(graph) {
      const groups = sortedGroups(graph);
      const rowIds = [...new Set(groups.map((group) => Number(group.row) || 1))].sort((a, b) => a - b);
      const rowGap = graph.layout?.rowGap ?? 26;
      const paddingTop = graph.layout?.paddingTop ?? 18;
      const paddingBottom = graph.layout?.paddingBottom ?? 28;
      const nodeHeight = graph.layout?.nodeHeight ?? 184;
      const nodeWidth = graph.layout?.nodeWidth ?? (window.innerWidth <= 430 ? 142 : 150);
      const canvasWidth = Math.max(1, story?.getBoundingClientRect().width || window.innerWidth || 390);
      const nodeWidthUnits = nodeWidth / canvasWidth * 100;
      const nodeGap = graph.layout?.nodeGap ?? 30;
      const groupPaddingTop = graph.layout?.groupPaddingTop ?? 48;
      const groupPaddingBottom = graph.layout?.groupPaddingBottom ?? 34;
      const minRowHeight = graph.layout?.minRowHeight ?? groupPaddingTop + nodeHeight + groupPaddingBottom;
      const rowHeights = new Map();
      const nodesByGroup = new Map();
      graph.nodes.forEach((node) => {
        if (!nodesByGroup.has(node.group)) nodesByGroup.set(node.group, []);
        nodesByGroup.get(node.group).push(node);
      });
      function laneWidth(group) {
        if (group.lane === "left" || group.lane === "right") return 44;
        const rowGroups = groups.filter((item) => Number(item.row) === Number(group.row));
        const fullGroups = rowGroups.filter((item) => !item.lane || item.lane === "full");
        return fullGroups.length > 1 ? 92 / fullGroups.length : 92;
      }
      function columnsForGroup(group) {
        const width = laneWidth(group);
        if (width < 50) return 1;
        if (width < 76) return 2;
        if (window.innerWidth < 480) return 2;
        return 3;
      }
      rowIds.forEach((row) => {
        const rowGroups = groups.filter((group) => Number(group.row) === row);
        const needed = rowGroups.map((group) => {
          const count = (nodesByGroup.get(group.id) || []).length;
          const cols = Math.max(1, columnsForGroup(group));
          const rows = Math.max(1, Math.ceil(count / cols));
          return Math.max(Number(group.minHeight) || 0, groupPaddingTop + rows * nodeHeight + (rows - 1) * nodeGap + groupPaddingBottom);
        });
        rowHeights.set(row, Math.max(minRowHeight, ...needed));
      });
      const totalHeight = paddingTop + paddingBottom + [...rowHeights.values()].reduce((sum, height) => sum + height, 0) + Math.max(0, rowIds.length - 1) * rowGap;
      const groupBoxes = new Map();
      let cursor = paddingTop;
      rowIds.forEach((row) => {
        const rowHeight = rowHeights.get(row);
        const rowGroups = groups.filter((group) => Number(group.row) === row);
        const fullGroups = rowGroups.filter((group) => !group.lane || group.lane === "full");
        let fullIndex = 0;
        rowGroups.forEach((group) => {
          let left = 4;
          let width = laneWidth(group);
          if (group.lane === "left") {
            left = 4;
          } else if (group.lane === "right") {
            left = 52;
          } else if (fullGroups.length > 1) {
            left = 4 + fullIndex * width;
            fullIndex += 1;
          }
          groupBoxes.set(group.id, { top: cursor, height: rowHeight, left, width, group });
        });
        cursor += rowHeight + rowGap;
      });
      const positionedNodes = [];
      groups.forEach((group) => {
        const box = groupBoxes.get(group.id);
        const groupNodes = (nodesByGroup.get(group.id) || [])
          .sort((a, b) => Number(a.order || 0) - Number(b.order || 0) || String(a.label).localeCompare(String(b.label)));
        const count = groupNodes.length;
        const cols = Math.max(1, Math.min(columnsForGroup(group), count || 1));
        const rows = Math.max(1, Math.ceil(count / cols));
        const blockHeight = rows * nodeHeight + (rows - 1) * nodeGap;
        const blockTop = count === 1
          ? (box.height - nodeHeight) / 2
          : Math.max(groupPaddingTop, (box.height - blockHeight) / 2);
        groupNodes.forEach((node, index) => {
          const col = index % cols;
          const row = Math.floor(index / cols);
          const xLocal = (col + 1) / (cols + 1);
          const y = box.top + blockTop + nodeHeight / 2 + row * (nodeHeight + nodeGap);
          positionedNodes.push({
            ...node,
            x: box.left + xLocal * box.width,
            y,
            width: nodeWidth,
            widthUnits: nodeWidthUnits,
            height: nodeHeight,
            xPx: (box.left + xLocal * box.width) / 100 * canvasWidth,
            canvasWidth,
            row: Number(group.row) || 1
          });
        });
      });
      return { totalHeight, groupBoxes, nodes: positionedNodes };
    }

    function groupLaneMarkup(layout) {
      return [...layout.groupBoxes.values()].map((box) => {
        return `<div class="mobile-group-lane ${htmlEscape(box.group.id)}" style="top:${box.top}px;height:${box.height}px;left:${box.left}%;width:${box.width}%"><span>${htmlEscape(box.group.label)}</span></div>`;
      }).join("");
    }

    function graphCanvasHeight(layout) {
      return Math.ceil(layout.totalHeight);
    }

    function renderGraph(graphId) {
      const graph = graphData?.graphs?.find((item) => item.id === graphId) || graphData?.graphs?.[0];
      if (!graph || !story) return;
      tabs?.querySelectorAll(".factor-tab").forEach((button) => {
        button.classList.toggle("active", button.dataset.factor === graph.id);
      });
      detail?.classList.add("is-hidden");
      const layout = computeGraphLayout(graph);
      const canvasHeight = graphCanvasHeight(layout);
      const nodeMap = new Map(layout.nodes.map((node) => [node.id, node]));
      const edgeMarkup = graph.edges.map((edge) => {
        const source = nodeMap.get(edge.source);
        const target = nodeMap.get(edge.target);
        if (!source || !target) return "";
        const d = pathD(source, target, edge);
        const targetClass = target.type === "health" ? "to-health" : "";
        return `
          <g class="graph-edge-group" data-edge-id="${htmlEscape(edge.id)}" data-source-id="${htmlEscape(edge.source)}" data-target-id="${htmlEscape(edge.target)}" role="button" tabindex="0" aria-label="${htmlEscape(edge.label)}">
            <path class="mobile-edge-hit" d="${htmlEscape(d)}"></path>
            <path class="mobile-edge ${htmlEscape(edge.type || "main")} ${targetClass}" d="${htmlEscape(d)}" marker-end="url(#mobileArrow)"></path>
          </g>
        `;
      }).join("");
      const nodeMarkup = layout.nodes.map((node) => `
        <button class="mobile-graph-node ${htmlEscape(node.type || "metric")}" type="button" data-node-id="${htmlEscape(node.id)}" style="left:${Number(node.x)}%;top:${Number(node.y)}px;">
          ${semanticGlyphHtml(node)}
          <b>${htmlEscape(node.label)}</b>
        </button>
      `).join("");
      story.innerHTML = `
        <header class="graph-public-head">
          <h3>${htmlEscape(graph.title)}</h3>
          <p>${htmlEscape(graph.summary || "Tap any node or line for a short explanation.")}</p>
        </header>
        <div class="mobile-graph-canvas" style="height:${canvasHeight}px" aria-label="${htmlEscape(graph.title)} node-link pathway graph">
          <div class="mobile-group-lane-layer">${groupLaneMarkup(layout)}</div>
          <svg class="mobile-graph-svg" viewBox="0 0 100 ${canvasHeight}" preserveAspectRatio="none" aria-hidden="true">
            <defs>
              <marker id="mobileArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                <path d="M 2 1 L 8 5 L 2 9" class="mobile-arrow-head"></path>
              </marker>
            </defs>
            ${edgeMarkup}
          </svg>
          <div class="mobile-node-layer">${nodeMarkup}</div>
        </div>
      `;
      const canvas = story.querySelector(".mobile-graph-canvas");
      function clearFocus() {
        canvas?.classList.remove("has-focus");
        story.querySelectorAll(".is-focus, .is-muted").forEach((element) => {
          element.classList.remove("is-focus", "is-muted");
        });
        detail?.classList.add("is-hidden");
      }
      clearCurrentFocus = clearFocus;
      function applyFocus(nodeIds, edgeIds) {
        canvas?.classList.add("has-focus");
        story.querySelectorAll("[data-node-id]").forEach((button) => {
          const active = nodeIds.has(button.dataset.nodeId);
          button.classList.toggle("is-focus", active);
          button.classList.toggle("is-muted", !active);
        });
        story.querySelectorAll("[data-edge-id]").forEach((group) => {
          const active = edgeIds.has(group.dataset.edgeId);
          group.classList.toggle("is-focus", active);
          group.classList.toggle("is-muted", !active);
        });
      }
      function focusNode(nodeId) {
        const edgeIds = new Set();
        const nodeIds = new Set([nodeId]);
        graph.edges.forEach((edge) => {
          if (edge.source === nodeId || edge.target === nodeId) {
            edgeIds.add(edge.id);
            nodeIds.add(edge.source);
            nodeIds.add(edge.target);
          }
        });
        applyFocus(nodeIds, edgeIds);
      }
      function focusEdge(edge) {
        applyFocus(new Set([edge.source, edge.target]), new Set([edge.id]));
      }
      story.querySelectorAll("[data-node-id]").forEach((button) => {
        const node = nodeMap.get(button.dataset.nodeId);
        button.addEventListener("click", (event) => {
          event.stopPropagation();
          focusNode(node.id);
          showDetail({ tag: node.type, title: node.label, body: node.body });
        });
      });
      story.querySelectorAll("[data-edge-id]").forEach((group) => {
        const edge = graph.edges.find((item) => item.id === group.dataset.edgeId);
        const open = (event) => {
          event?.stopPropagation();
          focusEdge(edge);
          showDetail({ tag: edge.type || "Connection", title: edge.label, body: edge.body });
        };
        group.addEventListener("click", open);
        group.addEventListener("keydown", (event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            open();
          }
        });
      });
      canvas?.addEventListener("click", clearFocus);
    }

    document.addEventListener("click", (event) => {
      const target = event.target;
      if (detail?.contains(target) || tabs?.contains(target)) return;
      clearCurrentFocus();
    });

    function renderTabs() {
      if (!tabs || !graphData?.graphs?.length) return;
      tabs.innerHTML = graphData.graphs.map((graph, index) => `
        <button class="factor-tab ${index === 0 ? "active" : ""}" type="button" data-factor="${htmlEscape(graph.id)}">
          ${semanticGlyphHtml(graph.nodes?.[0] || { id: graph.id, type: "scale", label: graph.title }, "tab-icon")}
          <span>${htmlEscape(graph.shortTitle || graph.title)}</span>
        </button>
      `).join("");
      tabs.querySelectorAll(".factor-tab").forEach((button) => {
        button.addEventListener("click", () => renderGraph(button.dataset.factor));
      });
    }

    function init() {
      setText("storyHook", data.storySlots?.hook);
      setText("problem-title", data.storySlots?.problemTitle);
      setText("problemText", data.storySlots?.problemText);
      setText("key-findings-title", data.storySlots?.keyFindingsTitle);
      setText("keyFindingsText", data.storySlots?.keyFindingsText);
      setText("gaps-title", data.storySlots?.gapsTitle);
      setText("gapsText", data.storySlots?.gapsText);
      setText("directions-title", data.storySlots?.directionsTitle);
      setText("directionsText", data.storySlots?.directionsText);
      renderCardGrid(document.getElementById("problemGrid"), data.problemCards || []);
      renderCardGrid(document.getElementById("gapGrid"), data.gapCards || []);
      renderCardGrid(document.getElementById("directionGrid"), data.directionCards || []);
      renderTabs();
      renderGraph(graphData?.graphs?.[0]?.id);
    }

    return { init, renderFactor: renderGraph, clearFocus: () => clearCurrentFocus() };
  }

  window.createPathwayRenderer = createPathwayRenderer;
  window.createFactorStoryRenderer = createFactorStoryRenderer;

  if (!window.pathwayData) return;

  const factorStory = document.getElementById("factorStory");
  let factorRenderer = null;
  if (factorStory) {
    factorRenderer = createFactorStoryRenderer({
      data: window.pathwayData,
      tabs: document.getElementById("factorTabs"),
      story: factorStory,
      detail: document.getElementById("storyDetail")
    });
    factorRenderer.init();
  }

  const svg = document.getElementById("pathwaySvg");
  let renderer = null;
  if (svg) {
    renderer = createPathwayRenderer({
      data: window.pathwayData,
      svg,
      panel: document.getElementById("infoPanel"),
      filterBar: document.getElementById("filterBar"),
      actionGrid: document.getElementById("actionGrid")
    });
    renderer.init();
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      factorRenderer?.clearFocus();
      renderer?.resetView();
    }
  });
})();
