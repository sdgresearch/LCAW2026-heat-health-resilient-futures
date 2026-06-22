window.SDG = window.SDG || {};

/* ============================================================
   STORYBOARDS
   ------------------------------------------------------------
   Each storyboard is a self-contained mini-site under
   storyboards/<slug>/index.html. Cards render from this list;
   clicking one loads that storyboard in an iframe in-page.
   ============================================================ */
SDG.storyboards = [
  {
    slug:    'flora_kenya',
    title:   'Screened Eaves — Cooling Homes and Stopping Malaria in Kenya',
    author:  '',
    cover:   'storyboards/flora_kenya/cover.png',
    project: 'Housing design to reduce Overheating and Malaria risk in indoor Environments'
  },
  {
    slug:   'flora_tree_light',
    title:  'The Right Tree, the Right Place — Cooling Cities with Urban Trees',
    author: '',
    cover:  'storyboards/flora_tree_light/cover.png'
  },
  {
    slug:    'jiayu',
    title:   'When the House Heats Up — Comfort and Adaptation in Ethiopian Social Housing',
    author:  '',
    cover:   'storyboards/jiayu/cover.png',
    project: 'HEROES - Health and Energy impacts of Residential Overheating in Ethiopian Slum rehabilitation housing'
  },
  {
    slug:    'maoran',
    title:   'Homes on Ice and Fire — Double Thermal Jeopardy of UK Homes',
    author:  '',
    cover:   'storyboards/maoran/cover.png',
    project: 'Homes on Ice and Fire: Unveiling the double thermal jeopardy of UK homes through an AI-driven approach'
  },
  {
    slug:    'xu',
    title:   'Where You Live Shapes Your Health',
    author:  '',
    cover:   'storyboards/xu/assets/images/reference-extracts/poster-template-slide-01-image-10.jpg',
    project: 'Where You Live Shapes Your Health'
  },
  {
    slug:    'kumary',
    title:   'Who Bears the Heat? — Unequal Urban Heat Exposure in Nairobi',
    author:  '',
    cover:   'storyboards/kumary/cover.png',
    project: 'Who Bears the Heat? Unequal Urban Heat Exposure in Nairobi City'
  },
  {
    slug:    'andres',
    title:   'Green Walls of Privilege — Tree Cover and Deprivation Across England',
    author:  '',
    cover:   'storyboards/andres/cover.png',
    project: 'Green Walls of Privilege: How Tree Cover Tracks Deprivation Across England'
  }
];

(function () {
  var grid     = document.getElementById('storyboards-grid');
  var viewer   = document.getElementById('storyboard-viewer');
  var frame    = document.getElementById('storyboard-frame');
  var backBtn  = document.getElementById('storyboard-back-btn');
  var openLink = document.getElementById('storyboard-open-link');
  if (!grid || !viewer || !frame) return;

  var esc      = SDG.escHtml || function (s) { return s == null ? '' : String(s); };
  var rendered = false;

  function cardHTML(sb, i) {
    return '<button type="button" class="storyboard-card" data-idx="' + i + '">' +
        '<span class="storyboard-cover" style="background-image:url(\'' + esc(sb.cover) + '\')"></span>' +
        '<span class="storyboard-card-body">' +
          '<span class="storyboard-card-title">' + esc(sb.title) + '</span>' +
          (sb.author ? '<span class="storyboard-card-author">' + esc(sb.author) + '</span>' : '') +
        '</span>' +
      '</button>';
  }

  function openStoryboard(sb) {
    var url = 'storyboards/' + sb.slug + '/index.html';
    frame.src = url;
    if (openLink) openLink.href = url;
    grid.hidden   = true;
    viewer.hidden = false;
    viewer.scrollIntoView({ block: 'start', behavior: 'smooth' });
  }

  function closeStoryboard() {
    viewer.hidden = true;
    grid.hidden   = false;
    frame.src     = 'about:blank';  /* stop the iframe */
  }

  SDG.renderStoryboards = function () {
    if (rendered) return;
    rendered = true;
    grid.innerHTML = SDG.storyboards.map(cardHTML).join('');
    grid.querySelectorAll('.storyboard-card').forEach(function (card) {
      card.addEventListener('click', function () {
        openStoryboard(SDG.storyboards[parseInt(card.dataset.idx, 10)]);
      });
    });
  };

  if (backBtn) backBtn.addEventListener('click', closeStoryboard);
}());
