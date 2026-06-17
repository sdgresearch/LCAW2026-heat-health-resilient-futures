window.SDG = window.SDG || {};

SDG.loadProjects = function (csvPath) {
  return new Promise(function (resolve, reject) {
    Papa.parse(csvPath, {
      download: true,
      header: true,
      skipEmptyLines: true,
      transformHeader: function (h) { return h.trim().replace(/^﻿/, '').replace(/ /g, ' '); },
      complete: function (results) {
        var projects = results.data.map(function (row, i) {
          var rawLinks = (row['Project External Link'] || '')
            .split(/\r?\n/)
            .map(function (s) { return s.trim(); })
            .filter(Boolean);
          var linkProject = rawLinks[0] || null;

          var otherInfo = row['Project other info (e.g. Publication links, other talks, etc)'] || '';
          var pubMatch  = otherInfo.match(/https?:\/\/\S+/);
          var linkPub   = pubMatch ? pubMatch[0].replace(/[.,;)]+$/, '') : null;

          var tagsRaw = row['Keywords (separated by | e.g. climate|machine learning|resilience)'] || '';
          var teamRaw = row['Project members (Keywords (separated by | e.g. John Doe|Jane Smith)'] || '';

          return {
            id:            'proj-' + (i + 1),
            title:         row['Project Name']                              || '',
            description:   row['Project Description (max 100 words)']      || '',
            lat:           parseFloat(row['Location Latitude (in decimals, 1st number when you right-click on Google Maps on your location)']),
            lng:           parseFloat(row['Location Longitude (in decimals, 2nd number when you right-click on Google Maps on your location)']),
            locationLabel: row['Location (e.g. London, UK)']               || '',
            tags:          tagsRaw ? tagsRaw.split('|').map(function (t) { return t.trim(); }).filter(Boolean) : [],
            team:          teamRaw ? teamRaw.split('|').map(function (t) {
                             return { name: t.trim(), role: '' };
                           }).filter(function (m) { return m.name; }) : [],
            linkProject:   linkProject,
            linkPub:       linkPub,
            linkLabel:     'Project Page',
            status:        'active',
            university:    (row['University'] || 'cambridge').trim().toLowerCase()
          };
        });
        resolve(projects);
      },
      error: reject
    });
  });
};
