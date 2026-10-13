import Image from "next/image";
import ThemeToggle from "./components/theme-toggle";
import CopyEmail from "./components/copy-email";

const projects = [
  {
    name: "Rasid",
    type: "Personal Finance App",
    description:
      "A personal finance platform for tracking balances, income, expenses, budgets, savings goals, alerts, categories, and recent transactions.",
    stack: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "TanStack Query", "Zod", "Zustand", "Recharts"],
    github: "https://github.com/abdelkhalekligflam/Rasid",
    image: "/rasid-dashboard.png.jpg",
    video: "/rasid-demo.mp4",
    challenge: "Simplifying personal finance tracking.",
    solution: "One dashboard for transactions, budgets and savings goals.",
  },
  {
    name: "Taskora",
    type: "Productivity App",
    description:
      "A modern productivity application built with Next.js and Supabase, focused on a clean experience, reusable UI, and scalable app structure.",
    stack: ["Next.js", "React", "TypeScript", "Supabase", "Tailwind CSS", "shadcn/ui", "Radix UI"],
    github: "https://github.com/abdelkhalekligflam/Taskora",
    image: null,
    video: "/taskora-demo-optimized.mp4",
    challenge: "Organizing daily work and long-term goals.",
    solution: "A responsive productivity interface with reusable components.",
  },
  {
    name: "Atelier",
    type: "Inventory & Repairs SaaS",
    description: "A business management platform for inventory, repairs, sales and arrivals, including offline-first workflows.",
    stack: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    github: "https://github.com/abdelkhalekligflam/Atelier",
    live: "https://atelier-delta-five.vercel.app/",
    image: null,
    video: "/atelier-demo.mp4",
    challenge: "Managing workshop stock, repairs and sales.",
    solution: "A central management workspace with offline workflows.",
  }
];

const additionalProjects = [
  {
    "name": "DataPath",
    "type": "Data Analytics Learning",
    "description": "Self-paced data analyst learning platform with progress tracking and bilingual lessons.",
    "category": "Education",
    "live": "https://datapath-ten.vercel.app/",
    "github": "https://github.com/abdelkhalekligflam/datapath"
  },
  {
    "name": "ATAR",
    "type": "World History Timeline",
    "description": "An educational timeline exploring major events in world history.",
    "category": "Education",
    "live": null,
    "github": "https://github.com/abdelkhalekligflam/ATAR"
  },
  {
    "name": "IGGOULFANE",
    "type": "Honey Cooperative",
    "description": "An Arabic-first storefront for a natural honey cooperative in Ouarzazate.",
    "category": "E-commerce",
    "live": "https://iggoulfane.vercel.app/",
    "github": "https://github.com/abdelkhalekligflam/iggoulfane"
  }
];

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Zustand",
  "Git",
  "GitHub",
  "shadcn/ui",
  "Chakra UI",
  "Supabase",
];


const experience = [
  { date:"Mar — Jun 2026", role:"Front-End Developer Intern", company:"IMFA Solution", detail:"Built front-end experiences for LFAHEM, an AI assistant for Moroccan administrative procedures and tourism, with native Darija support." },
  { date:"Oct 2025 — Feb 2026", role:"Front-End Developer Intern", company:"Algorium Academy", detail:"Developed responsive interfaces and React components while collaborating on front-end projects and UI best practices." }
];
const credentials = ["HTML","CSS","JavaScript","TypeScript","Soft Skills","React","Next.js"];

export default function Home() {
  return <main id="top" className="site"><a className="skip-link" href="#work">Skip to projects</a>
    <header className="site-header">
      <nav className="nav-shell" aria-label="Main navigation">
        <a href="#top" className="wordmark"><span className="brand-symbol">a.</span><span>Abdelkhalek <span className="brand-muted">Ligflam</span></span></a>
        <div className="nav-links"><a href="#work">Work</a><a href="#about">About</a><a href="#experience">Experience</a><a href="#contact">Contact</a></div>
        <div className="nav-actions"><ThemeToggle/><a className="nav-cta" href="mailto:akhaelk@gmail.com">Let’s talk <span aria-hidden="true">↗</span></a></div>
      </nav>
    </header>

    <div className="layout">
      <section className="hero" aria-labelledby="hero-heading">
        <div className="hero-copy">
          <p className="eyebrow"><span className="availability-dot"/> AVAILABLE FOR OPPORTUNITIES <span className="eyebrow-divider">/</span> OUARZAZATE, MOROCCO</p>
          <h1 id="hero-heading">Building digital<br/><span className="hero-accent">experiences</span><br/>that feel right<span className="hero-period">.</span></h1>
          <p className="hero-description">I’m Abdelkhalek, a front-end developer crafting thoughtful interfaces and real-world products with React, Next.js and TypeScript.</p>
          <div className="hero-actions"><a className="button-primary" href="#work">Explore selected work <span>↗</span></a><a className="button-secondary" href="/Abdelkhalek-Ligflam-CV.pdf" download>Download résumé <span>↓</span></a></div>
          <div className="hero-foot"><span>FRONT-END DEVELOPMENT</span><span>DESIGN-MINDED ENGINEERING</span><span>2026 ©</span></div>
        </div>
        <div className="hero-art" aria-hidden="true"><div className="hero-grid"/><div className="orb orb-one"/><div className="orb orb-two"/><div className="art-frame"><div className="art-line"/><div className="art-line short"/><div className="art-card"><span className="art-dot"/><span className="art-code">&lt; build /&gt;</span><span className="art-arrow">↗</span></div></div><span className="art-caption">DESIGN × CODE</span></div>
      </section>

      <section id="work" className="section work-section">
        <div className="section-heading"><div><p className="eyebrow">01 / THE WORK</p><h2>Selected <em>projects.</em></h2></div><p className="section-intro">A collection of products I’ve built, from personal finance to productivity and business tools.</p></div>
        <div className="featured-grid">
          {projects.map((project,index)=><article className="feature-card" key={project.name}>
            <div className="feature-media">
              <div className="browser">
                <div className="browser-top"><div className="browser-dots"><i/><i/><i/></div><span>{project.name.toLowerCase()} / product preview</span><span className="browser-expand" aria-hidden="true">↗</span></div>
                {project.video ? <video key={project.video} className="feature-video" autoPlay muted loop playsInline preload="auto" controls poster={project.image ?? undefined} aria-label={project.name+" application demonstration"}><source src={project.video} type="video/mp4"/>Your browser does not support video.</video> : project.image ? <div className="feature-image"><Image src={project.image} fill alt={project.name+" dashboard"} sizes="(max-width: 900px) 100vw, 50vw" className="object-contain"/></div> : null}
              </div>
            </div>
            <div className="feature-content"><div className="feature-meta"><span>0{index+1} / FEATURED PROJECT</span><span>{project.type}</span></div><h3>{project.name}<span className="title-arrow">↗</span></h3><p className="feature-description">{project.description}</p><div className="feature-insight"><div><strong>The challenge</strong><span>{project.challenge}</span></div><div><strong>The solution</strong><span>{project.solution}</span></div></div><div className="tag-list">{project.stack.map(tech=><span key={tech}>{tech}</span>)}</div><div className="feature-links">{"live" in project && project.live && <a href={project.live} target="_blank" rel="noreferrer">Visit website ↗</a>}<a href={project.github} target="_blank" rel="noreferrer">View source code ↗</a></div></div>
          </article>)}
        </div>
      </section>

      <section className="section more-section" id="all-projects"><div className="section-heading"><div><p className="eyebrow">02 / EXPLORATIONS</p><h2>More <em>things I’ve built.</em></h2></div></div><div className="more-grid">{additionalProjects.map(project=><article className="more-card" key={project.name}><div className="more-top"><span>{project.category}</span><span>↗</span></div><h3>{project.name}</h3><p className="more-type">{project.type}</p><p>{project.description}</p><div className="more-links">{project.live&&<a href={project.live} target="_blank" rel="noreferrer">Live ↗</a>}<a href={project.github} target="_blank" rel="noreferrer">GitHub ↗</a></div></article>)}</div></section>

      <section className="section about-section" id="about"><div className="section-heading"><div><p className="eyebrow">03 / A LITTLE ABOUT ME</p><h2>Curiosity meets <em>craft.</em></h2></div></div><div className="about-grid"><div className="about-statement">I like making complex things feel <span>simple.</span></div><div className="about-body"><p>I'm a front-end developer with a background in Economics and Management. I bring analytical thinking and a product mindset to every interface I build.</p><p>My focus is on responsive, accessible web experiences using React, Next.js, TypeScript and thoughtful design systems.</p><a href="mailto:akhaelk@gmail.com" className="inline-link">More about working together ↗</a></div></div><div className="skills-wrap" id="skills"><p className="eyebrow">TOOLS & TECHNOLOGIES</p><div className="skill-list">{skills.map(skill=><span key={skill}>{skill}</span>)}</div></div></section>

      <section className="section journey-section" id="experience"><div className="section-heading"><div><p className="eyebrow">04 / THE JOURNEY</p><h2>Experience & <em>learning.</em></h2></div></div><div className="timeline">{experience.map(item=><article className="timeline-row" key={item.company}><span className="timeline-date">{item.date}</span><div><h3>{item.role}</h3><p className="timeline-company">{item.company}</p><p>{item.detail}</p></div><span className="timeline-icon">↗</span></article>)}</div><div className="education-grid"><div><p className="eyebrow">EDUCATION</p><h3>Frontend Web Development Bootcamp</h3><p>JobInTech · Ouarzazate · 2025</p></div><div><p className="eyebrow">EDUCATION</p><h3>Bachelor’s Degree in Economics & Management</h3><p>Ibn Zohr University · FSJES Agadir</p></div></div><div className="certifications"><p className="eyebrow">CERTIFICATIONS</p><div>{credentials.map(item=><span key={item}>{item} ↗</span>)}</div></div></section>

      <section className="contact-section" id="contact"><p className="eyebrow">05 / GET IN TOUCH</p><h2>Have something<br/><em>in mind?</em></h2><p>I'm open to front-end opportunities, collaborations and ambitious projects. Let's make something great together.</p><div className="contact-actions"><a className="button-primary" href="mailto:akhaelk@gmail.com">Start a conversation ↗</a><CopyEmail/></div><div className="contact-socials"><a href="https://github.com/abdelkhalekligflam" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/abdelkhalek-ligflam" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="/Abdelkhalek-Ligflam-CV.pdf" download>Résumé ↓</a></div></section>
      <footer className="site-footer"><span>© 2026 Abdelkhalek Ligflam</span><span>Made with intention, built with Next.js.</span><a href="#top">Back to top ↑</a></footer>
    </div>
  </main>;
}
