window.SDG = window.SDG || {};

/* Return the value of the first header key that contains `substr`. */
function pick(row, substr) {
  var keys = Object.keys(row);
  for (var i = 0; i < keys.length; i++) {
    if (keys[i].indexOf(substr) !== -1) return row[keys[i]] || '';
  }
  return '';
}

function mapRow(row) {
  var rawLinks = (row['Project External Link'] || '')
    .split(/\r?\n/)
    .map(function (s) { return s.trim(); })
    .filter(Boolean);
  var linkProject = rawLinks[0] || null;

  var otherInfo = row['Project other info (e.g. Publication links, other talks, etc)'] || '';
  var pubMatch  = otherInfo.match(/https?:\/\/\S+/);
  var linkPub   = pubMatch ? pubMatch[0].replace(/[.,;)]+$/, '') : null;

  var tagsRaw = row['Keywords (separated by | e.g. climate|machine learning|resilience)'] || '';

  /* team header differs across files: "Project members" (Cambridge) / "Project researchers" (LSHTM) */
  var teamRaw = pick(row, 'Project members') || pick(row, 'Project researchers');

  var uni = (pick(row, 'University') || 'cambridge').trim().toLowerCase();
  uni = uni.indexOf('lshtm') !== -1 ? 'lshtm' : 'cambridge';

  return {
    title:         (row['Project Name'] || '').trim(),
    description:   row['Project Description (max 100 words)'] || '',
    lat:           parseFloat(pick(row, 'Latitude')),
    lng:           parseFloat(pick(row, 'Longitude')),
    locationLabel: row['Location (e.g. London, UK)'] || '',
    tags:          tagsRaw ? tagsRaw.split('|').map(function (t) { return t.trim(); }).filter(Boolean) : [],
    team:          teamRaw ? teamRaw.split('|').map(function (t) {
                     return { name: t.trim(), role: '' };
                   }).filter(function (m) {
                     return m.name && !/group members/i.test(m.name);
                   }) : [],
    pi:            pick(row, 'Primary Investigator').trim(),
    linkProject:   linkProject,
    linkPub:       linkPub,
    linkLabel:     'Project Page',
    status:        'active',
    university:    uni
  };
}

function parseOne(csvPath) {
  return new Promise(function (resolve, reject) {
    Papa.parse(csvPath, {
      download: true,
      header: true,
      skipEmptyLines: true,
      transformHeader: function (h) { return h.trim().replace(/^﻿/, '').replace(/ /g, ' '); },
      complete: function (results) { resolve(results.data.map(mapRow)); },
      error: reject
    });
  });
}

/* Distribute nearby/overlapping markers around a ring so each is individually visible/clickable.
   Markers within CLUSTER_DEG of each other (e.g. the LSHTM + UCL London projects, which sit only
   ~600m apart) are treated as ONE cluster and fanned into a single evenly-spaced ring around their
   shared centre. The ring radius scales with the member count so adjacent dots never overlap, no
   matter the cluster size. Mutates lat/lng to the display position; keeps the original as
   trueLat/trueLng. */
SDG.fanOutOverlaps = function (projects) {
  var CLUSTER_DEG = 0.05;   /* points closer than ~5km cluster together */
  var SPACING_DEG = 0.78;   /* min arc-distance between adjacent fanned dots */

  var clusters = [];
  projects.forEach(function (p) {
    var hit = null;
    for (var i = 0; i < clusters.length; i++) {
      var c = clusters[i];
      var dLat = p.lat - c.lat0;
      var dLng = p.lng - c.lng0;
      if (Math.sqrt(dLat * dLat + dLng * dLng) < CLUSTER_DEG) { hit = c; break; }
    }
    if (hit) hit.members.push(p);
    else clusters.push({ lat0: p.lat, lng0: p.lng, members: [p] });
  });

  clusters.forEach(function (c) {
    var n = c.members.length;
    if (n < 2) return;
    /* radius that keeps adjacent dots (chord = 2R·sin(π/n)) at least SPACING_DEG apart */
    var R = SPACING_DEG / (2 * Math.sin(Math.PI / n));
    c.members.forEach(function (p, k) {
      var angle = (2 * Math.PI * k) / n;
      p.trueLat = p.lat;
      p.trueLng = p.lng;
      p.lat = c.lat0 + R * Math.cos(angle);
      p.lng = c.lng0 + (R * Math.sin(angle)) / Math.cos(c.lat0 * Math.PI / 180);
    });
  });

  return projects;
};

/* Accepts a single path or an array of paths; merges, filters, fans out, assigns ids. */
SDG.loadProjects = function (csvPaths) {
  var paths = Array.isArray(csvPaths) ? csvPaths : [csvPaths];
  return Promise.all(paths.map(parseOne)).then(function (lists) {
    var projects = lists.reduce(function (acc, list) { return acc.concat(list); }, [])
      .filter(function (p) { return p.title && !isNaN(p.lat) && !isNaN(p.lng); });

    projects.forEach(function (p, i) { p.id = 'proj-' + (i + 1); });

    SDG.fanOutOverlaps(projects);
    return projects;
  });
};
