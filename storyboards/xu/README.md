# Where You Live Shapes Your Health

This folder contains a static interactive HTML showcase for the poster story **Where You Live Shapes Your Health**.

## How to Open

Open `index.html` in a modern browser. No installation, build step or internet connection is required.

## Folder Structure

```text
interactive-health-showcase/
├── index.html
├── README.md
├── css/
│   └── styles.css
├── js/
│   ├── app.js
│   ├── pathway-data.js
│   └── pathway-graph-data.js
└── assets/
    ├── images/
    │   ├── reference-extracts/
    │   └── panel-backgrounds/
    └── icons/
        └── shape-fill-crops/
```

## What Each Part Contains

- `index.html` is the main page to open in the browser.
- `css/styles.css` controls the visual layout, colours, typography and responsive design.
- `js/app.js` controls page interaction, section rendering, clickable pathway nodes and detail pop-ups.
- `js/pathway-data.js` contains the non-flowchart story content, including page text and card content.
- `js/pathway-graph-data.js` contains the pathway graph data, including nodes, edges, categories and explanatory text.
- `assets/images/reference-extracts/` contains the main visual image used by the opening section.
- `assets/images/panel-backgrounds/` contains background images used by poster-style content cards and panels.
- `assets/icons/shape-fill-crops/` contains supporting image assets kept with the page for compatibility.

## Notes

The page is designed as a mobile-first interactive poster. It presents evidence-informed conceptual pathways between built environment factors, exposure or behaviour pathways, and health outcomes.

If this folder is sent to someone else, keep the folder structure unchanged so that `index.html` can find its CSS, JavaScript and image assets.
