"use client";

import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { ArrowDownRight, ArrowLeft, ArrowUpRight, Check, Download, Github, Instagram, Linkedin, Mail, Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { experiences, projects, supportCapabilities, technologies } from "@/data/portfolio";
import { ImagePreview } from "@/components/ui/ImagePreview";

const reveal = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: .6 } } };
const METRIC_SNAPSHOT_COUNT = 4;
const techMarks: Record<string, { mark: string; tone: string }> = {
  "Node.js": { mark: "JS", tone: "text-green-300 bg-green-400/10 border-green-300/30" },
  "Express.js": { mark: "EX", tone: "text-paper bg-white/10 border-white/20" },
  Laravel: { mark: "LA", tone: "text-red-300 bg-red-400/10 border-red-300/30" },
  PHP: { mark: "PHP", tone: "text-indigo-300 bg-indigo-400/10 border-indigo-300/30" },
  JavaScript: { mark: "JS", tone: "text-yellow-200 bg-yellow-300/10 border-yellow-200/30" },
  Python: { mark: "PY", tone: "text-blue-200 bg-blue-300/10 border-blue-200/30" },
  MySQL: { mark: "SQL", tone: "text-sky-200 bg-sky-300/10 border-sky-200/30" },
  MongoDB: { mark: "M", tone: "text-green-200 bg-green-300/10 border-green-200/30" },
  PostgreSQL: { mark: "PG", tone: "text-blue-200 bg-blue-300/10 border-blue-200/30" },
  "AWS EC2": { mark: "EC2", tone: "text-orange-200 bg-orange-300/10 border-orange-200/30" },
  "AWS ECS": { mark: "ECS", tone: "text-orange-200 bg-orange-300/10 border-orange-200/30" },
  "AWS ALB": { mark: "ALB", tone: "text-orange-200 bg-orange-300/10 border-orange-200/30" },
  Splunk: { mark: "S", tone: "text-pink-200 bg-pink-300/10 border-pink-200/30" },
  Datadog: { mark: "DD", tone: "text-purple-200 bg-purple-300/10 border-purple-200/30" },
  Jenkins: { mark: "J", tone: "text-red-200 bg-red-300/10 border-red-200/30" },
  "Linux CLI": { mark: ">_", tone: "text-paper bg-white/10 border-white/20" },
  Git: { mark: "G", tone: "text-orange-200 bg-orange-300/10 border-orange-200/30" },
  GitLab: { mark: "GL", tone: "text-orange-200 bg-orange-300/10 border-orange-200/30" },
  "GitHub Desktop": { mark: "GH", tone: "text-paper bg-white/10 border-white/20" },
  Postman: { mark: "PM", tone: "text-orange-200 bg-orange-300/10 border-orange-200/30" },
  "API Integration": { mark: "API", tone: "text-lime bg-lime/10 border-lime/30" }
};

function TechMark({ name }: { name: string }) {
  const tech = techMarks[name] ?? { mark: "✦", tone: "text-lime bg-lime/10 border-lime/30" };
  return <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border font-mono text-[10px] font-bold ${tech.tone}`} aria-hidden="true">{tech.mark}</span>;
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [lightTheme, setLightTheme] = useState(false);
  const links = [["Home", "#home"], ["About", "#about"], ["Experience", "#experience"], ["Projects", "#projects"], ["Contact", "#contact"]];
  useEffect(() => {
    const storedTheme = window.localStorage.getItem("portfolio-theme");
    const savedLightTheme = storedTheme === "light";
    setLightTheme(savedLightTheme);
    document.documentElement.classList.toggle("light", savedLightTheme);
  }, []);
  const toggleTheme = () => {
    const nextLightTheme = !lightTheme;
    setLightTheme(nextLightTheme);
    document.documentElement.classList.toggle("light", nextLightTheme);
    window.localStorage.setItem("portfolio-theme", nextLightTheme ? "light" : "dark");
  };
  return <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-ink/85 backdrop-blur-xl">
    <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8" aria-label="Main navigation">
      <Link href="/#home" className="font-display text-xl font-bold tracking-tighter focus-ring">MNRL<span className="text-lime">.</span></Link>
      <div className="hidden items-center gap-8 md:flex">{links.map(([label, href]) => <Link key={href} href={href} className="focus-ring text-sm text-muted transition hover:text-paper">{label}</Link>)}</div>
      <div className="flex items-center gap-2">
        <button onClick={toggleTheme} aria-label={lightTheme ? "Switch to dark theme" : "Switch to light theme"} className="focus-ring rounded-full border border-white/15 p-2 text-muted transition hover:border-lime hover:text-lime">
          {lightTheme ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
        </button>
        <Link href="#contact" className="hidden rounded-full border border-lime/50 px-4 py-2 text-sm text-lime transition hover:bg-lime hover:text-ink md:block">Let&apos;s talk <ArrowUpRight className="ml-1 inline h-3.5 w-3.5" /></Link>
        <button onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} className="focus-ring rounded-lg p-2 md:hidden">{open ? <X /> : <Menu />}</button>
      </div>
    </nav>
    <AnimatePresence>{open && <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="border-t border-white/10 md:hidden">
      <div className="flex flex-col gap-5 px-5 py-6">{links.map(([label, href]) => <Link onClick={() => setOpen(false)} key={href} href={href} className="text-lg text-muted hover:text-lime">{label}</Link>)}</div>
    </motion.div>}</AnimatePresence>
  </header>;
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  return <motion.div style={{ scaleX, transformOrigin: "0%" }} className="fixed left-0 right-0 top-0 z-[60] h-1 bg-lime" />;
}

export function Hero() {
  return <section id="home" className="grid-pattern noise relative overflow-hidden px-5 pb-20 pt-36 lg:px-8 lg:pb-28 lg:pt-48">
    <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.1fr_.9fr]">
      <motion.div initial="hidden" animate="show" variants={reveal}>
        <div className="mb-7 flex items-center gap-2 text-sm text-lime"><span className="h-2 w-2 animate-pulse rounded-full bg-lime" /> Available for meaningful work</div>
        <p className="mb-5 text-sm uppercase tracking-[.25em] text-muted">Hi, I&apos;m Ahmad Manarul Baehaqi</p>
        <h1 className="font-display text-5xl font-medium leading-[.98] tracking-[-.06em] sm:text-7xl lg:text-[clamp(4rem,7vw,7.3rem)]">Building digital<br /><span className="text-lime">experiences,</span><br />keeping systems reliable.</h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">I&apos;m a Software Engineer with hands-on experience in L2 Application Support and Software Development. I enjoy building reliable applications, investigating technical issues, improving system performance, and creating impactful digital solutions.</p>
        <div className="mt-9 flex flex-wrap gap-3"><Link href="#projects" className="focus-ring rounded-full bg-lime px-5 py-3 font-medium text-ink transition hover:-translate-y-1">Explore My Work <ArrowDownRight className="ml-2 inline h-4 w-4" /></Link><a href="#downloads" className="focus-ring rounded-full border border-white/20 px-5 py-3 font-medium transition hover:border-lime hover:text-lime">Download CV <Download className="ml-2 inline h-4 w-4" /></a></div>
      </motion.div>
      <motion.div initial={{ opacity: 0, scale: .94, rotate: 2 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: .8, delay: .15 }} className="relative mx-auto w-full max-w-[500px]">
        <div className="absolute -right-3 top-8 rounded-full bg-lime px-3 py-2 text-xs font-bold text-ink shadow-[0_0_40px_rgba(196,245,106,.2)]">OPEN TO WORK</div>
        <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/15 bg-panel p-3 shadow-2xl">
          <div className="flex h-full flex-col rounded-[1.5rem] border border-white/10 bg-ink p-5">
            <Image src="/images/profile/profile.jpeg" alt="Ahmad Manarul Baehaqi" fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover opacity-25" />
            <div className="mb-auto flex items-center justify-between text-xs text-muted"><span>ahmad.tsx</span><span className="flex gap-1"><i className="h-2 w-2 rounded-full bg-red-400" /><i className="h-2 w-2 rounded-full bg-yellow-300" /><i className="h-2 w-2 rounded-full bg-lime" /></span></div>
            <div className="py-10 font-mono text-sm leading-8"><p><span className="text-pink-300">const</span> <span className="text-lime">engineer</span> = {"{"}</p><p className="pl-5 text-muted">focus: <span className="text-lime">&quot;reliability&quot;</span>,</p><p className="pl-5 text-muted">craft: <span className="text-lime">&quot;digital products&quot;</span>,</p><p className="pl-5 text-muted">mode: <span className="text-lime">&quot;always learning&quot;</span></p><p>{"};"}</p><p className="mt-5 text-muted"><span className="text-pink-300">return</span> engineer;</p></div>
            <div className="flex items-end justify-between"><div><p className="text-xs text-muted">ROLE</p><p className="mt-1 text-lg">Software Engineer</p></div><div className="flex h-16 w-16 items-center justify-center rounded-full border border-lime/50 text-2xl text-lime">✦</div></div>
          </div>
        </div>
        <div className="absolute -bottom-5 -left-7 rounded-2xl border border-white/15 bg-panel px-4 py-3 text-xs shadow-xl"><span className="text-lime">●</span> Systems stable / ideas moving</div>
      </motion.div>
    </div>
  </section>;
}

export function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return <div className="mb-12 max-w-3xl"><p className="mb-4 text-sm uppercase tracking-[.25em] text-lime">{eyebrow}</p><h2 className="font-display text-4xl tracking-[-.04em] sm:text-6xl">{title}</h2>{copy && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{copy}</p>}</div>;
}

export function TechnologySection() {
  return <section className="border-y border-white/10 bg-panel/40 px-5 py-20 lg:px-8"><div className="mx-auto max-w-7xl"><SectionHeading eyebrow="01 / Toolkit" title="Tools for building, observing, and improving." copy="A practical stack shaped by product development and production support." /><div className="grid gap-4 md:grid-cols-2">{Object.entries(technologies).map(([category, items], i) => <motion.div whileHover={{ y: -4 }} key={category} className="rounded-3xl border border-white/10 bg-panel p-6"><div className="mb-6 flex items-center justify-between"><h3 className="font-display text-xl">{category}</h3><span className="text-sm text-muted">0{i + 1}</span></div><div className="grid grid-cols-2 gap-2 sm:grid-cols-3">{items.map((item) => <div key={item} className="flex items-center gap-2 rounded-2xl border border-white/10 px-2.5 py-2.5 text-sm text-muted transition hover:border-lime/50 hover:text-paper"><TechMark name={item} /><span>{item}</span></div>)}</div></motion.div>)}</div></div></section>;
}

export function AboutSection() {
  const principles = [["BUILD", "Developing web applications, backend systems, and API integrations."], ["MAINTAIN", "Monitoring applications, analyzing logs, and troubleshooting production issues."], ["IMPROVE", "Investigating root causes and improving system reliability."]];
  return <section id="about" className="px-5 py-24 lg:px-8"><div className="mx-auto max-w-7xl"><div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]"><SectionHeading eyebrow="02 / About me" title="Curious by nature. Reliable by practice." /><div><p className="text-2xl leading-relaxed text-paper">I&apos;m a Software Engineer with hands-on experience in L2 Application Support and Software Development. I enjoy building reliable applications, investigating complex technical issues, improving system performance, and creating digital solutions that make an impact.</p><div className="mt-12 grid gap-4 sm:grid-cols-3">{principles.map(([title, copy], i) => <div key={title} className="border-t border-lime pt-4"><span className="text-xs text-lime">0{i + 1}</span><h3 className="mt-6 font-display text-xl">{title}</h3><p className="mt-3 text-sm leading-relaxed text-muted">{copy}</p></div>)}</div></div></div></div></section>;
}

export function ExperienceSection() {
  return <section id="experience" className="bg-panel/40 px-5 py-24 lg:px-8"><div className="mx-auto max-w-7xl"><SectionHeading eyebrow="03 / Experience" title="Building things. Keeping them running." copy="A timeline across software development, data analysis, and application support." /><div className="relative ml-2 border-l border-white/15 pl-8 md:ml-16 md:pl-12">{experiences.map((item, i) => <motion.article initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={reveal} key={`${item.company}-${item.period}`} className="relative mb-12 last:mb-0"><span className="absolute -left-[2.4rem] top-1 h-3 w-3 rounded-full border-2 border-lime bg-ink md:-left-[3.15rem]" /><div className="grid gap-4 md:grid-cols-[.8fr_1.2fr]"><div><p className="text-sm text-lime">{item.period}</p><p className="mt-2 text-sm text-muted">{item.location}</p></div><div><h3 className="font-display text-2xl">{item.position}</h3><p className="mt-1 text-muted">{item.company}</p><p className="mt-4 leading-relaxed text-paper">{item.description}</p><ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">{item.details.map((detail) => <li key={detail} className="flex gap-2"><Check className="mt-1 h-4 w-4 shrink-0 text-lime" />{detail}</li>)}</ul></div></div></motion.article>)}</div></div></section>;
}

function ProjectVisual({ imagePath, name, imageFit }: { imagePath: string; name: string; imageFit?: "cover" | "contain" }) {
  return <div className="relative aspect-[1.65] overflow-hidden rounded-2xl border border-white/10 bg-panel"><ImagePreview src={imagePath} alt={`Project visual for ${name}`} sizes="(max-width: 768px) 100vw, 50vw" className={`${imageFit === "contain" ? "object-contain p-3" : "object-cover"} transition duration-500 group-hover:scale-105`} /></div>;
}

export function ProjectsSection() {
  return <section id="projects" className="px-5 py-24 lg:px-8"><div className="mx-auto max-w-7xl"><SectionHeading eyebrow="04 / Selected work" title="Projects with purpose." copy="Eight projects spanning web applications, mobile backends, APIs, and data analysis." /><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{projects.map((project, i) => <motion.article initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { delay: i * .05, duration: .5 } } }} whileHover={{ y: -6 }} key={project.slug} className={`group rounded-3xl border border-white/10 bg-panel p-3 ${i === 0 || i === 3 ? "md:col-span-2 lg:col-span-2" : ""}`}><ProjectVisual imagePath={project.imagePath} name={project.name} imageFit={project.imageFit} /><div className="p-3"><div className="flex items-start justify-between gap-4"><h3 className="font-display text-xl">{project.name}</h3><Link href={`/projects/${project.slug}`} aria-label={`View details for ${project.name}`} className="focus-ring shrink-0 rounded-full border border-white/15 p-2 text-lime transition group-hover:bg-lime group-hover:text-ink"><ArrowUpRight className="h-4 w-4" /></Link></div><p className="mt-3 text-sm leading-relaxed text-muted">{project.shortDescription}</p><div className="mt-4 flex flex-wrap gap-1.5">{project.technologies.slice(0, 3).map((tech) => <span key={tech} className="rounded-full bg-ink px-2.5 py-1 text-xs text-muted">{tech}</span>)}</div><Link href={`/projects/${project.slug}`} className="mt-5 inline-block text-sm text-lime hover:underline">View details →</Link></div></motion.article>)}</div></div></section>;
}

export function SupportSection() {
  const metricSnapshots = [
    { success: "99.9%", response: "142ms", services: "12 / 12", bars: [92, 76, 100] },
    { success: "99.7%", response: "158ms", services: "11 / 12", bars: [89, 68, 92] },
    { success: "99.8%", response: "136ms", services: "12 / 12", bars: [91, 82, 100] },
    { success: "99.6%", response: "171ms", services: "11 / 12", bars: [86, 61, 90] }
  ];
  const terminalSnapshots = [
    { command: "support --status", health: "stable", incident: "investigating" },
    { command: "logs --tail 20 --level warn", health: "reviewing", incident: "no active incident" },
    { command: "aws ecs describe-services", health: "healthy", incident: "resolved / monitoring" },
    { command: "release --check readiness", health: "ready", incident: "change window open" }
  ];
  const [snapshotIndex, setSnapshotIndex] = useState(0);
  const snapshot = metricSnapshots[snapshotIndex];
  const terminal = terminalSnapshots[snapshotIndex];

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) return;
    const interval = window.setInterval(() => {
      setSnapshotIndex((current) => (current + 1) % METRIC_SNAPSHOT_COUNT);
    }, 2600);
    return () => window.clearInterval(interval);
  }, []);

  return <section className="border-y border-white/10 bg-panel/40 px-5 py-24 lg:px-8"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center"><div><SectionHeading eyebrow="05 / Beyond development" title="Calm systems. Clear signals." copy="Application Support is about making complexity visible, finding the root cause, and keeping people moving." /><div className="grid gap-3 sm:grid-cols-2">{supportCapabilities.map((capability) => <div key={capability} className="flex items-center gap-3 text-sm text-muted"><Check className="h-4 w-4 text-lime" />{capability}</div>)}</div></div><div className="rounded-3xl border border-white/10 bg-ink p-4 shadow-2xl"><div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4 text-xs text-muted"><span>monitoring-dashboard.demo</span><span className="text-lime">● LIVE DEMO SIMULATION</span></div><div className="grid gap-3 sm:grid-cols-3" aria-live="polite">{[["TRANSACTION SUCCESS", snapshot.success, snapshot.bars[0]], ["RESPONSE TIME", snapshot.response, snapshot.bars[1]], ["SERVICES HEALTH", snapshot.services, snapshot.bars[2]]].map(([label, value, bar]) => <div key={label} className="rounded-xl border border-white/10 bg-panel p-4"><p className="text-[10px] text-muted">{label}</p><p className="mt-3 font-display text-2xl text-lime transition-all duration-500">{value}</p><div className="mt-3 h-1 rounded bg-lime/20"><div className="h-full rounded bg-lime transition-all duration-700" style={{ width: `${bar}%` }} /></div></div>)}</div><div className="mt-3 rounded-xl border border-white/10 bg-panel p-4 font-mono text-xs leading-7 text-muted" aria-live="polite"><p><span className="text-lime">$</span> {terminal.command}</p><p>service health ........ <span className="text-lime">{terminal.health}</span></p><p>last incident ........ <span className="text-paper">{terminal.incident}</span></p><p className="mt-2 text-yellow-300">DEMO DATA — ILLUSTRATIVE ONLY</p></div></div></div></section>;
}

export function EducationDownloads() {
  return <section className="px-5 py-24 lg:px-8"><div className="mx-auto max-w-7xl"><div className="grid gap-5 lg:grid-cols-2"><div className="rounded-3xl border border-white/10 bg-panel p-8"><p className="text-sm uppercase tracking-[.2em] text-lime">06 / Education</p><h2 className="mt-8 font-display text-3xl">Sekolah Tinggi Teknologi Terpadu Nurul Fikri</h2><p className="mt-3 text-muted">Bachelor of Informatics Engineering · Graduated</p><div className="mt-8 flex items-end justify-between border-t border-white/10 pt-5"><div><p className="text-xs text-muted">GPA</p><p className="font-display text-3xl text-lime">3.68 <span className="text-base text-muted">/ 4.00</span></p></div><div className="text-right"><p className="text-xs text-muted">FINAL PROJECT</p><p className="mt-1 text-sm">REST API-based Educational<br />Management Information System</p><p className="mt-2 text-sm text-lime">Grade A / 92.10</p></div></div></div><div id="downloads" className="rounded-3xl border border-lime/30 bg-lime p-8 text-ink"><p className="text-sm uppercase tracking-[.2em] opacity-70">Download center</p><h2 className="mt-8 font-display text-4xl tracking-tight">Take the work with you.</h2><p className="mt-4 max-w-md opacity-75">The verified CV is ready to download. The portfolio PDF will appear once it is added.</p><div className="mt-8 flex flex-wrap gap-3"><a href="/files/CV-Ahmad-Manarul-Baehaqi.pdf" download className="focus-ring inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm text-paper transition hover:bg-panel"><Download className="h-4 w-4" /> Download CV</a><span className="rounded-full border border-ink/30 px-4 py-2 text-sm opacity-60">Portfolio not available yet</span></div></div></div></div></section>;
}

export function ContactSection() {
  return <footer id="contact" className="border-t border-white/10 px-5 pb-8 pt-24 lg:px-8"><div className="mx-auto max-w-7xl"><p className="text-sm uppercase tracking-[.25em] text-lime">07 / Contact</p><h2 className="mt-6 max-w-4xl font-display text-5xl tracking-[-.05em] sm:text-7xl">Have a project in mind?<br /><span className="text-lime">Let&apos;s build something meaningful.</span></h2><div className="mt-14 grid gap-8 border-t border-white/10 pt-8 md:grid-cols-2"><a href="mailto:ahmadmanarulbaehaqi@gmail.com" className="focus-ring flex items-center gap-3 text-lg hover:text-lime"><Mail className="h-5 w-5" />ahmadmanarulbaehaqi@gmail.com</a><p className="text-muted">Depok, West Java, Indonesia.</p><div className="flex gap-4 md:col-span-2"><a href="https://www.linkedin.com/in/ahmadmanarulbaehaqi/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="focus-ring rounded-full border border-white/15 p-3 hover:border-lime hover:text-lime"><Linkedin className="h-5 w-5" /></a><a href="https://github.com/AhmadMnrl" target="_blank" rel="noreferrer" aria-label="GitHub" className="focus-ring rounded-full border border-white/15 p-3 hover:border-lime hover:text-lime"><Github className="h-5 w-5" /></a><a href="https://instagram.com/mnrl24_" target="_blank" rel="noreferrer" aria-label="Instagram" className="focus-ring rounded-full border border-white/15 p-3 hover:border-lime hover:text-lime"><Instagram className="h-5 w-5" /></a></div></div><div className="mt-24 flex flex-col justify-between gap-3 border-t border-white/10 pt-5 text-xs text-muted sm:flex-row"><span>© {new Date().getFullYear()} Ahmad Manarul Baehaqi</span><span>Designed for reliable digital experiences.</span></div></div></footer>;
}

export function BackLink() { return <Link href="/#projects" className="inline-flex items-center gap-2 text-sm text-muted transition hover:text-lime"><ArrowLeft className="h-4 w-4" /> Back to projects</Link>; }
