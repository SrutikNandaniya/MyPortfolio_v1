"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

export default function Home() {
  const nav = useMemo(
    () =>
      [
        { label: "Home", href: "#home" },
        { label: "Experience", href: "#experience" },
        { label: "Projects", href: "#projects" },
        { label: "Technology", href: "#technology" },
        { label: "Academic History", href: "#academic" },
        { label: "Contact", href: "#contact" },
      ] as const,
    []
  );

  const sectionIds = useMemo(
    () => nav.map((n) => n.href.replace("#", "")),
    [nav]
  );

  const certificates = [
    {
      title: "Python for Data Science and AI",
      org: "IBM",
      year: 2025,
    },
    {
      title: "Python Data Analytics",
      org: "Meta",
      year: 2025,
    },
    {
      title: "Data Analysis with Pandas and Python",
      org: "packt",
      year: 2025,
    },
    {
      title: "GenAI-Powered Data Analytics Job Simulation ",
      org: "TATA",
      year: 2025,
    },
    {
      title: "Data Analytics Job Simulation",
      org: "Deloitte",
      year: 2025,
    },
    {
      title: "Certified SAP Technology Consultant",
      org: "SAP",
      year: 2024,
    },
    {
      title: "Python Programming",
      org: "Udemy",
      year: 2024,
    },
  ] as const;

  const allCertificatesHref =
    "https://drive.google.com/drive/folders/1SkYZVxpTE1JfguqfP6lyDN4Ah2yoo1lE"; // <-- replace with your real link

  const projects = [
    {
      title: "Movie Revenue Prediction",
      subtitle: "Data Science & Machine Learning ",
      description:
        "Developed machine learning models to predict movie box office revenue using budget, popularity, and runtime features.Performed data cleaning, feature engineering, EDA, and regression modeling to improve prediction accuracy.",
      tags: ["Linear Regression", "Machine learning", "EDA"],
      links: { demo: "#", code: "#" },
      image: { src: "/Movie.png", alt: "Movie Revenue Prediction" },
    },
    {
      title: "Wandora",
      subtitle: "AI Powered Story Generator",
      description:
        "Developed a privacy-focused Streamlit application for AI-based story generation with secure, anonymous text-to-image visual creation.",
      tags: ["Generative AI", "HuggingFace API", "StreamLit"],
      links: {
        demo: "https://storyai-1.onrender.com",
        code: "https://github.com/SrutikNandaniya/StoryAI_",
      },
      image: { src: "/Wandora.png", alt: "Wandora" },
    },
    {
      title: "Track-My-Gesture",
      subtitle: "Real-Time Hand Gesture Recognition System",
      description:
        "Built a real-time hand gesture recognition system with live accuracy visualization and a responsive frontend interface.",
      tags: ["Teachable Machine", "Hand Gesture Recognition", "Computer Vision"],
      links: {
        demo: "https://ai-gesture-recognization.onrender.com",
        code: "https://github.com/SrutikNandaniya/AI_Gesture_Recognization",
      },
      image: { src: "/Gesture.png", alt: "Track-My-Gesture" },
    },
     {
      title: "Hostel Bro",
      subtitle: "A User-Friendly Computerized Solution for Efficient Hostel Administration.",
      description:
        " The Hostel Management System automates daily hostel operations by replacing manual record-keeping with a user-friendly, computerized system. It improves efficiency, accuracy, and ease of management for hostel administrators.",
      tags: ["Hostel Management", "System Automation", "Student Accommodation"],
      links: {
        demo: "https://hostelbro.onrender.com",
        code: "https://github.com/SrutikNandaniya/HostelBro",
      },
      image: { src: "/hostelbro.png", alt: "HostelBro" },
    },
     {
      title: "JivaCare",
      subtitle: "AI-Powered Digital Companion for Smart Healthcare Access",
      description:
        "JivaCare is an AI-enabled healthcare assistant that simplifies access to medical services, doctor consultations, and health guidance through an intelligent, user-friendly web platform.",
      tags: ["Health Care", "Medical assistant", "Chatbot"],
      links: {
        demo: "https://jiva-care.onrender.com/",
        code: "https://github.com/SrutikNandaniya/JivaCare",
      },
      image: { src: "/jivacare.png", alt: "JivaCare" },
    },
  ] as const;

  const experiences = [
    {
      company: "Aspire Softserv - Ahmedabad ",
      role: "Data Science Intern",
      period: "Jan 2026 — Present",
      description:
        "Worked on various data science projects including house price prediction and customer segmentation. Implemented machine learning algorithms and performed comprehensive data analysis to derive actionable insights.",
      skills: ["Python", "Machine Learning", "Data Analysis"],
    },
    {
      company: "SAP - Remote",
      role: "Data Engineer Intern",
      period: "May 2025 — July 2025",
      description:
        "Designed and implemented data models and provisioned datasets for analytics use cases.",
      skills: ["SAP", "SAP HANA Cloud", "Business Technology Platform (BTP)."],
    },
  ] as const;

  const techItems = useMemo(
    () =>
      [
        {
          name: "Python",
          icon: "https://www.svgrepo.com/show/374016/python.svg",
          tone: "from-orange-500/18 to-amber-400/8",
        },
        {
          name: "Artificial Intelligence",
          icon: "https://www.svgrepo.com/show/388454/robot-one.svg",
          tone: "from-orange-500/18 to-amber-400/8",
        },
        {
          name: "Machine Learning",
          icon: "https://cdn-icons-png.flaticon.com/128/2172/2172891.png",
          tone: "from-orange-500/18 to-amber-400/8",
        },
        {
          name: "SQL",
          icon: "https://icon.icepanel.io/Technology/svg/Azure-SQL-Database.svg",
          tone: "from-orange-500/18 to-amber-400/8",
        },
        {
          name: "EDA",
          icon: "https://www.svgrepo.com/show/530445/data-analysis.svg",
          tone: "from-orange-500/18 to-amber-400/8",
        },
        {
          name: "Pandas",
          icon: "https://icon.icepanel.io/Technology/png-shadow-512/Pandas.png",
          tone: "from-orange-500/18 to-amber-400/8",
        },
        {
          name: "NumPy",
          icon: "https://www.svgrepo.com/show/354127/numpy.svg",
          tone: "from-orange-500/18 to-amber-400/8",
        },
         {
          name: "HuggingFace",
          icon: "https://huggingface.co/datasets/huggingface/brand-assets/resolve/main/hf-logo.svg",
          tone: "from-orange-500/18 to-amber-400/8",
        },
        {
          name: "Jupyter Notebook",
          icon: "https://jupyter.org/assets/homepage/main-logo.svg",
          tone: "from-orange-500/18 to-amber-400/8",
        },

        {
          name: "HTML",
          icon: "https://www.svgrepo.com/show/452228/html-5.svg",
          tone: "from-orange-500/18 to-amber-400/8",
        },
        {
          name: "CSS",
          icon: "https://www.svgrepo.com/show/452185/css-3.svg",
          tone: "from-sky-500/18 to-indigo-400/8",
        },
        {
          name: "Git/GitHub",
          icon: "https://cdn-icons-png.flaticon.com/128/536/536452.png",
          tone: "from-emerald-400/14 to-teal-400/8",
        },
      ] as const,
    []
  );

  const techLayout = useMemo(
    () =>
      [
        { top: "10%", left: "12%", rx: 18, ry: -22, s: 1.0 },
        { top: "18%", left: "66%", rx: 16, ry: 18, s: 0.96 },
        { top: "42%", left: "82%", rx: 14, ry: 26, s: 0.94 },
        { top: "68%", left: "68%", rx: -10, ry: 16, s: 0.96 },
        { top: "78%", left: "28%", rx: -14, ry: -18, s: 0.96 },
        { top: "52%", left: "10%", rx: 12, ry: -24, s: 0.94 },
        { top: "36%", left: "34%", rx: 18, ry: -10, s: 0.92 },
        { top: "30%", left: "52%", rx: 10, ry: 10, s: 0.9 },
      ] as const,
    []
  );

  const education = useMemo(
    () =>
      [
        {
          period: "2022 — 2026",
          title: "B.E. in Computer Science & Engineering",
          org: "R. N. G. Patel Institute of Technology,Bardoli, Gujarat, India",
          grade: "CGPA: 8.67 / 10",
        },
        {
          period: "2020 — 2022",
          title: "Higher Secondary (12th)",
          org: "R.G.A.S. High School, Vapi, Gujarat, India",
          grade: "Percentage: 63%",
        },
        {
          period: "2019 — 2020",
          title: "Secondary (10th)",
          org: "Shree Swaminarayan Gurukul,Vapi,Gujarat,India  ",
          grade: "Percentage: 72%",
        },
      ] as const,
    []
  );

  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTech, setActiveTech] = useState<(typeof techItems)[number]>(
    techItems[0]
  );
  const [showTop, setShowTop] = useState(false);

  const [activeSection, setActiveSection] =
    useState<(typeof nav)[number]["href"]>("#home");

  // NEW: desktop nav "active pill" indicator (beautiful sliding highlight)
  const navWrapRef = useRef<HTMLDivElement | null>(null);
  const navItemRefs = useRef<Array<HTMLAnchorElement | null>>([]);
  const [navIndicator, setNavIndicator] = useState<{
    left: number;
    width: number;
    opacity: number;
  }>({ left: 0, width: 0, opacity: 0 });

  type Theme = "light" | "dark";
  const [theme, setTheme] = useState<Theme>("light"); // Default to light

  // Cursor follower (subtle + classic)
  const cursorOuterRef = useRef<HTMLDivElement | null>(null);
  const cursorInnerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;
      setScrolled(y > 8);
      setShowTop(y > 500);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem("theme");
      const prefersDark =
        window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false;

      const initial: Theme =
        saved === "light" || saved === "dark"
          ? saved
          : prefersDark
            ? "dark"
            : "light";

      setTheme(initial);
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    const isDark = theme === "dark";
    document.documentElement.classList.toggle("dark", isDark);
    try {
      window.localStorage.setItem("theme", theme);
    } catch {
      // ignore
    }
  }, [theme]);

  useEffect(() => {
    const outer = cursorOuterRef.current;
    const inner = cursorInnerRef.current;
    if (!outer || !inner) return;

    // avoid showing on touch devices
    const canHover =
      typeof window !== "undefined" &&
      window.matchMedia?.("(hover: hover)").matches;
    if (!canHover) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let x = mouseX;
    let y = mouseY;

    const outerSize = 28;
    const innerSize = 8;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    let raf = 0;
    const loop = () => {
      x += (mouseX - x) * 0.14;
      y += (mouseY - y) * 0.14;

      outer.style.transform = `translate3d(${x - outerSize / 2}px, ${y - outerSize / 2}px, 0)`;
      inner.style.transform = `translate3d(${mouseX - innerSize / 2}px, ${mouseY - innerSize / 2}px, 0)`;

      raf = window.requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf = window.requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (elements.length === 0) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

        if (!visible?.target?.id) return;
        setActiveSection(`#${visible.target.id}`);
      },
      {
        // activates a section as it crosses the upper-middle of the viewport
        root: null,
        threshold: [0.12, 0.2, 0.35],
        rootMargin: "-18% 0px -64% 0px",
      }
    );

    elements.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [sectionIds]);

  // NEW: keep the active indicator aligned on section change + resize
  useEffect(() => {
    const update = () => {
      const wrap = navWrapRef.current;
      if (!wrap) return;

      const idx = nav.findIndex((n) => n.href === activeSection);
      const el = idx >= 0 ? navItemRefs.current[idx] : null;
      if (!el) return;

      const a = el.getBoundingClientRect();
      const w = wrap.getBoundingClientRect();

      setNavIndicator({
        left: a.left - w.left,
        width: a.width,
        opacity: 1,
      });
    };

    // run after layout settles
    const raf = window.requestAnimationFrame(update);
    window.addEventListener("resize", update, { passive: true });

    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener("resize", update);
    };
  }, [activeSection, nav]);

  return (
    <div className="min-h-screen bg-[var(--ds-bg)] text-[var(--ds-text)] selection:bg-indigo-100 dark:selection:bg-indigo-900/30 relative">
      {/* Subtle Background Pattern */}
      <div className="pointer-events-none fixed inset-0 z-0 ds-pattern opacity-[0.4] dark:opacity-[0.2]" />
      
      {/* Cursor follower */}
      <div
        ref={cursorOuterRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[60] hidden h-7 w-7 rounded-full border border-black/15 bg-black/[0.03] backdrop-blur dark:border-white/15 dark:bg-white/[0.03] md:block"
        style={{ transform: "translate3d(-100px, -100px, 0)" }}
      />
      <div
        ref={cursorInnerRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[61] hidden h-2 w-2 rounded-full bg-black/70 dark:bg-white/70 md:block"
        style={{ transform: "translate3d(-100px, -100px, 0)" }}
      />

      {/* Background Accents - Studio Lights */}
      <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-[10%] left-[10%] h-[60%] w-[60%] rounded-full bg-[#fdf0d5]/30 blur-[140px] dark:bg-[#d4a373]/10" />
        <div className="absolute top-[20%] -right-[10%] h-[50%] w-[50%] rounded-full bg-[#faedcd]/20 blur-[120px] dark:bg-[#bc6c25]/5" />
        <div className="absolute -bottom-[10%] left-[20%] h-[40%] w-[40%] rounded-full bg-[#e9edc9]/20 blur-[100px] dark:bg-[#606c38]/5" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 z-10">
        {/* Top bar */}
        <header
          className={[
            "sticky top-0 z-50 w-full transition-all duration-500",
            scrolled 
              ? "py-4 bg-[var(--ds-surface)] backdrop-blur-xl border-b border-[var(--ds-border)] shadow-[var(--ds-shadow-tight)]" 
              : "py-8 bg-transparent",
          ].join(" ")}
        >
          <div className="flex items-center justify-between gap-8">
            {/* Brand */}
            <a
              href="#home"
              className="group flex shrink-0 items-center gap-4 focus-visible:outline-none"
            >
              <div className="relative flex h-11 w-11 items-center justify-center">
                {/* Rotating Outer Ring */}
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#d4a373]/30 animate-spin-slow" />
                
                {/* Inner Logo Circle */}
                <div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-[#d4a373] shadow-lg shadow-[#d4a373]/20 transition-transform duration-500 group-hover:scale-110">
                  <div className="relative h-5 w-5">
                    <Image
                      src="https://cdn-icons-png.flaticon.com/128/15307/15307726.png"
                      alt="S Logo"
                      fill
                      className="object-contain brightness-0 invert"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-[13px] font-bold tracking-[0.25em] uppercase text-[var(--ds-text)] leading-none">
                  Srutik
                </span>
                <span className="mt-1 text-[10px] font-medium tracking-[0.15em] uppercase text-[#d4a373] leading-none">
                  Nandaniya
                </span>
              </div>
            </a>

            {/* Desktop nav */}
            <nav className="hidden lg:block">
              <ul className="flex items-center gap-5 xl:gap-10">
                {nav.map((item) => {
                  const isActive = activeSection === item.href;
                  return (
                    <li key={item.href} className="shrink-0">
                      <a
                        href={item.href}
                        className={[
                          "text-[10px] xl:text-[11px] font-bold uppercase tracking-[0.15em] xl:tracking-[0.25em] transition-all hover:text-[#d4a373]",
                          isActive 
                            ? "text-[#d4a373]" 
                            : "text-[var(--ds-muted)]"
                        ].join(" ")}
                      >
                        {item.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="flex shrink-0 items-center gap-3">
              {/* Theme Toggle */}
              <button
                type="button"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--ds-border)] bg-[var(--ds-surface-2)] text-[var(--ds-text)] transition-all hover:scale-110 active:scale-95"
                aria-label="Toggle theme"
              >
                {theme === "light" ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
                )}
              </button>

              <button
                type="button"
                onClick={() => setMobileNavOpen((v) => !v)}
                className="lg:hidden flex h-10 w-10 items-center justify-center rounded-full border border-[var(--ds-border)] bg-[var(--ds-surface-2)] text-[var(--ds-text)]"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
              </button>
            </div>
          </div>

          {/* Mobile Nav - Improved Spacing */}
          {mobileNavOpen && (
            <div className="absolute top-full left-0 right-0 mt-4 mx-5 overflow-hidden rounded-2xl border border-[var(--ds-border)] bg-[var(--ds-surface)] backdrop-blur-2xl lg:hidden animate-fade-up shadow-2xl">
              <nav className="flex flex-col p-3">
                {nav.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileNavOpen(false)}
                    className="flex items-center px-5 py-4 text-sm font-bold uppercase tracking-widest text-zinc-500 hover:bg-zinc-50 hover:text-indigo-600 dark:text-zinc-400 dark:hover:bg-white/5 dark:hover:text-indigo-400 transition-all"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          )}
        </header>

        <main id="home" className="py-12 sm:py-24">
          {/* HERO SECTION - Redesigned */}
          <section className="relative">
            <div className="grid gap-16 lg:grid-cols-[1fr_400px] lg:items-center">
              <div className="order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#d4a373]/20 bg-[#d4a373]/5 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#d4a373]">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#d4a373] opacity-75"></span>
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#d4a373]"></span>
                  </span>
                  Data Science & AI/ML
                </div>

                <h1 className="mt-8 text-5xl font-light leading-[1.1] tracking-tight text-[var(--ds-text)] sm:text-7xl lg:text-8xl">
                  Designing <span className="italic font-serif text-[#d4a373]">Intelligence</span> with Data.
                </h1>

                <p className="mt-8 max-w-xl text-lg leading-relaxed text-[var(--ds-muted)] sm:text-xl font-light">
                  My Name is Srutik Nandaniya i am a Final-year Computer Science student specializing in Python and Machine Learning. Crafting elegant solutions for complex data challenges.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                  <a
                    href="#projects"
                    className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-[#d4a373] px-10 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-[#bc6c25] shadow-lg shadow-[#d4a373]/20"
                  >
                    View Projects
                    <svg className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </a>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="relative mx-auto aspect-[4/5] w-full max-w-[360px]">
                  <div className="absolute -inset-6 rounded-[4rem] border border-[var(--ds-border)] bg-[var(--ds-surface-2)]/50" />
                  <div className="relative h-full w-full overflow-hidden rounded-[3.5rem] border border-[var(--ds-border)] bg-[var(--ds-surface-2)] shadow-2xl">
                    <Image
                      src="/main.png"
                      alt="Srutik Nandaniya"
                      fill
                      className="object-cover sepia-[0.2] transition-all duration-1000 hover:sepia-0 hover:scale-105"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* EXPERIENCE SECTION */}
          <section id="experience" className="mt-32 sm:mt-48">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-3xl font-light tracking-tight text-[var(--ds-text)] sm:text-5xl">
                  Professional <span className="italic font-serif text-[#d4a373]">Journey</span>
                </h2>
                <p className="mt-4 text-[var(--ds-muted)] font-light">My career path and industry experience.</p>
              </div>
            </div>

            <div className="mt-12 space-y-8">
              {experiences.map((exp, idx) => (
                <div
                  key={idx}
                  className="group relative overflow-hidden rounded-[3rem] border border-[var(--ds-border)] bg-[var(--ds-surface-2)]/40 p-8 transition-all duration-500 hover:bg-[var(--ds-surface-2)] hover:shadow-[var(--ds-shadow-soft)]"
                >
                  <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                    <div className="flex-1">
                      <div className="inline-flex items-center gap-2 rounded-full bg-[#d4a373]/10 px-4 py-1 text-[10px] font-bold uppercase tracking-widest text-[#d4a373]">
                        {exp.period}
                      </div>
                      <h3 className="mt-4 text-2xl font-medium text-[var(--ds-text)]">{exp.role}</h3>
                      <p className="mt-1 text-lg font-serif italic text-[#d4a373]">{exp.company}</p>
                      <p className="mt-4 max-w-3xl text-[var(--ds-muted)] font-light leading-relaxed">
                        {exp.description}
                      </p>
                      <div className="mt-6 flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-full border border-[var(--ds-border)] bg-white/50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[var(--ds-muted)] dark:bg-white/5"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="hidden md:block">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--ds-border)] bg-white shadow-sm dark:bg-zinc-800">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-[#d4a373]"
                        >
                          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* PROJECTS SECTION - Redesigned */}
          <section id="projects" className="mt-32 sm:mt-48">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-3xl font-light tracking-tight text-[var(--ds-text)] sm:text-5xl">Selected <span className="italic font-serif text-[#d4a373]">Works</span></h2>
                <p className="mt-4 text-[var(--ds-muted)] font-light">A curated selection of research and development projects.</p>
              </div>
            </div>

            <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((p) => (
                <article
                  key={p.title}
                  className="group flex flex-col rounded-[3rem] border border-[var(--ds-border)] bg-[var(--ds-surface-2)]/40 p-5 transition-all duration-500 hover:bg-[var(--ds-surface-2)] hover:shadow-[var(--ds-shadow-soft)]"
                >
                  <div className="relative aspect-[16/11] overflow-hidden rounded-[2.5rem] bg-[var(--ds-surface-2)]">
                    <Image
                      src={p.image.src}
                      alt={p.image.alt}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110 sepia-[0.1]"
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex flex-wrap gap-3">
                      {p.tags.slice(0, 2).map((t) => (
                        <span key={t} className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#d4a373]">
                          {t}
                        </span>
                      ))}
                    </div>
                    <h3 className="mt-4 text-xl font-medium leading-tight text-[var(--ds-text)]">{p.title}</h3>
                    <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-[var(--ds-muted)] font-light">
                      {p.description}
                    </p>
                    
                    <div className="mt-auto pt-8 flex gap-4">
                      <a
                        href={p.links.demo}
                        className="flex-1 rounded-full bg-[#d4a373] py-3.5 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-[#bc6c25]"
                      >
                        Demo
                      </a>
                      <a
                        href={p.links.code}
                        className="flex-1 rounded-full border border-[var(--ds-border)] py-3.5 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--ds-text)] transition-all hover:bg-white dark:hover:bg-zinc-800"
                      >
                        Code
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* TECHNOLOGY SECTION - Redesigned */}
          <section id="technology" className="mt-32 sm:mt-48">
            <div className="rounded-[4rem] border border-[var(--ds-border)] bg-[var(--ds-surface-2)]/30 p-8 sm:p-20">
              <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
                <div>
                  <h2 className="text-3xl font-light tracking-tight text-[var(--ds-text)] sm:text-5xl">Technical <span className="italic font-serif text-[#d4a373]">Expertise</span></h2>
                  <p className="mt-6 text-lg leading-relaxed text-[var(--ds-muted)] font-light">
                    Specialized in building intelligent systems using industry-standard tools and methodologies.
                  </p>
                  
                  <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
                    {techItems.map((t) => (
                      <button
                        key={t.name}
                        onClick={() => setActiveTech(t)}
                        className={[
                          "flex items-center gap-3 rounded-2xl border p-4 transition-all",
                          activeTech.name === t.name
                            ? "border-[#d4a373] bg-white text-[#d4a373] shadow-sm"
                            : "border-[var(--ds-border)] bg-transparent text-[var(--ds-muted)] hover:border-[#d4a373]/30"
                        ].join(" ")}
                      >
                        <div className="h-4 w-4 relative opacity-70">
                          <Image src={t.icon} alt={t.name} fill unoptimized className="object-contain" />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-widest">{t.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="perspective-1000 relative h-[400px] w-full">
                  <div className="preserve-3d relative h-full w-full">
                    {techItems.map((t, i) => {
                      const isActive = activeTech.name === t.name;
                      const pos = techLayout[i % techLayout.length];
                      return (
                        <div
                          key={t.name}
                          className={[
                            "absolute transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]",
                            isActive ? "z-30 scale-125 opacity-100" : "z-10 opacity-40 grayscale"
                          ].join(" ")}
                          style={{
                            top: isActive ? "50%" : pos.top,
                            left: isActive ? "50%" : pos.left,
                            transform: isActive 
                              ? "translate(-50%, -50%) translateZ(100px)" 
                              : `translate(-50%, -50%) rotateX(${pos.rx}deg) rotateY(${pos.ry}deg) scale(${pos.s})`,
                          }}
                        >
                          <div className="relative h-24 w-24 rounded-3xl border border-[var(--ds-border)] bg-[var(--ds-surface)] p-5 shadow-2xl backdrop-blur-xl">
                            <Image src={t.icon} alt={t.name} fill unoptimized className="object-contain p-5" />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ACADEMIC & CERTS - Redesigned */}
          <div className="mt-32 grid gap-16 sm:mt-48 lg:grid-cols-2">
            <section id="academic">
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Education</h2>
              <div className="mt-10 space-y-6">
                {education.map((e) => (
                  <div key={e.period} className="group relative rounded-[2rem] border border-[var(--ds-border)] bg-[var(--ds-surface-2)] p-8 transition-all hover:bg-[var(--ds-bg)]">
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">{e.period}</div>
                    <h3 className="mt-3 text-xl font-bold">{e.title}</h3>
                    <p className="mt-2 text-sm text-[var(--ds-muted)]">{e.org}</p>
                    <div className="mt-6 inline-flex rounded-xl bg-zinc-100 px-4 py-2 text-xs font-bold dark:bg-zinc-800">
                      {e.grade}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="certifications">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Certifications</h2>
                <a href={allCertificatesHref} target="_blank" className="text-xs font-bold uppercase tracking-widest text-indigo-600 hover:underline dark:text-indigo-400">View All</a>
              </div>
              <div className="mt-10 space-y-4">
                {certificates.slice(0, 5).map((c, idx) => (
                  <div key={idx} className="flex items-center justify-between rounded-2xl border border-[var(--ds-border)] bg-[var(--ds-surface-2)] p-5 transition-all hover:translate-x-2">
                    <div>
                      <div className="text-sm font-bold">{c.title}</div>
                      <div className="mt-1 text-[10px] font-bold uppercase tracking-wider text-[var(--ds-muted)]">{c.org}</div>
                    </div>
                    <div className="text-[10px] font-black text-zinc-400">{c.year}</div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* CONTACT SECTION - Redesigned */}
          <section id="contact" className="mt-32 pb-24 sm:mt-48">
            <div className="rounded-[3rem] bg-zinc-900 p-10 text-white dark:bg-white dark:text-zinc-900 sm:p-20">
              <div className="max-w-2xl">
                <h2 className="text-4xl font-black tracking-tight sm:text-6xl">Let's build something extraordinary.</h2>
                <p className="mt-8 text-lg text-zinc-400 dark:text-zinc-500">
                  I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                </p>
                
                <div className="mt-12 flex flex-wrap gap-6">
                  <a href="mailto:srutikndn@gmail.com" className="text-2xl font-bold underline decoration-indigo-500 decoration-4 underline-offset-8 transition-all hover:text-indigo-400">
                    srutikndn@gmail.com
                  </a>
                </div>

                <div className="mt-16 flex gap-8">
                  {['LinkedIn', 'GitHub'].map((platform) => (
                    <a
                      key={platform}
                      href={platform === 'LinkedIn' ? "https://www.linkedin.com/in/srutiknandaniya/" : "https://github.com/SrutikNandaniya"}
                      className="text-xs font-black uppercase tracking-[0.2em] text-zinc-500 transition-colors hover:text-white dark:hover:text-black"
                    >
                      {platform}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-[var(--ds-border)] pt-12 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--ds-muted)] sm:flex-row">
              <div>© {new Date().getFullYear()} Srutik Nandaniya</div>
              
            </div>
          </section>
        </main>

        {/* Back to top */}
        <button
          type="button"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={[
            "fixed bottom-5 right-5 z-30 inline-flex h-11 w-11 items-center justify-center rounded-2xl",
            "border border-black/10 bg-white/70 text-zinc-900 shadow-[0_10px_30px_-18px_rgba(0,0,0,0.25)] backdrop-blur",
            "transition hover:bg-white",
            "dark:border-white/12 dark:bg-white/10 dark:text-white dark:shadow-[0_10px_30px_-18px_rgba(0,0,0,0.9)] dark:hover:bg-white/14",
            showTop ? "opacity-100" : "pointer-events-none opacity-0",
          ].join(" ")}
        >
          <span className="text-lg leading-none">↑</span>
        </button>
      </div>
    </div>
  );
}
