// All site copy lives here so COCAZ can update wording without touching layout code.
//
// Copy is written to a line budget so it sits the same on a phone as on a desktop:
//   label 20 characters, card title 26, bullet 34, button 22,
//   card paragraph 110, section supporting line 130, lead 150, body paragraph 165.

export const img = (name) => `${import.meta.env.BASE_URL}img/${name}`;
export const VIDEO = `${import.meta.env.BASE_URL}assets/cocazvid.mp4`;

export const FOUNDED = 2020;

export const contact = {
  phone: "+263 78 223 5693",
  phoneHref: "tel:+263782235693",
  whatsapp: "https://wa.me/263782235693",
  email: "cocazofficial@gmail.com",
  address: "998 Woodlands, Waterfalls, Harare, Zimbabwe",
  addressLines: ["998 Woodlands, Waterfalls", "Harare, Zimbabwe"],
  mapEmbed: "https://www.openstreetmap.org/export/embed.html?bbox=31.005%2C-17.925%2C31.105%2C-17.855&layer=mapnik&marker=-17.889%2C31.057",
  mapLink: "https://www.google.com/maps/search/?api=1&query=Waterfalls%2C+Harare%2C+Zimbabwe",
  socials: [
    { name: "Facebook", href: "https://www.facebook.com/cocaz.official" },
    { name: "X", href: "https://twitter.com/cocaz_official" },
  ],
};

export const nav = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Events", to: "/events" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

// The association's own wording, as printed on its banners
export const vision = "Empowered content creators contributing towards socio-economic development.";
export const mission = "Creating a conducive environment for creatives to grow and thrive.";

export const tagline = "Backing creators across Zimbabwe.";

/* ------------------------------------------------------------------ Home */

export const programmeFilters = [
  { id: "all", label: "All" },
  { id: "creators", label: "For creators" },
  { id: "brands", label: "For brands" },
  { id: "production", label: "Production" },
  { id: "events", label: "Events" },
];

export const programmes = [
  {
    title: "Media Production",
    tag: "Production",
    icon: "Clapperboard",
    image: "svc-musicvideo.jpg",
    alt: "Two crew members operating a cinema camera on set",
    text: "Photo, video and audio by working crews.",
    stats: [
      { value: "6", label: "Services" },
      { value: "Mandi", label: "Our film" },
    ],
    to: "/services/media-production",
    filters: ["production", "brands", "creators"],
  },
  {
    title: "Talent Management",
    tag: "Talent",
    icon: "Mic2",
    image: "masterh.jpg",
    alt: "Master H performing on stage",
    position: "50% 20%",
    text: "Career planning and representation for artists.",
    stats: [
      { value: "2022", label: "Launched" },
      { value: "6", label: "Focus areas" },
    ],
    to: "/services/talent-management",
    filters: ["creators"],
  },
  {
    title: "Event Management",
    tag: "Events",
    icon: "CalendarHeart",
    image: "meet-panel.jpg",
    alt: "A panel seated at the top table in front of a COCAZ backdrop",
    position: "50% 45%",
    text: "Planning and running events for creators.",
    stats: [
      { value: "6", label: "Services" },
      { value: "MC", label: "On call" },
    ],
    to: "/services/event-management",
    filters: ["events", "brands"],
  },
  {
    title: "Creator Education",
    tag: "Education",
    icon: "GraduationCap",
    image: "mcaz-room.jpg",
    alt: "Creators at a workshop table, listening and taking notes",
    position: "50% 55%",
    text: "Workshops, masterclasses and mentorship.",
    stats: [
      { value: "2024", label: "Boot camp" },
      { value: "1:1", label: "Mentorship" },
    ],
    to: "/events",
    filters: ["creators", "events"],
  },
  {
    title: "Brand Partnerships",
    tag: "For brands",
    icon: "Handshake",
    image: "road-sunset.jpg",
    alt: "A crowd gathered around a brand roadshow truck at sunset",
    position: "50% 60%",
    text: "Campaigns pairing brands with creators.",
    stats: [
      { value: "2023", label: "Partnered" },
      { value: "4 steps", label: "Campaign" },
    ],
    to: "/services#partners",
    filters: ["brands"],
    highlight: true,
  },
];

export const audiences = [
  {
    title: "Creators",
    status: "Open to creatives",
    text: "Advice and management for poets, musicians, actors, DJs, writers and filmmakers.",
    cta: "Join COCAZ",
    to: "/join",
  },
  {
    title: "Brands",
    status: "Partnerships open",
    text: "Campaigns built with creators around your goals, audience and budget.",
    cta: "Start a campaign",
    to: "/contact",
  },
  {
    title: "Event hosts",
    status: "By arrangement",
    text: "Work with us on premieres, seminars and boot camps for the creator community.",
    cta: "Host with us",
    to: "/services/event-management",
  },
  {
    title: "Partners",
    status: "Across Africa",
    text: "We work with guilds, studios and creators from Harare to Lusaka and beyond.",
    cta: "Get in touch",
    to: "/contact",
  },
];

export const creators = [
  {
    name: "Loraine Guyo",
    role: "Actress",
    image: "loraine.jpg",
    quote: "COCAZ has helped me reach new heights in my career!",
    link: "https://www.facebook.com/lorraineguyoproductions",
  },
  {
    name: "Matsanga",
    role: "Musician / Actor",
    image: "matsanga.jpg",
    quote: "COCAZ has opened doors I never knew existed!",
    link: "https://www.facebook.com/profile.php?id=100064838858644",
  },
  {
    name: "Kuda Rashman",
    role: "Comedian",
    image: "rashman.jpg",
    quote: "Thanks to COCAZ, my jokes are reaching a wider audience!",
    link: "https://www.facebook.com/profile.php?id=100044864416580",
  },
  {
    name: "Kimnanah",
    role: "Actor",
    image: "kimnanah.jpg",
    quote: "Joining COCAZ transformed my career as a content creator.",
    link: "https://www.tiktok.com/@kimnanah53",
  },
];

export const partners = [
  { name: "Sun Soya", logo: "partner-sunsoya-wide.jpg", rounded: true },
  { name: "CoolSplash", logo: "partner-coolsplash.png" },
  { name: "Buy Zimbabwe", logo: "partner-buyzim.png" },
  { name: "Autoward Electronics", logo: "partner-autoward.png" },
  { name: "Greylink Investments", logo: "partner-greylink.png" },
];

/* ----------------------------------------------------------------- About */

export const story = [
  "COCAZ, the Content Creators Association of Zimbabwe, was **founded in 2020** to give Zimbabwe's creative voices proper backing.",
  "We believe digital content can inspire, educate and connect people across borders.",
  "Our team supports members with marketing, monetisation and management, so they can *earn a living from their work*.",
];

export const values = [
  { icon: "TrendingUp", title: "Rapid Growth", text: "Members grow their careers faster with guidance from people who have done it." },
  { icon: "Award", title: "Industry Recognition", text: "Members are recognised for what they add to Zimbabwe's creative scene." },
  { icon: "Handshake", title: "Collaborative Community", text: "Creators sharing knowledge, contacts and opportunities." },
  { icon: "Users", title: "Growing Network", text: "Hundreds of creators shaping Zimbabwe's digital future." },
  { icon: "Star", title: "Excellence", text: "Setting the standard for professional content creation in Zimbabwe." },
  { icon: "Trophy", title: "Achievement", text: "Celebrating the success stories of our members." },
];

export const timeline = [
  { year: "2020", title: "COCAZ founded", text: "Set up to connect Zimbabwean content creators with businesses looking for fresh marketing." },
  { year: "2021", title: "100+ content creators", text: "Influencers across many niches joined." },
  { year: "2022", title: "Talent management launched", text: "We began managing established artists." },
  { year: "2023", title: "Partnership with CoolSplash", text: "Our first major brand partnership, and the start of many campaigns." },
  { year: "2024", title: "Work with Simuka Upenye", text: "We ran a boot camp for rural creatives." },
  { year: "2024", title: "Partnership with Sunsoya", text: "We built Sunsoya's presence online." },
  { year: "2024", title: "Zambia and Zimbabwe merge", text: "Creators from both countries joined forces for an Afrocentric audience." },
  { year: "2025", title: "Malawi Film Awards", text: "Creators joined the Film Association of Malawi for its gala." },
  { year: "2026", title: "Engagement with MCAZ", text: "Creators met the medicines regulator on responsible promotion." },
];

export const leaders = [
  { name: "Takunda Tapfuma", role: "Co-Founder", image: "leader-takunda.jpg", position: "50% 15%", bio: "Seven years in digital media and content marketing, finding new ways to back creators across Africa." },
  { name: "Wellington Bakaimani", role: "Co-Founder", image: "leader-wellington.jpg", position: "50% 12%", bio: "Runs operations and keeps COCAZ services delivered on time as the network grows." },
  { name: "Victor Tinashe Mpofu", role: "Chairman", image: "leader-victor.jpg", position: "40% 20%", bio: "Dedicated to understanding and meeting the needs of African creators." },
  { name: "Bridget Paradza", role: "Vice Chairperson", image: "leader-bridget.jpg", position: "50% 22%", bio: "An advocate for African creators, building the support they need to succeed." },
  { name: "Emmanuel Chivase", role: "Legal advocate", image: "leader-emmanuel.jpg", position: "50% 12%", bio: "Legal expert who safeguards the rights and interests of African creators." },
  { name: "Ian Vambe", role: "Secretary General", image: "leader-ian.jpg", position: "50% 12%", bio: "Keeps the association organised so the needs of its members are met." },
  { name: "Ellen Chirenje", role: "Vice Secretary", image: "leader-ellen.jpg", position: "50% 30%", bio: "Works to make sure creators are heard and their talents get seen." },
  { name: "Hillary Chikambi", role: "Treasurer", image: "leader-hillary.jpg", position: "50% 15%", bio: "Manages the association's finances and keeps it sustainable." },
];

/* -------------------------------------------------------------- Services */

export const creatorServices = [
  { icon: "TrendingUp", title: "Growth Strategy", text: "A plan to widen your reach and keep your audience engaged on every platform." },
  { icon: "BadgeDollarSign", title: "Monetization", text: "Brand deals, sponsorships and content tuning that raise what you earn." },
  { icon: "GraduationCap", title: "Creator Education", text: "Workshops, masterclasses and personal mentorship to sharpen your skills." },
  { icon: "Waypoints", title: "Networking", text: "Introductions to industry professionals, fellow creators and collaborators." },
  { icon: "Target", title: "Brand Development", text: "Guidance on your personal brand and a consistent voice across platforms." },
  { icon: "Megaphone", title: "Content Strategy", text: "Content planning based on what your numbers say is working." },
  { icon: "Users", title: "Community Building", text: "Tools and habits for growing an engaged community around your work." },
  { icon: "BarChart3", title: "Performance Analytics", text: "Reports that track your growth and show what to do next." },
];

export const process = [
  { title: "Discovery and strategy", text: "We learn your goals, audience and budget, then write a plan to match." },
  { title: "Creator selection", text: "We pick creators whose audience and style fit the campaign." },
  { title: "Content and approval", text: "Creators work from a clear brief and you review before anything goes live." },
  { title: "Launch and monitoring", text: "We publish across platforms, watch the results and adjust as we go." },
];

export const partnerStories = [
  {
    name: "Sunsoya",
    sector: "Food",
    image: "partner-sunsoya.jpg",
    position: "50% 35%",
    text: "Creator collaborations that raised Sunsoya's awareness and engagement across digital platforms.",
  },
  {
    name: "CoolSplash",
    sector: "Beverage",
    logo: "partner-coolsplash.png",
    text: "Our first major partnership, **started in 2023** with creator-led drinks campaigns.",
  },
  {
    name: "Buy Zimbabwe",
    sector: "Campaign",
    logo: "partner-buyzim.png",
    text: "Video production backing quality Zimbabwean brands: *jobs, wealth and pride*.",
  },
  {
    name: "Autoward",
    sector: "Auto electronics",
    logo: "partner-autoward.png",
    text: "Multi-platform content for Harare's vehicle key and electronics specialists.",
  },
];

export const serviceDetails = {
  "media-production": {
    title: "Media",
    script: "Production",
    name: "Media Production",
    kicker: "Service",
    lead: "Visual stories that hold an audience and build brands, in Zimbabwe and beyond.",
    image: "nigeria-set.jpg",
    alt: "COCAZ delegates with cast and crew on a film set in Nigeria",
    position: "45% 50%",
    cta: { title: "Ready to start", script: "your project?", text: "Tell us what you want to make.", button: "Start a project" },
    feature: {
      label: "Featured film",
      title: "Mandi",
      image: "mandi.jpg",
      alt: "Poster artwork for the film Mandi",
      text: "A film inspired by *The Woman King*, set in pre-colonial Zimbabwe.",
      points: ["A fearless woman warrior lead", "Large-scale battle sequences", "Rich cultural storytelling"],
      note: "In production",
    },
    cardsTitle: "Our production services",
    cards: [
      { title: "Film and TV Production", image: "svc-filmtv.jpg", text: "From concept to screen, fully crewed.", points: ["Script Development", "Location Scouting", "Full Production Crew", "High-End Equipment"] },
      { title: "Music Video Production", image: "svc-musicvideo.jpg", text: "Music videos that carry the feel of the song.", points: ["Creative Direction", "Choreography", "Color Grading", "Special Effects"] },
      { title: "Commercial Production", image: "svc-commercial.jpg", text: "Adverts and corporate films that hold attention.", points: ["Brand Integration", "Market Research", "Distribution Strategy", "Analytics"] },
      { title: "Documentary Filmmaking", image: "svc-documentary.jpg", text: "Real stories, researched and told with care.", points: ["Research", "Interview Setup", "Archive Integration", "Narrative Structure"] },
      { title: "Post-Production", image: "svc-post.jpg", text: "Editing, sound and colour to finish your project.", points: ["Video Editing", "Sound Design", "Color Correction", "Visual Effects"] },
      { title: "Animation", image: "svc-animation.webp", text: "2D and 3D animation and motion graphics.", points: ["2D Animation", "3D Modeling", "Character Design", "Motion Graphics"] },
    ],
  },
  "event-management": {
    title: "Event",
    script: "Management",
    name: "Event Management",
    kicker: "Service",
    lead: "Events planned in detail and run with energy, from first idea to last guest.",
    image: "meet-room.jpg",
    alt: "A hall set for a COCAZ event, with a panel at the top table",
    position: "30% 50%",
    intro: {
      title: "Welcome to COCAZ Events",
      text: "Our event team turns your idea into a planned, staffed and well-run occasion, with every detail accounted for.",
    },
    lists: [
      { title: "MC services", items: ["Corporate Events", "Weddings", "Social Gatherings", "Award Ceremonies"] },
      { title: "Event types", items: ["Weddings", "Corporate Events", "Concerts", "Galas", "Conferences", "Special Occasions"] },
    ],
    strip: [
      { image: "road-stage.jpg", alt: "A crowd in front of a roadshow stage in a city square", label: "Roadshows" },
      { image: "meet-group.jpg", alt: "Guests gathered for a group photo at a COCAZ event", label: "Conferences" },
      { image: "aisha-foyer.jpg", alt: "Guests in a cinema foyer on a film premiere night", label: "Premieres" },
    ],
    cardsTitle: "Planning services",
    accordion: [
      { title: "Venue and styling", text: "We find and style the venue for you.", points: ["Venue scouting", "Theme development", "Decor arrangement"] },
      { title: "Entertainment booking", text: "Performers from our own network, booked for your event.", points: ["Live bands", "DJs", "Traditional performers"] },
      { title: "Catering", text: "Caterers we trust, with menus built around your guests.", points: ["Custom menus", "Dietary accommodations", "Bar service"] },
      { title: "Technical production", text: "Sound, lighting and visuals that work on the day.", points: ["Sound systems", "Lighting design", "Visual effects"] },
      { title: "Guest experience", text: "Invitations, seating and VIP care handled for you.", points: ["RSVP management", "Seating arrangements", "VIP services"] },
      { title: "Event coordination", text: "On-site management so every detail runs to plan.", points: ["Timeline planning", "Vendor coordination", "Emergency handling"] },
    ],
    cta: { title: "Planning", script: "an event?", text: "Tell us the date and the idea.", button: "Plan an event" },
  },
  "talent-management": {
    title: "Talent",
    script: "Management",
    name: "Talent Management",
    kicker: "Service",
    lead: "Management that finds the right opportunities for Zimbabwe's creative voices.",
    image: "masterh.jpg",
    alt: "Master H performing live on stage",
    position: "50% 25%",
    artists: [
      { name: "Master H", genre: "Dancehall", badge: "3x Award Winner", image: "masterh.jpg", position: "50% 20%", text: "Master H has made waves in Zimbabwean dancehall with hard-hitting lyrics and infectious rhythms." },
      { name: "Jah Signal", genre: "Dancehall", badge: "Chart-Topping Artist", image: "jahsignal.jpg", position: "50% 15%", text: "Jah Signal is a household name in Zimbabwe's dancehall scene and has worked with international artists." },
    ],
    cardsTitle: "Our approach",
    tiles: [
      { icon: "TrendingUp", title: "Career Strategy", text: "A career plan built around each artist's goals and potential." },
      { icon: "Award", title: "Brand Development", text: "Positioning that gives you a strong, memorable presence." },
      { icon: "Music", title: "Tour Management", text: "Tour planning from venue booking to logistics and show day." },
      { icon: "Mic2", title: "Media Relations", text: "Media placement, interview coaching and public relations." },
      { icon: "Smartphone", title: "Digital Strategy", text: "Social media, content planning and online engagement." },
      { icon: "Wallet", title: "Financial Planning", text: "Advice on revenue, investment and a career that lasts." },
    ],
    cta: { title: "Ready for", script: "the next level?", text: "Join the COCAZ roster of artists.", button: "Contact us today" },
  },
};

/* ---------------------------------------------------------------- Events */

export const events = [
  {
    id: "braai",
    title: "Creators Meet, Braai and Movie Night",
    short: "Braai and Movie Night",
    category: "Community",
    date: "3 October 2026",
    iso: "2026-10-03",
    stamp: "03.10.26",
    location: "1 Panter, Waterfalls",
    image: "braai-poster.jpg",
    alt: "Poster for the Content Creators and Filmmakers Meet, Braai and Movie Night",
    poster: true,
    text: "Food, movies and networking for creators and filmmakers, with Mirazvo Productions, HEMS and Fruticana.",
    featured: true,
  },
  {
    id: "mcaz",
    title: "Regulatory Engagement with MCAZ",
    short: "MCAZ engagement",
    category: "Workshop",
    date: "15 July 2026",
    iso: "2026-07-15",
    stamp: "15.07.26",
    location: "Bronte Hotel, Harare",
    image: "mcaz-group.jpg",
    alt: "Creators and officials after the regulatory engagement with the Medicines Control Authority of Zimbabwe",
    position: "50% 60%",
    text: "Creators met the Medicines Control Authority of Zimbabwe to learn the rules on promoting medicines responsibly.",
    featured: true,
  },
  {
    id: "aisha",
    title: "Zambian Film Premiere: Aisha",
    short: "Premiere of Aisha in Lusaka",
    category: "Premiere",
    date: "31 October",
    location: "Levy Cinemas, Lusaka",
    image: "aisha-redcarpet.jpg",
    alt: "COCAZ delegates on the red carpet at the premiere of Aisha",
    position: "50% 45%",
    text: "The launch of *Aisha*, a Timeline Studios production, with creators from both sides of the Zambezi.",
  },
  {
    id: "agn",
    title: "With the Actors Guild of Nigeria",
    short: "Actors Guild of Nigeria",
    category: "Partnership",
    location: "Lagos, Nigeria",
    image: "agn-group.jpg",
    alt: "COCAZ delegates with members of the Actors Guild of Nigeria beside the guild's emblem",
    position: "50% 28%",
    text: "COCAZ met the Actors Guild of Nigeria and visited working film sets to build ties with Nollywood.",
  },
  {
    id: "malawi",
    title: "Malawi Film Awards and Gala",
    short: "Malawi Film Awards",
    category: "Awards",
    date: "2025",
    location: "Malawi",
    image: "malawi-awards.jpg",
    alt: "COCAZ creators in evening wear at the Malawi Film Awards and Gala",
    position: "50% 55%",
    text: "COCAZ creators joined the Film Association of Malawi for its 2025 awards night.",
  },
  {
    id: "roadshows",
    title: "Brand Roadshows",
    short: "Brand roadshows",
    category: "Activation",
    location: "Zimbabwe",
    image: "road-sunset.jpg",
    alt: "A large crowd around a roadshow truck at sunset",
    position: "50% 60%",
    text: "Creators take brands to the street, drawing crowds in town centres and markets.",
  },
  {
    id: "seminar",
    title: "Seminar with Nigerian Actors",
    short: "Nigerian actors seminar",
    category: "Seminar",
    date: "15 March 2025",
    iso: "2025-03-15",
    stamp: "15.03.25",
    location: "Cape Town, South Africa",
    image: "event-nigeria.jpg",
    alt: "A certificate being presented at the seminar",
    position: "50% 25%",
    text: "A seminar on cross-border collaboration, Nollywood and making content for African audiences.",
  },
  {
    id: "women",
    title: "Women's Perspectives",
    short: "Women's Perspectives",
    category: "Seminar",
    date: "28 November 2024",
    iso: "2024-11-28",
    stamp: "28.11.24",
    location: "Theatre in the Park, Harare",
    image: "event-women.jpg",
    alt: "Event artwork for Women's Perspectives",
    poster: true,
    text: "COCAZ sponsored a morning on shaping the future of film and television, led by women in the industry.",
  },
  {
    id: "bootcamp",
    title: "Film-Makers Boot Camp: Empowering Rural Creatives",
    short: "Film-Makers Boot Camp",
    category: "Workshop",
    date: "31 Jan to 3 Feb 2024",
    iso: "2024-01-31",
    stamp: "31.01.24",
    location: "Habitation of Hope, Harare",
    image: "bootcamp1.jpg",
    alt: "Film-Makers Boot Camp poster",
    poster: true,
    text: "Team building, creative advocacy and content creation with **Simukaupenye Integrated Youth Academy**.",
  },
  {
    id: "merge",
    title: "Zim Content Merge with Zambian Creators",
    short: "Zim and Zambia content merge",
    category: "Partnership",
    date: "2024",
    location: "ZBC and Power FM, Harare",
    image: "zam2.jpg",
    alt: "Zimbabwean and Zambian creators together in the Power FM studio",
    text: "Zimbabwean and Zambian creators joined forces to give audiences an Afrocentric experience.",
  },
  {
    id: "networking",
    title: "Community Networking for Content Creators",
    short: "Community networking day",
    category: "Community",
    location: "Zimbabwe",
    image: "camp2.jpg",
    alt: "COCAZ members in branded caps and T-shirts outdoors",
    text: "Members, partners and rural creatives in one room, putting the spotlight on creative work.",
  },
  {
    id: "shamva",
    title: "Board Meeting in Shamva",
    short: "Board meeting in Shamva",
    category: "Community",
    location: "Shamva, Mashonaland Central",
    image: "shamva2.jpg",
    alt: "COCAZ board members standing in front of the association's banners in Shamva",
    text: "The COCAZ board on the road, taking the association's vision beyond the capital.",
  },
];

export const event = (id) => events.find((e) => e.id === id);

// Where members have travelled with the association
export const abroad = [
  { country: "Zambia", image: "zambia-arrival.jpg", alt: "COCAZ creators arriving under a Welcome to Zambia sign", position: "50% 35%", text: "Premiere night" },
  { country: "Malawi", image: "malawi-awards.jpg", alt: "COCAZ creators at the Malawi Film Awards and Gala", position: "50% 60%", text: "Film awards" },
  { country: "Nigeria", image: "agn-group.jpg", alt: "COCAZ delegates with the Actors Guild of Nigeria", position: "40% 30%", text: "Actors Guild" },
];

/* --------------------------------------------------------------- Gallery */

export const gallery = [
  { type: "image", src: "aisha-redcarpet.jpg", caption: "On the red carpet at the Aisha premiere", group: "On tour", span: "wide" },
  { type: "image", src: "zambia-arrival.jpg", caption: "Arriving in Zambia", group: "On tour", span: "tall" },
  { type: "image", src: "mcaz-group.jpg", caption: "Regulatory engagement with MCAZ", group: "Engagements", span: "wide" },
  { type: "image", src: "road-sunset.jpg", caption: "A roadshow crowd at sunset", group: "Roadshows", span: "wide" },
  { type: "image", src: "agn-group.jpg", caption: "With the Actors Guild of Nigeria", group: "On tour" },
  { type: "image", src: "malawi-awards.jpg", caption: "Malawi Film Awards and Gala 2025", group: "On tour", span: "wide" },
  { type: "image", src: "aisha-stairs.jpg", caption: "Flying the flag at the Aisha premiere", group: "On tour", span: "tall" },
  { type: "image", src: "meet-panel.jpg", caption: "The top table at a COCAZ gathering", group: "Engagements", span: "wide" },
  { type: "image", src: "road-crowd.jpg", caption: "A city square filled for a roadshow", group: "Roadshows", span: "wide" },
  { type: "image", src: "nigeria-set.jpg", caption: "On a film set in Nigeria", group: "On tour", span: "wide" },
  { type: "image", src: "mcaz-table.jpg", caption: "Creators at the MCAZ engagement", group: "Engagements", span: "tall" },
  { type: "image", src: "road-mc.jpg", caption: "The MC works the crowd", group: "Roadshows", span: "wide" },
  { type: "image", src: "aisha-foyer.jpg", caption: "Premiere night in Lusaka", group: "On tour", span: "wide" },
  { type: "image", src: "meet-speaker.jpg", caption: "A member takes the floor", group: "Engagements", span: "wide" },
  { type: "image", src: "nigeria-group.jpg", caption: "With actors in Nigeria", group: "On tour" },
  { type: "image", src: "road-creator.jpg", caption: "A creator at a brand activation", group: "Roadshows", span: "tall" },
  { type: "image", src: "trip-team.jpg", caption: "The delegation at departures", group: "On tour" },
  { type: "image", src: "meet-group.jpg", caption: "Guests at a COCAZ gathering", group: "Engagements", span: "wide" },
  { type: "image", src: "road-square.jpg", caption: "Roadshow day in the city", group: "Roadshows", span: "wide" },
  { type: "image", src: "agn-banner.jpg", caption: "At the Actors Guild of Nigeria", group: "On tour" },
  { type: "image", src: "mcaz-room.jpg", caption: "Listening in at the MCAZ engagement", group: "Engagements", span: "tall" },
  { type: "image", src: "nigeria-street.jpg", caption: "Meeting filmmakers in Nigeria", group: "On tour", span: "wide" },
  { type: "image", src: "road-kids.jpg", caption: "The front row at a roadshow", group: "Roadshows", span: "wide" },
  { type: "image", src: "certificate.jpg", caption: "Presenting a COCAZ certificate", group: "Engagements", span: "tall" },
  { type: "image", src: "meet-lineup.jpg", caption: "Creators at a COCAZ gathering", group: "Engagements", span: "wide" },
  { type: "image", src: "road-market.jpg", caption: "A market crowd at a roadshow", group: "Roadshows", span: "wide" },
  { type: "image", src: "shamva2.jpg", caption: "Board meeting in Shamva", group: "Community", span: "wide" },
  { type: "image", src: "zam2.jpg", caption: "Zim and Zambia content merge at Power FM", group: "Zambia merge", span: "wide" },
  { type: "image", src: "camp3.jpg", caption: "Community networking for content creators", group: "Community", span: "tall" },
  { type: "video", src: VIDEO, poster: "camp1.jpg", caption: "Behind the scenes: Boot camp", group: "Boot camp", span: "wide" },
  { type: "image", src: "shamva1.jpg", caption: "Our vision and mission, on the road in Shamva", group: "Community", span: "tall" },
  { type: "image", src: "bootcamp1.jpg", caption: "Film-Makers Boot Camp: Empowering Rural Creatives", group: "Boot camp" },
  { type: "image", src: "zam1.jpg", caption: "With Zambian creators at ZBC", group: "Zambia merge", span: "tall" },
  { type: "image", src: "camp2.jpg", caption: "Community networking for content creators", group: "Community", span: "wide" },
  { type: "image", src: "bootcamp2.jpg", caption: "Boss Matsanga: “I will be there”", group: "Boot camp" },
  { type: "image", src: "zam3.jpg", caption: "On air for the Zim and Zambia content merge", group: "Zambia merge", span: "wide" },
  { type: "image", src: "event-guild.jpg", caption: "With the Actors Guild of Nigeria and SAGA", group: "Events", span: "tall" },
  { type: "image", src: "bootcamp4.jpg", caption: "Lorraine Guyo: “I will be there”", group: "Boot camp" },
  { type: "image", src: "camp1.jpg", caption: "Spotlighting rural creatives", group: "Community", span: "wide" },
  { type: "image", src: "event-nigeria.jpg", caption: "Seminar with Nigerian actors", group: "Events", span: "tall" },
  { type: "image", src: "bootcamp3.jpg", caption: "Mr Ridhikurasi: “I will be there”", group: "Boot camp" },
  { type: "image", src: "zam4.jpg", caption: "With Zambian creators at ZBC", group: "Zambia merge", span: "tall" },
  { type: "image", src: "banner-venue.jpg", caption: "Venue preparation for the Content Creator Awards", group: "Events", span: "wide" },
  { type: "image", src: "bootcamp5.jpg", caption: "Mai Jeremaya: “I will be there”", group: "Boot camp" },
  { type: "image", src: "flag.jpg", caption: "Flying the flag", group: "Community" },
  { type: "image", src: "logo-wall.jpg", caption: "The COCAZ mark", group: "Community", span: "wide" },
];

/* ------------------------------------------------------------------ Join */

export const disciplines = [
  "Poets", "Musicians", "Instrumentalists", "Sound Engineers", "Influencers", "Actors", "Showmen",
  "Photographers", "DJs", "Painters", "Writers", "Screenwriters", "Directors", "Cinematographers", "Choreographers",
];

export const creatorTypes = [
  { title: "Video creators", image: "mcaz-table.jpg", alt: "A creator filming on his phone during a COCAZ workshop", position: "50% 45%", text: "Filmmakers, vloggers and storytellers working in video." },
  { title: "Broadcasters", image: "zam3.jpg", alt: "Two COCAZ creators on air in a radio studio", position: "70% 50%", text: "Voice artists and podcasters, on air and online." },
  { title: "Influencers", image: "jersey-duo.jpg", alt: "Two creators, one in a Zimbabwe football jersey and one in a COCAZ T-shirt", position: "50% 25%", text: "Social media personalities with engaged followings." },
];

/* ----------------------------------------------------------------- Terms
   Legal wording, kept exactly as the association issued it. */

export const terms = [
  { title: "Acceptance of Terms", text: "By completing the membership form and submitting your application, you agree to abide by these Terms and Conditions. If you do not agree, please do not sign up for membership." },
  { title: "Membership Eligibility", text: "Membership is open to individuals of all ages. However, members under the age of 18 must have parental or guardian consent to participate." },
  { title: "Services Provided", text: "COCAZ provides advisory and management services for content creators, including but not limited to: Poets, Musicians, Instrumentalists, Sound Engineers, Social Media Influencers, Actors, Showmen, Photographers, DJs, Artistic Painters, Writers (Authors, Screenwriters), Directors, Cinematographers, and Choreographers. Our services aim to enhance the knowledge, coverage, and audience engagement of our members while offering support in monetizing their content." },
  { title: "Member Responsibilities", text: "As a member, you agree to: provide accurate and up-to-date information during the registration process, respect the rights of other members and COCAZ staff, and use the services provided by COCAZ in a manner consistent with applicable laws and regulations." },
  { title: "Intellectual Property", text: "All content created by COCAZ, including promotional materials and resources, is the intellectual property of COCAZ. Members may not reproduce, distribute, or modify this content without prior written consent." },
  { title: "Limitation of Liability", text: "COCAZ shall not be liable for any indirect, incidental, or consequential damages arising from your membership or use of our services. Members agree to use the services at their own risk." },
  { title: "Termination of Membership", text: "COCAZ reserves the right to terminate any membership at its discretion, with or without cause. Members may terminate their membership by providing written notice to COCAZ." },
  { title: "Changes to Terms", text: "COCAZ may update these Terms and Conditions from time to time. Members will be notified of any significant changes, and continued use of services will constitute acceptance of the new terms." },
  { title: "Governing Law", text: "These Terms and Conditions shall be governed by and construed in accordance with the laws of Zimbabwe. Any disputes arising from these terms shall be resolved in the appropriate courts of Zimbabwe." },
  { title: "Contact Information", text: "For any questions regarding these Terms and Conditions, please contact us at cocazofficial@gmail.com." },
];
