window.pathwayData = {
  meta: {
    title: "Where You Live Shapes Your Health",
    subtitle: "How buildings, streets and greenness shape everyday exposure and behaviour pathways to cardiovascular and long-term health.",
    caution: "These pathways show possible routes, not a single direct cause."
  },

  // Edit this registry first when replacing icons.
  // Each node's `icon` field points to one of these ids.
  iconRegistry: {
    home: { label: "Home", src: "assets/icons/shape-fill-crops/viva-slide-11-shape-visible-01.png" },
    density: { label: "Urban density", src: "assets/icons/shape-fill-crops/poster-template-slide-01-shape-visible-08.png" },
    street: { label: "Street network", src: "assets/icons/shape-fill-crops/poster-template-slide-01-shape-visible-05.png" },
    visualGreen: { label: "Visual greenness", src: "assets/icons/shape-fill-crops/poster-template-slide-01-shape-visible-03.png" },
    physicalGreen: { label: "Physical green access", src: "assets/icons/shape-fill-crops/poster-template-slide-01-shape-visible-02.png" },
    heat: { label: "Heat", src: "assets/icons/shape-fill-crops/poster-template-slide-01-shape-visible-19.png" },
    air: { label: "Air quality", src: "assets/icons/shape-fill-crops/poster-template-slide-01-shape-visible-17.png" },
    noise: { label: "Noise and sleep", src: "assets/icons/shape-fill-crops/poster-template-slide-01-shape-visible-18.png" },
    views: { label: "Views and light", src: "assets/icons/shape-fill-crops/poster-template-slide-01-shape-visible-03.png" },
    activity: { label: "Physical activity", src: "assets/icons/shape-fill-crops/poster-template-slide-01-shape-visible-20.png" },
    restoration: { label: "Restorative Activity", src: "assets/icons/shape-fill-crops/poster-template-slide-01-shape-visible-15.png" },
    routine: { label: "Sleep", fallback: "DR" },
    social: { label: "Social behavior", fallback: "SC" },
    cardio: { label: "Cardiovascular strain", src: "assets/icons/shape-fill-crops/poster-template-slide-01-shape-visible-10.png" },
    metabolic: { label: "Metabolic regulation", fallback: "ME" },
    stress: { label: "Stress load", src: "assets/icons/shape-fill-crops/poster-template-slide-01-shape-visible-09.png" },
    healthCv: { label: "Cardiovascular health", src: "assets/icons/shape-fill-crops/poster-template-slide-01-shape-visible-10.png" },
    healthMetabolic: { label: "Metabolic health", fallback: "MH" },
    healthResp: { label: "Respiratory health", src: "assets/icons/shape-fill-crops/poster-template-slide-01-shape-visible-11.png" },
    healthMental: { label: "Mental wellbeing", fallback: "MW" },
    actionCool: { label: "Cooler homes", src: "assets/icons/shape-fill-crops/viva-slide-11-shape-visible-04.png" },
    actionViews: { label: "Greener views", src: "assets/icons/shape-fill-crops/poster-template-slide-01-shape-visible-03.png" },
    actionGreen: { label: "Usable green space", src: "assets/icons/shape-fill-crops/poster-template-slide-01-shape-visible-06.png" },
    actionWalk: { label: "Walkable places", src: "assets/icons/shape-fill-crops/poster-template-slide-01-shape-visible-04.png" },
    actionTarget: { label: "Target burdens", src: "assets/icons/shape-fill-crops/poster-template-slide-01-shape-visible-21.png" }
  },

  storySlots: {
    hook: "Health is also built into homes, streets and everyday routes.",
    problemTitle: "Why Place Matters For Health",
    problemText: "Noncommunicable diseases dominate global mortality. Their risks are shaped over time by biology, behaviour, socioeconomic conditions and the environments people live in.",
    keyFindingsTitle: "From Place To Pathways",
    keyFindingsText: "Tap a place factor. See the metric, then follow exposure and behaviour in parallel.",
    gapsTitle: "What This Reveals",
    gapsText: "Built environment factors rarely act through one route. Pathways differ by place, hazard and people.",
    directionsTitle: "Responses Across Scales",
    directionsText: "Action has to work from buildings to streets, neighbourhoods and national policy."
  },

  problemCards: [
    {
      title: "NCDs shape global health.",
      icon: "healthCv",
      region: "Global health context",
      tone: "shared",
      text: "NCDs cause about 74% of global deaths; WHO/SDG targets call for a one-third cut in premature NCD mortality by 2030."
    },
    {
      title: "Health has many drivers.",
      icon: "activity",
      region: "Determinants of health",
      tone: "policy",
      text: "Genes, physiology, daily habits, socioeconomic conditions and built environment interact across the life course."
    },
    {
      title: "Place is long exposure.",
      icon: "home",
      region: "Why pathways matter",
      tone: "uk",
      text: "Homes, streets and greenness shape heat, air, movement and stress every day; solutions must fit climate, development level and culture."
    }
  ],

  gapCards: [
    {
      title: "Many routes to health.",
      icon: "activity",
      region: "Pathway diversity",
      tone: "pathway",
      backgroundKey: "reveal-socioeconomic",
      background: "assets/images/panel-backgrounds/reveal-card-socioeconomic.jpg",
      text: "The same factor can shift heat, air, sleep, movement and stress at once."
    },
    {
      title: "Benefits can conflict.",
      icon: "actionCool",
      region: "Trade-offs",
      tone: "uk",
      backgroundKey: "reveal-adaptation",
      background: "assets/images/panel-backgrounds/reveal-card-adaptation.jpg",
      text: "Airtight homes save heat, but without ventilation they may trap moisture or pollutants."
    },
    {
      title: "Hazards differ by place.",
      icon: "heat",
      region: "UK and Singapore",
      tone: "climate",
      backgroundKey: "reveal-vulnerability",
      background: "assets/images/panel-backgrounds/reveal-card-vulnerability.jpg",
      text: "UK homes may face winter cold; Singapore streets often prioritise heat and shade."
    },
    {
      title: "Effects vary by person.",
      icon: "healthCv",
      region: "Different bodies",
      tone: "policy",
      backgroundKey: "reveal-gendered",
      background: "assets/images/panel-backgrounds/reveal-card-gendered-routines.jpg",
      text: "Age, pregnancy, illness, work patterns and daily routines change who is most affected."
    }
  ],

  directionCards: [
    {
      title: "Adaptive buildings.",
      icon: "actionTarget",
      region: "Building scale",
      tone: "shared",
      backgroundKey: "direction-retrofit",
      background: "assets/images/panel-backgrounds/direction-card-retrofit.jpg",
      text: "Set standards for warmth, cooling, ventilation and affordability together. For example, UK retrofit must avoid trapping damp or polluted indoor air."
    },
    {
      title: "Safer street blocks.",
      icon: "actionCool",
      region: "Street / block scale",
      tone: "shared",
      backgroundKey: "direction-street-block",
      background: "assets/images/panel-backgrounds/direction-card-street-block.jpg",
      text: "Design blocks for exposure reduction and everyday use. For example, Singapore may prioritise shade and airflow, while other places may prioritise traffic noise or winter safety."
    },
    {
      title: "Connected neighbourhoods.",
      icon: "actionGreen",
      region: "Neighbourhood scale",
      tone: "shared",
      backgroundKey: "direction-green",
      background: "assets/images/panel-backgrounds/direction-card-green-network.jpg",
      text: "Link homes, services, parks and routes so healthy choices are practical. For example, green access should connect to daily trips, not sit apart from them."
    },
    {
      title: "Targeted systems.",
      icon: "actionTarget",
      region: "City / national scale",
      tone: "policy",
      backgroundKey: "direction-equity",
      background: "assets/images/panel-backgrounds/direction-card-equity-target.jpg",
      text: "Use data and funding to target exposure, vulnerability and limited adaptive capacity together. For example, support should prioritise groups most affected by the local hazard profile."
    }
  ],

  factorStories: [
    {
      id: "homeForm",
      title: "Home & Building Form",
      shortTitle: "Home",
      icon: "home",
      scale: "Inside the home + the building",
      summary: "Housing conditions can shape what people breathe, feel and see indoors.",
      metrics: [
        { label: "Building age", icon: "home", detail: "Building age can change insulation, ventilation and indoor comfort." },
        { label: "Floor level", icon: "home", detail: "Floor level can change heat, noise and view exposure." },
        { label: "Orientation", icon: "views", detail: "Orientation changes sunlight, shade and views." },
        { label: "Windows", icon: "views", detail: "Windows shape daylight, ventilation and green views." },
        { label: "Ventilation", icon: "air", detail: "Ventilation affects indoor air and cooling." },
        { label: "Heating system", icon: "heat", detail: "Heating systems shape indoor warmth, while cooking is treated as a home behaviour and indoor source." }
      ],
      exposures: [
        { nodeId: "heatExp", linkIds: ["home-heat"] },
        { nodeId: "airExp", linkIds: ["home-air"] },
        { nodeId: "viewsExp", linkIds: ["home-views"] }
      ],
      behaviours: [
        { nodeId: "routineBeh", linkIds: ["noise-routine"] },
        { nodeId: "restorationBeh", linkIds: ["views-restoration"] }
      ],
      health: ["cardioStrain", "respHealth", "mentalHealth"],
      actions: ["coolHomes", "greenViews"],
      crossLinks: [
        { linkId: "views-restoration", label: "Views can support recovery" }
      ]
    },
    {
      id: "densitySpacing",
      title: "Density & Spacing",
      shortTitle: "Density",
      icon: "density",
      scale: "Around the building",
      summary: "Nearby buildings and roads can shape heat, airflow, noise and sleep.",
      metrics: [
        { label: "Building density", icon: "density", detail: "Density can change heat storage, airflow and crowding around homes." },
        { label: "Spacing", icon: "density", detail: "Spacing changes shade, privacy, wind and daylight." },
        { label: "Shade", icon: "heat", detail: "Shade can reduce heat exposure around homes and routes." },
        { label: "Airflow", icon: "air", detail: "Airflow affects cooling and pollutant dispersion." },
        { label: "Traffic proximity", icon: "noise", detail: "Nearby traffic can increase air and noise exposure." }
      ],
      exposures: [
        { nodeId: "heatExp", linkIds: ["density-heat"] },
        { nodeId: "airExp", linkIds: ["density-air"] },
        { nodeId: "noiseExp", linkIds: ["density-noise"] }
      ],
      behaviours: [
        { nodeId: "routineBeh", linkIds: ["noise-routine"] },
        { nodeId: "activityBeh", linkIds: ["heat-activity"] }
      ],
      health: ["stressLoad", "cvHealth", "respHealth"],
      actions: ["target", "coolHomes"],
      crossLinks: [
        { linkId: "noise-routine", label: "Noise can disrupt routines" },
        { linkId: "heat-activity", label: "Heat can reduce outdoor time" }
      ]
    },
    {
      id: "streetAccess",
      title: "Street Access",
      shortTitle: "Streets",
      icon: "street",
      scale: "Daily routes",
      summary: "Streets can make daily movement easier, harder or less comfortable.",
      metrics: [
        { label: "Connectivity", icon: "street", detail: "Connected streets can make walking and cycling easier." },
        { label: "Nearby destinations", icon: "street", detail: "Nearby shops, services and stops shape daily routes." },
        { label: "Walkability", icon: "activity", detail: "Walkability turns movement into an everyday routine." },
        { label: "Route comfort", icon: "heat", detail: "Shade, noise and traffic can change whether routes feel usable." }
      ],
      exposures: [
        { nodeId: "airExp", linkIds: ["density-air"] },
        { nodeId: "noiseExp", linkIds: ["density-noise"] }
      ],
      behaviours: [
        { nodeId: "activityBeh", linkIds: ["streets-activity"] },
        { nodeId: "routineBeh", linkIds: ["streets-routine"] }
      ],
      health: ["metabolicReg", "cardioStrain", "metabolicHealth"],
      actions: ["walkable", "target"],
      crossLinks: []
    },
    {
      id: "greenness",
      title: "Greenness",
      shortTitle: "Green",
      icon: "physicalGreen",
      scale: "Green places",
      summary: "Greenery can work through what people see and what people can use.",
      metrics: [
        { label: "Visible greenery", icon: "visualGreen", detail: "Visible greenery is what people can see from windows and routes." },
        { label: "Green view", icon: "views", detail: "Green view can shape daily visual exposure." },
        { label: "Reachable parks", icon: "physicalGreen", detail: "Reachable parks matter when people can actually get to them." },
        { label: "Usable green space", icon: "actionGreen", detail: "Usable green space supports activity, cooling and recovery." }
      ],
      exposures: [
        { nodeId: "viewsExp", linkIds: ["visual-views"] },
        { nodeId: "heatExp", linkIds: ["physical-heat"] }
      ],
      behaviours: [
        { nodeId: "restorationBeh", linkIds: ["visual-restoration", "physical-restoration"] },
        { nodeId: "activityBeh", linkIds: ["physical-activity"] }
      ],
      health: ["stressLoad", "mentalHealth", "cvHealth"],
      actions: ["greenViews", "greenAccess"],
      crossLinks: [
        { linkId: "views-restoration", label: "Views can support recovery" }
      ]
    }
  ],

  columns: [
    { id: "built", label: "Built Environment Factors", x: 34, width: 184 },
    { id: "exposure", label: "Exposure Pathways", x: 286, width: 166 },
    { id: "behaviour", label: "Behaviour Pathways", x: 520, width: 176 },
    { id: "body", label: "Body Responses", x: 764, width: 170 },
    { id: "health", label: "Health Outcomes", x: 1002, width: 174 },
    { id: "action", label: "Future Action", x: 1238, width: 166 }
  ],

  nodes: [
    {
      id: "home",
      column: "built",
      y: 82,
      icon: "home",
      label: "Home & Building Form",
      sublabel: "form, age, quality",
      themes: ["heat", "airnoise", "greenness"],
      tag: "Built environment",
      body: "The shape, height, age, materials, orientation and energy performance of homes can shape indoor heat, ventilation, daylight and comfort.",
      bullets: ["Homes are the closest built environment people experience every day.", "Building age, form and energy performance can all change everyday conditions."]
    },
    {
      id: "density",
      column: "built",
      y: 202,
      icon: "density",
      label: "Density & Spacing",
      sublabel: "shade, airflow, noise",
      themes: ["heat", "airnoise"],
      tag: "Built environment",
      body: "The spacing and arrangement of surrounding buildings can influence local heat, wind, privacy, noise and pollutant dispersion.",
      bullets: ["Urban form helps shape the micro-environment around homes and streets.", "Density can change heat, airflow, noise and air quality."]
    },
    {
      id: "streets",
      column: "built",
      y: 322,
      icon: "street",
      label: "Street Access",
      sublabel: "connectivity, amenities",
      themes: ["activity"],
      tag: "Built environment",
      body: "Street connectivity and access to everyday destinations shape whether daily life supports walking, cycling, social contact and time outdoors.",
      bullets: ["Street access changes what daily movement feels possible.", "Behaviour and exposure can change together."]
    },
    {
      id: "visualGreen",
      column: "built",
      y: 442,
      icon: "visualGreen",
      label: "Visual Greenness",
      sublabel: "what people can see",
      themes: ["greenness"],
      tag: "Greenness",
      body: "Visual greenness means the greenery people can see from homes, streets or daily routes.",
      bullets: ["Simple question: what green can people see?", "Seeing green and using green are different experiences."]
    },
    {
      id: "physicalGreen",
      column: "built",
      y: 562,
      icon: "physicalGreen",
      label: "Physical Green Access",
      sublabel: "what people can use",
      themes: ["greenness", "activity", "heat"],
      tag: "Greenness",
      body: "Physical green access means green spaces people can reach, enter and use for movement, cooling, recovery or social life.",
      bullets: ["Simple question: what green can people reach and use?", "This supports both exposure and behaviour pathways."]
    },

    {
      id: "heatExp",
      column: "exposure",
      y: 82,
      icon: "heat",
      label: "Heat",
      sublabel: "thermal exposure",
      themes: ["heat"],
      tag: "Exposure pathway",
      body: "Heat is an environmental exposure shaped by buildings, density, materials, shade and green space.",
      bullets: ["Heat is one of the clearest climate and health pathways.", "Heat is one part of a wider set of health pathways."]
    },
    {
      id: "airExp",
      column: "exposure",
      y: 202,
      icon: "air",
      label: "Air Quality",
      sublabel: "pollution, ventilation",
      themes: ["airnoise"],
      tag: "Exposure pathway",
      body: "Air quality and ventilation can be influenced by housing conditions, street layout and surrounding urban form.",
      bullets: ["Connects building and street context to respiratory and cardiovascular outcomes."]
    },
    {
      id: "noiseExp",
      column: "exposure",
      y: 322,
      icon: "noise",
      label: "Noise & Sleep",
      sublabel: "quiet, rest",
      themes: ["airnoise"],
      tag: "Exposure pathway",
      body: "Noise is a daily environmental burden that may affect sleep, stress and cardiovascular strain.",
      bullets: ["Noise and sleep connect homes and streets to everyday recovery."]
    },
    {
      id: "viewsExp",
      column: "exposure",
      y: 442,
      icon: "views",
      label: "Views & Light",
      sublabel: "green view, daylight",
      themes: ["greenness"],
      tag: "Exposure pathway",
      body: "Views and daylight are immediate residential experiences shaped by windows, building form and visible greenery.",
      bullets: ["Views and daylight make greenness part of daily experience."]
    },

    {
      id: "activityBeh",
      column: "behaviour",
      y: 162,
      icon: "activity",
      label: "Physical Activity",
      sublabel: "walking, movement",
      themes: ["activity", "greenness"],
      tag: "Behaviour pathway",
      body: "Walkable streets and usable green spaces may support everyday movement and reduce sedentary routines.",
      bullets: ["Movement is shaped by streets, green access and comfort.", "Heat, air and noise can also change whether people go outside."]
    },
    {
      id: "routineBeh",
      column: "behaviour",
      y: 322,
      icon: "routine",
      label: "Sleep",
      sublabel: "rest, disruption",
      themes: ["activity", "airnoise", "greenness"],
      tag: "Behaviour pathway",
      body: "Sleep captures repeated rest and disruption shaped by heat, noise, light and air.",
      bullets: ["Sleep is a clearer behaviour label for the mobile graph."]
    },
    {
      id: "restorationBeh",
      column: "behaviour",
      y: 482,
      icon: "restoration",
      label: "Restorative Activity",
      sublabel: "recovery, calm",
      themes: ["greenness"],
      tag: "Behaviour pathway",
      body: "Restorative activity means recovery from daily demands, including time in or views of calmer green environments.",
      bullets: ["Restorative activity keeps recovery and calm explicit."]
    },

    {
      id: "cardioStrain",
      column: "body",
      y: 122,
      icon: "cardio",
      label: "Cardiovascular Strain",
      sublabel: "blood pressure, demand",
      themes: ["heat", "airnoise", "activity"],
      tag: "Body response",
      body: "Heat, air pollution, noise and low activity may place demands on the cardiovascular system.",
      bullets: ["Cardiovascular strain is one possible body response."]
    },
    {
      id: "metabolicReg",
      column: "body",
      y: 302,
      icon: "metabolic",
      label: "Metabolic Regulation",
      sublabel: "BMI, glucose, lipids",
      themes: ["activity"],
      tag: "Body response",
      body: "Movement patterns and repeated routines may influence body weight, glucose regulation and lipid-related processes.",
      bullets: ["Daily movement and routines can shape metabolic regulation."]
    },
    {
      id: "stressLoad",
      column: "body",
      y: 482,
      icon: "stress",
      label: "Stress Load",
      sublabel: "allostatic load",
      themes: ["heat", "airnoise", "greenness"],
      tag: "Body response",
      body: "Stress load describes how repeated stressors can create cumulative wear and tear on the body.",
      bullets: ["Several pathways can meet here.", "Researchers sometimes call this allostatic load."]
    },

    {
      id: "cvHealth",
      column: "health",
      y: 82,
      icon: "healthCv",
      label: "Cardiovascular Health",
      sublabel: "CVD risk factors",
      themes: ["heat", "airnoise", "activity", "greenness"],
      tag: "Health outcome",
      body: "Cardiovascular health is closely connected to heat, air, activity and stress pathways.",
      bullets: ["The map shows possible routes toward risk, not certainty."]
    },
    {
      id: "metabolicHealth",
      column: "health",
      y: 242,
      icon: "healthMetabolic",
      label: "Metabolic Health",
      sublabel: "BMI, glucose, lipids",
      themes: ["activity"],
      tag: "Health outcome",
      body: "Metabolic health includes obesity, glucose regulation and diabetes-related risks.",
      bullets: ["Metabolic health can be shaped by activity, sleep and daily routines."]
    },
    {
      id: "respHealth",
      column: "health",
      y: 402,
      icon: "healthResp",
      label: "Respiratory Health",
      sublabel: "airways, lung health",
      themes: ["airnoise"],
      tag: "Health outcome",
      body: "Respiratory health is mainly linked to air quality, ventilation and pollution exposure.",
      bullets: ["Respiratory health is closely tied to air quality and ventilation."]
    },
    {
      id: "mentalHealth",
      column: "health",
      y: 562,
      icon: "healthMental",
      label: "Mental Wellbeing",
      sublabel: "stress, recovery",
      themes: ["greenness", "airnoise"],
      tag: "Health outcome",
      body: "Mental wellbeing connects with restoration, views, sleep, noise and everyday stress.",
      bullets: ["Visible greenery can matter through stress, recovery and everyday mood."]
    },

    {
      id: "coolHomes",
      column: "action",
      y: 82,
      icon: "actionCool",
      label: "Cooler Homes",
      sublabel: "shade, ventilation",
      themes: ["heat"],
      tag: "Future action",
      body: "Design and retrofit homes to reduce heat exposure through shading, ventilation, insulation and cooler routes.",
      bullets: ["Cooler homes can reduce heat burden during hotter periods."]
    },
    {
      id: "greenViews",
      column: "action",
      y: 202,
      icon: "actionViews",
      label: "Greener Views",
      sublabel: "visible planting",
      themes: ["greenness"],
      tag: "Future action",
      body: "Place trees and planting where people actually see them from windows, streets and daily routes.",
      bullets: ["Greener views bring planting into everyday sightlines."]
    },
    {
      id: "greenAccess",
      column: "action",
      y: 322,
      icon: "actionGreen",
      label: "Usable Green Space",
      sublabel: "safe, nearby, inclusive",
      themes: ["greenness", "activity"],
      tag: "Future action",
      body: "Make green spaces reachable, safe, inclusive and useful for activity, cooling, social contact and recovery.",
      bullets: ["Usable green space supports movement, cooling and recovery."]
    },
    {
      id: "walkable",
      column: "action",
      y: 442,
      icon: "actionWalk",
      label: "Walkable Places",
      sublabel: "connected streets",
      themes: ["activity"],
      tag: "Future action",
      body: "Connect homes to daily destinations and make healthier routines easier.",
      bullets: ["Walkable places make healthier routines easier."]
    },
    {
      id: "target",
      column: "action",
      y: 562,
      icon: "actionTarget",
      label: "Target Burdens",
      sublabel: "overlapping risks",
      themes: ["heat", "airnoise", "greenness", "activity"],
      tag: "Future action",
      body: "Prioritise places where heat, air, noise and poor access overlap.",
      bullets: ["Targeting overlapping burdens can help prioritise action."]
    }
  ],

  links: [
    {
      id: "home-heat",
      source: "home",
      target: "heatExp",
      themes: ["heat"],
      title: "Home form shapes heat exposure",
      body: "Orientation, materials, insulation, ventilation and shading can change how much heat people experience indoors and immediately around the home.",
      bullets: ["This links home design with heat and health.", "It is one possible exposure pathway."]
    },
    {
      id: "home-air",
      source: "home",
      target: "airExp",
      themes: ["airnoise"],
      title: "Home form shapes air quality",
      body: "Ventilation, building age, materials and position can affect indoor and near-home air quality.",
      bullets: ["This links housing conditions to air-related health pathways."]
    },
    {
      id: "home-views",
      source: "home",
      target: "viewsExp",
      themes: ["greenness"],
      title: "Home form shapes views and daylight",
      body: "Window placement, building orientation and surrounding form shape what people see and how much daylight reaches everyday living spaces.",
      bullets: ["The scale of the home shapes daily views and light."]
    },
    {
      id: "density-heat",
      source: "density",
      target: "heatExp",
      themes: ["heat"],
      title: "Density and spacing shape heat",
      body: "Building spacing affects shade, wind flow and heat accumulation around homes and streets.",
      bullets: ["This connects urban form to heat exposure."]
    },
    {
      id: "density-air",
      source: "density",
      target: "airExp",
      themes: ["airnoise"],
      title: "Density and spacing shape air quality",
      body: "Street canyons, traffic corridors and building spacing can affect how pollutants disperse or accumulate.",
      bullets: ["Air quality remains an everyday exposure around homes and streets."]
    },
    {
      id: "density-noise",
      source: "density",
      target: "noiseExp",
      themes: ["airnoise"],
      title: "Density and spacing shape noise",
      body: "Urban form and road proximity can change the amount of noise people experience at home and along daily routes.",
      bullets: ["Noise can affect sleep and stress-related pathways."]
    },
    {
      id: "streets-activity",
      source: "streets",
      target: "activityBeh",
      themes: ["activity"],
      title: "Street access enables activity",
      body: "Connected streets and nearby destinations can make walking, cycling and outdoor movement easier.",
      bullets: ["This line follows how streets shape daily movement."]
    },
    {
      id: "streets-routine",
      source: "streets",
      target: "routineBeh",
      themes: ["activity"],
      title: "Street access shapes routines",
      body: "Street networks influence daily routes, time outdoors, access to amenities and repeated patterns of movement.",
      bullets: ["Small routines can accumulate over months and years."]
    },
    {
      id: "visual-views",
      source: "visualGreen",
      target: "viewsExp",
      themes: ["greenness"],
      title: "Visible greenery creates visual exposure",
      body: "Visual greenness works through what people can see from home, streets and everyday routes.",
      bullets: ["Visible greenery is not the same as distance to a park."]
    },
    {
      id: "visual-restoration",
      source: "visualGreen",
      target: "restorationBeh",
      themes: ["greenness"],
      title: "Visible greenery may support restoration",
      body: "Green views may support psychological restoration even when people do not physically enter green spaces.",
      bullets: ["The relationship is best read as a possible supportive pathway."]
    },
    {
      id: "physical-heat",
      source: "physicalGreen",
      target: "heatExp",
      themes: ["heat", "greenness"],
      title: "Usable green space can reduce heat exposure",
      body: "Trees and green spaces can provide shade and cooling, shaping heat exposure around homes and routes.",
      bullets: ["Greenness can also be part of cooling strategies."]
    },
    {
      id: "physical-activity",
      source: "physicalGreen",
      target: "activityBeh",
      themes: ["activity", "greenness"],
      title: "Usable green space supports activity",
      body: "Reachable and welcoming green spaces can support walking, play, exercise and time outdoors.",
      bullets: ["Reachable green space works through use, not only sight."]
    },
    {
      id: "physical-restoration",
      source: "physicalGreen",
      target: "restorationBeh",
      themes: ["greenness"],
      title: "Usable green space supports recovery",
      body: "Entering and using green space can create opportunities for recovery from daily stress.",
      bullets: ["Recovery depends on whether people can spend time in restorative places."]
    },

    {
      id: "heat-activity",
      source: "heatExp",
      target: "activityBeh",
      themes: ["heat", "activity"],
      title: "Heat can change activity behaviour",
      body: "High heat can discourage walking or outdoor time, especially for vulnerable groups or during hot periods.",
      bullets: ["Heat can change both exposure and daily behaviour."]
    },
    {
      id: "noise-routine",
      source: "noiseExp",
      target: "routineBeh",
      themes: ["airnoise"],
      title: "Noise can disrupt routines",
      body: "Noise exposure can affect sleep timing and recovery, changing daily routines as well as physiological stress.",
      bullets: ["Noise can affect both exposure burden and sleep routines."]
    },
    {
      id: "views-restoration",
      source: "viewsExp",
      target: "restorationBeh",
      themes: ["greenness"],
      title: "Views can support restoration",
      body: "Visible greenery and daylight may support mental recovery, attention restoration and stress reduction.",
      bullets: ["Views and light can support everyday recovery."]
    },

    {
      id: "heat-cardio",
      source: "heatExp",
      target: "cardioStrain",
      themes: ["heat"],
      title: "Heat may increase cardiovascular strain",
      body: "Thermal exposure can place demand on thermoregulation and the cardiovascular system.",
      bullets: ["It is one possible body response to heat."]
    },
    {
      id: "air-cardio",
      source: "airExp",
      target: "cardioStrain",
      themes: ["airnoise"],
      title: "Air quality may affect cardiovascular strain",
      body: "Pollution exposure is linked in the literature to cardiovascular burden and risk factors.",
      bullets: ["The link is best read as a possible health pathway."]
    },
    {
      id: "air-resp",
      source: "airExp",
      target: "respHealth",
      themes: ["airnoise"],
      title: "Air quality links to respiratory health",
      body: "Air quality and ventilation pathways are most directly legible for respiratory health.",
      bullets: ["Air quality is a direct and familiar respiratory pathway."]
    },
    {
      id: "noise-stress",
      source: "noiseExp",
      target: "stressLoad",
      themes: ["airnoise"],
      title: "Noise may add to stress load",
      body: "Repeated noise exposure can become a chronic environmental stressor and may affect sleep and recovery.",
      bullets: ["Repeated noise can become part of cumulative stress."]
    },
    {
      id: "activity-metabolic",
      source: "activityBeh",
      target: "metabolicReg",
      themes: ["activity"],
      title: "Activity supports metabolic regulation",
      body: "Everyday movement can influence body weight, glucose regulation and lipid-related processes.",
      bullets: ["Daily movement links behaviour to body regulation."]
    },
    {
      id: "activity-cardio",
      source: "activityBeh",
      target: "cardioStrain",
      themes: ["activity"],
      title: "Activity affects cardiovascular pathways",
      body: "Physical activity and sedentary time can shape cardiovascular risk pathways over time.",
      bullets: ["Activity can shape cardiovascular pathways over time."]
    },
    {
      id: "routine-metabolic",
      source: "routineBeh",
      target: "metabolicReg",
      themes: ["activity"],
      title: "Routines shape metabolic regulation",
      body: "Repeated routines around movement, sleep and time outdoors can affect metabolic regulation.",
      bullets: ["Repeated routines matter because they happen every day."]
    },
    {
      id: "routine-stress",
      source: "routineBeh",
      target: "stressLoad",
      themes: ["airnoise", "activity", "greenness"],
      title: "Sleep shapes stress load",
      body: "Sleep, recovery, commuting and time outdoors can all influence cumulative stress load.",
      bullets: ["Sleep can carry environmental stress into daily life."]
    },
    {
      id: "restoration-stress",
      source: "restorationBeh",
      target: "stressLoad",
      themes: ["greenness"],
      title: "Restorative activity may reduce stress load",
      body: "Restorative experiences may help reduce repeated stress burden.",
      bullets: ["Restorative activity is one way greenness may matter."]
    },

    {
      id: "cardio-cv-health",
      source: "cardioStrain",
      target: "cvHealth",
      themes: ["heat", "airnoise", "activity"],
      title: "Cardiovascular strain links to cardiovascular health",
      body: "Repeated or sustained cardiovascular strain may be associated with cardiovascular risk factors and outcomes.",
      bullets: ["This is one route from body response to health outcome."]
    },
    {
      id: "metabolic-health",
      source: "metabolicReg",
      target: "metabolicHealth",
      themes: ["activity"],
      title: "Metabolic regulation links to metabolic health",
      body: "Metabolic regulation is a bridge from daily routines and activity to metabolic health outcomes.",
      bullets: ["This can involve body weight, glucose and lipids."]
    },
    {
      id: "stress-cv",
      source: "stressLoad",
      target: "cvHealth",
      themes: ["heat", "airnoise", "greenness"],
      title: "Stress load links to cardiovascular health",
      body: "Allostatic load is often used to describe cumulative wear and tear that may precede long-term health risks.",
      bullets: ["Stress load is the simpler term for this public map."]
    },
    {
      id: "stress-mental",
      source: "stressLoad",
      target: "mentalHealth",
      themes: ["greenness", "airnoise"],
      title: "Stress load links to mental wellbeing",
      body: "Repeated environmental stress and insufficient recovery may be associated with mental wellbeing.",
      bullets: ["Both restorative and disruptive environments can meet here."]
    },

    {
      id: "cv-cool",
      source: "cvHealth",
      target: "coolHomes",
      themes: ["heat"],
      title: "Cardiovascular pathways suggest cooler homes",
      body: "If heat contributes to cardiovascular strain, design attention should turn to cooler homes and routes.",
      bullets: ["The pathway points toward cooler homes and routes."]
    },
    {
      id: "mental-views",
      source: "mentalHealth",
      target: "greenViews",
      themes: ["greenness"],
      title: "Wellbeing pathways suggest greener views",
      body: "If visible greenery supports restoration and wellbeing, planting should be placed where people see it.",
      bullets: ["The pathway points toward greenery people actually see."]
    },
    {
      id: "metabolic-walkable",
      source: "metabolicHealth",
      target: "walkable",
      themes: ["activity"],
      title: "Metabolic pathways suggest walkable places",
      body: "If routines and activity matter, streets and daily destinations become a design target.",
      bullets: ["The pathway points toward streets that support daily movement."]
    },
    {
      id: "mental-green-access",
      source: "mentalHealth",
      target: "greenAccess",
      themes: ["greenness"],
      title: "Wellbeing pathways suggest usable green space",
      body: "If restoration and recovery matter, green spaces need to be reachable, safe and usable.",
      bullets: ["The pathway points toward reachable and usable green space."]
    },
    {
      id: "resp-target",
      source: "respHealth",
      target: "target",
      themes: ["airnoise"],
      title: "Respiratory pathways suggest targeting burdens",
      body: "Air quality pathways can guide attention to places where environmental burdens overlap.",
      bullets: ["Overlapping burdens can help identify where action is most needed."]
    },
    {
      id: "cv-target",
      source: "cvHealth",
      target: "target",
      themes: ["heat", "airnoise"],
      title: "Cardiovascular pathways suggest targeting burdens",
      body: "Places with overlapping heat, air and noise burdens may deserve priority for design and policy action.",
      bullets: ["Overlapping burdens can guide where design action may matter most."]
    }
  ],

  themes: {
    heat: {
      label: "Climate / heat",
      title: "Climate / heat pathway",
      tag: "Theme",
      body: "The heat storyline links homes, density and green access to thermal exposure, activity behaviour, cardiovascular strain and cooler-home action.",
      bullets: ["Heat connects climate resilience directly to everyday health.", "Exposure and behaviour can move together."],
      nodeIds: ["home", "density", "physicalGreen", "heatExp", "activityBeh", "cardioStrain", "stressLoad", "cvHealth", "coolHomes", "target"]
    },
    greenness: {
      label: "Greenness",
      title: "Greenness pathway",
      tag: "Theme",
      body: "The greenness storyline keeps visual greenness and physical green access separate, then links them to views, restoration, activity and wellbeing.",
      bullets: ["Visual greenness: what people can see.", "Physical green access: what people can reach and use."],
      nodeIds: ["visualGreen", "physicalGreen", "viewsExp", "activityBeh", "restorationBeh", "stressLoad", "mentalHealth", "cvHealth", "greenViews", "greenAccess", "target"]
    },
    activity: {
      label: "Walking & activity",
      title: "Walking & activity pathway",
      tag: "Theme",
      body: "The activity storyline treats behaviour as a parallel pathway shaped by streets and green access.",
      bullets: ["Street access and green access can support movement and routines.", "The pathway points toward walkable places and usable green space."],
      nodeIds: ["streets", "physicalGreen", "activityBeh", "routineBeh", "metabolicReg", "cardioStrain", "metabolicHealth", "cvHealth", "walkable", "greenAccess", "target"]
    },
    airnoise: {
      label: "Air & noise",
      title: "Air & noise pathway",
      tag: "Theme",
      body: "The air and noise storyline links home form and density to air quality, noise, sleep routines, stress load and respiratory or cardiovascular health.",
      bullets: ["Air and noise add another everyday environmental burden.", "Noise can be an exposure and can disrupt sleep routines."],
      nodeIds: ["home", "density", "airExp", "noiseExp", "routineBeh", "cardioStrain", "stressLoad", "respHealth", "cvHealth", "mentalHealth", "target"]
    }
  },

  actions: [
    { title: "Design cooler homes", icon: "actionCool", text: "Improve shading, ventilation, insulation and cooler outdoor routes." },
    { title: "Create greener views", icon: "actionViews", text: "Place trees and planting where people actually see them." },
    { title: "Improve usable green access", icon: "actionGreen", text: "Make green spaces safe, nearby, inclusive and useful." },
    { title: "Design walkable places", icon: "actionWalk", text: "Connect homes to daily destinations and everyday social infrastructure." },
    { title: "Target accumulated burdens", icon: "actionTarget", text: "Prioritise places where heat, air, noise and poor access overlap." }
  ]
};
