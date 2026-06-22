window.SDG = window.SDG || {};

/* ============================================================
   EVENT DATA
   ------------------------------------------------------------
   EDIT THESE ARRAYS to manage the line-up. Each entry:
     name        — full name                         (required)
     title       — role / job title                  (optional)
     affiliation — institution                       (optional)
     talk        — talk title (lightning talks only) (optional)
     photo       — path to a headshot image          (optional)
   `panelists` render first, then `speakers`; each in order, top to bottom.
   ============================================================ */
SDG.eventData = {
  panelists: [
    {
      name: 'Professor Ronita Bardhan',
      title: 'Chair · Professor of Sustainable Built Environment and Health',
      affiliation: 'Sustainable Design Group, University of Cambridge',
      photo: 'assets/Panelists/Ronita Bardhan.jpg'
    },
    {
      name: 'Professor Anna Mavrogianni',
      title: 'Professor of Sustainable, Healthy and Equitable Built Environment',
      affiliation: 'Institute for Environmental Design and Engineering, UCL',
      photo: 'assets/Panelists/Anna headshot.jpg'
    },
    {
      name: 'Dr Laila Shahzad',
      title: 'Climate Research and Policy Officer',
      affiliation: 'The Commonwealth Secretariat',
      photo: 'assets/Panelists/Dr Laila Shahzad.jpg'
    },
    {
      name: 'Professor Flora Samuel',
      title: 'Professor of Architecture, Head of Department',
      affiliation: 'Department of Architecture, University of Cambridge',
      photo: 'assets/Panelists/flora_samuel.jpg'
    },
    {
      name: 'Ratidzo Chinyuku',
      title: 'Public Health Specialist Lead',
      affiliation: 'City and Hackney Public Health',
      photo: 'assets/Panelists/Ratidzo (Raz) Chinyuku.jpeg'
    },
    {
      name: 'Professor Sari Kovats',
      title: 'Professor of Climate and Health',
      affiliation: 'Department of Public Health, Environments and Society, LSHTM',
      photo: 'assets/Panelists/Sari-kovats.jpg'
    },
    {
      name: 'Dr Gerald Power',
      title: 'Climate and Sustainability Partnerships Lead',
      affiliation: 'London Borough of Lambeth',
      photo: 'assets/Panelists/Gerald Power.jpg'
    },
    {
      name: 'Dr Vishwas Chitale',
      title: 'Chair, South Asia Hub, Global Heat Health Information Network',
      affiliation: 'Council on Energy, Environment and Water',
      photo: 'assets/Panelists/Vishwas-Chitale.jpg'
    },
    {
      name: 'Axum Teferra',
      title: 'Senior Associate Director, Clean Cooling',
      affiliation: 'ClimateWorks Foundation',
      photo: 'assets/Panelists/Axum Teffera.jpeg'
    }
  ],
  speakers: [
    {
      name: 'Professor Shakoor Hajat',
      title: 'Chair · Professor of Global Environmental Health',
      affiliation: 'Climate and Health Group, LSHTM',
      photo: 'assets/ECR speakers/Hajat.avif'
    },
    {
      name: 'Maoran Sun',
      title: 'Research Associate in Sustainable Urban Science',
      affiliation: 'Sustainable Design Group, University of Cambridge',
      talk: 'Unveiling the double thermal jeopardy of UK homes through an AI-driven approach',
      photo: 'assets/ECR speakers/Maoran_Sun_square.jpg'
    },
    {
      name: 'Dr Hannah Marshall',
      title: 'Research Fellow in Physiology',
      affiliation: 'Faculty of Public Health & Policy, LSHTM',
      talk: 'Understanding the physiological impact of elevated temperatures in vulnerable UK populations',
      photo: 'assets/ECR speakers/headshot hannah marshall.jpeg'
    },
    {
      name: 'Dr Kai Wan',
      title: 'Research Fellow',
      affiliation: 'NIHR HPRU in Climate Change and Health Security, LSHTM',
      talk: 'Heat and mental and behavioural health in the UK',
      photo: 'assets/ECR speakers/LSHTM-Kai Wan.jpg'
    },
    {
      name: 'Andrés Zúñiga-González',
      title: 'Research Assistant / Doctoral Researcher',
      affiliation: 'Sustainable Design Group, University of Cambridge',
      talk: 'Green Walls of Privilege: How tree cover tracks deprivation across England',
      photo: 'assets/ECR speakers/Andres Zuniga-Gonzalez.webp'
    },
    {
      name: 'Grace Turner',
      title: 'Research Fellow in Environmental Epidemiology',
      affiliation: 'NIHR HPRU in Climate Change and Health Security, LSHTM',
      talk: 'How are local authorities responding to climate change and public health impacts? A policy document analysis of four England regions',
      photo: 'assets/ECR speakers/1647437747358.jpeg'
    },
    {
      name: 'Flora Haiwei Li',
      title: 'Research Associate – Health-driven design for cities',
      affiliation: 'Sustainable Design Group, University of Cambridge',
      talk: 'How Cities Breathe and Cool: Building physics for a hotter world',
      photo: 'assets/ECR speakers/Flora Haiwei Li.webp'
    }
  ]
};

(function () {
  var grid = document.getElementById('speakers-grid');
  var pGrid = document.getElementById('panelists-grid');
  if (!grid && !pGrid) return;

  var esc = SDG.escHtml || function (s) { return s == null ? '' : String(s); };

  function initials(name) {
    return name.split(/\s+/).filter(Boolean).slice(0, 2)
      .map(function (w) { return w.charAt(0).toUpperCase(); }).join('');
  }

  function speakerCard(s) {
    var avatar = s.photo
      ? '<img class="speaker-photo" src="' + esc(s.photo) + '" alt="' + esc(s.name) + '" />'
      : '<span class="speaker-avatar" aria-hidden="true">' + esc(initials(s.name)) + '</span>';

    return '<article class="speaker-card">' +
        avatar +
        '<div class="speaker-info">' +
          '<h3 class="speaker-name">' + esc(s.name) + '</h3>' +
          (s.title ? '<p class="speaker-title">' + esc(s.title) + '</p>' : '') +
          (s.affiliation ? '<p class="speaker-affiliation">' + esc(s.affiliation) + '</p>' : '') +
          (s.talk ? '<p class="speaker-talk">&ldquo;' + esc(s.talk) + '&rdquo;</p>' : '') +
        '</div>' +
      '</article>';
  }

  if (pGrid) pGrid.innerHTML = SDG.eventData.panelists.map(speakerCard).join('');
  if (grid) grid.innerHTML = SDG.eventData.speakers.map(speakerCard).join('');
}());
