document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.scroll-section');
    const body = document.body;
    const navLinks = document.querySelectorAll('.site-nav .nav-links a');

    const themes = {
        "section-0": "#000000",
        "section-africa": "#0d1217",
        "section-1": "#1a0f0f",
        "section-2": "#1a0f0f",
        "section-3": "#0f121a",
        "section-4": "#0f1a18",
        "section-5": "#1a1a1a",
        "section-6": "#2a1212",
        "section-map": "#10151a",
        "section-7": "#1a150f",
        "section-8": "#000000"
    };

    const observerOptions = {
        root: document.querySelector('.story-container'),
        threshold: 0.5
    };


    // ── Interactive Africa map: Kenya highlight + Nairobi marker ──
    const africaEl = document.getElementById('africaMap');
    let africaMap = null;
    if (africaEl && typeof L !== 'undefined') {
        africaMap = L.map('africaMap', {
            center: [1.5, 25],          // continental Africa view
            zoom: 4,
            minZoom: 3,
            maxZoom: 12,
            scrollWheelZoom: false,     // don't hijack page scrolling
            worldCopyJump: true
        });

        L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
            attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
            subdomains: 'abcd'
        }).addTo(africaMap);

        // Polygon highlight on Kenya's borders
        const kenyaLayer = L.geoJSON(KENYA_GEOJSON, {
            style: {
                color: '#ff6b6b',        // warm accent border
                weight: 2.5,
                fillColor: '#ff6b6b',
                fillOpacity: 0.18
            }
        }).addTo(africaMap);
        kenyaLayer.bindTooltip('Kenya', { sticky: true });
        kenyaLayer.on('mouseover', () => kenyaLayer.setStyle({ fillOpacity: 0.32 }));
        kenyaLayer.on('mouseout',  () => kenyaLayer.setStyle({ fillOpacity: 0.18 }));
        kenyaLayer.on('click', () => africaMap.flyToBounds(kenyaLayer.getBounds(), { padding: [30, 30] }));

        // Prominent pulsing marker on Nairobi
        const nairobi = [-1.2921, 36.8219];
        const pulseIcon = L.divIcon({
            className: 'nairobi-pin',
            html: '<span class="pin-pulse"></span><span class="pin-core"></span>',
            iconSize: [22, 22],
            iconAnchor: [11, 11]
        });
        L.marker(nairobi, { icon: pulseIcon, title: 'Nairobi' })
            .addTo(africaMap)
            .bindPopup('<strong>Nairobi</strong><br>1.2921&deg; S, 36.8219&deg; E<br>Population 5.3M (2023)');
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                const sectionId = entry.target.id;
                if (themes[sectionId]) {
                    body.style.backgroundColor = themes[sectionId];
                }

                // Scroll spy: highlight the nav link for the visible section
                navLinks.forEach(link => {
                    link.classList.toggle('active', link.dataset.section === sectionId);
                });

                // Leaflet needs a size refresh when its section scrolls into view
                if (sectionId === 'section-africa' && africaMap) {
                    setTimeout(() => africaMap.invalidateSize(), 250);
                }
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
});
