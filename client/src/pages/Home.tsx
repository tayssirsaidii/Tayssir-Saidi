import { useEffect, useState } from "react";
import { ArrowUpRight, BrainCircuit, Check, Code2, Database, Github, Mail, Moon, Network, Phone, Sun, Workflow } from "lucide-react";

type Theme = "light" | "dark";

type Project = {
  title: string;
  description: string;
  tags: string[];
  year: string;
  signal: string;
  repoUrl: string;
  icon: typeof Mail;
};

const projects: Project[] = [
  { title: "AI Customer Support Workflow", description: "An AI-powered workflow that helps automate customer support and respond to incoming requests.", tags: ["n8n", "AI automation", "Customer support"], year: "2026", signal: "Request → understand → respond", repoUrl: "https://github.com/tayssirsaidii/AI-Customer-Support-Workflow", icon: Mail },
  { title: "RAG Pipeline & AI Chatbot", description: "A document-aware chatbot with Google Drive ingestion, Ollama embeddings, Pinecone search, and OpenRouter models.", tags: ["RAG", "Pinecone", "Ollama"], year: "2026", signal: "Ingest → retrieve → answer", repoUrl: "https://github.com/tayssirsaidii/RAG-Pipeline-AI-Chatbot-", icon: BrainCircuit },
  { title: "AI-Based Cyber Threat Detection", description: "A Random Forest classification service using the CICIDS2017 dataset to identify threats and generate security reports.", tags: ["Python", "scikit-learn", "PostgreSQL"], year: "2025", signal: "Dataset → model → report", repoUrl: "https://github.com/tayssirsaidii/AI_Threat_Detction_System", icon: Network },
  { title: "Security Dashboard", description: "A full-stack monitoring dashboard combining React, Node.js, PostgreSQL, Docker, Grafana, and AI anomaly detection.", tags: ["React", "Node.js", "Grafana"], year: "2025", signal: "API → monitor → insight", repoUrl: "https://github.com/tayssirsaidii/Security-Dashboard", icon: Database },
];

const services = [
  { title: "AI workflow automation", description: "Turn repetitive operations into reliable workflows with n8n, APIs, LLMs, and clear human handoffs.", icon: Workflow },
  { title: "AI and machine learning", description: "Prepare data, train models, and build practical classification or anomaly-detection solutions around real business needs.", icon: BrainCircuit },
  { title: "Web applications and APIs", description: "Build clean, responsive interfaces and dependable backend services with React, Node.js, Express, and REST APIs.", icon: Code2 },
  { title: "Data and security systems", description: "Design data flows, dashboards, secure APIs, and monitoring foundations that are easier to trust and maintain.", icon: Database },
];

const skills = ["Python", "JavaScript", "SQL", "React", "Node.js", "Express.js", "scikit-learn", "PostgreSQL", "MongoDB", "Docker", "Git", "n8n"];

function BrandMark() {
  return <span className="brand-mark" aria-hidden="true"><span className="brand-ring brand-ring-one" /><span className="brand-ring brand-ring-two" /><span className="brand-node brand-node-one" /><span className="brand-node brand-node-two" /><span className="brand-node brand-node-three" /><span className="brand-node brand-node-four" /><span className="brand-core" /></span>;
}

function DataMotif() {
  return <div className="motif-strip" aria-hidden="true"><span /><i /><span /><i /><span /></div>;
}

export default function Home() {
  const [theme, setTheme] = useState<Theme>(() => window.localStorage.getItem("tayssir-theme") === "dark" ? "dark" : "light");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("tayssir-theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((current) => current === "dark" ? "light" : "dark");

  return <main className="site-shell">
    <header className="site-header"><div className="container nav-wrap">
      <a className="brand" href="#top" aria-label="Tayssir Saidi home"><BrandMark /><span><strong>Tayssir Saidi</strong><small>Tayssir Saidi</small></span></a>
      <nav className="nav-links" aria-label="Primary navigation"><a href="#services">Skills</a><a href="#work">Work</a><a href="#process">Process</a><a href="#contact">Contact</a></nav>
      <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"} title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}>{theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}</button>
    </div></header>

    <section className="hero" id="top"><div className="container hero-grid">
      <div className="hero-copy"><p className="eyebrow"><span className="status-dot" /> Available for freelance projects</p><h1>Master student in Business Intelligence and Intelligent Systems for Management</h1><p className="hero-lead">I help businesses automate important work, turn data into useful decisions, and ship dependable web products without unnecessary complexity.</p><div className="hero-actions"><a className="button button-primary" href="#contact">Tell me about your project <ArrowUpRight size={17} /></a><a className="button button-secondary" href="#work">See selected work</a></div><div className="trust-row"><span>Python</span><span>AI automation</span><span>Advanced SQL</span><span>Data preparation for AI model training</span><span>Full-stack delivery</span></div></div>
      <div className="hero-visual" aria-label="AI and data science inspired graphic"><div className="network-card"><div className="network-grid" /><div className="network-line line-one" /><div className="network-line line-two" /><div className="network-line line-three" /><div className="network-node node-one" /><div className="network-node node-two" /><div className="network-node node-three" /><div className="network-node node-four" /><div className="network-node node-five" /><div className="network-center"><Network size={34} /></div><div className="data-bars"><span /><span /><span /><span /></div><p>From signal<br /><strong>to solution.</strong></p></div><div className="hero-note note-top">Data-aware by design</div><div className="hero-note note-bottom">Built to be useful</div></div>
    </div></section>

    <section className="section section-alt" id="services"><div className="container"><DataMotif /><div className="section-heading"><p className="section-kicker">How I can help</p><h2>Focused skills for real business problems.</h2><p>I keep the process clear: understand the problem, choose the right level of technology, and deliver something your team can actually use.</p></div><div className="service-grid">{services.map((service) => { const Icon = service.icon; return <article className="service-card" key={service.title}><div className="icon-box"><Icon size={22} /></div><h3>{service.title}</h3><p>{service.description}</p><a href="#contact">Discuss this service <ArrowUpRight size={15} /></a></article>; })}</div></div></section>

    <section className="section work-section" id="work"><div className="container"><DataMotif /><div className="section-heading section-heading-row"><div><p className="section-kicker">Selected work</p><h2>Projects built around automation, intelligence, and trust.</h2></div><p>These projects reflect the kind of systems I enjoy building: useful, measurable, and thoughtfully connected to the people who use them.</p></div><div className="project-grid">{projects.map((project) => { const Icon = project.icon; return <article className="project-card" key={project.title}><div className="project-top"><div className="icon-box"><Icon size={21} /></div><span>{project.year}</span></div><h3>{project.title}</h3><p>{project.description}</p><div className="project-evidence"><span>System signal</span><strong>{project.signal}</strong></div><div className="tag-list">{project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div><a className="project-link" href={project.repoUrl} target="_blank" rel="noreferrer"><Github size={16} /> View on GitHub <ArrowUpRight size={14} /></a></article>; })}</div></div></section>

    <section className="section section-alt" id="process"><div className="container process-layout"><DataMotif /><div className="section-heading"><p className="section-kicker">A simple working relationship</p><h2>Clear communication from first idea to final handoff.</h2><p>You do not need to arrive with a perfect technical brief. A useful conversation is enough to define the next step together.</p></div><div className="process-list"><article className="process-step"><span className="process-number">01</span><div><h3>Understand</h3><p>We clarify the outcome, constraints, users, and the fastest honest path to value.</p></div></article><article className="process-step"><span className="process-number">02</span><div><h3>Build</h3><p>I turn the plan into a focused implementation with regular updates and visible progress.</p></div></article><article className="process-step"><span className="process-number">03</span><div><h3>Improve</h3><p>We test what matters, refine the details, and leave you with something clear to run and maintain.</p></div></article></div></div></section>

    <section className="section skills-section"><div className="container skills-layout"><DataMotif /><div className="section-heading"><p className="section-kicker">Tools I work with</p><h2>A flexible technical toolkit.</h2></div><div className="skills-list"><div className="toolkit-panel"><span>SELECTED SYSTEM PATH</span><code>python → model → api → interface</code></div>{skills.map((skill) => <span className="skill-pill" key={skill}>{skill}</span>)}</div></div></section>

    <section className="section contact-section" id="contact"><div className="container contact-card"><div className="contact-panel"><DataMotif /><p className="section-kicker">Have a project in mind?</p><h2>Let’s make the next step concrete.</h2><p>Tell me what you are trying to improve, automate, or build. I will reply with a practical starting point.</p><div className="contact-actions"><a className="button button-primary" href="mailto:tayssir.saidi@esc.u-manouba.tn">Send an email <ArrowUpRight size={17} /></a><a className="contact-link" href="tel:+21656812045"><Phone size={17} /> +216 56 812 045</a></div></div><div className="contact-list"><div className="contact-item"><Mail size={20} /><div><span>Email</span><a href="mailto:tayssir.saidi@esc.u-manouba.tn">tayssir.saidi@esc.u-manouba.tn</a></div></div><div className="contact-item"><Phone size={20} /><div><span>Based in</span><strong>Tunisia · Available remotely</strong></div></div><div className="contact-item"><Check size={20} /><div><span>Good fit for</span><strong>AI automation, data products, and web systems</strong></div></div></div></div></section>

    <footer className="site-footer"><div className="container footer-inner"><a className="brand" href="#top"><BrandMark /><span><strong>Tayssir Saidi</strong><small>AI/data systems, made practical</small></span></a><p>Tayssir Saidi. Built with clarity.</p></div></footer>
  </main>;
}

// Edit this file first when changing portfolio content. Edit index.css for the visual theme.
// The page is intentionally single-page, local-only, and free from analytics or platform-specific runtime code.
// No customer testimonials are included because no verified source material was provided.
export { BrandMark };
export type { Theme };
