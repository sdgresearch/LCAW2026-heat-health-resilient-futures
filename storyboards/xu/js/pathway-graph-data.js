window.pathwayGraphData = {
  "version": 1,
  "schema": "pathway-graph/v1",
  "meta": {
    "title": "From Place To Pathways",
    "description": "Visual pathway draft remapped from exposure and behaviour pathways to health outcomes.",
    "draft": "health-outcome-remap-connectivity-fixed-v1"
  },
  "graphs": [
    {
      "id": "building",
      "title": "Building",
      "shortTitle": "Building",
      "summary": "How the building itself shapes thermal, air, light and routine pathways before health outcomes appear.",
      "nodes": [
        {
          "id": "building",
          "label": "Building",
          "type": "scale",
          "icon": "assets/icons/shape-fill-crops/viva-slide-11-shape-visible-01.png",
          "body": "The physical home or building is the immediate setting of everyday exposure. Key influences include age, fabric, systems, windows, ventilation and how the building meets the outside climate. For example, a Victorian terrace in the UK may lose heat through walls and windows, while a newer flat may be warmer but more dependent on ventilation.",
          "group": "factor",
          "order": 1,
          "xLocal": 0.5,
          "yLocal": 0.5
        },
        {
          "id": "building-age",
          "label": "Building Age",
          "type": "metric",
          "icon": "assets/icons/shape-fill-crops/viva-slide-11-shape-visible-01.png",
          "body": "Building age captures both construction period and maintenance condition. Key influences include construction period, materials, repair history and retrofit. For example, an older brick home in Cambridge may be more likely to have damp patches after winter rain if insulation and ventilation were never upgraded.",
          "group": "metrics",
          "order": 1,
          "xLocal": 0.5,
          "yLocal": 0.5
        },
        {
          "id": "energy-performance",
          "label": "Energy Performance",
          "type": "metric",
          "icon": "assets/icons/shape-fill-crops/viva-slide-11-shape-visible-04.png",
          "body": "Energy performance describes how effectively a building conserves energy and supports comfort. Key influences include insulation, glazing, airtightness, heating efficiency and retrofit quality. For example, a well-insulated UK flat may stay warm with less heating, but if it is too airtight without ventilation, indoor air can feel stale.",
          "group": "metrics",
          "order": 2,
          "xLocal": 0.5,
          "yLocal": 0.5
        },
        {
          "id": "ventilation",
          "label": "Ventilation",
          "type": "metric",
          "icon": "assets/icons/shape-fill-crops/poster-template-slide-01-shape-visible-17.png",
          "body": "Ventilation describes the exchange of indoor and outdoor air. Key influences include window opening, mechanical ventilation, airtightness, kitchen extractors and outdoor air conditions. For example, after frying food in a small kitchen, good extraction can clear particles and moisture instead of leaving smells and condensation overnight.",
          "group": "metrics",
          "order": 3,
          "xLocal": 0.5,
          "yLocal": 0.5
        },
        {
          "id": "heating-system",
          "label": "Heating System",
          "type": "metric",
          "icon": "assets/icons/shape-fill-crops/poster-template-slide-01-shape-visible-19.png",
          "body": "Heating system describes how indoor warmth is produced and controlled. Key influences include boiler type, heat pumps, radiators, controls, energy price and household ability to pay. For example, during a UK cold spell, a home with poor controls may heat the living room but leave bedrooms uncomfortably cold.",
          "group": "metrics",
          "order": 4,
          "xLocal": 0.5,
          "yLocal": 0.5
        },
        {
          "id": "windows",
          "label": "Windows",
          "type": "metric",
          "icon": "assets/icons/shape-fill-crops/poster-template-slide-01-shape-visible-03.png",
          "body": "Windows mediate daylight, views, ventilation and solar heat gain. Key influences include size, glazing, orientation, shading and whether windows can safely open. For example, a south-facing bedroom may feel bright in winter but overheat in a summer heatwave without shading.",
          "group": "metrics",
          "order": 5,
          "xLocal": 0.5,
          "yLocal": 0.5
        },
        {
          "id": "floor-level",
          "label": "Floor Level",
          "type": "metric",
          "icon": "assets/icons/shape-fill-crops/viva-slide-11-shape-visible-04.png",
          "body": "Floor level describes a dwelling's vertical position within a building. Key influences include height above traffic, surrounding buildings, lift access, wind, sunlight and noise sources. For example, a ground-floor flat beside a busy road may hear buses at night, while an upper-floor flat may receive stronger sun exposure.",
          "group": "metrics",
          "order": 6,
          "xLocal": 0.5,
          "yLocal": 0.5
        },
        {
          "id": "kitchen-facilities",
          "label": "Kitchen Facilities",
          "type": "metric",
          "icon": "assets/icons/shape-fill-crops/poster-template-slide-01-shape-visible-19.png",
          "body": "Kitchen facilities describe the space, equipment and ventilation that support food preparation. Key influences include room size, extractor fans, fuel type, storage and household resources. For example, a small kitchen without extraction may make regular cooking hotter and smokier.",
          "group": "metrics",
          "order": 7,
          "xLocal": 0.5,
          "yLocal": 0.5
        },
        {
          "id": "thermal-exposure",
          "label": "Thermal Exposure",
          "type": "exposure",
          "icon": "assets/icons/shape-fill-crops/poster-template-slide-01-shape-visible-19.png",
          "body": "Thermal exposure describes heat, cold, damp or thermal discomfort experienced by people. Key influences include insulation, heating, ventilation, windows, shading and weather. For example, a child doing homework in an overheated attic room may feel tired and unable to concentrate during a summer evening.",
          "group": "exposure",
          "order": 1,
          "xLocal": 0.5,
          "yLocal": 0.5
        },
        {
          "id": "air-quality",
          "label": "Air Quality",
          "type": "exposure",
          "icon": "assets/icons/shape-fill-crops/poster-template-slide-01-shape-visible-17.png",
          "body": "Air quality describes the cleanliness of the air people breathe. Key influences include ventilation, cooking, heating, damp, mould, cleaning products and outdoor pollution entering the building. For example, drying clothes indoors without ventilation can increase humidity and mould risk, which may worsen breathing symptoms.",
          "group": "exposure",
          "order": 2,
          "xLocal": 0.5,
          "yLocal": 0.5
        },
        {
          "id": "light-visual",
          "label": "Daylight / Views",
          "type": "exposure",
          "icon": "assets/icons/shape-fill-crops/poster-template-slide-01-shape-visible-03.png",
          "body": "Daylight / views captures visual exposure through light, sky view and outward views. Key influences include window size, orientation, nearby buildings, shading and view quality. For example, a flat facing a blank wall may receive little daylight, while a room facing a tree-lined street may feel brighter and calmer.",
          "group": "exposure",
          "order": 3,
          "xLocal": 0.5,
          "yLocal": 0.5
        },
        {
          "id": "noise-reduction",
          "label": "Noise Reduction",
          "type": "exposure",
          "icon": "assets/icons/shape-fill-crops/poster-template-slide-01-shape-visible-18.png",
          "body": "Noise reduction captures how much unwanted sound is reduced before reaching people. Key influences include fa?ade insulation, window quality, floor level, road distance and building layout. For example, double-glazed windows can make a bedroom quieter even when buses pass outside late at night.",
          "group": "exposure",
          "order": 4,
          "xLocal": 0.5,
          "yLocal": 0.5
        },
        {
          "id": "sleep",
          "label": "Sleep",
          "type": "behaviour",
          "icon": "assets/icons/shape-fill-crops/poster-template-slide-01-shape-visible-20.png",
          "body": "Sleep captures sleep quality, timing and continuity. Key influences include night-time noise, indoor temperature, light, air quality, crowding and stress. For example, a bedroom that stays hot after sunset may lead to repeated waking, even if the person went to bed early.",
          "group": "behaviour",
          "order": 1,
          "xLocal": 0.5,
          "yLocal": 0.5
        },
        {
          "id": "restoration",
          "label": "Restorative Activity",
          "type": "behaviour",
          "icon": "assets/icons/shape-fill-crops/poster-template-slide-01-shape-visible-15.png",
          "body": "Restorative activity captures opportunities for attention recovery and stress reduction. Key influences include quietness, daylight, views, privacy, clutter, crowding and access to calm spaces. For example, sitting by a window with a small garden view can provide a short mental break during a work-from-home day.",
          "group": "behaviour",
          "order": 2,
          "xLocal": 0.5,
          "yLocal": 0.5
        },
        {
          "id": "diet-food",
          "label": "Dietary Exposure",
          "type": "exposure",
          "icon": "assets/icons/shape-fill-crops/poster-template-slide-01-shape-visible-09.png",
          "body": "Dietary exposure captures the food options people can obtain, prepare and repeatedly consume. Key influences include food access, kitchen conditions, storage, affordability and household time. For example, a household with a usable kitchen and nearby fresh food shop may cook vegetables more often than one relying on packaged meals.",
          "group": "exposure",
          "order": 5,
          "xLocal": 0.5,
          "yLocal": 0.5
        },
        {
          "id": "cooking",
          "label": "Cooking",
          "type": "behaviour",
          "icon": "assets/icons/shape-fill-crops/poster-template-slide-01-shape-visible-19.png",
          "body": "Cooking captures everyday food preparation behaviour inside the home. Key influences include kitchen space, ventilation, fuel type, time, household skills and food availability. For example, cooking with a gas hob in a poorly ventilated kitchen can add heat and nitrogen dioxide while dinner is being prepared.",
          "group": "behaviour",
          "order": 3,
          "xLocal": 0.5,
          "yLocal": 0.5
        },
        {
          "id": "cardiovascular",
          "label": "Cardiovascular",
          "type": "health",
          "icon": "assets/icons/shape-fill-crops/poster-template-slide-01-shape-visible-10.png",
          "body": "Cardiovascular health refers to the heart and blood vessels. Key influences include heat, cold, air pollution, noise, sleep, diet and stress. For example, repeated exposure to cold indoor temperatures can raise blood pressure, especially for older adults or people with existing heart disease.",
          "group": "health",
          "order": 1,
          "xLocal": 0.5,
          "yLocal": 0.5
        },
        {
          "id": "respiratory",
          "label": "Respiratory",
          "type": "health",
          "icon": "assets/icons/shape-fill-crops/poster-template-slide-01-shape-visible-11.png",
          "body": "Respiratory health refers to lungs and breathing. Key influences include indoor air pollution, damp, mould, ventilation, heat and outdoor pollution entering the home. For example, mould around a window frame can trigger asthma symptoms or coughing in a child who sleeps in that room.",
          "group": "health",
          "order": 2,
          "xLocal": 0.5,
          "yLocal": 0.5
        },
        {
          "id": "mental-health",
          "label": "Mental Health",
          "type": "health",
          "icon": "assets/icons/shape-fill-crops/poster-template-slide-01-shape-visible-15.png",
          "body": "Mental health refers to emotional wellbeing and risk of mental illness. Key influences include stress, sleep, crowding, noise, safety, daylight and restorative opportunities. For example, persistent noise and poor sleep in a cramped flat can contribute to anxiety, irritability or depressive symptoms.",
          "group": "health",
          "order": 3,
          "xLocal": 0.5,
          "yLocal": 0.5
        },
        {
          "id": "metabolic",
          "label": "Metabolic",
          "type": "health",
          "icon": "assets/icons/shape-fill-crops/poster-template-slide-01-shape-visible-09.png",
          "body": "Metabolic health refers to regulation of weight, blood sugar and energy. Key influences include sleep, diet, physical activity, stress and household routines. For example, poor sleep in an overheated bedroom may make appetite and blood sugar control harder the next day.",
          "group": "health",
          "order": 4,
          "xLocal": 0.5,
          "yLocal": 0.5
        },
        {
          "id": "perinatal",
          "label": "Perinatal",
          "type": "health",
          "icon": "assets/icons/shape-fill-crops/poster-template-slide-01-shape-visible-08.png",
          "body": "Perinatal health refers to health around pregnancy and birth. Key influences include heat, air pollution, housing quality, stress and access to support. For example, a pregnant person living in a very hot flat during a heatwave may face higher strain, which is relevant to risks such as preterm birth.",
          "group": "health",
          "order": 5,
          "xLocal": 0.5,
          "yLocal": 0.5
        },
        {
          "id": "mortality",
          "label": "Mortality",
          "type": "health",
          "icon": "assets/icons/shape-fill-crops/poster-template-slide-01-shape-visible-14.png",
          "body": "Mortality refers to risk of death, especially early or preventable death. Key influences include severe heat, cold, pollution, unsafe housing, chronic stress and existing illness. For example, during extreme cold, poorly heated homes can increase risk for frail older people with heart or respiratory disease.",
          "group": "health",
          "order": 6,
          "xLocal": 0.5,
          "yLocal": 0.5
        }
      ],
      "edges": [
        {
          "id": "building-to-building-age",
          "source": "building",
          "target": "building-age",
          "type": "main",
          "label": "Building -> Building Age",
          "body": "Building age affects insulation, damp risk and retrofit potential.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "building-to-energy-performance",
          "source": "building",
          "target": "energy-performance",
          "type": "main",
          "label": "Building -> Energy Performance",
          "body": "Fabric and energy performance shape heat loss, overheating and ventilation trade-offs.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "building-to-ventilation",
          "source": "building",
          "target": "ventilation",
          "type": "main",
          "label": "Building -> Ventilation",
          "body": "Ventilation is the building interface for indoor air exchange.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "building-to-heating-system",
          "source": "building",
          "target": "heating-system",
          "type": "main",
          "label": "Building -> Heating System",
          "body": "Heating systems affect indoor warmth, fuel use and thermal comfort.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "building-to-windows",
          "source": "building",
          "target": "windows",
          "type": "main",
          "label": "Building -> Windows",
          "body": "Windows mediate daylight, ventilation, heat gain or loss and views.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "building-to-floor-level",
          "source": "building",
          "target": "floor-level",
          "type": "main",
          "label": "Building -> Floor Level",
          "body": "Floor level can alter noise, airflow, heat and view exposure.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "building-age-to-thermal-exposure",
          "source": "building-age",
          "target": "thermal-exposure",
          "type": "exposure",
          "label": "Building Age -> Thermal Exposure",
          "body": "Older or poorly maintained homes may be colder, damp or more prone to overheating.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "energy-performance-to-thermal-exposure",
          "source": "energy-performance",
          "target": "thermal-exposure",
          "type": "exposure",
          "label": "Energy Performance -> Thermal Exposure",
          "body": "Fabric performance changes cold, heat and thermal comfort.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "energy-performance-to-air-quality",
          "source": "energy-performance",
          "target": "air-quality",
          "type": "exposure",
          "label": "Energy Performance -> Air Quality",
          "body": "Airtightness and material condition can interact with ventilation and indoor pollutants.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "ventilation-to-air-quality",
          "source": "ventilation",
          "target": "air-quality",
          "type": "exposure",
          "label": "Ventilation -> Air Quality",
          "body": "Air exchange affects indoor pollutant concentration.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "ventilation-to-thermal-exposure",
          "source": "ventilation",
          "target": "thermal-exposure",
          "type": "exposure",
          "label": "Ventilation -> Thermal Exposure",
          "body": "Ventilation affects cooling, heat loss and thermal comfort.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "heating-system-to-thermal-exposure",
          "source": "heating-system",
          "target": "thermal-exposure",
          "type": "exposure",
          "label": "Heating System -> Thermal Exposure",
          "body": "Heating systems shape indoor warmth and thermal comfort.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "windows-to-light-visual",
          "source": "windows",
          "target": "light-visual",
          "type": "exposure",
          "label": "Windows -> Daylight / Views",
          "body": "Windows provide daylight and outward views.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "windows-to-thermal-exposure",
          "source": "windows",
          "target": "thermal-exposure",
          "type": "exposure",
          "label": "Windows -> Thermal Exposure",
          "body": "Windows mediate solar gain and heat loss.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "floor-level-to-noise-reduction",
          "source": "floor-level",
          "target": "noise-reduction",
          "type": "exposure",
          "label": "Floor Level -> Noise Reduction",
          "body": "Vertical position can change traffic or street noise exposure.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "thermal-exposure-to-sleep",
          "source": "thermal-exposure",
          "target": "sleep",
          "type": "crossLink",
          "label": "Thermal Exposure -> Sleep",
          "body": "Cold, heat or damp can disrupt sleep."
        },
        {
          "id": "air-quality-to-sleep",
          "source": "air-quality",
          "target": "sleep",
          "type": "crossLink",
          "label": "Air Quality -> Sleep",
          "body": "Poor air can affect sleep quality and nighttime comfort."
        },
        {
          "id": "light-visual-to-restoration",
          "source": "light-visual",
          "target": "restoration",
          "type": "crossLink",
          "label": "Daylight / Views -> Restorative Activity",
          "body": "Daylight and views can support psychological recovery."
        },
        {
          "id": "noise-reduction-to-sleep",
          "source": "noise-reduction",
          "target": "sleep",
          "type": "crossLink",
          "label": "Noise Reduction -> Sleep",
          "body": "Noise affects sleep and rest."
        },
        {
          "id": "cooking-to-diet-food",
          "source": "cooking",
          "target": "diet-food",
          "type": "crossLink",
          "label": "Cooking -> Dietary Exposure",
          "body": "Cooking can shape diet and food-related exposure."
        },
        {
          "id": "cooking-to-air-quality",
          "source": "cooking",
          "target": "air-quality",
          "type": "crossLink",
          "label": "Cooking -> Air Quality",
          "body": "Cooking can add particles, gases and odours indoors."
        },
        {
          "id": "cooking-to-thermal-exposure",
          "source": "cooking",
          "target": "thermal-exposure",
          "type": "crossLink",
          "label": "Cooking -> Thermal Exposure",
          "body": "Cooking can add indoor heat."
        },
        {
          "id": "thermal-exposure-to-cardiovascular",
          "source": "thermal-exposure",
          "target": "cardiovascular",
          "type": "main",
          "label": "Thermal Exposure -> Cardiovascular",
          "body": "Thermal stress can add cardiovascular burden.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "thermal-exposure-to-mental-health",
          "source": "thermal-exposure",
          "target": "mental-health",
          "type": "main",
          "label": "Thermal Exposure -> Mental Health",
          "body": "Thermal discomfort can affect stress and wellbeing.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "thermal-exposure-to-respiratory",
          "source": "thermal-exposure",
          "target": "respiratory",
          "type": "main",
          "label": "Thermal Exposure -> Respiratory",
          "body": "Heat, cold and damp can interact with respiratory vulnerability.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "thermal-exposure-to-perinatal",
          "source": "thermal-exposure",
          "target": "perinatal",
          "type": "main",
          "label": "Thermal Exposure -> Perinatal",
          "body": "Thermal stress can matter for pregnancy-related vulnerability.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "thermal-exposure-to-mortality",
          "source": "thermal-exposure",
          "target": "mortality",
          "type": "main",
          "label": "Thermal Exposure -> Mortality",
          "body": "Extreme heat or cold can contribute to mortality risk.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "air-quality-to-respiratory",
          "source": "air-quality",
          "target": "respiratory",
          "type": "main",
          "label": "Air Quality -> Respiratory",
          "body": "Air quality is directly relevant to respiratory health.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "air-quality-to-cardiovascular",
          "source": "air-quality",
          "target": "cardiovascular",
          "type": "main",
          "label": "Air Quality -> Cardiovascular",
          "body": "Air pollution also matters for cardiovascular pathways.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "air-quality-to-perinatal",
          "source": "air-quality",
          "target": "perinatal",
          "type": "main",
          "label": "Air Quality -> Perinatal",
          "body": "Air pollution exposure can matter for pregnancy outcomes.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "air-quality-to-mortality",
          "source": "air-quality",
          "target": "mortality",
          "type": "main",
          "label": "Air Quality -> Mortality",
          "body": "Air pollution is linked to mortality risk.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "noise-reduction-to-mental-health",
          "source": "noise-reduction",
          "target": "mental-health",
          "type": "main",
          "label": "Noise Reduction -> Mental Health",
          "body": "Noise affects sleep, stress and mental health.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "noise-reduction-to-cardiovascular",
          "source": "noise-reduction",
          "target": "cardiovascular",
          "type": "main",
          "label": "Noise Reduction -> Cardiovascular",
          "body": "Noise-related stress may matter for cardiovascular health.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "noise-reduction-to-mortality",
          "source": "noise-reduction",
          "target": "mortality",
          "type": "main",
          "label": "Noise Reduction -> Mortality",
          "body": "Chronic noise can contribute to longer-term mortality risk.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "diet-food-to-metabolic",
          "source": "diet-food",
          "target": "metabolic",
          "type": "main",
          "label": "Dietary Exposure -> Metabolic",
          "body": "Dietary exposure can affect metabolic health.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "diet-food-to-cardiovascular",
          "source": "diet-food",
          "target": "cardiovascular",
          "type": "main",
          "label": "Dietary Exposure -> Cardiovascular",
          "body": "Dietary exposure can influence cardiovascular risk.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "diet-food-to-mortality",
          "source": "diet-food",
          "target": "mortality",
          "type": "main",
          "label": "Dietary Exposure -> Mortality",
          "body": "Poor diet-related exposure can contribute to mortality risk.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "sleep-to-mental-health",
          "source": "sleep",
          "target": "mental-health",
          "type": "main",
          "label": "Sleep -> Mental Health",
          "body": "Sleep disruption can affect mental health.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "sleep-to-cardiovascular",
          "source": "sleep",
          "target": "cardiovascular",
          "type": "main",
          "label": "Sleep -> Cardiovascular",
          "body": "Sleep disruption can accumulate into cardiovascular burden.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "sleep-to-metabolic",
          "source": "sleep",
          "target": "metabolic",
          "type": "main",
          "label": "Sleep -> Metabolic",
          "body": "Sleep quality can affect metabolic regulation.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "sleep-to-mortality",
          "source": "sleep",
          "target": "mortality",
          "type": "main",
          "label": "Sleep -> Mortality",
          "body": "Persistent sleep disruption can relate to long-term mortality risk.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "restoration-to-mental-health",
          "source": "restoration",
          "target": "mental-health",
          "type": "main",
          "label": "Restorative Activity -> Mental Health",
          "body": "Restorative conditions can support mental health.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "restoration-to-cardiovascular",
          "source": "restoration",
          "target": "cardiovascular",
          "type": "main",
          "label": "Restorative Activity -> Cardiovascular",
          "body": "Stress recovery may indirectly support cardiovascular health.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "building-to-kitchen-facilities",
          "source": "building",
          "target": "kitchen-facilities",
          "type": "main",
          "label": "Building -> Kitchen Facilities",
          "body": "Kitchen facilities are part of the building setting that shapes cooking-related behaviour and indoor sources.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "kitchen-facilities-to-cooking",
          "source": "kitchen-facilities",
          "target": "cooking",
          "type": "behaviour",
          "label": "Kitchen Facilities -> Cooking",
          "body": "Kitchen layout, ventilation and equipment affect whether cooking is practical and how much heat or indoor pollution it creates.",
          "sourcePort": "bottom",
          "targetPort": "top"
        }
      ],
      "groups": [
        {
          "id": "factor",
          "label": "Factor / category",
          "row": 1,
          "lane": "full",
          "minHeight": 170,
          "order": 1
        },
        {
          "id": "metrics",
          "label": "Specific metrics",
          "row": 2,
          "lane": "full",
          "minHeight": 260,
          "order": 2
        },
        {
          "id": "exposure",
          "label": "Exposure pathways",
          "row": 3,
          "lane": "left",
          "minHeight": 260,
          "order": 3
        },
        {
          "id": "behaviour",
          "label": "Behaviour pathways",
          "row": 3,
          "lane": "right",
          "minHeight": 260,
          "order": 3
        },
        {
          "id": "health",
          "label": "Health outcomes",
          "row": 4,
          "lane": "full",
          "minHeight": 260,
          "order": 4
        }
      ],
      "layout": {
        "mode": "row-driven",
        "rowGap": 26,
        "paddingTop": 18,
        "paddingBottom": 28,
        "nodeHeight": 184,
        "nodeGap": 30
      }
    },
    {
      "id": "surroundings",
      "title": "Surroundings",
      "shortTitle": "Surround",
      "summary": "Urban surroundings describe the density, land use mix, height and enclosure around where people live, excluding greenness and transport routes.",
      "nodes": [
        {
          "id": "surroundings",
          "label": "Surroundings",
          "type": "scale",
          "icon": "assets/icons/shape-fill-crops/viva-slide-11-shape-visible-02.png",
          "body": "The surrounding urban area is the neighbourhood context around the home. Key influences include density, land uses, building height, enclosure, traffic context and food access. For example, the same apartment can feel healthier or more stressful depending on whether the surrounding block is shaded, noisy, walkable or food-poor.",
          "group": "factor",
          "order": 1,
          "xLocal": 0.5,
          "yLocal": 0.5
        },
        {
          "id": "urban-density",
          "label": "Urban Density",
          "type": "metric",
          "icon": "assets/icons/shape-fill-crops/viva-slide-11-shape-visible-04.png",
          "body": "Urban density describes the concentration of buildings, population and activity in an area. Key influences include planning rules, building form, land values and transport access. For example, a dense London neighbourhood may put shops close by, but if streets are narrow and treeless it may also feel hotter in summer.",
          "group": "metrics",
          "order": 1,
          "xLocal": 0.5,
          "yLocal": 0.5
        },
        {
          "id": "land-use-mix",
          "label": "Land Use Mix",
          "type": "metric",
          "icon": "assets/icons/shape-fill-crops/viva-slide-11-shape-visible-04.png",
          "body": "The variety of nearby functions such as homes, shops, schools and workplaces. Key influences include zoning, local economy, street layout and public services. For example, having a pharmacy, grocery shop and bus stop near home can reduce the need for long car trips.",
          "group": "metrics",
          "order": 2,
          "xLocal": 0.5,
          "yLocal": 0.5
        },
        {
          "id": "urban-height",
          "label": "Urban Height",
          "type": "metric",
          "icon": "assets/icons/shape-fill-crops/viva-slide-11-shape-visible-01.png",
          "body": "Urban height describes the vertical scale of surrounding buildings. Key influences include planning policy, development pressure, street width and building design. For example, in Singapore, taller blocks can shade open spaces at midday, but they may also reduce sky view and change wind flow.",
          "group": "metrics",
          "order": 3,
          "xLocal": 0.5,
          "yLocal": 0.5
        },
        {
          "id": "urban-enclosure",
          "label": "Urban Enclosure",
          "type": "metric",
          "icon": "assets/icons/shape-fill-crops/viva-slide-11-shape-visible-01.png",
          "body": "Urban enclosure describes how surrounding buildings shape the openness or enclosure of a street or courtyard. Key influences include building height, street width, setbacks and open space. For example, a narrow street with tall buildings may feel cooler at noon but trap traffic noise during the evening rush.",
          "group": "metrics",
          "order": 4,
          "xLocal": 0.5,
          "yLocal": 0.5
        },
        {
          "id": "thermal-exposure",
          "label": "Thermal Exposure",
          "type": "exposure",
          "icon": "assets/icons/shape-fill-crops/poster-template-slide-01-shape-visible-19.png",
          "body": "Thermal exposure describes outdoor heat or cold experienced around the home. Key influences include density, shade, materials, wind, humidity and building enclosure. For example, a courtyard paved with dark surfaces can stay warm after sunset, making the walk home feel uncomfortable.",
          "group": "exposure",
          "order": 1,
          "xLocal": 0.5,
          "yLocal": 0.5
        },
        {
          "id": "heat-mitigation",
          "label": "Heat Mitigation",
          "type": "exposure",
          "icon": "assets/icons/shape-fill-crops/poster-template-slide-01-shape-visible-19.png",
          "body": "Heat mitigation describes environmental features that lower local heat stress. Key influences include trees, shade, airflow, surface colour, water and building geometry. For example, a shaded bus stop under street trees can feel noticeably cooler than a stop exposed beside a wide asphalt road.",
          "group": "exposure",
          "order": 2,
          "xLocal": 0.5,
          "yLocal": 0.5
        },
        {
          "id": "air-quality",
          "label": "Air Quality",
          "type": "exposure",
          "icon": "assets/icons/shape-fill-crops/poster-template-slide-01-shape-visible-17.png",
          "body": "Air quality describes the cleanliness of air in streets and spaces near home. Key influences include traffic, street canyons, wind, industrial sources and vegetation. For example, a home entrance opening onto a congested road may expose residents to exhaust before they even begin a journey.",
          "group": "exposure",
          "order": 3,
          "xLocal": 0.5,
          "yLocal": 0.5
        },
        {
          "id": "noise-reduction",
          "label": "Noise Reduction",
          "type": "exposure",
          "icon": "assets/icons/shape-fill-crops/poster-template-slide-01-shape-visible-18.png",
          "body": "Noise reduction describes the reduction of unwanted sound around residential areas. Key influences include traffic volume, street form, building buffers, surfaces and quiet courtyards. For example, a block with homes facing an inner courtyard may give residents a quieter side for rest than homes facing the main road.",
          "group": "exposure",
          "order": 4,
          "xLocal": 0.5,
          "yLocal": 0.5
        },
        {
          "id": "light-visual",
          "label": "Daylight / Views",
          "type": "exposure",
          "icon": "assets/icons/shape-fill-crops/poster-template-slide-01-shape-visible-03.png",
          "body": "Daylight / views describes daylight, sky view and visual quality around the home. Key influences include building height, spacing, orientation, street trees and open space. For example, a narrow lane between tall buildings may feel dim at lunchtime, while a small open square can provide sky and daylight.",
          "group": "exposure",
          "order": 5,
          "xLocal": 0.5,
          "yLocal": 0.5
        },
        {
          "id": "sleep",
          "label": "Sleep",
          "type": "behaviour",
          "icon": "assets/icons/shape-fill-crops/poster-template-slide-01-shape-visible-20.png",
          "body": "Sleep in this pathway refers to rest shaped by the surrounding environment, not only the bedroom. Key influences include night-time traffic, late-night activity, heat, safety and lighting. For example, bars closing late on a mixed-use street may disturb sleep for residents above the shops.",
          "group": "behaviour",
          "order": 1,
          "xLocal": 0.5,
          "yLocal": 0.5
        },
        {
          "id": "comfort-safety",
          "label": "Safety / Comfort",
          "type": "behaviour",
          "icon": "assets/icons/shape-fill-crops/poster-template-slide-01-shape-visible-12.png",
          "body": "Safety / comfort describes whether nearby spaces feel usable, safe and physically comfortable. Key influences include lighting, traffic speed, shade, seating, cleanliness, social activity and perceived crime. For example, a well-lit path through a housing estate may make an evening walk feel possible rather than risky.",
          "group": "behaviour",
          "order": 2,
          "xLocal": 0.5,
          "yLocal": 0.5
        },
        {
          "id": "food-environment",
          "label": "Food Environment",
          "type": "metric",
          "icon": "assets/icons/shape-fill-crops/poster-template-slide-01-shape-visible-09.png",
          "body": "Food environment describes the food options people encounter near home. Key influences include supermarket access, fresh food shops, takeaway density, prices and advertising. For example, a high street dominated by fried chicken shops and few grocers can make unhealthy food the easiest routine choice.",
          "group": "metrics",
          "order": 5,
          "xLocal": 0.5,
          "yLocal": 0.5
        },
        {
          "id": "dietary-exposure",
          "label": "Dietary Exposure",
          "type": "exposure",
          "icon": "assets/icons/shape-fill-crops/poster-template-slide-01-shape-visible-09.png",
          "body": "Dietary exposure describes repeated exposure to food choices in the local area. Key influences include food outlet mix, prices, advertising, opening hours and transport access. For example, passing several sweet drink promotions on the way from school to home can shape what children ask to buy.",
          "group": "exposure",
          "order": 6,
          "xLocal": 0.5,
          "yLocal": 0.5
        },
        {
          "id": "cooking-food-practices",
          "label": "Cooking",
          "type": "behaviour",
          "icon": "assets/icons/shape-fill-crops/poster-template-slide-01-shape-visible-19.png",
          "body": "Cooking describes how local context supports or discourages food preparation routines. Key influences include nearby food shops, prices, household time and cultural food options. For example, if fresh ingredients are available on the route home from work, cooking dinner may be easier than ordering takeaway.",
          "group": "behaviour",
          "order": 3,
          "xLocal": 0.5,
          "yLocal": 0.5
        },
        {
          "id": "social-cohesion",
          "label": "Social Behavior",
          "type": "behaviour",
          "icon": "assets/icons/shape-fill-crops/poster-template-slide-01-shape-visible-12.png",
          "body": "Social behavior describes everyday social contact and informal community support. Key influences include public spaces, benches, local shops, safety, events and housing turnover. For example, a small shaded plaza near homes can become a place where older residents chat and recognise neighbours.",
          "group": "behaviour",
          "order": 4,
          "xLocal": 0.5,
          "yLocal": 0.5
        },
        {
          "id": "cardiovascular",
          "label": "Cardiovascular",
          "type": "health",
          "icon": "assets/icons/shape-fill-crops/poster-template-slide-01-shape-visible-10.png",
          "body": "Cardiovascular health describes heart and blood-vessel health in relation to surrounding urban conditions. Key influences include heat, pollution, noise, sleep, diet and stress. For example, living beside a noisy arterial road may add stress and pollution exposure relevant to hypertension risk.",
          "group": "health",
          "order": 1,
          "xLocal": 0.5,
          "yLocal": 0.5
        },
        {
          "id": "respiratory",
          "label": "Respiratory",
          "type": "health",
          "icon": "assets/icons/shape-fill-crops/poster-template-slide-01-shape-visible-11.png",
          "body": "Respiratory health describes lung and breathing health in the local neighbourhood context. Key influences include traffic emissions, street ventilation, heat, pollen and housing damp. For example, children walking past congested roads each morning may experience more wheeze or asthma irritation.",
          "group": "health",
          "order": 2,
          "xLocal": 0.5,
          "yLocal": 0.5
        },
        {
          "id": "mental-health",
          "label": "Mental Health",
          "type": "health",
          "icon": "assets/icons/shape-fill-crops/poster-template-slide-01-shape-visible-15.png",
          "body": "Mental health describes mental wellbeing and risk of distress linked to everyday surroundings. Key influences include safety, noise, crowding, social contact, heat and access to calm places. For example, a hostile or poorly lit public realm can make people avoid going out, increasing isolation and stress.",
          "group": "health",
          "order": 3,
          "xLocal": 0.5,
          "yLocal": 0.5
        },
        {
          "id": "metabolic",
          "label": "Metabolic",
          "type": "health",
          "icon": "assets/icons/shape-fill-crops/poster-template-slide-01-shape-visible-09.png",
          "body": "Metabolic health describes weight, blood sugar and related metabolic regulation. Key influences include food environment, walkability, sleep and stress. For example, a neighbourhood with many cheap fast-food outlets and few walkable destinations can make healthy routines harder to maintain.",
          "group": "health",
          "order": 4,
          "xLocal": 0.5,
          "yLocal": 0.5
        },
        {
          "id": "perinatal",
          "label": "Perinatal",
          "type": "health",
          "icon": "assets/icons/shape-fill-crops/poster-template-slide-01-shape-visible-08.png",
          "body": "Perinatal health describes pregnancy and birth-related health outcomes in relation to local environments. Key influences include heat, air pollution, stress, food access and healthcare access. For example, during a hot summer, pregnant people in dense, low-shade areas may face greater heat strain.",
          "group": "health",
          "order": 5,
          "xLocal": 0.5,
          "yLocal": 0.5
        },
        {
          "id": "mortality",
          "label": "Mortality",
          "type": "health",
          "icon": "assets/icons/shape-fill-crops/poster-template-slide-01-shape-visible-14.png",
          "body": "Mortality describes severe long-term health risk linked to neighbourhood exposures. Key influences include heatwaves, air pollution, noise, social isolation and chronic disease vulnerability. For example, during extreme heat, older residents in treeless, dense blocks may face higher risk if they cannot cool down.",
          "group": "health",
          "order": 6,
          "xLocal": 0.5,
          "yLocal": 0.5
        }
      ],
      "edges": [
        {
          "id": "surroundings-to-urban-density",
          "source": "surroundings",
          "target": "urban-density",
          "type": "main",
          "label": "Surroundings -> Urban Density",
          "body": "Urban density describes how compact the surrounding urban context is.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "surroundings-to-land-use-mix",
          "source": "surroundings",
          "target": "land-use-mix",
          "type": "main",
          "label": "Surroundings -> Land Use Mix",
          "body": "Land use mix describes the diversity of nearby urban functions.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "surroundings-to-urban-height",
          "source": "surroundings",
          "target": "urban-height",
          "type": "main",
          "label": "Surroundings -> Urban Height",
          "body": "Urban height captures the vertical scale of surrounding built form.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "surroundings-to-urban-enclosure",
          "source": "surroundings",
          "target": "urban-enclosure",
          "type": "main",
          "label": "Surroundings -> Urban Enclosure",
          "body": "Urban enclosure captures openness, canyon conditions and sky visibility.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "surroundings-to-food-environment",
          "source": "surroundings",
          "target": "food-environment",
          "type": "main",
          "label": "Surroundings -> Food Environment",
          "body": "Food environment includes healthy food access, fast food outlets and food outlet density.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "urban-density-to-thermal-exposure",
          "source": "urban-density",
          "target": "thermal-exposure",
          "type": "exposure",
          "label": "Urban Density -> Thermal Exposure",
          "body": "Compact urban form can influence heat, wind and local thermal exposure.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "urban-density-to-air-quality",
          "source": "urban-density",
          "target": "air-quality",
          "type": "exposure",
          "label": "Urban Density -> Air Quality",
          "body": "Density can concentrate activity, emissions and ventilation constraints around homes.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "land-use-mix-to-social-cohesion",
          "source": "land-use-mix",
          "target": "social-cohesion",
          "type": "behaviour",
          "label": "Land Use Mix -> Social Behavior",
          "body": "Mixed everyday functions can create routine social contact.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "land-use-mix-to-comfort-safety",
          "source": "land-use-mix",
          "target": "comfort-safety",
          "type": "behaviour",
          "label": "Land Use Mix -> Safety / Comfort",
          "body": "Mixed uses can change perceived safety, activity and comfort at different times.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "urban-height-to-light-visual",
          "source": "urban-height",
          "target": "light-visual",
          "type": "exposure",
          "label": "Urban Height -> Daylight / Views",
          "body": "Building height can change daylight, views and sky exposure.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "urban-height-to-thermal-exposure",
          "source": "urban-height",
          "target": "thermal-exposure",
          "type": "exposure",
          "label": "Urban Height -> Thermal Exposure",
          "body": "Urban height can affect shade, wind and heat storage.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "urban-enclosure-to-heat-mitigation",
          "source": "urban-enclosure",
          "target": "heat-mitigation",
          "type": "exposure",
          "label": "Urban Enclosure -> Heat Mitigation",
          "body": "Enclosure changes shade, sky view and heat dissipation.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "urban-enclosure-to-noise-reduction",
          "source": "urban-enclosure",
          "target": "noise-reduction",
          "type": "exposure",
          "label": "Urban Enclosure -> Noise Reduction",
          "body": "Canyon conditions and enclosure can change how noise travels.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "food-environment-to-dietary-exposure",
          "source": "food-environment",
          "target": "dietary-exposure",
          "type": "exposure",
          "label": "Food Environment -> Dietary Exposure",
          "body": "Nearby food outlets shape healthy and unhealthy dietary exposure.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "food-environment-to-cooking-food-practices",
          "source": "food-environment",
          "target": "cooking-food-practices",
          "type": "behaviour",
          "label": "Food Environment -> Cooking",
          "body": "Nearby food access can affect cooking and food practices.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "thermal-exposure-to-sleep",
          "source": "thermal-exposure",
          "target": "sleep",
          "type": "crossLink",
          "label": "Thermal Exposure -> Sleep",
          "body": "Heat around the home can disrupt sleep."
        },
        {
          "id": "heat-mitigation-to-comfort-safety",
          "source": "heat-mitigation",
          "target": "comfort-safety",
          "type": "crossLink",
          "label": "Heat Mitigation -> Safety / Comfort",
          "body": "Cooler surroundings can make outdoor space feel usable."
        },
        {
          "id": "air-quality-to-comfort-safety",
          "source": "air-quality",
          "target": "comfort-safety",
          "type": "crossLink",
          "label": "Air Quality -> Safety / Comfort",
          "body": "Poor air can reduce willingness to spend time outside."
        },
        {
          "id": "noise-reduction-to-sleep",
          "source": "noise-reduction",
          "target": "sleep",
          "type": "crossLink",
          "label": "Noise Reduction -> Sleep",
          "body": "Noise can affect sleep and rest."
        },
        {
          "id": "comfort-safety-to-sleep",
          "source": "comfort-safety",
          "target": "sleep",
          "type": "crossLink",
          "label": "Safety / Comfort -> Sleep",
          "body": "Comfort and perceived safety can affect rest and sleep."
        },
        {
          "id": "thermal-exposure-to-cardiovascular",
          "source": "thermal-exposure",
          "target": "cardiovascular",
          "type": "main",
          "label": "Thermal Exposure -> Cardiovascular",
          "body": "Thermal stress can add cardiovascular burden.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "thermal-exposure-to-mental-health",
          "source": "thermal-exposure",
          "target": "mental-health",
          "type": "main",
          "label": "Thermal Exposure -> Mental Health",
          "body": "Thermal discomfort can affect stress and wellbeing.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "thermal-exposure-to-respiratory",
          "source": "thermal-exposure",
          "target": "respiratory",
          "type": "main",
          "label": "Thermal Exposure -> Respiratory",
          "body": "Heat, cold and damp can interact with respiratory vulnerability.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "thermal-exposure-to-perinatal",
          "source": "thermal-exposure",
          "target": "perinatal",
          "type": "main",
          "label": "Thermal Exposure -> Perinatal",
          "body": "Thermal stress can matter for pregnancy-related vulnerability.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "thermal-exposure-to-mortality",
          "source": "thermal-exposure",
          "target": "mortality",
          "type": "main",
          "label": "Thermal Exposure -> Mortality",
          "body": "Extreme heat or cold can contribute to mortality risk.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "heat-mitigation-to-cardiovascular",
          "source": "heat-mitigation",
          "target": "cardiovascular",
          "type": "main",
          "label": "Heat Mitigation -> Cardiovascular",
          "body": "Lower heat stress may reduce cardiovascular burden.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "heat-mitigation-to-mental-health",
          "source": "heat-mitigation",
          "target": "mental-health",
          "type": "main",
          "label": "Heat Mitigation -> Mental Health",
          "body": "Lower heat stress can support wellbeing.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "heat-mitigation-to-respiratory",
          "source": "heat-mitigation",
          "target": "respiratory",
          "type": "main",
          "label": "Heat Mitigation -> Respiratory",
          "body": "Heat mitigation can reduce heat-related respiratory stress.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "heat-mitigation-to-perinatal",
          "source": "heat-mitigation",
          "target": "perinatal",
          "type": "main",
          "label": "Heat Mitigation -> Perinatal",
          "body": "Lower heat stress can matter for pregnancy-related vulnerability.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "heat-mitigation-to-mortality",
          "source": "heat-mitigation",
          "target": "mortality",
          "type": "main",
          "label": "Heat Mitigation -> Mortality",
          "body": "Heat mitigation can reduce extreme-heat mortality risk.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "air-quality-to-respiratory",
          "source": "air-quality",
          "target": "respiratory",
          "type": "main",
          "label": "Air Quality -> Respiratory",
          "body": "Air quality is directly relevant to respiratory health.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "air-quality-to-cardiovascular",
          "source": "air-quality",
          "target": "cardiovascular",
          "type": "main",
          "label": "Air Quality -> Cardiovascular",
          "body": "Air pollution also matters for cardiovascular pathways.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "air-quality-to-perinatal",
          "source": "air-quality",
          "target": "perinatal",
          "type": "main",
          "label": "Air Quality -> Perinatal",
          "body": "Air pollution exposure can matter for pregnancy outcomes.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "air-quality-to-mortality",
          "source": "air-quality",
          "target": "mortality",
          "type": "main",
          "label": "Air Quality -> Mortality",
          "body": "Air pollution is linked to mortality risk.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "noise-reduction-to-mental-health",
          "source": "noise-reduction",
          "target": "mental-health",
          "type": "main",
          "label": "Noise Reduction -> Mental Health",
          "body": "Noise affects sleep, stress and mental health.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "noise-reduction-to-cardiovascular",
          "source": "noise-reduction",
          "target": "cardiovascular",
          "type": "main",
          "label": "Noise Reduction -> Cardiovascular",
          "body": "Noise-related stress may matter for cardiovascular health.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "noise-reduction-to-mortality",
          "source": "noise-reduction",
          "target": "mortality",
          "type": "main",
          "label": "Noise Reduction -> Mortality",
          "body": "Chronic noise can contribute to longer-term mortality risk.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "dietary-exposure-to-metabolic",
          "source": "dietary-exposure",
          "target": "metabolic",
          "type": "main",
          "label": "Dietary Exposure -> Metabolic",
          "body": "Dietary exposure can affect metabolic health.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "dietary-exposure-to-cardiovascular",
          "source": "dietary-exposure",
          "target": "cardiovascular",
          "type": "main",
          "label": "Dietary Exposure -> Cardiovascular",
          "body": "Dietary exposure can influence cardiovascular risk.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "dietary-exposure-to-mortality",
          "source": "dietary-exposure",
          "target": "mortality",
          "type": "main",
          "label": "Dietary Exposure -> Mortality",
          "body": "Poor diet-related exposure can contribute to mortality risk.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "sleep-to-mental-health",
          "source": "sleep",
          "target": "mental-health",
          "type": "main",
          "label": "Sleep -> Mental Health",
          "body": "Sleep disruption can affect mental health.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "sleep-to-cardiovascular",
          "source": "sleep",
          "target": "cardiovascular",
          "type": "main",
          "label": "Sleep -> Cardiovascular",
          "body": "Sleep disruption can accumulate into cardiovascular burden.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "sleep-to-metabolic",
          "source": "sleep",
          "target": "metabolic",
          "type": "main",
          "label": "Sleep -> Metabolic",
          "body": "Sleep quality can affect metabolic regulation.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "sleep-to-mortality",
          "source": "sleep",
          "target": "mortality",
          "type": "main",
          "label": "Sleep -> Mortality",
          "body": "Persistent sleep disruption can relate to long-term mortality risk.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "social-cohesion-to-mental-health",
          "source": "social-cohesion",
          "target": "mental-health",
          "type": "main",
          "label": "Social Behavior -> Mental Health",
          "body": "Social contact supports mental health.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "social-cohesion-to-mortality",
          "source": "social-cohesion",
          "target": "mortality",
          "type": "main",
          "label": "Social Behavior -> Mortality",
          "body": "Social isolation and social support can relate to mortality risk.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "light-visual-to-comfort-safety",
          "source": "light-visual",
          "target": "comfort-safety",
          "type": "crossLink",
          "label": "Daylight / Views -> Safety / Comfort",
          "body": "Daylight, sky view and visual quality can change whether nearby spaces feel comfortable and safe to use."
        },
        {
          "id": "cooking-food-practices-to-dietary-exposure",
          "source": "cooking-food-practices",
          "target": "dietary-exposure",
          "type": "crossLink",
          "label": "Cooking -> Dietary Exposure",
          "body": "Cooking and food practices shape what foods people repeatedly prepare, buy and consume."
        }
      ],
      "groups": [
        {
          "id": "factor",
          "label": "Factor / category",
          "row": 1,
          "lane": "full",
          "minHeight": 170,
          "order": 1
        },
        {
          "id": "metrics",
          "label": "Specific metrics",
          "row": 2,
          "lane": "full",
          "minHeight": 260,
          "order": 2
        },
        {
          "id": "exposure",
          "label": "Exposure pathways",
          "row": 3,
          "lane": "left",
          "minHeight": 260,
          "order": 3
        },
        {
          "id": "behaviour",
          "label": "Behaviour pathways",
          "row": 3,
          "lane": "right",
          "minHeight": 260,
          "order": 3
        },
        {
          "id": "health",
          "label": "Health outcomes",
          "row": 4,
          "lane": "full",
          "minHeight": 260,
          "order": 4
        }
      ],
      "layout": {
        "mode": "row-driven",
        "rowGap": 26,
        "paddingTop": 18,
        "paddingBottom": 28,
        "nodeHeight": 184,
        "nodeGap": 30
      }
    },
    {
      "id": "transportation",
      "title": "Transportation",
      "shortTitle": "Transport",
      "summary": "Daily movement environments connect street design, amenity access, physical activity, sleep and social contact.",
      "nodes": [
        {
          "id": "transportation",
          "label": "Transportation",
          "type": "scale",
          "icon": "assets/icons/shape-fill-crops/poster-template-slide-01-shape-visible-20.png",
          "body": "Transportation covers the routes and street systems people use for daily movement. Key influences include street connectivity, destinations, transit, traffic, shade, safety and comfort. For example, a school journey can be a healthy walk or a stressful car trip depending on crossings and traffic speed.",
          "group": "factor",
          "order": 1,
          "xLocal": 0.5,
          "yLocal": 0.5
        },
        {
          "id": "connectivity",
          "label": "Street Connectivity",
          "type": "metric",
          "icon": "assets/icons/shape-fill-crops/poster-template-slide-01-shape-visible-20.png",
          "body": "Street connectivity describes how well streets and paths connect to each other. Key influences include block size, junctions, barriers, crossings and cul-de-sacs. For example, a connected grid can let someone walk directly to a clinic, while a disconnected estate may force a long detour.",
          "group": "metrics",
          "order": 1,
          "xLocal": 0.5,
          "yLocal": 0.5
        },
        {
          "id": "walkability",
          "label": "Walkability",
          "type": "metric",
          "icon": "assets/icons/shape-fill-crops/poster-template-slide-01-shape-visible-20.png",
          "body": "Walkability describes how supportive an area is for walking. Key influences include pavements, crossings, traffic speed, lighting, shade and useful destinations. For example, a wide pavement with safe crossings can make walking to the supermarket realistic for a parent with a pram.",
          "group": "metrics",
          "order": 2,
          "xLocal": 0.5,
          "yLocal": 0.5
        },
        {
          "id": "amenity-accessibility",
          "label": "Amenity Access",
          "type": "metric",
          "icon": "assets/icons/shape-fill-crops/viva-slide-11-shape-visible-04.png",
          "body": "Amenity access describes how easily people can reach everyday services. Key influences include distance, transport options, opening hours, barriers and perceived safety. For example, a GP surgery within a short bus ride can change whether someone attends routine appointments.",
          "group": "metrics",
          "order": 3,
          "xLocal": 0.5,
          "yLocal": 0.5
        },
        {
          "id": "route-comfort",
          "label": "Route Comfort",
          "type": "metric",
          "icon": "assets/icons/shape-fill-crops/poster-template-slide-01-shape-visible-19.png",
          "body": "Route comfort describes how pleasant, safe and physically manageable a route feels while being used. Key influences include shade, noise, traffic, seating, lighting, pavement quality and crowding. For example, in Singapore, a covered walkway can make a short trip possible during heavy rain or intense sun.",
          "group": "metrics",
          "order": 4,
          "xLocal": 0.5,
          "yLocal": 0.5
        },
        {
          "id": "air-quality",
          "label": "Air Quality",
          "type": "exposure",
          "icon": "assets/icons/shape-fill-crops/poster-template-slide-01-shape-visible-17.png",
          "body": "Air quality describes the air people breathe during journeys. Key influences include traffic volume, vehicle type, street width, wind and route choice. For example, cycling behind diesel traffic on a narrow road can feel very different from using a parallel low-traffic street.",
          "group": "exposure",
          "order": 1,
          "xLocal": 0.5,
          "yLocal": 0.5
        },
        {
          "id": "noise-reduction",
          "label": "Noise Reduction",
          "type": "exposure",
          "icon": "assets/icons/shape-fill-crops/poster-template-slide-01-shape-visible-18.png",
          "body": "Noise reduction describes the reduction of unwanted sound along daily routes. Key influences include traffic speed, vehicle mix, road surface, buffers and route choice. For example, choosing a side street rather than a main road can make a walking commute less stressful and easier to talk during.",
          "group": "exposure",
          "order": 2,
          "xLocal": 0.5,
          "yLocal": 0.5
        },
        {
          "id": "heat-mitigation",
          "label": "Heat Mitigation",
          "type": "exposure",
          "icon": "assets/icons/shape-fill-crops/poster-template-slide-01-shape-visible-19.png",
          "body": "Heat mitigation describes the reduction of heat stress while people move through streets. Key influences include shade, trees, canopies, surface materials, wind and rest points. For example, a shaded walking route to a bus stop may prevent people from avoiding transit on hot afternoons.",
          "group": "exposure",
          "order": 3,
          "xLocal": 0.5,
          "yLocal": 0.5
        },
        {
          "id": "physical-activity",
          "label": "Physical Activity",
          "type": "behaviour",
          "icon": "assets/icons/shape-fill-crops/poster-template-slide-01-shape-visible-20.png",
          "body": "Physical activity includes walking, cycling, play and active travel. Key influences include route safety, destinations, traffic, shade, air quality and social norms. For example, protected cycle lanes can turn a short commute into regular moderate activity instead of sitting in traffic.",
          "group": "behaviour",
          "order": 1,
          "xLocal": 0.5,
          "yLocal": 0.5
        },
        {
          "id": "sleep",
          "label": "Sleep",
          "type": "behaviour",
          "icon": "assets/icons/shape-fill-crops/poster-template-slide-01-shape-visible-20.png",
          "body": "Sleep in this pathway refers to rest affected by movement systems and route environments. Key influences include night traffic, rail noise, delivery activity, vibration and late-night street lighting. For example, a flat above a road with overnight freight traffic may experience sleep disruption even if the bedroom is well designed.",
          "group": "behaviour",
          "order": 2,
          "xLocal": 0.5,
          "yLocal": 0.5
        },
        {
          "id": "social-cohesion",
          "label": "Social Behavior",
          "type": "behaviour",
          "icon": "assets/icons/shape-fill-crops/poster-template-slide-01-shape-visible-12.png",
          "body": "Social behavior describes social contact created through daily movement and shared destinations. Key influences include walkable streets, transit stops, shops, schools and safe public space. For example, parents meeting at the school gate can build weak ties that help neighbourhood support.",
          "group": "behaviour",
          "order": 3,
          "xLocal": 0.5,
          "yLocal": 0.5
        },
        {
          "id": "comfort-safety",
          "label": "Safety / Comfort",
          "type": "behaviour",
          "icon": "assets/icons/shape-fill-crops/poster-template-slide-01-shape-visible-12.png",
          "body": "Safety / comfort describes whether people feel safe and comfortable moving through streets. Key influences include crossings, traffic speed, lighting, pavement width, harassment risk and shade. For example, an underpass with poor lighting may cause people to avoid an otherwise direct route.",
          "group": "behaviour",
          "order": 4,
          "xLocal": 0.5,
          "yLocal": 0.5
        },
        {
          "id": "cardiovascular",
          "label": "Cardiovascular",
          "type": "health",
          "icon": "assets/icons/shape-fill-crops/poster-template-slide-01-shape-visible-10.png",
          "body": "Cardiovascular health describes heart and blood-vessel health linked to route environments. Key influences include physical activity, air pollution, heat, noise and stress. For example, regular brisk walking to transit can support heart health, while traffic pollution can push in the opposite direction.",
          "group": "health",
          "order": 1,
          "xLocal": 0.5,
          "yLocal": 0.5
        },
        {
          "id": "respiratory",
          "label": "Respiratory",
          "type": "health",
          "icon": "assets/icons/shape-fill-crops/poster-template-slide-01-shape-visible-11.png",
          "body": "Respiratory health describes breathing health during or because of travel exposure. Key influences include traffic pollution, route choice, ventilation corridors and exertion. For example, a person with asthma may avoid jogging beside a congested road because exhaust can trigger symptoms.",
          "group": "health",
          "order": 2,
          "xLocal": 0.5,
          "yLocal": 0.5
        },
        {
          "id": "mental-health",
          "label": "Mental Health",
          "type": "health",
          "icon": "assets/icons/shape-fill-crops/poster-template-slide-01-shape-visible-15.png",
          "body": "Mental health describes mental wellbeing linked to movement and access. Key influences include stress, safety, social contact, activity, noise and reliable access to services. For example, a safe walking route to a park can support mood, while a dangerous crossing can create daily anxiety.",
          "group": "health",
          "order": 3,
          "xLocal": 0.5,
          "yLocal": 0.5
        },
        {
          "id": "metabolic",
          "label": "Metabolic",
          "type": "health",
          "icon": "assets/icons/shape-fill-crops/poster-template-slide-01-shape-visible-09.png",
          "body": "Metabolic health describes weight and blood sugar regulation linked to mobility routines. Key influences include active travel, sedentary time, food access, sleep and stress. For example, replacing a short car journey with a daily walk to the train station can contribute to healthier glucose control.",
          "group": "health",
          "order": 4,
          "xLocal": 0.5,
          "yLocal": 0.5
        },
        {
          "id": "mortality",
          "label": "Mortality",
          "type": "health",
          "icon": "assets/icons/shape-fill-crops/poster-template-slide-01-shape-visible-14.png",
          "body": "Mortality describes serious long-term or fatal risk linked to transport environments. Key influences include crashes, air pollution, heat, inactivity and noise-related stress. For example, safer street design can reduce traffic deaths while also supporting walking and cycling.",
          "group": "health",
          "order": 5,
          "xLocal": 0.5,
          "yLocal": 0.5
        }
      ],
      "edges": [
        {
          "id": "transportation-to-connectivity",
          "source": "transportation",
          "target": "connectivity",
          "type": "main",
          "label": "Transportation -> Street Connectivity",
          "body": "Connectivity affects route choice, directness and ease of movement.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "transportation-to-walkability",
          "source": "transportation",
          "target": "walkability",
          "type": "main",
          "label": "Transportation -> Walkability",
          "body": "Walkability captures how supportive streets are for walking.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "transportation-to-amenity-accessibility",
          "source": "transportation",
          "target": "amenity-accessibility",
          "type": "main",
          "label": "Transportation -> Amenity Access",
          "body": "Access to everyday services creates reasons for walking and active travel.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "transportation-to-route-comfort",
          "source": "transportation",
          "target": "route-comfort",
          "type": "main",
          "label": "Transportation -> Route Comfort",
          "body": "People use routes that feel comfortable and safe.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "connectivity-to-physical-activity",
          "source": "connectivity",
          "target": "physical-activity",
          "type": "behaviour",
          "label": "Street Connectivity -> Physical Activity",
          "body": "Connected routes can support walking and active travel.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "walkability-to-physical-activity",
          "source": "walkability",
          "target": "physical-activity",
          "type": "behaviour",
          "label": "Walkability -> Physical Activity",
          "body": "Walkable streets support everyday movement.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "amenity-accessibility-to-physical-activity",
          "source": "amenity-accessibility",
          "target": "physical-activity",
          "type": "behaviour",
          "label": "Amenity Access -> Physical Activity",
          "body": "Useful everyday services encourage walking.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "amenity-accessibility-to-social-cohesion",
          "source": "amenity-accessibility",
          "target": "social-cohesion",
          "type": "behaviour",
          "label": "Amenity Access -> Social Behavior",
          "body": "Everyday services can create social contact opportunities.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "route-comfort-to-comfort-safety",
          "source": "route-comfort",
          "target": "comfort-safety",
          "type": "behaviour",
          "label": "Route Comfort -> Safety / Comfort",
          "body": "Comfort and perceived safety decide whether routes are used.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "route-comfort-to-heat-mitigation",
          "source": "route-comfort",
          "target": "heat-mitigation",
          "type": "exposure",
          "label": "Route Comfort -> Heat Mitigation",
          "body": "Shaded or cooler routes reduce heat barriers to movement.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "route-comfort-to-noise-reduction",
          "source": "route-comfort",
          "target": "noise-reduction",
          "type": "exposure",
          "label": "Route Comfort -> Noise Reduction",
          "body": "Quieter and buffered routes can reduce noise stress.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "heat-mitigation-to-physical-activity",
          "source": "heat-mitigation",
          "target": "physical-activity",
          "type": "crossLink",
          "label": "Heat Mitigation -> Physical Activity",
          "body": "Cooler routes can make walking more likely."
        },
        {
          "id": "air-quality-to-physical-activity",
          "source": "air-quality",
          "target": "physical-activity",
          "type": "crossLink",
          "label": "Air Quality -> Physical Activity",
          "body": "Poor air may discourage walking or outdoor travel."
        },
        {
          "id": "noise-reduction-to-comfort-safety",
          "source": "noise-reduction",
          "target": "comfort-safety",
          "type": "crossLink",
          "label": "Noise Reduction -> Safety / Comfort",
          "body": "Quieter routes can feel more comfortable."
        },
        {
          "id": "comfort-safety-to-physical-activity",
          "source": "comfort-safety",
          "target": "physical-activity",
          "type": "crossLink",
          "label": "Safety / Comfort -> Physical Activity",
          "body": "Feeling safe and comfortable supports walking."
        },
        {
          "id": "heat-mitigation-to-cardiovascular",
          "source": "heat-mitigation",
          "target": "cardiovascular",
          "type": "main",
          "label": "Heat Mitigation -> Cardiovascular",
          "body": "Lower heat stress may reduce cardiovascular burden.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "heat-mitigation-to-mental-health",
          "source": "heat-mitigation",
          "target": "mental-health",
          "type": "main",
          "label": "Heat Mitigation -> Mental Health",
          "body": "Lower heat stress can support wellbeing.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "heat-mitigation-to-respiratory",
          "source": "heat-mitigation",
          "target": "respiratory",
          "type": "main",
          "label": "Heat Mitigation -> Respiratory",
          "body": "Heat mitigation can reduce heat-related respiratory stress.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "heat-mitigation-to-mortality",
          "source": "heat-mitigation",
          "target": "mortality",
          "type": "main",
          "label": "Heat Mitigation -> Mortality",
          "body": "Heat mitigation can reduce extreme-heat mortality risk.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "air-quality-to-respiratory",
          "source": "air-quality",
          "target": "respiratory",
          "type": "main",
          "label": "Air Quality -> Respiratory",
          "body": "Air quality is directly relevant to respiratory health.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "air-quality-to-cardiovascular",
          "source": "air-quality",
          "target": "cardiovascular",
          "type": "main",
          "label": "Air Quality -> Cardiovascular",
          "body": "Air pollution also matters for cardiovascular pathways.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "air-quality-to-mortality",
          "source": "air-quality",
          "target": "mortality",
          "type": "main",
          "label": "Air Quality -> Mortality",
          "body": "Air pollution is linked to mortality risk.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "noise-reduction-to-mental-health",
          "source": "noise-reduction",
          "target": "mental-health",
          "type": "main",
          "label": "Noise Reduction -> Mental Health",
          "body": "Noise affects sleep, stress and mental health.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "noise-reduction-to-cardiovascular",
          "source": "noise-reduction",
          "target": "cardiovascular",
          "type": "main",
          "label": "Noise Reduction -> Cardiovascular",
          "body": "Noise-related stress may matter for cardiovascular health.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "noise-reduction-to-mortality",
          "source": "noise-reduction",
          "target": "mortality",
          "type": "main",
          "label": "Noise Reduction -> Mortality",
          "body": "Chronic noise can contribute to longer-term mortality risk.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "sleep-to-mental-health",
          "source": "sleep",
          "target": "mental-health",
          "type": "main",
          "label": "Sleep -> Mental Health",
          "body": "Sleep disruption can affect mental health.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "sleep-to-cardiovascular",
          "source": "sleep",
          "target": "cardiovascular",
          "type": "main",
          "label": "Sleep -> Cardiovascular",
          "body": "Sleep disruption can accumulate into cardiovascular burden.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "sleep-to-metabolic",
          "source": "sleep",
          "target": "metabolic",
          "type": "main",
          "label": "Sleep -> Metabolic",
          "body": "Sleep quality can affect metabolic regulation.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "sleep-to-mortality",
          "source": "sleep",
          "target": "mortality",
          "type": "main",
          "label": "Sleep -> Mortality",
          "body": "Persistent sleep disruption can relate to long-term mortality risk.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "physical-activity-to-cardiovascular",
          "source": "physical-activity",
          "target": "cardiovascular",
          "type": "main",
          "label": "Physical Activity -> Cardiovascular",
          "body": "Physical activity is relevant to cardiovascular health.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "physical-activity-to-metabolic",
          "source": "physical-activity",
          "target": "metabolic",
          "type": "main",
          "label": "Physical Activity -> Metabolic",
          "body": "Active travel and movement affect metabolic health.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "physical-activity-to-mental-health",
          "source": "physical-activity",
          "target": "mental-health",
          "type": "main",
          "label": "Physical Activity -> Mental Health",
          "body": "Movement can support mental health.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "physical-activity-to-mortality",
          "source": "physical-activity",
          "target": "mortality",
          "type": "main",
          "label": "Physical Activity -> Mortality",
          "body": "Activity can relate to mortality risk.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "social-cohesion-to-mental-health",
          "source": "social-cohesion",
          "target": "mental-health",
          "type": "main",
          "label": "Social Behavior -> Mental Health",
          "body": "Social contact supports mental health.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "social-cohesion-to-mortality",
          "source": "social-cohesion",
          "target": "mortality",
          "type": "main",
          "label": "Social Behavior -> Mortality",
          "body": "Social isolation and social support can relate to mortality risk.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "route-comfort-to-air-quality",
          "source": "route-comfort",
          "target": "air-quality",
          "type": "exposure",
          "label": "Route Comfort -> Air Quality",
          "body": "Route comfort includes traffic context and street conditions that can change air pollution exposure during travel.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "noise-reduction-to-sleep",
          "source": "noise-reduction",
          "target": "sleep",
          "type": "crossLink",
          "label": "Noise Reduction -> Sleep",
          "body": "Transport noise from roads, rail or night deliveries can disturb sleep beyond the route itself."
        }
      ],
      "groups": [
        {
          "id": "factor",
          "label": "Factor / category",
          "row": 1,
          "lane": "full",
          "minHeight": 170,
          "order": 1
        },
        {
          "id": "metrics",
          "label": "Specific metrics",
          "row": 2,
          "lane": "full",
          "minHeight": 260,
          "order": 2
        },
        {
          "id": "exposure",
          "label": "Exposure pathways",
          "row": 3,
          "lane": "left",
          "minHeight": 260,
          "order": 3
        },
        {
          "id": "behaviour",
          "label": "Behaviour pathways",
          "row": 3,
          "lane": "right",
          "minHeight": 260,
          "order": 3
        },
        {
          "id": "health",
          "label": "Health outcomes",
          "row": 4,
          "lane": "full",
          "minHeight": 260,
          "order": 4
        }
      ],
      "layout": {
        "mode": "row-driven",
        "rowGap": 26,
        "paddingTop": 18,
        "paddingBottom": 28,
        "nodeHeight": 184,
        "nodeGap": 30
      }
    },
    {
      "id": "green",
      "title": "Greenness",
      "shortTitle": "Green",
      "summary": "Greenness works through what people see, reach, use and experience, connecting exposure and behaviour pathways to health.",
      "nodes": [
        {
          "id": "greenness",
          "label": "Greenness",
          "type": "scale",
          "icon": "assets/icons/shape-fill-crops/poster-template-slide-01-shape-visible-03.png",
          "body": "Greenness refers to natural or vegetated environments that people see, access or use. Key influences include tree cover, parks, biodiversity, maintenance, safety and connection to daily routes. For example, a leafy route to a bus stop can bring greenery into ordinary travel, not just weekend recreation.",
          "group": "factor",
          "order": 1,
          "xLocal": 0.5,
          "yLocal": 0.5
        },
        {
          "id": "visual-greenness",
          "label": "Visual Greenness",
          "type": "metric",
          "icon": "assets/icons/shape-fill-crops/poster-template-slide-01-shape-visible-03.png",
          "body": "Visual greenness describes the greenery visible from streets, buildings and everyday routes. Key influences include street trees, gardens, parks, window views, building layout and season. For example, seeing mature trees from a hospital waiting room may feel calmer than looking onto a blank car park.",
          "group": "metrics",
          "order": 1,
          "xLocal": 0.5,
          "yLocal": 0.5
        },
        {
          "id": "access-proximity",
          "label": "Access / Proximity",
          "type": "metric",
          "icon": "assets/icons/shape-fill-crops/poster-template-slide-01-shape-visible-20.png",
          "body": "Access / proximity describes how close and reachable green spaces are. Key influences include distance, entrances, barriers, crossings, opening hours and perceived safety. For example, a small park five minutes away across safe crossings may be used more than a large park across a major road.",
          "group": "metrics",
          "order": 2,
          "xLocal": 0.5,
          "yLocal": 0.5
        },
        {
          "id": "experienced-green",
          "label": "Experienced Green",
          "type": "metric",
          "icon": "assets/icons/shape-fill-crops/poster-template-slide-01-shape-visible-03.png",
          "body": "Experienced green describes actual contact with green space, including time spent and perceived quality. Key influences include access, safety, amenities, shade, maintenance and personal routines. For example, a lunchtime walk in a nearby garden provides a different exposure than simply living near a park that feels unsafe.",
          "group": "metrics",
          "order": 3,
          "xLocal": 0.5,
          "yLocal": 0.5
        },
        {
          "id": "quality-diversity",
          "label": "Quality / Diversity",
          "type": "metric",
          "icon": "assets/icons/shape-fill-crops/poster-template-slide-01-shape-visible-13.png",
          "body": "Quality / diversity describes ecological quality and variety in green spaces. Key influences include species richness, habitat, maintenance, water, soil and management. For example, a biodiverse community garden with flowers and insects may offer richer contact than a fenced grass verge.",
          "group": "metrics",
          "order": 4,
          "xLocal": 0.5,
          "yLocal": 0.5
        },
        {
          "id": "remote-greenness",
          "label": "Satellite Greenness",
          "type": "metric",
          "icon": "assets/icons/shape-fill-crops/viva-slide-11-shape-visible-04.png",
          "body": "Satellite greenness describes vegetation measured from above using satellite or remote-sensing data. Key influences include canopy cover, vegetation density, season and image resolution. For example, NDVI may show a neighbourhood as green because of tree canopy, even if some residents cannot easily enter private gardens.",
          "group": "metrics",
          "order": 5,
          "xLocal": 0.5,
          "yLocal": 0.5
        },
        {
          "id": "air-quality",
          "label": "Air Quality",
          "type": "exposure",
          "icon": "assets/icons/shape-fill-crops/poster-template-slide-01-shape-visible-17.png",
          "body": "Air quality in greenness pathways describes how vegetation interacts with pollution exposure. Key influences include tree species, canopy, traffic, street shape and wind. For example, trees beside a road may help shade pedestrians, but poor street ventilation can still leave pollution trapped near traffic.",
          "group": "exposure",
          "order": 1,
          "xLocal": 0.5,
          "yLocal": 0.5
        },
        {
          "id": "noise-reduction",
          "label": "Noise Reduction",
          "type": "exposure",
          "icon": "assets/icons/shape-fill-crops/poster-template-slide-01-shape-visible-18.png",
          "body": "Noise reduction describes how green buffers or landscapes reduce perceived or measured sound. Key influences include vegetation depth, landform, distance from roads and background sounds. For example, a planted berm beside a rail line can make a park feel quieter even if trains are still audible.",
          "group": "exposure",
          "order": 2,
          "xLocal": 0.5,
          "yLocal": 0.5
        },
        {
          "id": "heat-mitigation",
          "label": "Heat Mitigation",
          "type": "exposure",
          "icon": "assets/icons/shape-fill-crops/poster-template-slide-01-shape-visible-19.png",
          "body": "Heat mitigation describes cooling produced by greenery. Key influences include canopy shade, evapotranspiration, soil moisture, park size and surrounding surfaces. For example, in Singapore, a tree-lined path can make outdoor movement more tolerable during humid afternoon heat.",
          "group": "exposure",
          "order": 3,
          "xLocal": 0.5,
          "yLocal": 0.5
        },
        {
          "id": "microbiome",
          "label": "Microbiome Diversity",
          "type": "exposure",
          "icon": "assets/icons/shape-fill-crops/poster-template-slide-01-shape-visible-13.png",
          "body": "Microbiome diversity describes exposure to diverse microorganisms from natural environments. Key influences include soil, plants, biodiversity, animals, maintenance and time outdoors. For example, children playing in a biodiverse garden may encounter more varied microbial exposure than children playing only on sealed surfaces.",
          "group": "exposure",
          "order": 4,
          "xLocal": 0.5,
          "yLocal": 0.5
        },
        {
          "id": "physical-activity",
          "label": "Physical Activity",
          "type": "behaviour",
          "icon": "assets/icons/shape-fill-crops/poster-template-slide-01-shape-visible-20.png",
          "body": "Physical activity describes movement supported by green environments. Key influences include park access, paths, shade, safety, facilities and perceived attractiveness. For example, a shaded loop path in a neighbourhood park can encourage older adults to walk regularly.",
          "group": "behaviour",
          "order": 1,
          "xLocal": 0.5,
          "yLocal": 0.5
        },
        {
          "id": "restoration",
          "label": "Restorative Activity",
          "type": "behaviour",
          "icon": "assets/icons/shape-fill-crops/poster-template-slide-01-shape-visible-15.png",
          "body": "Restorative activity describes psychological recovery supported by calming environments. Key influences include greenery, quietness, views, safety, biodiversity and time away from demands. For example, sitting under trees for ten minutes after work can help someone feel less mentally exhausted.",
          "group": "behaviour",
          "order": 2,
          "xLocal": 0.5,
          "yLocal": 0.5
        },
        {
          "id": "social-cohesion",
          "label": "Social Behavior",
          "type": "behaviour",
          "icon": "assets/icons/shape-fill-crops/poster-template-slide-01-shape-visible-12.png",
          "body": "Social behavior describes social contact and shared use of green spaces. Key influences include park design, seating, events, safety, inclusiveness and maintenance. For example, a community garden can help neighbours meet while watering plants or sharing produce.",
          "group": "behaviour",
          "order": 3,
          "xLocal": 0.5,
          "yLocal": 0.5
        },
        {
          "id": "mental-health",
          "label": "Mental Health",
          "type": "health",
          "icon": "assets/icons/shape-fill-crops/poster-template-slide-01-shape-visible-15.png",
          "body": "Mental health describes mental wellbeing and risk of distress in relation to green exposure. Key influences include restoration, social contact, activity, heat relief and perceived safety. For example, regular access to a calm green space may help reduce stress and support people with anxiety symptoms.",
          "group": "health",
          "order": 1,
          "xLocal": 0.5,
          "yLocal": 0.5
        },
        {
          "id": "cardiovascular",
          "label": "Cardiovascular",
          "type": "health",
          "icon": "assets/icons/shape-fill-crops/poster-template-slide-01-shape-visible-10.png",
          "body": "Cardiovascular health describes heart and blood-vessel health linked to green pathways. Key influences include physical activity, heat reduction, air quality, stress recovery and noise reduction. For example, walking in a shaded park can combine movement with lower heat stress, both relevant to blood pressure.",
          "group": "health",
          "order": 2,
          "xLocal": 0.5,
          "yLocal": 0.5
        },
        {
          "id": "respiratory",
          "label": "Respiratory",
          "type": "health",
          "icon": "assets/icons/shape-fill-crops/poster-template-slide-01-shape-visible-11.png",
          "body": "Respiratory health describes breathing health connected to green environments. Key influences include air pollution, pollen, microbial exposure, heat and vegetation type. For example, a person with hay fever may benefit from cleaner air in some green areas but react badly during high pollen seasons.",
          "group": "health",
          "order": 3,
          "xLocal": 0.5,
          "yLocal": 0.5
        },
        {
          "id": "perinatal",
          "label": "Perinatal",
          "type": "health",
          "icon": "assets/icons/shape-fill-crops/poster-template-slide-01-shape-visible-08.png",
          "body": "Perinatal health describes pregnancy and birth-related health linked to environmental conditions. Key influences include heat, air quality, stress, access to safe walking and neighbourhood resources. For example, shaded green routes may support gentle walking during pregnancy while reducing heat exposure.",
          "group": "health",
          "order": 4,
          "xLocal": 0.5,
          "yLocal": 0.5
        },
        {
          "id": "metabolic",
          "label": "Metabolic",
          "type": "health",
          "icon": "assets/icons/shape-fill-crops/poster-template-slide-01-shape-visible-09.png",
          "body": "Metabolic health describes weight and blood sugar regulation linked to green pathways. Key influences include physical activity, stress, sleep, diet-related routines and microbial exposure. For example, a nearby park can make evening walks part of a routine, supporting long-term metabolic health.",
          "group": "health",
          "order": 5,
          "xLocal": 0.5,
          "yLocal": 0.5
        },
        {
          "id": "mortality",
          "label": "Mortality",
          "type": "health",
          "icon": "assets/icons/shape-fill-crops/poster-template-slide-01-shape-visible-14.png",
          "body": "Mortality describes risk of early death linked to long-term or extreme environmental conditions. Key influences include heat, air pollution, physical inactivity, stress and chronic disease vulnerability. For example, neighbourhood tree canopy can reduce heat exposure during heatwaves, which matters most for older or medically vulnerable residents.",
          "group": "health",
          "order": 6,
          "xLocal": 0.5,
          "yLocal": 0.5
        }
      ],
      "edges": [
        {
          "id": "greenness-to-visual-greenness",
          "source": "greenness",
          "target": "visual-greenness",
          "type": "main",
          "label": "Greenness -> Visual Greenness",
          "body": "What people can see from streets, windows and daily routes.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "greenness-to-access-proximity",
          "source": "greenness",
          "target": "access-proximity",
          "type": "main",
          "label": "Greenness -> Access / Proximity",
          "body": "Whether green spaces are close and reachable.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "greenness-to-experienced-green",
          "source": "greenness",
          "target": "experienced-green",
          "type": "main",
          "label": "Greenness -> Experienced Green",
          "body": "Time spent in green space, perceived quality and actual use.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "greenness-to-quality-diversity",
          "source": "greenness",
          "target": "quality-diversity",
          "type": "main",
          "label": "Greenness -> Quality / Diversity",
          "body": "Biodiversity, species richness and ecological quality.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "greenness-to-remote-greenness",
          "source": "greenness",
          "target": "remote-greenness",
          "type": "main",
          "label": "Greenness -> Satellite Greenness",
          "body": "Satellite greenness provides background measurement context.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "visual-greenness-to-restoration",
          "source": "visual-greenness",
          "target": "restoration",
          "type": "behaviour",
          "label": "Visual Greenness -> Restorative Activity",
          "body": "Visible greenery can support attention and stress recovery.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "access-proximity-to-physical-activity",
          "source": "access-proximity",
          "target": "physical-activity",
          "type": "behaviour",
          "label": "Access / Proximity -> Physical Activity",
          "body": "Nearby green space can support walking and recreation.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "access-proximity-to-social-cohesion",
          "source": "access-proximity",
          "target": "social-cohesion",
          "type": "behaviour",
          "label": "Access / Proximity -> Social Behavior",
          "body": "Usable green space can support social contact.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "experienced-green-to-physical-activity",
          "source": "experienced-green",
          "target": "physical-activity",
          "type": "behaviour",
          "label": "Experienced Green -> Physical Activity",
          "body": "Actual use connects green space to movement.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "experienced-green-to-restoration",
          "source": "experienced-green",
          "target": "restoration",
          "type": "behaviour",
          "label": "Experienced Green -> Restorative Activity",
          "body": "Perceived quality supports restorative experience.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "experienced-green-to-social-cohesion",
          "source": "experienced-green",
          "target": "social-cohesion",
          "type": "behaviour",
          "label": "Experienced Green -> Social Behavior",
          "body": "Green use can support social interaction.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "quality-diversity-to-microbiome",
          "source": "quality-diversity",
          "target": "microbiome",
          "type": "exposure",
          "label": "Quality / Diversity -> Microbiome Diversity",
          "body": "Biodiverse vegetation can shape microbial exposure.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "quality-diversity-to-restoration",
          "source": "quality-diversity",
          "target": "restoration",
          "type": "behaviour",
          "label": "Quality / Diversity -> Restorative Activity",
          "body": "Richer green spaces may feel more restorative.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "remote-greenness-to-heat-mitigation",
          "source": "remote-greenness",
          "target": "heat-mitigation",
          "type": "exposure",
          "label": "Satellite Greenness -> Heat Mitigation",
          "body": "Canopy and vegetation can reduce heat stress.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "remote-greenness-to-air-quality",
          "source": "remote-greenness",
          "target": "air-quality",
          "type": "exposure",
          "label": "Satellite Greenness -> Air Quality",
          "body": "Vegetation can interact with pollutant exposure.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "remote-greenness-to-noise-reduction",
          "source": "remote-greenness",
          "target": "noise-reduction",
          "type": "exposure",
          "label": "Satellite Greenness -> Noise Reduction",
          "body": "Vegetation and green buffers can attenuate sound.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "heat-mitigation-to-cardiovascular",
          "source": "heat-mitigation",
          "target": "cardiovascular",
          "type": "main",
          "label": "Heat Mitigation -> Cardiovascular",
          "body": "Lower heat stress may reduce cardiovascular burden.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "heat-mitigation-to-mental-health",
          "source": "heat-mitigation",
          "target": "mental-health",
          "type": "main",
          "label": "Heat Mitigation -> Mental Health",
          "body": "Lower heat stress can support wellbeing.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "heat-mitigation-to-respiratory",
          "source": "heat-mitigation",
          "target": "respiratory",
          "type": "main",
          "label": "Heat Mitigation -> Respiratory",
          "body": "Heat mitigation can reduce heat-related respiratory stress.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "heat-mitigation-to-perinatal",
          "source": "heat-mitigation",
          "target": "perinatal",
          "type": "main",
          "label": "Heat Mitigation -> Perinatal",
          "body": "Lower heat stress can matter for pregnancy-related vulnerability.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "heat-mitigation-to-mortality",
          "source": "heat-mitigation",
          "target": "mortality",
          "type": "main",
          "label": "Heat Mitigation -> Mortality",
          "body": "Heat mitigation can reduce extreme-heat mortality risk.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "air-quality-to-respiratory",
          "source": "air-quality",
          "target": "respiratory",
          "type": "main",
          "label": "Air Quality -> Respiratory",
          "body": "Air quality is directly relevant to respiratory health.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "air-quality-to-cardiovascular",
          "source": "air-quality",
          "target": "cardiovascular",
          "type": "main",
          "label": "Air Quality -> Cardiovascular",
          "body": "Air pollution also matters for cardiovascular pathways.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "air-quality-to-perinatal",
          "source": "air-quality",
          "target": "perinatal",
          "type": "main",
          "label": "Air Quality -> Perinatal",
          "body": "Air pollution exposure can matter for pregnancy outcomes.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "air-quality-to-mortality",
          "source": "air-quality",
          "target": "mortality",
          "type": "main",
          "label": "Air Quality -> Mortality",
          "body": "Air pollution is linked to mortality risk.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "noise-reduction-to-mental-health",
          "source": "noise-reduction",
          "target": "mental-health",
          "type": "main",
          "label": "Noise Reduction -> Mental Health",
          "body": "Noise affects sleep, stress and mental health.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "noise-reduction-to-cardiovascular",
          "source": "noise-reduction",
          "target": "cardiovascular",
          "type": "main",
          "label": "Noise Reduction -> Cardiovascular",
          "body": "Noise-related stress may matter for cardiovascular health.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "noise-reduction-to-mortality",
          "source": "noise-reduction",
          "target": "mortality",
          "type": "main",
          "label": "Noise Reduction -> Mortality",
          "body": "Chronic noise can contribute to longer-term mortality risk.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "physical-activity-to-cardiovascular",
          "source": "physical-activity",
          "target": "cardiovascular",
          "type": "main",
          "label": "Physical Activity -> Cardiovascular",
          "body": "Physical activity is relevant to cardiovascular health.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "physical-activity-to-metabolic",
          "source": "physical-activity",
          "target": "metabolic",
          "type": "main",
          "label": "Physical Activity -> Metabolic",
          "body": "Active travel and movement affect metabolic health.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "physical-activity-to-mental-health",
          "source": "physical-activity",
          "target": "mental-health",
          "type": "main",
          "label": "Physical Activity -> Mental Health",
          "body": "Movement can support mental health.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "physical-activity-to-mortality",
          "source": "physical-activity",
          "target": "mortality",
          "type": "main",
          "label": "Physical Activity -> Mortality",
          "body": "Activity can relate to mortality risk.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "restoration-to-mental-health",
          "source": "restoration",
          "target": "mental-health",
          "type": "main",
          "label": "Restorative Activity -> Mental Health",
          "body": "Restorative conditions can support mental health.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "restoration-to-cardiovascular",
          "source": "restoration",
          "target": "cardiovascular",
          "type": "main",
          "label": "Restorative Activity -> Cardiovascular",
          "body": "Stress recovery may indirectly support cardiovascular health.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "social-cohesion-to-mental-health",
          "source": "social-cohesion",
          "target": "mental-health",
          "type": "main",
          "label": "Social Behavior -> Mental Health",
          "body": "Social contact supports mental health.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "social-cohesion-to-mortality",
          "source": "social-cohesion",
          "target": "mortality",
          "type": "main",
          "label": "Social Behavior -> Mortality",
          "body": "Social isolation and social support can relate to mortality risk.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "microbiome-to-respiratory",
          "source": "microbiome",
          "target": "respiratory",
          "type": "main",
          "label": "Microbiome Diversity -> Respiratory",
          "body": "Microbial exposure can relate to immune and respiratory pathways.",
          "sourcePort": "bottom",
          "targetPort": "top"
        },
        {
          "id": "microbiome-to-metabolic",
          "source": "microbiome",
          "target": "metabolic",
          "type": "main",
          "label": "Microbiome Diversity -> Metabolic",
          "body": "Microbial exposure may relate to metabolic pathways.",
          "sourcePort": "bottom",
          "targetPort": "top"
        }
      ],
      "groups": [
        {
          "id": "factor",
          "label": "Factor / category",
          "row": 1,
          "lane": "full",
          "minHeight": 170,
          "order": 1
        },
        {
          "id": "metrics",
          "label": "Specific metrics",
          "row": 2,
          "lane": "full",
          "minHeight": 260,
          "order": 2
        },
        {
          "id": "exposure",
          "label": "Exposure pathways",
          "row": 3,
          "lane": "left",
          "minHeight": 260,
          "order": 3
        },
        {
          "id": "behaviour",
          "label": "Behaviour pathways",
          "row": 3,
          "lane": "right",
          "minHeight": 260,
          "order": 3
        },
        {
          "id": "health",
          "label": "Health outcomes",
          "row": 4,
          "lane": "full",
          "minHeight": 260,
          "order": 4
        }
      ],
      "layout": {
        "mode": "row-driven",
        "rowGap": 26,
        "paddingTop": 18,
        "paddingBottom": 28,
        "nodeHeight": 184,
        "nodeGap": 30
      }
    }
  ]
};
