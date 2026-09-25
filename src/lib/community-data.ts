export interface Project {
  id: string;
  title: string;
  category: "Community" | "Infrastructure" | "Material Experiments" | "Objects" | "Art Archive";
  tagline: string;
  description: string;
  fullNarrative: string;
  location: string;
  year: string;
  divertedWeight: string;
  materials: string[];
  beneficiaries: string;
  image: string;
  specs: { label: string; value: string }[];
  processStages: string[];
  featured?: boolean;
}

export interface MaterialCategory {
  id: string;
  name: string;
  badge: string;
  summary: string;
  sources: string;
  characteristics: string[];
  civicApplications: string[];
  recoveryProtocol: string;
  divertedTonnage: string;
}

export interface WorkPhase {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  activities: string[];
}

export interface ImpactStory {
  quote: string;
  author: string;
  role: string;
  neighborhood: string;
  project: string;
}

export const impactStats = [
  { value: "48.5 t", label: "Material Diverted", detail: "Automotive, industrial & construction steel salvaged" },
  { value: "14", label: "Community Sites", detail: "Active civic pavilions, shade roofs & gathering spaces" },
  { value: "18,500+", label: "Daily Users", detail: "Residents sheltered, gathering and learning under canopy" },
  { value: "26", label: "Co-Design Labs", detail: "Participatory fabrication sessions with local neighborhoods" },
];

export const workPhases: WorkPhase[] = [
  {
    number: "01",
    title: "Material Sourcing & Diagnostic Grading",
    subtitle: "Diverting high-grade structural waste before crushing",
    description:
      "We partner with licensed automotive recycling centers in Mayapuri, heavy equipment depots, and urban construction yards to recover high-tensile steel, vehicle chassis rails, and stamped panels before they are downcycled.",
    activities: [
      "Ultrasonic weld integrity and tensile load assessment",
      "Decontamination and eco-friendly surface preparation",
      "Digital cataloging of dimensions, alloy grade, and provenance",
    ],
  },
  {
    number: "02",
    title: "Participatory Community Co-Design",
    subtitle: "Civic architecture shaped by actual neighborhood needs",
    description:
      "Infrastructure succeeds when residents own its creation. Our architects sit with local street vendor collectives, children's educators, and neighborhood councils to map shade deficits, monsoon drainage, and gathering habits.",
    activities: [
      "On-site thermal mapping and solar radiation analysis",
      "Participatory scale-model prototyping with residents",
      "Collaborative zoning for play, vending, and communal meetings",
    ],
  },
  {
    number: "03",
    title: "Modular Circular Fabrication",
    subtitle: "Precision engineering from non-standard scrap geometry",
    description:
      "In our Delhi yard, structural engineers and master fabricators develop demountable, modular joint connections. Rather than melting steel down at extreme carbon costs, we preserve the cold-formed strength of vehicle stampings.",
    activities: [
      "Interlocking modular roof trusses made of chassis framing",
      "Anti-corrosive mineral finishes and thermal reflective coats",
      "Disassembly-ready dry joint construction for long-term circularity",
    ],
  },
  {
    number: "04",
    title: "Community Handover & Stewardship",
    subtitle: "Long-term local stewardship and civic pride",
    description:
      "Every finished installation is handed over to a neighborhood stewardship committee trained in maintenance. Traceability plaques document every scrap component's previous life and carbon savings.",
    activities: [
      "Stewardship training for local youth and maintenance teams",
      "Open-source structural blueprints shared with the community",
      "Long-term thermal and community utility monitoring",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "automobile-scrap-roof",
    title: "Automobile-Scrap Community Roof & Gathering Pavilion",
    category: "Infrastructure",
    featured: true,
    tagline: "Repurposed vehicle chassis & stamped panels creating 2,400 sq.ft of climate-sheltered civic commons.",
    description:
      "Engineered from salvaged truck chassis rails and automotive body pressings, this central pavilion in Mayapuri provides natural thermal comfort, shade, and all-weather gathering for over 1,200 neighborhood residents daily.",
    fullNarrative:
      "Mayapuri houses one of Asia's densest automobile recycling districts, yet its workers and families had virtually zero shaded community gathering spaces. Punarjanam partnered with local scrap aggregators and resident leaders to intercept 42 vehicle chassis frames and 180 stamped steel panels slated for furnace melting. Through 3D truss modeling and natural convective venting, the pavilion reduces ambient midday radiant heat by 7.2°C beneath the canopy while capturing monsoon rainwater for community garden irrigation.",
    location: "Mayapuri Civic Hub, New Delhi",
    year: "2025",
    divertedWeight: "14.8 tonnes",
    materials: ["Truck chassis longitudinal rails", "Stamped vehicle bonnet pressings", "Tubular roll cages", "Recycled steel mesh"],
    beneficiaries: "1,200+ daily residents & craftspersons",
    image: "/images/automobile_scrap_roof.jpg",
    specs: [
      { label: "Canopy Area", value: "2,400 sq. ft (223 m²)" },
      { label: "Thermal Relief", value: "-7.2°C ambient reduction" },
      { label: "Structural Rating", value: "Wind resistance up to 145 km/h" },
      { label: "Carbon Diverted", value: "26.6 tonnes CO₂e avoided" },
    ],
    processStages: [
      "Sourced 42 chassis frames from Mayapuri vehicle dismantling yards",
      "Tested shear and tensile strength with Delhi structural engineers",
      "Co-designed modular shade lattice with neighborhood vendor collective",
      "Completed erection in 18 days with zero heavy crane machinery",
    ],
  },
  {
    id: "urban-shading-canopy",
    title: "Modular Urban Shading & Transit Network",
    category: "Infrastructure",
    featured: true,
    tagline: "Perforated scrap steel transit shelters combating the urban heat island effect across busy Delhi corridors.",
    description:
      "Transforming scrap industrial stamped plates and automotive frames into high-durability transit stops and pedestrian corridors that reduce solar radiation for commuters.",
    fullNarrative:
      "Extreme heat in Delhi turns roadside transit stops into sweltering health hazards for bus commuters, gig workers, and cyclists. Using high-tensile scrap truck rails and laser-stamped sheet offcuts, our team engineered modular shading canopies featuring patterned micro-perforations. The geometric perforations dissipate wind load while creating comfortable shaded microclimates with integrated seating and bicycle racks.",
    location: "Okhla Industrial Transit Corridor, New Delhi",
    year: "2025",
    divertedWeight: "8.4 tonnes",
    materials: ["Automotive structural box sections", "Perforated sheet steel scrap", "Reclaimed axle shafts"],
    beneficiaries: "4,500+ daily commuters",
    image: "/images/urban_shading_canopy.jpg",
    specs: [
      { label: "Module Length", value: "36 meters contiguous canopy" },
      { label: "Cooling Efficiency", value: "5.8°C surface temperature drop" },
      { label: "Disassembly", value: "100% bolted, zero destructive welding" },
      { label: "Corrosion Shield", value: "Zinc-rich natural mineral sealant" },
    ],
    processStages: [
      "Thermal infrared audits of bus stop waiting times and heat hotspots",
      "Parametric perforation layouts maximizing airflow and solar shading",
      "Modular off-site fabrication in 3-meter transportable sections",
      "Handed over to municipal ward and transit riders collective",
    ],
  },
  {
    id: "bawana-learning-pavilion",
    title: "Bawana Micro-Learning & Community Commons",
    category: "Community",
    featured: true,
    tagline: "Salvaged structural I-beams and roll bars built into an open-air after-school learning library.",
    description:
      "A light-filled community learning space created in collaboration with grassroots educators, using structural waste to build safe, dignified youth infrastructure.",
    fullNarrative:
      "In Bawana, access to dignified public community spaces is acutely limited. Working alongside local women's self-help groups and education fellows, Punarjanam co-designed a flexible open-air pavilion. Reclaimed steel columns support an angled clerestory roof that draws in northern daylight while blocking harsh south-western sun glare, providing a quiet sanctuary for after-school tutoring and adult literacy programs.",
    location: "Bawana Resettlement Colony, Delhi",
    year: "2024",
    divertedWeight: "11.2 tonnes",
    materials: ["Factory surplus I-beams", "Reclaimed vehicle tubular safety cages", "Reconditioned scaffold planks"],
    beneficiaries: "350+ children & community members weekly",
    image: "/images/community_collaboration.jpg",
    specs: [
      { label: "Floor Area", value: "1,600 sq. ft" },
      { label: "Daylighting", value: "100% passive northern orientation" },
      { label: "Rainwater Yield", value: "35,000 liters / monsoon season" },
      { label: "Community Builders", value: "14 local trainees certified" },
    ],
    processStages: [
      "Community survey with 80 neighborhood families on space needs",
      "Structural grading of factory steel surplus",
      "Participatory assembly workshop training 14 local welders",
      "Ongoing operation by Bawana Youth Learning Council",
    ],
  },
  {
    id: "material-testing-lab",
    title: "Material Experiments: Structural & Thermal Benchmarks",
    category: "Material Experiments",
    featured: false,
    tagline: "Rigorous empirical testing validating scrap automotive alloys for safe civic construction.",
    description:
      "Establishing open-source engineering standards for non-standard reclaimed steels, testing load capacities, deflection, and thermal conduction.",
    fullNarrative:
      "A primary barrier to scaling circular civic infrastructure is the lack of standardized certification for reclaimed metal. Punarjanam conducts laboratory stress-testing and thermal dissipation analysis on vehicle chassis beams and stamped body sections. This data allows structural engineers to specify salvaged steel with the same safety factors and reliability as virgin mill metal.",
    location: "Punarjanam Circular Engineering Yard, New Delhi",
    year: "2024–2025",
    divertedWeight: "3.2 tonnes",
    materials: ["Automotive stamping alloys", "High-strength low-alloy (HSLA) sheet scrap", "Extruded structural sections"],
    beneficiaries: "Architects, engineers, civic authorities",
    image: "/images/materials_recovery.jpg",
    specs: [
      { label: "Tensile Yield Verified", value: "310 - 450 MPa across samples" },
      { label: "Fatigue Life Cycles", value: "> 1,000,000 cycles tested" },
      { label: "Open Database", value: "62 material profiles documented" },
      { label: "Partner Institutions", value: "Structural design faculty & labs" },
    ],
    processStages: [
      "Sample extraction from 12 distinct automotive vehicle categories",
      "Ultrasonic thickness mapping and coupon tensile testing",
      "Thermal reflectance coating performance under Delhi peak summer sun",
      "Publishing open specification sheets for civic architecture",
    ],
  },
  {
    id: "civic-seating-hubs",
    title: "Indestructible Public Seating & Green Hubs",
    category: "Objects",
    featured: false,
    tagline: "Heavy-duty truck leaf springs and wheel drums repurposed into resilient public park infrastructure.",
    description:
      "Ergonomic urban furniture and integrated native planters designed to withstand extreme weathering while reclaiming high-carbon scrap components.",
    fullNarrative:
      "Public park furniture is frequently vandalized or deteriorates due to extreme heat and heavy monsoon rain. By utilizing heavy-duty tempered leaf springs from commercial vehicles as cantilevered seating supports, we created benches that naturally flex with human weight without warping or failing. Wheel drums serve as stable, durable urban tree planters.",
    location: "Civil Lines Public Parkways, New Delhi",
    year: "2024",
    divertedWeight: "6.4 tonnes",
    materials: ["Automotive leaf springs", "Brake drum castings", "Salvaged municipal timber offcuts"],
    beneficiaries: "800+ daily park visitors",
    image: "/images/automobile_scrap_roof.jpg",
    specs: [
      { label: "Units Installed", value: "48 bench & planter clusters" },
      { label: "Expected Lifespan", value: "40+ years maintenance-free" },
      { label: "Tamper Proof", value: "Internalized anti-theft anchoring" },
      { label: "Material Provenance", value: "100% salvaged commercial vehicles" },
    ],
    processStages: [
      "Recovery of tempered suspension steel from heavy vehicle scrap",
      "Tempering stress release and cold-forming into ergonomic profiles",
      "Modular field installation on permeable gravel footings",
      "Civic adoption by neighborhood park committee",
    ],
  },
  {
    id: "art-archive-2021-2023",
    title: "Transitional Art Archive (2021–2023)",
    category: "Art Archive",
    featured: false,
    tagline: "Early sculptural explorations that uncovered the structural power of automotive scrap.",
    description:
      "An archival record of Punarjanam's exploratory phase, documenting the tactile and aesthetic experiments that catalyzed our shift into community infrastructure.",
    fullNarrative:
      "In our earliest days, Punarjanam operated as an experimental workshop creating studio artworks and sculptures from scrap automotive parts. While these gallery pieces brought visibility to material upcycling, our team recognized that the true ecological and social emergency demanded functional utility. This archive documents those foundational experiments as the stepping stones to our current community infrastructure mission.",
    location: "Archival Documentation / Retrospective",
    year: "2021–2023",
    divertedWeight: "4.5 tonnes",
    materials: ["Crankshafts", "Cam gears", "Engine cowlings", "Exhaust manifolds"],
    beneficiaries: "Public record of institutional evolution",
    image: "/images/materials_recovery.jpg",
    specs: [
      { label: "Archival Period", value: "2021 – 2023" },
      { label: "Key Insight", value: "Shift from decorative art to public utility" },
      { label: "Output Status", value: "Permanently archived / Not for sale" },
      { label: "Evolution Result", value: "Founded Punarjanam Infrastructure Labs" },
    ],
    processStages: [
      "Creative material experimentation with scrap metal forms",
      "Identifying superior structural qualities of vehicle frames",
      "Conscious organizational decision to sunset art retail",
      "Full reallocation of resources to community infrastructure",
    ],
  },
];

export const materialCategories: MaterialCategory[] = [
  {
    id: "automobile-scrap",
    name: "Automobile Scrap",
    badge: "Structural Core",
    summary:
      "End-of-life cars, auto-rickshaws, and commercial trucks yield high-tensile cold-formed steel chassis, suspension springs, and stamped aerodynamic panels.",
    sources: "Certified End-of-Life Vehicle (ELV) dismantlers, Mayapuri auto scrap exchange, and municipal impound auctions.",
    characteristics: [
      "Exceptional strength-to-weight ratio from automotive-grade press steels",
      "Pre-engineered structural ribs that resist torsional and shear stress",
      "Factory electro-coated primers providing superior initial rust defense",
      "Modular repeatable dimensions across standard vehicle models",
    ],
    civicApplications: [
      "Main structural rafters and space frames for community roofs",
      "Passive solar shading fins and rain deflectors",
      "Indestructible public seating, bollards, and urban tree guards",
    ],
    recoveryProtocol:
      "Fluids and battery residues neutralized -> Ultrasonic thickness test -> Straightness and seam inspection -> Dry blast de-scaling.",
    divertedTonnage: "28.4 tonnes",
  },
  {
    id: "industrial-waste",
    name: "Industrial Waste & Surplus",
    badge: "Heavy Load Framing",
    summary:
      "Off-cuts, mismatched lengths, and surplus structural I-beams, box channels, and perforated plate sheets from fabrication workshops and manufacturing plants.",
    sources: "Engineering fabrication plants, light industrial yards in NCR, structural surplus auctions.",
    characteristics: [
      "Certified mill structural steel (IS 2062 standard grade equivalent)",
      "High load-bearing capacity for long-span civic halls and pavilions",
      "Clean linear geometries that integrate smoothly with standard building codes",
    ],
    civicApplications: [
      "Vertical structural columns and heavy foundation tie-beams",
      "Acoustic and breeze-permeable pavilion screen walls",
      "Modular mezzanine platforms for community centers",
    ],
    recoveryProtocol:
      "Dimensional grading -> Load-calculation cross check -> Flange weld preparation -> Zinc phosphate priming.",
    divertedTonnage: "12.6 tonnes",
  },
  {
    id: "construction-waste",
    name: "Construction Waste",
    badge: "Reinforcement & Gabions",
    summary:
      "Clean structural scrap from demolition and urban development sites, including salvage rebar, structural pipes, and scaffolding elements.",
    sources: "Civic infrastructure project staging yards, commercial renovations, verified demolition sites.",
    characteristics: [
      "High ductility and excellent weldability",
      "Ideal for tensile cross-bracing and foundation anchoring",
      "Readily bent into organic shading trellises and green wall supports",
    ],
    civicApplications: [
      "Tensile roof cable ties and wind-bracing trusses",
      "Porous stone-filled gabion foundations that absorb storm runoff",
      "Climbing plant trellises for biophilic urban cooling",
    ],
    recoveryProtocol:
      "Sorting by bar diameter and yield strength -> Rust wire-brushing -> Cut-to-length modular standardization.",
    divertedTonnage: "5.8 tonnes",
  },
  {
    id: "other-materials",
    name: "Other Circular Materials",
    badge: "Eco-Envelopes & Joints",
    summary:
      "Complementary non-toxic circular materials that complete our community structures without introducing petrochemical waste.",
    sources: "Timber mill salvage, maritime hardware surplus, natural mineral sealant manufacturers.",
    characteristics: [
      "Natural thermal insulative properties",
      "Non-toxic, low-VOC finishes safe for children and food spaces",
      "Demountable bolt and pin connections designed for future recovery",
    ],
    civicApplications: [
      "Warm wooden seating benches mounted onto steel chassis frames",
      "Thermal roof underlayment reducing summer heat transmission",
      "Stainless marine-grade fasteners ensuring 50-year joint stability",
    ],
    recoveryProtocol:
      "Moisture content testing -> Natural oil treatment -> Standardized drill jigging.",
    divertedTonnage: "1.7 tonnes",
  },
];

export const whatWeDoPillars = [
  {
    id: "community-infrastructure",
    title: "Community Infrastructure",
    subtitle: "Dignified public spaces where people live, work, and connect",
    description:
      "We design and build climate-resilient public canopies, neighborhood gathering halls, transit shade networks, and micro-learning centers. Our structures address acute thermal, rain, and civic space deficits in dense urban settlements.",
    points: [
      "Passive solar cooling and natural ventilation engineering",
      "Heavy-duty wind, seismic, and live-load structural safety",
      "Integrated rainwater harvesting and porous ground perimeters",
      "Open-access civic commons free from commercial barriers",
    ],
    metric: "14",
    metricLabel: "Community commons built",
  },
  {
    id: "material-reuse",
    title: "Material Reuse as a Means",
    subtitle: "Preserving embodied energy through structural repurposing",
    description:
      "Conventional recycling crushes and melts scrap steel in blast furnaces at massive energy and carbon expense. We treat scrap metal as ready-to-use structural components, preserving their high-tensile cold-formed engineering without re-melting.",
    points: [
      "94% reduction in embodied carbon compared to virgin structural steel",
      "Zero downcycling: high-grade auto alloys remain in high-duty civic service",
      "Strict toxic fluid neutralization and diagnostic load certification",
      "Full digital traceability of every beam and panel back to its origin",
    ],
    metric: "48.5t",
    metricLabel: "Diverted from blast furnaces",
  },
  {
    id: "design-fabrication",
    title: "Design & Fabrication",
    subtitle: "Precision engineering tailored for non-uniform reclaimed components",
    description:
      "Scrap steel geometry is irregular. Our engineering team combines computational 3D truss modeling with master fabrication techniques to develop modular joint systems that accommodate variations while guaranteeing building code safety.",
    points: [
      "Custom universal joint collars that adapt to varied chassis profiles",
      "Pre-fabricated modular assemblies that bolt together on-site swiftly",
      "Non-destructive dry connections allowing complete future disassembly",
      "High-durability anti-corrosion mineral coatings for Delhi's climate",
    ],
    metric: "100%",
    metricLabel: "Bolted modular joints",
  },
  {
    id: "community-collaboration",
    title: "Community Collaboration",
    subtitle: "Co-design, shared labor, and neighborhood ownership",
    description:
      "Top-down municipal installations often fall into disrepair because communities were never consulted. Punarjanam's participatory methodology engages residents, street vendors, and local youth from site selection to physical erection.",
    points: [
      "Community mapping workshops to identify shade and gathering priorities",
      "Stipended vocational training for local welders and fabricators",
      "Neighborhood stewardship councils equipped with maintenance protocols",
      "Lifelong civic pride and collective stewardship over public assets",
    ],
    metric: "26",
    metricLabel: "Participatory co-design labs",
  },
];

export const impactStories: ImpactStory[] = [
  {
    quote:
      "Before the Automobile-Scrap Roof was erected, our children had to play in 44°C direct sunlight or stay cooped up inside small rooms. Now the pavilion is filled from morning till night with study classes, community elders resting, and evening women's gatherings.",
    author: "Sunita Devi",
    role: "Neighborhood Resident & Women's Committee Lead",
    neighborhood: "Mayapuri Civic Hub",
    project: "Automobile-Scrap Community Roof",
  },
  {
    quote:
      "For decades, we sent vehicle chassis straight to the scrap shear and electric arc furnaces. Seeing those exact chassis beams engineered into a safe, beautiful public pavilion right here in Delhi completely changed our perspective on the value of scrap.",
    author: "Hardeep Singh",
    role: "Proprietor, Delhi Scrap Aggregators Exchange",
    neighborhood: "Mayapuri Industrial Area",
    project: "Material Sourcing Partnership",
  },
  {
    quote:
      "Punarjanam shows what circular architecture should look like: not an expensive gallery novelty, but an urgent civic lifeline for communities facing extreme climate stresses. The engineering rigor behind their connections is exemplary.",
    author: "Ar. Tariq Mansoor",
    role: "Urban Researcher & Visiting Design Critic",
    neighborhood: "School of Planning & Architecture, Delhi",
    project: "Modular Transit Shading Study",
  },
];

export const teamMembers = [
  {
    name: "Amanpreet Kaur",
    role: "Director of Civic Architecture",
    background: "12 years in participatory urban design and climate-responsive public structures across South Asia.",
  },
  {
    name: "Rajeshwar Verma",
    role: "Chief Structural Engineer & Material Testing",
    background: "Specialist in structural fatigue, non-standard alloy mechanics, and modular steel connections.",
  },
  {
    name: "Mukesh Kumar",
    role: "Master Fabrication & Yard Operations Lead",
    background: "Over 20 years leading heavy metal fabrication, diagnostic grading, and precision field assembly.",
  },
  {
    name: "Farhana Begum",
    role: "Community Engagement & Field Coordinator",
    background: "Grassroots organizer facilitating neighborhood co-design, youth fellowships, and civic handovers.",
  },
];
