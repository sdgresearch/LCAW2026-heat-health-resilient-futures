window.SDG = window.SDG || {};

(function () {
  var panel        = document.getElementById('project-panel');
  var panelContent = document.getElementById('panel-content');
  var closeBtn     = document.getElementById('panel-close-btn');
  var hint         = document.getElementById('map-hint');

  SDG.ui = {
    openPanel:  openPanel,
    closePanel: closePanel
  };

  function openPanel(project) {
    panelContent.innerHTML = buildCardHTML(project);
    panel.classList.add('is-open');
    panel.setAttribute('aria-hidden', 'false');

    if (hint) {
      hint.classList.add('hint-hidden');
    }

    var firstFocusable = panel.querySelector('button, a[href]');
    if (firstFocusable) {
      setTimeout(function () { firstFocusable.focus(); }, 320);
    }
  }

  function closePanel() {
    panel.classList.remove('is-open');
    panel.setAttribute('aria-hidden', 'true');
  }

  function buildCardHTML(p) {
    var tagsHTML = p.tags.map(function (t) {
      return '<span class="tag">' + esc(t) + '</span>';
    }).join('');

    var teamHTML = p.team.map(function (m) {
      return '<li class="team-member">' +
               '<span class="team-name">'  + esc(m.name) + '</span>' +
               '<span class="team-role">'  + esc(m.role) + '</span>' +
             '</li>';
    }).join('');

    /* PAICE is a cross-institution collaboration, so its members aren't all LSHTM */
    var teamHeading = /^PAICE/i.test(p.title) ? 'Project members'
      : (p.university === 'lshtm' ? 'Team (LSHTM Climate and Health Group)' : 'Team');

    var piList = p.pi ? p.pi.split('|').map(function (s) { return s.trim(); }).filter(Boolean) : [];
    var piHTML = piList.map(function (name) {
      return '<p class="pi-name">' + esc(name) + '</p>';
    }).join('');

    var linksHTML = '';
    if (p.linkProject) {
      linksHTML += '<a href="' + esc(p.linkProject) + '" target="_blank" rel="noopener" ' +
                   'class="card-link-btn primary">' + esc(p.linkLabel) + ' &#x2197;</a>';
    }
    if (p.linkPub) {
      linksHTML += '<a href="' + esc(p.linkPub) + '" target="_blank" rel="noopener" ' +
                   'class="card-link-btn secondary">Publication &#x2197;</a>';
    }
    if (p.storyboard) {
      linksHTML += '<a href="' + esc(p.storyboard) + '" target="_blank" rel="noopener" ' +
                   'class="card-link-btn storyboard">View Storyboard &#x2197;</a>';
    }

    var statusClass = p.status === 'active' ? 'badge-active' : 'badge-completed';
    var statusText  = p.status === 'active' ? 'Active' : 'Completed';

    var univLabels = { cambridge: 'Cambridge SDG', lshtm: 'LSHTM', both: 'Cambridge SDG &amp; LSHTM' };
    var univBadge  = p.university
      ? '<span class="univ-badge univ-' + esc(p.university) + '">' + (univLabels[p.university] || esc(p.university)) + '</span>'
      : '';

    return '<article class="project-card">' +
      '<div class="card-meta">' +
        '<span class="card-location"><span aria-hidden="true">&#x1F4CC;</span> ' + esc(p.locationLabel) + '</span>' +
        '<div class="card-badges">' +
          '<span class="status-badge ' + statusClass + '">' + statusText + '</span>' +
          univBadge +
        '</div>' +
      '</div>' +
      '<h2 class="project-title">' + esc(p.title) + '</h2>' +
      (tagsHTML ? '<div class="project-tags" aria-label="Tags">' + tagsHTML + '</div>' : '') +
      '<p class="project-description">' + esc(p.description) + '</p>' +
      (piHTML ?
        '<section class="pi-section">' +
          '<h3 class="section-heading">' +
            (piList.length > 1 ? 'Principal Investigators' : 'Principal Investigator') +
          '</h3>' +
          piHTML +
        '</section>' : '') +
      (teamHTML ?
        '<section class="team-section">' +
          '<h3 class="section-heading">' + teamHeading + '</h3>' +
          '<ul class="team-list">' + teamHTML + '</ul>' +
        '</section>' : '') +
      (linksHTML ? '<div class="card-links">' + linksHTML + '</div>' : '') +
    '</article>';
  }

  function esc(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g,  '&amp;')
      .replace(/</g,  '&lt;')
      .replace(/>/g,  '&gt;')
      .replace(/"/g,  '&quot;');
  }

  SDG.escHtml   = esc;
  SDG.buildCardHTML = buildCardHTML;

  closeBtn.addEventListener('click', closePanel);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && panel.classList.contains('is-open')) {
      closePanel();
    }
  });

  var touchStartY = 0;
  panel.addEventListener('touchstart', function (e) {
    touchStartY = e.touches[0].clientY;
  }, { passive: true });
  panel.addEventListener('touchend', function (e) {
    if (e.changedTouches[0].clientY - touchStartY > 80) {
      closePanel();
    }
  }, { passive: true });

  document.querySelectorAll('[data-modal]').forEach(function (trigger) {
    var modal = document.getElementById(trigger.dataset.modal);
    if (!modal) return;
    trigger.addEventListener('click', function (e) {
      e.preventDefault();
      modal.showModal();
    });
    var closeBtn = modal.querySelector('.modal-close');
    if (closeBtn) closeBtn.addEventListener('click', function () { modal.close(); });
    modal.addEventListener('click', function (e) { if (e.target === modal) modal.close(); });
  });

}());
