window.SDG = window.SDG || {};

(function () {
  var container = document.getElementById('globe');

  var globe = Globe()
    .globeImageUrl('https://cdn.jsdelivr.net/npm/three-globe/example/img/earth-night.jpg')
    .backgroundImageUrl('https://cdn.jsdelivr.net/npm/three-globe/example/img/night-sky.png')
    .atmosphereColor('#6ab4f5')
    .atmosphereAltitude(0.2)
    .width(container.offsetWidth || window.innerWidth)
    .height(container.offsetHeight || window.innerHeight)
    (container);

  globe.controls().autoRotate      = true;
  globe.controls().autoRotateSpeed = 0.35;
  globe.controls().enableDamping   = true;
  globe.controls().dampingFactor   = 0.08;
  globe.controls().minDistance     = 110;
  globe.controls().maxDistance     = 700;

  globe.pointOfView({ lat: 20, lng: 10, altitude: 2.2 });

  SDG.globe = globe;

  SDG.loadProjects('data/projects.csv').then(function (projects) {
    SDG.projects = projects;

    globe
      .ringsData(projects)
      .ringLat(function (d) { return d.lat; })
      .ringLng(function (d) { return d.lng; })
      .ringColor(function (d) {
        var base = d.status === 'active' ? '232,176,32' : '106,180,245';
        return function (t) { return 'rgba(' + base + ',' + (1 - t) + ')'; };
      })
      .ringMaxRadius(2.5)
      .ringPropagationSpeed(1.8)
      .ringRepeatPeriod(900)
      .ringAltitude(0.002);

    globe
      .pointsData(projects)
      .pointLat(function (d) { return d.lat; })
      .pointLng(function (d) { return d.lng; })
      .pointColor(function (d) { return d.status === 'active' ? '#E8B020' : '#6ab4f5'; })
      .pointRadius(0.4)
      .pointAltitude(0.01)
      .pointResolution(12)
      .pointLabel(function (d) {
        return '<div class="globe-tooltip"><strong>' + SDG.escHtml(d.title) + '</strong>' +
               '<br><span>' + SDG.escHtml(d.locationLabel) + '</span></div>';
      })
      .onPointClick(function (point) {
        globe.controls().autoRotate = false;
        globe.pointOfView({ lat: point.lat, lng: point.lng, altitude: 1.6 }, 900);
        setTimeout(function () { SDG.ui.openPanel(point); }, 700);
      })
      .onPointHover(function (point) {
        container.style.cursor = point ? 'pointer' : 'default';
      });

    globe
      .arcsData(projects.map(function (p) {
        return { startLat: 52.2053, startLng: 0.1218, endLat: p.lat, endLng: p.lng, project: p };
      }))
      .arcStartLat(function (d) { return d.startLat; })
      .arcStartLng(function (d) { return d.startLng; })
      .arcEndLat(function (d) { return d.endLat; })
      .arcEndLng(function (d) { return d.endLng; })
      .arcColor(function () { return ['rgba(0,59,111,0.5)', 'rgba(232,176,32,0.5)']; })
      .arcDashLength(0.35)
      .arcDashGap(0.15)
      .arcDashAnimateTime(4500)
      .arcStroke(0.35)
      .arcAltitudeAutoScale(0.28);

  }).catch(function (err) {
    console.error('SDG: could not load projects.csv —', err);
    document.getElementById('globe-error').removeAttribute('hidden');
  });

  window.addEventListener('resize', function () {
    globe
      .width(container.offsetWidth  || window.innerWidth)
      .height(container.offsetHeight || window.innerHeight);
  });

}());
