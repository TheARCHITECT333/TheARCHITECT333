// Site content. Bundled into the app at build time (imported by App.jsx),
// so it is not served as a separate fetchable file.
const config = {
  meta: {
    title: "Subhajeet Kar — Backend Engineer",
    description:
      "Backend & systems engineer building high-throughput data pipelines, low-latency APIs, and the services that scale them — with a strong DSA foundation.",
    favicon: "/favicon.svg",
    accentColor: "#5eead4",
  },
  hero: {
    name: "Subhajeet Kar",
    role: "Software Engineer",
    tagline:
      "I build reliable, high-throughput backend systems from multi-threaded data pipelines to low-latency APIs with enough full-stack range to ship the whole product.",
    location: "Bengaluru, India",
    availability: "",
    resumeUrl: "/resume.pdf",
    cta: [
      { label: "Get in touch", href: "#contact", primary: true },
      { label: "View projects", href: "#projects", primary: false },
    ],
  },
  about: {
    headline: "About",
    body: [
      "I'm a backend engineer who likes the parts users never see - ingestion pipelines, connection pools, auth routing, and the JVM knobs that decide whether a service falls over at 40M rows or hums along. I care about software that is observable, well-tested, and boring in the best way: it just works.",
      "At Ituring.ai I own high-throughput data infrastructure; before that I built backend services on AWS during an SDE internship at Amazon. Most of my wins are measured in tail latency, heap saved, and crashes that stopped happening.",
      "I'm comfortable enough on the frontend (React, Next.js, TypeScript) to build and ship full products end to end -  but my heart is in the systems behind the screen.",
    ],
    highlights: [
      { label: "Rows processed / pipeline", value: "40M+" },
      { label: "Peak JVM heap cut", value: "90%" },
      { label: "API auth latency cut", value: "93%" },
      { label: "Batch processing time", value: "<4s" },
    ],
  },
  skills: [
    {
      category: "Languages",
      items: ["Java", "Python", "C/C++", "TypeScript", "JavaScript"],
    },
    {
      category: "Backend & APIs",
      items: ["Node.js", "REST", "GraphQL", "Multithreading", "JWT Auth"],
    },
    {
      category: "Data & Storage",
      items: ["MySQL", "PostgreSQL", "MongoDB", "MinIO"],
    },
    {
      category: "Infrastructure & DevOps",
      items: ["Docker", "Nginx", "AWS (Lambda, CloudWatch)", "Git/GitHub"],
    },
    {
      category: "Frontend",
      items: ["React", "Next.js", "TypeScript", "Tailwind"],
    },
  ],
  experience: [
    {
      company: "Ituring.ai",
      role: "Software Engineer",
      period: "Aug 2025 — Present",
      location: "Remote",
      summary:
        "Own high-throughput data ingestion and scoring infrastructure on a JVM stack.",
      achievements: [
        "Architected a multi-threaded Producer-Consumer ingestion pipeline scaling async batch scoring to 40M+ row datasets; cut peak JVM heap by 90% (unbounded → 250MB) via bounded ArrayBlockingQueue micro-batching, eliminating recurring OutOfMemoryError crashes.",
        "Prevented MySQL connection-pool exhaustion by decoupling file parsing from DB I/O, cutting active writer threads by 92.8% and achieving sub-4s processing for 6,000-record batches.",
        "Cut API auth routing latency by 99% by replacing a blocking O(N) token scan with an O(1) HashMap lookup, with zero-downtime credential rotation.",
      ],
    },
    {
      company: "Amazon (AWS)",
      role: "Software Development Engineer Intern",
      period: "Jan 2025 — June 2025",
      location: "Remote",
      summary:
        "Built and optimized backend features for an enterprise inventory platform.",
      achievements: [
        "Migrated services to a modular Graphlet architecture, cutting GraphQL load and improving backend scalability.",
        "Upgraded authentication systems using Java, AWS Lambda, and Dagger, strengthening access control and deployment flexibility.",
        "Built and optimized backend features for an enterprise inventory platform handling 150+ daily active users.",
      ],
    },
  ],
  projects: [
    {
      name: "Occasio",
      description:
        "An Eventbrite/Meetup-style events platform with authentication, event management, search, and Stripe checkout - built with async handlers and MongoDB indexing for fast APIs, boosting user engagement by 25%.",
      tags: ["Next.js 14", "TypeScript", "MongoDB", "Clerk", "Stripe", "Tailwind"],
      links: [
        { label: "GitHub", href: "https://github.com/TheARCHITECT333/evently" },
        { label: "Demo", href: "https://events-zeta-two.vercel.app/" },
      ],
      featured: true,
    },
    {
      name: "Z-Run",
      description:
        "A GPS-driven, real-world zombie-survival running game: your phone's location moves your character through actual streets, and zombies chase along real OpenStreetMap roads while losing you behind real buildings. Features a per-frame zombie AI loop with sight- and sound-based hunting, line-of-sight occlusion, road-snapped pathfinding, and multiple pursuer types.",
      tags: ["Next.js 16", "React 19", "TypeScript", "Leaflet", "Overpass API"],
      links: [
        { label: "GitHub", href: "https://github.com/TheARCHITECT333/z-run" },
        { label: "Demo", href: "https://z-run.vercel.app/" },
      ],
      featured: true,
    },
    {
      name: "Image Editor",
      description:
        "An AI image-editing SaaS: background removal, generative fill, object recolor, and restore powered by Cloudinary AI - with Clerk authentication, a MongoDB-backed transformation history, and a Stripe credit system for paid usage.",
      tags: ["Next.js", "TypeScript", "Cloudinary AI", "MongoDB", "Stripe", "Clerk"],
      links: [
        { label: "GitHub", href: "https://github.com/TheARCHITECT333/ImageEditor" },
        { label: "Demo", href: "https://image-editor-gray.vercel.app/" },
      ],
      featured: false,
    },
    {
      name: "Form Builder",
      description:
        "A drag-and-drop form builder: compose custom forms with reorderable fields, publish shareable links, and collect submissions - backed by Prisma/Postgres, Clerk auth, and Zod-validated react-hook-form inputs.",
      tags: ["Next.js", "TypeScript", "dnd-kit", "Prisma", "Clerk", "Zod"],
      links: [
        { label: "GitHub", href: "https://github.com/TheARCHITECT333/Form" },
        { label: "Demo", href: "https://form-rho-henna.vercel.app/" },
      ],
      featured: false,
    },
  ],
  contact: {
    headline: "Let's build something solid",
    body: "Have a backend problem worth solving - a pipeline that keeps falling over, an API that needs to get fast, or a product that needs shipping end to end? I'd love to hear from you.",
    email: "subhajeetkar333@gmail.com",
  },
  socials: [
    { label: "GitHub", href: "https://github.com/TheARCHITECT333" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/subhajeetkar333/" },
    { label: "Email", href: "mailto:subhajeetkar333@gmail.com" },
  ],
  footer: {
    text: "Designed & built by Subhajeet Kar.",
    note: "Built with React + Vite.",
  },
}

export default config
