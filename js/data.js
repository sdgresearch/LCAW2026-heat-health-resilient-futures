window.SDG = window.SDG || {};

SDG.loadProjects = function (csvPath) {
  return new Promise(function (resolve, reject) {
    Papa.parse(csvPath, {
      download: true,
      header: true,
      skipEmptyLines: true,
      transformHeader: function (h) { return h.trim(); },
      complete: function (results) {
        var projects = results.data.map(function (row) {
          return {
            id:            row.id,
            title:         row.title,
            description:   row.description,
            lat:           parseFloat(row.lat),
            lng:           parseFloat(row.lng),
            locationLabel: row.location_label,
            continent:     row.continent,
            tags:          row.tags  ? row.tags.split('|').map(function (t) { return t.trim(); })  : [],
            team:          row.team  ? row.team.split('|').map(function (t) {
                             var parts = t.split(':');
                             return { name: parts[0].trim(), role: (parts[1] || '').trim() };
                           }) : [],
            linkProject:   row.link_project     || null,
            linkPub:       row.link_publication || null,
            linkLabel:     row.link_label       || 'Project Page',
            status:        row.status           || 'active'
          };
        });
        resolve(projects);
      },
      error: reject
    });
  });
};
