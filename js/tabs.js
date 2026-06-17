window.SDG = window.SDG || {};

(function () {
  var tabBtns    = document.querySelectorAll('.tab-btn');
  var panelMap   = document.getElementById('tab-map');
  var panelProjs = document.getElementById('tab-projects');
  var grid       = document.getElementById('projects-grid');
  var rendered   = false;

  document.body.classList.add('tab-map-active');

  tabBtns.forEach(function (btn) {
    btn.addEventListener('click', function () { switchTab(btn.dataset.tab); });
    btn.addEventListener('keydown', function (e) {
      var btns = Array.from(tabBtns);
      var idx  = btns.indexOf(btn);
      if (e.key === 'ArrowRight') { e.preventDefault(); switchTab(btns[(idx + 1) % btns.length].dataset.tab); btns[(idx + 1) % btns.length].focus(); }
      if (e.key === 'ArrowLeft')  { e.preventDefault(); switchTab(btns[(idx - 1 + btns.length) % btns.length].dataset.tab); btns[(idx - 1 + btns.length) % btns.length].focus(); }
    });
  });

  function switchTab(tabName) {
    tabBtns.forEach(function (btn) {
      var active = btn.dataset.tab === tabName;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-selected', active ? 'true' : 'false');
      btn.tabIndex = active ? 0 : -1;
    });

    panelMap.hidden   = tabName !== 'map';
    panelProjs.hidden = tabName !== 'projects';

    if (tabName === 'map') {
      document.body.classList.add('tab-map-active');
      if (SDG.globe) {
        var el = document.getElementById('globe');
        SDG.globe.width(el.offsetWidth).height(el.offsetHeight);
      }
    } else {
      document.body.classList.remove('tab-map-active');
    }

    if (tabName === 'projects' && !rendered) {
      if (SDG.projects) {
        renderGrid(SDG.projects);
      } else {
        grid.innerHTML = '<p class="grid-loading">Loading projects…</p>';
      }
    }
  }

  function renderGrid(projects) {
    if (rendered) return;
    rendered = true;
    grid.innerHTML = projects.map(function (p, i) {
      var univClass = p.university ? ' univ-' + p.university : '';
      return '<div class="grid-card-wrap' + univClass + '" data-idx="' + i + '">' + SDG.buildCardHTML(p) + '</div>';
    }).join('');
    grid.querySelectorAll('.grid-card-wrap').forEach(function (wrap) {
      wrap.addEventListener('click', function () {
        var p = projects[parseInt(wrap.dataset.idx, 10)];
        switchTab('map');
        if (SDG.globe) {
          SDG.globe.controls().autoRotate = false;
          SDG.globe.pointOfView({ lat: p.lat, lng: p.lng, altitude: 1.6 }, 900);
        }
        setTimeout(function () { SDG.ui.openPanel(p); }, 700);
      });
    });
  }

  SDG.onProjectsLoaded = function (projects) {
    if (!panelProjs.hidden && !rendered) renderGrid(projects);
  };

}());
