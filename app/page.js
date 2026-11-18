import Image from "next/image";
import {
  ArrowDown, ArrowUpRight, Code2, Layers3, MonitorSmartphone,
  Mail, MapPin, Github, Linkedin, ExternalLink, Sparkles, Menu
} from "lucide-react";

const projects = [
  {
    number: "01",
    name: "TechStore",
    type: "E-commerce website",
    description: "A high-tech online store concept featuring product presentation and an e-commerce-oriented interface.",
    tags: ["Next.js", "JavaScript", "CSS", "Responsive UI"],
    url: "https://techstore-eight-omega.vercel.app/",
    visual: "tech",
    label: "TECH / STORE"
  },
  {
    number: "02",
    name: "LocaTunisie",
    type: "Rental listing platform",
    description: "A web platform dedicated to rental listings, with sign-in, registration and contact areas.",
    tags: ["Next.js", "JavaScript", "CSS", "Responsive UI"],
    url: "https://locatunisie-two.vercel.app/",
    visual: "loca",
    label: "FIND YOUR PLACE"
  },
  {
    number: "03",
    name: "Animal World",
    type: "Animal-focused website",
    description: "A website about animals, with organized content, categories and clear user navigation.",
    tags: ["HTML", "CSS", "JavaScript", "Front-End"],
    url: "https://animal-world-liart.vercel.app/",
    visual: "animal",
    label: "ANIMAL WORLD"
  },
  {
    number: "04",
    name: "Massage Site",
    type: "Service showcase website",
    description: "A modern, responsive website presenting massage services and their details.",
    tags: ["Next.js", "JavaScript", "CSS", "Responsive UI"],
    url: "https://massage-site-sandy.vercel.app/",
    visual: "massage",
    label: "RELAX & RESTORE"
  }
];

const skills = [
  { title: "Front-End Development", items: ["HTML5", "CSS3", "JavaScript", "Next.js", "Responsive Design"] },
  { title: "UI / UX Design", items: ["Figma", "Wireframing", "Prototyping", "Interface Design"] },
  { title: "Tools & Productivity", items: ["Microsoft Word", "Microsoft Excel", "Digital Tools", "Documentation"] },
  { title: "Networks & IT", items: ["Network Administration", "Cisco", "Inter-VLAN", "IT Maintenance"] }
];

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className="nav-wrap">
        <nav className="nav container">
          <a className="brand" href="#home"><span className="brand-mark">S</span><span>souad<span className="brand-dot">.</span></span></a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
          <a className="nav-cta" href="mailto:erouisouade2@gmail.com">Let&apos;s talk <ArrowUpRight size={15}/></a>
        </nav>
      </header>

      <section className="hero container" id="home">
        <div className="hero-copy">
          <div className="availability"><span className="availability-dot"/> FRONT-END DEVELOPER · NEXT.JS</div>
          <p className="hero-intro">Hello, I&apos;m</p>
          <h1>Souad <span>Eroui</span><i>.</i></h1>
          <h2>I build thoughtful<br/><span>digital experiences.</span></h2>
          <p className="hero-description">I&apos;m a Front-End Developer focused on building responsive websites and clean, user-friendly interfaces with modern web technologies.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17}/></a>
            <a className="text-link" href="#contact">Get in touch <ArrowDown size={15}/></a>
          </div>
          <div className="hero-meta"><span><MapPin size={14}/> Tunisia</span><span className="meta-line"/><span>Available for remote opportunities</span></div>
        </div>
        <div className="hero-visual">
          <div className="photo-halo"/>
          <div className="photo-frame">
            <Image src="/souad-profile.jpg" alt="Portrait of Souad Eroui" fill priority sizes="(max-width: 800px) 75vw, 390px" className="profile-photo"/>
          </div>
          <div className="floating-card code-card"><span className="code-icon"><Code2 size={18}/></span><div><b>Clean code</b><small>Thoughtful details</small></div></div>
          <div className="floating-card role-card"><span className="role-star"><Sparkles size={17}/></span><div><b>Front-End</b><small>Web developer</small></div></div>
          <div className="orbit orbit-one"/><div className="orbit orbit-two"/>
        </div>
        <a className="scroll-note" href="#about"><span/> SCROLL TO DISCOVER</a>
      </section>

      <section className="about section container" id="about">
        <SectionHeading eyebrow="A LITTLE ABOUT ME" title="Turning ideas into interfaces." />
        <div className="about-grid">
          <div className="about-big"><span className="quote-mark">“</span><p>I enjoy bringing ideas to life through <em>clean, responsive</em> and engaging web experiences.</p></div>
          <div className="about-copy">
            <p>I&apos;m a Higher Technician in Business Computing, specialized in web development. I work on Front-End projects, create responsive websites and build interfaces with Next.js.</p>
            <p>I value clear communication, organization and continuous learning, and I&apos;m comfortable collaborating remotely with clients and teams.</p>
            <div className="about-facts"><div><strong>2023</strong><span>Graduated</span></div><div><strong>4</strong><span>Featured projects</span></div><div><strong>Remote</strong><span>Work preference</span></div></div>
          </div>
        </div>
      </section>

      <section className="projects section" id="projects">
        <div className="container">
          <SectionHeading eyebrow="SELECTED WORK" title="Projects I&apos;ve worked on." text="A selection of web projects showcasing my Front-End practice and interface work." />
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <a className={`project-visual ${project.visual}`} href={project.url} target="_blank" rel="noreferrer" aria-label={`Open ${project.name}`}>
                  <div className="browser-bar"><span/><span/><span/><small>souad.work / {project.name.toLowerCase().replace(" ", "-")}</small></div>
                  <div className="visual-content"><span className="visual-kicker">{project.label}</span><div className="visual-title">{project.name}</div><div className="visual-lines"><i/><i/><i/></div><div className="visual-pill">Explore <ArrowUpRight size={12}/></div></div>
                  <span className="visual-index">{project.number}</span>
                </a>
                <div className="project-info">
                  <div className="project-title-row"><div><span className="project-type">{project.type}</span><h3>{project.name}</h3></div><a className="project-open" href={project.url} target="_blank" rel="noreferrer" aria-label={`Visit ${project.name}`}><ArrowUpRight size={19}/></a></div>
                  <p>{project.description}</p>
                  <div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                  <a className="visit-link" href={project.url} target="_blank" rel="noreferrer">View live project <ExternalLink size={13}/></a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="skills section container" id="skills">
        <SectionHeading eyebrow="WHAT I WORK WITH" title="Skills & tools." text="The technologies and tools I use to shape ideas into practical web experiences." />
        <div className="skills-grid">
          {skills.map((group, index) => <div className="skill-card" key={group.title}><span className="skill-number">0{index + 1}</span><h3>{group.title}</h3><div className="skill-tags">{group.items.map(item => <span key={item}>{item}</span>)}</div></div>)}
        </div>
      </section>

      <section className="education section">
        <div className="container education-grid">
          <div><SectionHeading eyebrow="EDUCATION" title="The foundation." /></div>
          <div className="timeline">
            <div className="timeline-item"><span>2023</span><div><h3>BTS in Business Computing</h3><p>Private School, Tozeur · Very Good</p></div></div>
            <div className="timeline-item"><span>2021</span><div><h3>BTP in Business Computing</h3><p>Private School, Tozeur · Very Good</p></div></div>
            <div className="timeline-item"><span>2019</span><div><h3>Technical Sciences Baccalaureate</h3><p>Lycée 02 Mars 1934, Tozeur</p></div></div>
          </div>
        </div>
      </section>

      <section className="contact section container" id="contact">
        <div className="contact-panel">
          <div className="contact-glow"/>
          <span className="eyebrow">HAVE A PROJECT IN MIND?</span>
          <h2>Let&apos;s build something<br/><em>meaningful.</em></h2>
          <p>I&apos;m open to Front-End and Next.js opportunities, including remote collaboration.</p>
          <a className="button button-light" href="mailto:erouisouade2@gmail.com">Say hello <ArrowUpRight size={17}/></a>
          <div className="contact-email"><Mail size={16}/> erouisouade2@gmail.com</div>
        </div>
      </section>

      <footer className="footer container" id="footer">
        <a className="brand" href="#home"><span className="brand-mark">S</span><span>souad<span className="brand-dot">.</span></span></a>
        <p>Designed & built with care by Souad Eroui.</p>
        <span>© {new Date().getFullYear()} Souad Eroui</span>
      </footer>
    </main>
  );
}
