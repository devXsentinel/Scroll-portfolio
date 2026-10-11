export const content = {
  name: "Ravish Kumar",
  role: "Full-Stack Developer & AI Engineer",
  tagline: "Engineering full-stack platforms, computer vision, and AI systems.",
  location: "Nashik, Maharashtra",
  stack: ["Python", "React", "PyTorch", "JavaScript", "SQL", "OpenCV", "Docker", "C++"],
  timeline: [
    "Started Coding",
    "School Days",
    "Sandip University",
    "Campus Leadership",
    "MLH Hack Days Win",
    "M2RISK & Vision",
    "Smart India Hackathon",
    "Cyber & AI Systems",
  ],
  flagship: {
    title: "Aarogya Platform",
    blurb: "1st Place MLH Hack Days winner: Full-stack healthcare management platform for patient tracking and intelligent medication reminders.",
    features: [
      "Full-stack React & Python",
      "Patient tracking & records",
      "Intelligent medication alerts",
      "SQL database architecture",
      "AI-driven triage assistance",
      "Built under 24h hackathon pressure",
    ],
  },
  streaming: { platforms: ["GitHub", "Hackathons"], tools: ["VS Code", "Terminal"] },
  terminalCommands: [
    "about",
    "projects",
    "experience",
    "skills",
    "contact",
    "resume",
    "github",
    "linkedin",
    "blog",
  ],
} as const;

// REQUIRED_INPUT -- filled and URL-verified; empty fields hide their affordance, log, continue:
export const links = {
  githubUrl: "https://github.com/ravishkumar", // bakes the contribution star chart
  linkedinUrl: "https://www.linkedin.com/in/ravishkumar/",
  liveDemoUrl: "https://github.com/ravishkumar",
  flagshipRepoUrl: "https://github.com/ravishkumar/aarogya", // Aarogya repo (newsprint front-page GITHUB button)
  email: "ravishkumar.v1.9@gmail.com", // render assembled at runtime (anti-scrape), never as plain text in HTML
  blogUrl: "", // optional -- `blog` command hidden until set
  resumePdf: "", // path in /public; empty => `resume` prints an "out of stock" gag page
};

// The rest of the run -- real projects and achievements.
// Flagship reuses the locked content.flagship + links fields (blurb referenced,
// never re-typed, S0.5). Dry, tone-matched one-liners; PURE ASCII (Turbopack
// rope bug); no franchise vocabulary (SPEC S1). Typed `as const` like issueCopy;
// not yet consumed by a built scene, so the shape is free.
export const projects = [
  {
    name: content.flagship.title, // reuse locked flagship
    blurb: content.flagship.blurb, // reuse locked flagship copy (no dupe)
    url: links.liveDemoUrl,
    tech: "React + Python + SQL",
  },
  {
    name: "M2RISK Road Hazard Intelligence",
    blurb: "Data-processing and model-training pipelines on real-world traffic datasets to predict road near-misses.",
    url: "https://github.com/ravishkumar",
    tech: "PyTorch + YOLO + OpenCV",
  },
  {
    name: "RAVE AI Personal Assistant",
    blurb: "Voice-driven assistant for search, application control, and automated task workflows.",
    url: "https://github.com/ravishkumar",
    tech: "Python + Automation",
  },
  {
    name: "Smart India Hackathon 2025",
    blurb: "Top 15 National Finalist developing scalable high-impact engineering solutions.",
    url: "https://github.com/ravishkumar",
    tech: "System Architecture",
  },
  {
    name: "NASA Space Apps Challenge",
    blurb: "Collaborative space-science problem solving and real-time prototyping under global deadlines.",
    url: "https://github.com/ravishkumar",
    tech: "Data & Prototyping",
  },
] as const;

// Phase 1 lettering & copy -- cover, title drop, onomatopoeia pools, captions, signage.
// PURE ASCII (Turbopack rope bug); no franchise vocabulary (SPEC S1). Pool the words at runtime.
export const lettering = {
  cover: {
    masthead: "RAVISH KUMAR",
    issueLine: "ISSUE #1 - 2026 - FIRST PRINTING",
    priceBox: "STILL ONLY 200 OK",
    blurb: "The origin issue: one engineer, real deadlines, zero excuses.",
    barcode: "ravishkumar", // GitHub handle, set as the cover barcode digits
    attractPrompt: "SCROLL TO CRACK THE SPINE",
    sound: {
      kicker: "BEST READ",
      headline: "WITH SOUND",
      sub: "An original score, twelve rooms, and one cat.",
      yes: "SOUND ON",
      no: "NOT NOW",
    },
    premise: "The journey of a full-stack developer and AI engineer, told as a comic.",
  },
  titleDrop: {
    name: "RAVISH KUMAR",
    sub: "FULL-STACK DEVELOPER & AI ENGINEER - NASHIK",
  },
  onomatopoeia: {
    keycaps: ["CLACK", "CLACK-CLACK", "CLAK", "KACHUNK", "TAK-TAK", "CLICK"],
    whip: ["WHOOSH", "FWISH", "SWISH", "VWOOO", "FWOOSH", "WHIP"],
    impact: ["WHAM", "THOOM", "KRAKA-THOOM", "BADOOM", "SLAM", "KRUNCH"],
    neonPowerOn: ["BZZT", "VNNN", "ZAP", "KRZZT", "TZAK", "HMMMM"],
    rain: ["TAP TAP", "DRIP", "PATTER", "TIK TIK", "PLINK", "DRIP-DRIP"],
    cat: ["MEW", "PRRR", "MRRP", "THUMP", "PADD", "MROW"],
  },
  noirCaptions: [
    "Rain again. Nashik nights that get into your code.",
    "One terminal lit on the whole hostel block. Mine.",
    "Then the cat jumped. Even the bugs scurried away.",
  ],
  sceneCaptions: {
    desk: [
      "Same workstation every night. Python pipelines running in the dark.",
      "The terminal never blinks first. Neither do I.",
    ],
    neon: [
      "The city runs on high-speed compute. Python, PyTorch, React, OpenCV.",
      "You master systems by shipping under pressure. Every sprint taught me a lesson.",
    ],
    spread: [
      "Every green square overhead is an all-nighter or hackathon sprint.",
      "Real commits, real architectures, pinned into a single constellation.",
    ],
  },
  neonSigns: ["PYTHON", "REACT", "PYTORCH", "JAVASCRIPT", "OPENCV", "SQL", "DOCKER", "AI OPEN 24H"],
} as const;

// Phase 3 lettering & copy -- Issues 4-11. One content pass so issue-builders never invent strings.
// PURE ASCII source (Turbopack rope bug); no franchise vocabulary (SPEC S1). Tone: dry, noir-adjacent,
// first person, short (renders as lettering). CV facts trace to content above -- no invented biography.
export const issueCopy = {
  // Issue 4 -- Origin Page (quiet valley, intensity 1). Masthead already dropped; this page carries
  // story beats drawn from content.timeline. First person.
  origin: {
    lead: "Every engineer has an origin story. Here's mine, in panels.",
    beats: [
      "First line of code. A blinking cursor, curiosity, and infinite loops.",
      "Discipline and foundations at Army Public School and DPS Nashik.",
      "Sandip University: diving deep into Cybersecurity and AI.",
      "Class Representative & Club Head: leading from the front.",
      "24-hour hackathon clock ticking. We built Aarogya and took 1st place.",
      "M2RISK: training YOLO pipelines on real-world traffic streams.",
      "Now engineering intelligent agents, vision systems, and robust apps.",
    ],
  },
  // Issue 5 -- The Press (Skills factory). Department labels + one-line factory captions + the CTA
  // the assembly line manufactures end to end (diegetic UI, SPEC 5b.5).
  press: {
    departments: [
      { label: "PYTHON", caption: "The core engine. Clean logic, model pipelines, and backend APIs." },
      { label: "REACT", caption: "The frontend floor. Responsive control decks stamped out for users." },
      { label: "PYTORCH", caption: "Neural networks trained to detect road hazards and predict near-misses." },
      { label: "AI & CV", caption: "YOLO, OpenCV, and voice automation agents working in real time." },
    ],
    cta: "See projects",
  },
  // Issue 6 -- Newsprint (Open Source / Achievements). Spec-given headline + secondaries + reused flagship blurb
  // as the front-page story + open-source ticker.
  newsprint: {
    headline: "HACKATHON WINNERS SHIP AAROGYA",
    secondaryHeadlines: [
      "1ST PLACE AT MLH HACK DAYS, 4-PERSON TEAM TAKES CROWN",
      "M2RISK PREDICTS ROAD HAZARDS USING COMPUTER VISION",
      "NATIONAL FINALIST AT SMART INDIA HACKATHON 2025",
    ],
    frontPageStory: content.flagship.title, // reuse locked flagship
    frontPageBlurb: content.flagship.blurb, // reuse locked flagship copy
    ticker: [
      "1ST PLACE MLH",
      "AAROGYA LIVE",
      "M2RISK MODEL TRAINED",
      "YOLO REALTIME FPS STABLE",
      "SIH 2025 TOP 15",
      "NASA SPACE APPS SUBMITTED",
      "CI GREEN ACROSS THE BOARD",
    ],
  },
  // Issue 7 -- Screentone (Timeline subway). One caption per station, aligned by index to
  // content.timeline (8 entries). First person, subway flavor.
  screentone: {
    stationCaptions: [
      "Boarded here. First syntax errors in Python and C.", // Started Coding
      "Foundations stop. APS Devlali to DPS Nashik.", // School Days
      "University junction. Sandip University B.Tech CSE.", // Sandip University
      "Lead car. Elected Class Representative and Discipline Head.", // Campus Leadership
      "Express sprint. 1st Place at MLH Hack Days with Aarogya.", // MLH Hack Days Win
      "Vision track. Training M2RISK hazard detection models.", // M2RISK & Vision
      "National stage. Smart India Hackathon Top 15 Finalist.", // Smart India Hackathon
      "Next terminal ahead. Engineering secure AI and intelligent tools.", // Cyber & AI Systems
    ],
  },
  // Issue 8 -- Pop Print (Streaming / Hackathon life). Short chat pool + donation alert + donation word-pop.
  popPrint: {
    chat: [
      "1st place!!",
      "pog",
      "aarogya is live",
      "clean python code",
      "model converging",
      "yolo bbox locked",
      "ship the build",
      "W hackathon",
      "green tests baby",
      "the cat is inspecting the logs!",
      "train faster!!",
      "SIH finalists!",
    ],
    donationAlert: "NEW SUPPORTER just sponsored the hackathon pizza run.",
    // Donation alert spawns a giant word-pop (SPEC 2.12 / Issue 8 jaw-drop). ASCII, dev/streaming
    // flavored, no franchise vocabulary (S1).
    donationBoom: "1ST PLACE!",
  },
  // Issue 9 -- Sketchbook (Architecture). Handwritten (Caveat) annotations along the chain
  // Frontend -> API -> Workers -> AI -> DB -> Search -> Desktop.
  sketchbook: {
    annotations: [
      "Frontend: React interface where users track vitals & alerts.",
      "API: Fast, authenticated endpoints verifying every request.",
      "Workers: Background cron and reminder dispatchers.",
      "AI & CV: YOLO & PyTorch models analyzing incoming data.",
      "DB & SQL: Secure storage for patients and traffic datasets.",
      "Engine: High-throughput local pipeline built to survive deadlines.",
    ],
  },
  // Issue 10 -- The Spread. One short constellation label per prior panel (Cover + Issues 1-9),
  // plus the closing caption over the double-page climax.
  spread: {
    constellations: [
      "The Cover", // Cover
      "The Rain", // Issue 1 Noir
      "The Desk", // Issue 2 Desk
      "The City", // Issue 3 Neon
      "The Origin", // Issue 4 Origin
      "The Press", // Issue 5 Press
      "The Headline", // Issue 6 Newsprint
      "The Line", // Issue 7 Screentone
      "The Signal", // Issue 8 Pop Print
      "The Sketch", // Issue 9 Sketchbook
    ],
    closingCaption: "One reader, one thumb, the whole run in a single sky.",
  },
  // Issue 11 -- Letters Page (Terminal). One response per locked content.terminalCommands entry.
  // `resume` is the out-of-stock gag (links.resumePdf empty); `blog` is written but stays hidden
  // until links.blogUrl is set. Email is never printed here -- it renders assembled at runtime (S0.5).
  lettersPage: {
    responses: {
      about: "Ravish Kumar. Full-Stack Developer & AI Engineer at Sandip University (Cybersecurity & Forensics). 1st Place MLH Hack Days winner.",
      projects: "Aarogya [1st Place MLH Health Platform]\nM2RISK [Road Hazard Intelligence with YOLO]\nRAVE [AI Voice Assistant]\nSIH 2025 [Top 15 Finalist]\nNASA Space Apps [Participant]",
      experience: "Class Representative at Sandip University, Discipline Head for Webmaster & eSports Club, Secretary at SEWA Club, and Digital Literacy Volunteer.",
      skills: "Python, React, PyTorch, C/C++, Java, JavaScript, SQL, OpenCV, YOLO, Docker, Linux, Git.",
      contact: "Direct wire: ravishkumar.v1.9@gmail.com | Phone: +91 83790 05723. Based in Nashik, Maharashtra.",
      resume: "Education: B.Tech CSE (Cybersecurity & Forensics) at Sandip University (2025-2029). Contact to request full PDF copy.",
      github: "Opening the archive. Every hackathon commit, model training script, and project repository.",
      linkedin: "Connecting to the professional network. View leadership roles, awards, and credentials.",
      blog: "Dispatches and research notes on Computer Vision and AI systems coming soon.",
      // hidden easter egg -- undocumented, not in content.terminalCommands; the real boss answers
      harley: "Harley here. Fluffy, ~2.5 years old, and project inspector.\nRavish writes the code and trains the models; I keep the bugs away.\nThe real senior engineer on duty.",
    },
    // {cmd} is replaced at runtime with the unrecognized command the visitor typed.
    unknownCommand: "'{cmd}'? Never printed that one. Try 'about', 'projects', 'skills', or 'contact'.",
    backCover: {
      nextIssue: "NEXT ISSUE: B.TECH GRADUATION & AI INNOVATIONS",
      barcode: "200 OK | this issue never 404s | no refunds",
    },
  },
} as const;

// Phase 5 -- The Print Edition. Structural/connective copy ONLY for the static, semantic-DOM
// reading of the comic (reduced-motion / mobile / screen-reader / SEO, zero WebGL). Every issue's
// body copy is REUSED from content/projects/issueCopy above -- never re-typed (S0.5). Section
// titles 0-9 reference issueCopy.spread.constellations (Cover..Issue 9); 10-11 supplied to match.
// PURE ASCII (Turbopack rope bug); no franchise vocabulary (S1). Email is assembled at runtime
// (S0.5) -- contactNote is the label, not the address. Tone: dry, noir-adjacent, first person.
export const printEdition = {
  masthead: {
    title: content.name, // reuse locked name
    dek: "The whole run, set in print -- Full-Stack Developer & AI Engineer (Cybersecurity & Forensics).",
  },
  intro: "This is the comic read flat: every panel pressed to the page, no motion, no camera. Ravish Kumar's journey, hackathon wins, and engineering projects in ink.",
  // 12 pages, Cover..Terminal. Titles reuse issueCopy.spread.constellations (no re-type, S0.5).
  // kicker: optional 3-5 word deck.
  sectionTitles: [
    { title: issueCopy.spread.constellations[0], kicker: "first printing" }, // Cover
    { title: issueCopy.spread.constellations[1], kicker: "one window still lit" }, // Issue 1 Noir
    { title: issueCopy.spread.constellations[2], kicker: "keys under the lamp" }, // Issue 2 Desk
    { title: issueCopy.spread.constellations[3], kicker: "the stack in neon" }, // Issue 3 Neon
    { title: issueCopy.spread.constellations[4], kicker: "kid to engineer" }, // Issue 4 Origin
    { title: issueCopy.spread.constellations[5], kicker: "skills off the line" }, // Issue 5 Press
    { title: issueCopy.spread.constellations[6], kicker: "hackathon wins, front page" }, // Issue 6 Newsprint
    { title: issueCopy.spread.constellations[7], kicker: "station by station" }, // Issue 7 Screentone
    { title: issueCopy.spread.constellations[8], kicker: "live and on air" }, // Issue 8 Pop Print
    { title: issueCopy.spread.constellations[9], kicker: "the architecture, by hand" }, // Issue 9 Sketchbook
    { title: "The Spread", kicker: "the whole run at once" }, // Issue 10 Spread
    { title: "The Letters", kicker: "commands in, answers out" }, // Issue 11 Terminal
  ],
  skipLinkLabel: "Skip to the Print Edition",
  toReaderLabel: "Read the Print Edition",
  toExperienceLabel: "Watch the animated version",
  altText: {
    coverDesk: "Cover art: a developer at a desk in headphones, silhouetted against a lit monitor.",
    mascot: "Harley, the fluffy golden-brown tabby cat mascot, seated and watching the desk.",
    noirWindow: "A lone figure at a single lit window on a dark, rain-streaked block.",
    originKid: "A student at a computer, one cursor blinking in the dark.",
    originCologne: "Arriving at Sandip University campus with ambition and code.",
    pressHarley: "Front-page newsprint photo of Harley, the golden-brown tabby mascot, on duty.",
    backCoverHarley: "Back-cover portrait of Harley, the golden-brown tabby mascot.",
  },
  contactNote: "Write to ravishkumar.v1.9@gmail.com or call +91 83790 05723 (Nashik, Maharashtra).",
  // Fires once in the DevTools console on every load (both paths). Headline logs styled;
  // lines log plain, then the GitHub address (links.githubUrl -- never retyped here).
  consoleEgg: {
    headline: "YOU FOUND THE SOURCE",
    lines: [
      "Peeking behind the ink at this hour. Everyone's a detective.",
      "Harley signed off on every line down here -- she's the senior mascot.",
      "Ravish built the pipelines. The rest of the run is on file:",
    ],
  },
} as const;

// The 404 page (app/not-found.tsx -- emitted as out/404.html by the static
// export, which GitHub Pages serves for any unknown path). Styled from the
// Print Edition sheet: same paper, same lettering, no WebGL. The barcode line
// answers lettersPage.backCover.barcode ("this issue never 404s") with the one
// page that does. PURE ASCII (Turbopack rope bug); same dry, first-person tone.
export const notFound = {
  kicker: "Issue 404 -- panel not printed",
  title: "MISSING PANEL",
  dek: "This page fell out of the binding.",
  intro: "The address is real; the art is not. Somewhere between the plate and the press this panel came out blank -- so here is the gutter where it should have been.",
  gutterKicker: "the gutter -- nothing printed here",
  gutterNote: "art was supposed to go here",
  // Named, not sampled: lettering.onomatopoeia.impact is a pool the scenes draw
  // from at random, so indexing it would let an ordinary content edit silently
  // reletter this page (PR #76 review, finding 2).
  boom: "KRAKA-THOOM",
  terminal: {
    request: "GET /this-page",
    response:
      "404 -- not in this printing.\nNothing was lost. It was never drawn.\nTry the cover; the run starts at panel one.",
  },
  cta: "BACK TO THE COVER",
  nextIssue: "NEXT PANEL: THE COVER",
  metaTitle: "404 -- Missing Panel",
  barcode: "404 | the one page that does | still no refunds",
} as const;
