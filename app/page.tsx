"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

export default function Home() {
  const nav = [
    { label: "Home", href: "#home" },
    { label: "Projects", href: "#projects" },
    { label: "Technology", href: "#technology" },
    { label: "Certifications", href: "#certifications" },
    { label: "Academic History", href: "#academic" },
    { label: "Contact", href: "#contact" },
  ] as const;

  const certificates = [
    {
      title: "Web Development (HTML, CSS, JS)",
      org: "Add your platform / institute",
      year: "2024",
      note: "Hands-on projects + fundamentals",
    },
    {
      title: "Programming / DSA",
      org: "Add your platform / institute",
      year: "2024",
      note: "Problem-solving practice",
    },
    {
      title: "Core CS / CSE Coursework",
      org: "University Coursework",
      year: "2025",
      note: "OS, DBMS, CN, OOP, etc.",
    },
  ] as const;

  const projects = [
    {
      title: "Project One",
      subtitle: "A modern web app",
      description:
        "Briefly describe what it does, what you built, and the outcome (speed, UX, clarity, etc.).",
      tags: ["HTML", "CSS", "JavaScript"],
      links: { demo: "#", code: "#" },
    },
    {
      title: "Project Two",
      subtitle: "UI-focused build",
      description:
        "Keep it concrete: features, audience, what problem it solves, and what you learned.",
      tags: ["Frontend", "Responsive", "UI"],
      links: { demo: "#", code: "#" },
    },
    {
      title: "Project Three",
      subtitle: "Learning-to-production",
      description:
        "Mention the core feature, the tech used, and one detail you're proud of (performance, accessibility, structure).",
      tags: ["APIs", "Auth", "Design"],
      links: { demo: "#", code: "#" },
    },
  ] as const;

  const techItems = useMemo(
    () =>
      [
        {
          name: "HTML",
          icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/html5.svg",
          tone: "from-orange-500/18 to-amber-400/8",
        },
        {
          name: "CSS",
          icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/css3.svg",
          tone: "from-sky-500/18 to-indigo-400/8",
        },
        {
          name: "JavaScript",
          icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/javascript.svg",
          tone: "from-yellow-400/18 to-lime-400/8",
        },
        {
          name: "TypeScript",
          icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/typescript.svg",
          tone: "from-blue-500/18 to-cyan-400/8",
        },
        {
          name: "React",
          icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/react.svg",
          tone: "from-cyan-400/18 to-sky-400/8",
        },
        {
          name: "Next.js",
          icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/nextdotjs.svg",
          tone: "from-zinc-300/10 to-zinc-300/5",
        },
        {
          name: "Tailwind",
          icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/tailwindcss.svg",
          tone: "from-fuchsia-400/14 to-indigo-400/8",
        },
        {
          name: "Git/GitHub",
          icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/github.svg",
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
          period: "2021 — 2025",
          title: "B.Tech in Computer Science & Engineering",
          org: "Your College / University Name",
          grade: "CGPA: 8.xx / 10",
          points: ["Final year student", "Coursework: OS, DBMS, CN, OOP, etc."],
        },
        {
          period: "2019 — 2021",
          title: "Higher Secondary (12th)",
          org: "Your School Name",
          grade: "Percentage: xx%",
          points: ["Science stream", "Mathematics & fundamentals"],
        },
        {
          period: "2018 — 2019",
          title: "Secondary (10th)",
          org: "Your School Name",
          grade: "Percentage: xx%",
          points: ["Strong base", "Consistent academics"],
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

  return (
    <div className="min-h-screen bg-[#070A12] text-white">
      {/* Cursor follower */}
      <div
        ref={cursorOuterRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[60] hidden h-7 w-7 rounded-full border border-white/15 bg-white/[0.03] backdrop-blur md:block"
        style={{ transform: "translate3d(-100px, -100px, 0)" }}
      />
      <div
        ref={cursorInnerRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[61] hidden h-2 w-2 rounded-full bg-white/70 md:block"
        style={{ transform: "translate3d(-100px, -100px, 0)" }}
      />

      {/* Background (kept subtle + professional) */}
      <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-28 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-indigo-500/18 blur-[140px]" />
        <div className="absolute -bottom-28 right-[-120px] h-[520px] w-[520px] rounded-full bg-fuchsia-500/14 blur-[160px]" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_520px_at_18%_8%,rgba(255,255,255,0.05),transparent_60%),radial-gradient(700px_420px_at_82%_18%,rgba(255,255,255,0.04),transparent_60%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Top bar */}
        <header
          className={[
            "sticky top-0 z-20 -mx-4 border-b bg-[#070A12]/75 px-4 py-3 backdrop-blur sm:-mx-6 sm:px-6 sm:py-4",
            scrolled
              ? "border-white/12 shadow-[0_10px_30px_-20px_rgba(0,0,0,0.9)]"
              : "border-white/10",
          ].join(" ")}
        >
          <div className="flex items-center justify-between gap-4">
            {/* Brand (more professional/creative) */}
            <a
              href="#home"
              className="group inline-flex items-center gap-3 font-semibold tracking-tight"
            >
              <span className="relative inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl border border-white/12 bg-white/5">
                <span
                  aria-hidden
                  className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(24px 24px at 30% 20%, rgba(99,102,241,0.28), transparent 60%), radial-gradient(24px 24px at 70% 80%, rgba(217,70,239,0.22), transparent 60%)",
                  }}
                />
                <span className="relative text-sm font-semibold text-white/90">
                  SN
                </span>
              </span>

              <span className="leading-tight">
                <span className="block text-sm text-white/55">Srutik</span>
                <span className="block text-base text-white">Nandaniya</span>
              </span>

              <span className="hidden text-xs text-white/40 sm:inline">
                • Portfolio
              </span>
            </a>

            <nav className="hidden items-center gap-1 md:flex">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-3 py-2 text-sm text-white/70 transition hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <a
                href="#contact"
                className="hidden rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#070A12] transition hover:bg-white/90 sm:inline-flex"
              >
                Contact
              </a>

              <button
                type="button"
                aria-label="Open menu"
                onClick={() => setMobileNavOpen((v) => !v)}
                className="inline-flex items-center justify-center rounded-2xl border border-white/12 bg-white/5 px-3 py-2 text-sm font-semibold text-white/90 transition hover:bg-white/8 md:hidden"
              >
                <span className="sr-only">Menu</span>
                <span className="grid gap-1">
                  <span className="block h-0.5 w-5 bg-white/80" />
                  <span className="block h-0.5 w-5 bg-white/80" />
                  <span className="block h-0.5 w-5 bg-white/80" />
                </span>
              </button>
            </div>
          </div>

          {mobileNavOpen && (
            <div className="mt-4 md:hidden">
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-3 backdrop-blur">
                <div className="grid gap-1">
                  {nav.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileNavOpen(false)}
                      className="rounded-2xl px-4 py-3 text-sm text-white/80 transition hover:bg-white/6 hover:text-white"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
                <div className="mt-2 border-t border-white/10 pt-2">
                  <a
                    href="#contact"
                    onClick={() => setMobileNavOpen(false)}
                    className="inline-flex w-full items-center justify-center rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-[#070A12] transition hover:bg-white/90"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
          )}
        </header>

        {/* ✅ Recommended order starts here */}
        <main id="home" className="py-10 sm:py-16">
          {/* HOME */}
          <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur sm:p-10">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div className="mx-auto w-full max-w-sm lg:order-2">
                <div className="relative">
                  <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-br from-indigo-500/25 via-fuchsia-500/14 to-white/10 blur-xl" />
                  <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/5 p-3">
                    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.6rem] border border-white/10 bg-black/20">
                      <Image
                        src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80"
                        alt="Srutik Nandaniya"
                        fill
                        sizes="(max-width: 1024px) 90vw, 420px"
                        className="object-cover"
                        priority
                      />
                    </div>

                    <div className="mt-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                      <div className="text-sm font-semibold">Srutik Nandaniya</div>
                      <div className="mt-1 text-xs text-white/65">
                        Computer Science & Engineering • 2025
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:order-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                    Final-year CSE
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                    Frontend • UI
                  </span>
                </div>

                <h1 className="mt-4 text-balance text-3xl font-semibold leading-[1.1] tracking-tight sm:mt-5 sm:text-5xl">
                  Srutik Nandaniya
                </h1>

                <p className="mt-3 max-w-2xl text-balance text-sm leading-relaxed text-white/70 sm:mt-4 sm:text-lg">
                  I'm a final-year Computer Science & Engineering student. I enjoy
                  building clean, responsive interfaces and I'm looking to apply my
                  skills in a professional environment while growing in the tech
                  industry.
                </p>

                <dl className="mt-5 grid gap-3 sm:mt-6 sm:grid-cols-3">
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <dt className="text-sm font-semibold">Role</dt>
                    <dd className="mt-1 text-sm text-white/65">
                      Frontend Developer (Student)
                    </dd>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <dt className="text-sm font-semibold">Focus</dt>
                    <dd className="mt-1 text-sm text-white/65">
                      UI, responsive design, JavaScript
                    </dd>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <dt className="text-sm font-semibold">Looking for</dt>
                    <dd className="mt-1 text-sm text-white/65">
                      Internship / entry-level
                    </dd>
                  </div>
                </dl>

                <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center">
                  <a
                    href="#projects"
                    className="inline-flex items-center justify-center rounded-2xl bg-indigo-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-400"
                  >
                    View Projects
                  </a>

                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-2xl border border-white/12 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/8"
                  >
                    Contact Me
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* PROJECTS */}
          <section id="projects" className="mt-12 sm:mt-20">
            <div className="flex items-end justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  Projects
                </h2>
                <p className="mt-2 text-sm text-white/65">
                  Selected work—replace titles, links, and descriptions with your real projects.
                </p>
              </div>
              <div className="hidden text-sm text-white/60 sm:block">
                Demos • code • outcomes
              </div>
            </div>

            <div className="mt-7 grid gap-4 lg:grid-cols-3">
              {projects.map((p) => (
                <article
                  key={p.title}
                  className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] transition hover:-translate-y-0.5 hover:bg-white/[0.05]"
                >
                  {/* "screenshot" graphic placeholder */}
                  <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/25">
                    <div className="h-28 w-full bg-[linear-gradient(110deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02),rgba(255,255,255,0.06))]" />
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100"
                      style={{
                        background:
                          "radial-gradient(500px 120px at 20% 0%, rgba(99,102,241,0.16), transparent 60%), radial-gradient(420px 120px at 80% 20%, rgba(217,70,239,0.12), transparent 60%)",
                      }}
                    />
                  </div>

                  <div className="mt-5 flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-semibold tracking-tight">
                        {p.title}
                      </h3>
                      <p className="mt-1 text-sm text-white/60">{p.subtitle}</p>
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-white/70">
                    {p.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/70"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center gap-2">
                    <a
                      href={p.links.demo}
                      className="inline-flex flex-1 items-center justify-center rounded-2xl bg-white px-4 py-2.5 text-sm font-semibold text-[#070A12] transition hover:bg-white/90"
                    >
                      Live Demo
                    </a>
                    <a
                      href={p.links.code}
                      className="inline-flex flex-1 items-center justify-center rounded-2xl border border-white/12 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white/85 transition hover:bg-white/8"
                    >
                      Code
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* TECHNOLOGY / SKILLS */}
          <section id="technology" className="mt-12 sm:mt-20">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-10">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                    Technology
                  </h2>
                  <p className="mt-2 text-sm text-white/65">
                    Select a skill — the logo comes forward.
                  </p>
                </div>
                <div className="text-sm text-white/60">Minimal motion, classic feel</div>
              </div>

              <div className="mt-7 grid gap-4 lg:mt-8 lg:grid-cols-[1fr_0.95fr]">
                {/* Left: selector */}
                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/20 p-5">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_320px_at_20%_10%,rgba(99,102,241,0.10),transparent_60%),radial-gradient(560px_280px_at_80%_20%,rgba(217,70,239,0.08),transparent_60%)]"
                  />
                  <div className="relative flex flex-wrap gap-2">
                    {techItems.map((t) => {
                      const isActive = activeTech.name === t.name;
                      return (
                        <button
                          key={t.name}
                          type="button"
                          onClick={() => setActiveTech(t)}
                          className={[
                            "group relative overflow-hidden rounded-2xl border px-4 py-2 text-sm transition",
                            isActive
                              ? "border-white/20 bg-white/10 text-white"
                              : "border-white/10 bg-white/5 text-white/75 hover:bg-white/8 hover:text-white",
                          ].join(" ")}
                        >
                          <span
                            aria-hidden
                            className={[
                              "pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100",
                              "bg-gradient-to-br",
                              t.tone,
                            ].join(" ")}
                          />
                          <span className="relative">{t.name}</span>
                        </button>
                      );
                    })}
                  </div>

                  <p className="relative mt-4 text-xs leading-relaxed text-white/55">
                    Tip: keep your skills list honest. Replace these with your real strengths.
                  </p>
                </div>

                {/* Right: "3D" logo stage (no text box) */}
                <div className="perspective-1000 relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.02] p-4 sm:p-5">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-indigo-500/10 blur-3xl animate-breathe"
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -left-16 -bottom-16 h-60 w-60 rounded-full bg-fuchsia-500/8 blur-3xl animate-breathe"
                    style={{ animationDelay: "0.8s" }}
                  />

                  <div className="preserve-3d relative h-[280px] w-full sm:h-[360px]">
                    {techItems.map((t, i) => {
                      const isActive = activeTech.name === t.name;
                      const pos = techLayout[i % techLayout.length];

                      const baseTransform = `translate(-50%, -50%) rotateX(${pos.rx}deg) rotateY(${pos.ry}deg) translateZ(10px) scale(${pos.s})`;
                      const activeTransform =
                        "translate(-50%, -50%) translateZ(190px) rotateX(0deg) rotateY(0deg) scale(1.12)";

                      return (
                        <button
                          key={t.name}
                          type="button"
                          onClick={() => setActiveTech(t)}
                          aria-label={`Select ${t.name}`}
                          className={[
                            "absolute select-none rounded-[26px] border border-white/12 bg-black/25 p-4 sm:rounded-[28px] sm:p-5",
                            "shadow-[0_22px_60px_-40px_rgba(0,0,0,0.95)] backdrop-blur",
                            "transition-[transform,opacity,filter,top,left] duration-700 ease-[cubic-bezier(.2,.8,.2,1)]",
                            "hover:border-white/18",
                            isActive
                              ? "z-20 opacity-100"
                              : "z-10 opacity-85 hover:opacity-95",
                            !isActive ? "animate-logo-float" : "",
                          ].join(" ")}
                          style={{
                            top: isActive ? "50%" : pos.top,
                            left: isActive ? "50%" : pos.left,
                            transform: isActive ? activeTransform : baseTransform,
                            filter: isActive ? "saturate(1.1)" : "saturate(0.9)",
                            animationDelay: `${i * 0.35}s`,
                          }}
                        >
                          <div
                            aria-hidden
                            className={[
                              "pointer-events-none absolute inset-0 rounded-[26px] opacity-70 sm:rounded-[28px]",
                              "bg-gradient-to-br",
                              t.tone,
                            ].join(" ")}
                          />
                          <div className="relative flex items-center justify-center">
                            <div
                              className={[
                                "relative h-[88px] w-[88px] sm:h-[110px] sm:w-[110px]",
                                "drop-shadow-[0_18px_22px_rgba(0,0,0,0.55)]",
                                "transition-transform duration-700 ease-[cubic-bezier(.2,.8,.2,1)]",
                                isActive ? "scale-105" : "scale-100",
                              ].join(" ")}
                            >
                              <img
                                src={t.icon}
                                alt={t.name}
                                loading="lazy"
                                decoding="async"
                                className="h-full w-full object-contain [filter:brightness(0)_invert(1)]"
                              />
                            </div>
                          </div>
                        </button>
                      );
                    })}

                    {/* subtle "floor" */}
                    <div
                      aria-hidden
                      className="preserve-3d absolute inset-x-8 bottom-5 h-14 rounded-full bg-white/[0.03] blur-md sm:inset-x-10 sm:bottom-6 sm:h-16"
                      style={{ transform: "rotateX(70deg) translateZ(-40px)" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CERTIFICATIONS */}
          <section id="certifications" className="mt-12 sm:mt-20">
            <div className="flex items-end justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  Certifications
                </h2>
                <p className="mt-2 text-sm text-white/65">
                  Add your real certificate titles and verification links if available.
                </p>
              </div>
            </div>

            <div className="mt-7 grid gap-3">
              {certificates.map((c, idx) => (
                <div
                  key={`${c.title}-${idx}`}
                  className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 transition hover:bg-white/[0.05]"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <div className="text-base font-semibold">{c.title}</div>
                      <div className="mt-1 text-sm text-white/65">{c.org}</div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/70">
                      {c.year}
                    </div>
                  </div>
                  <div className="mt-3 text-sm text-white/65">{c.note}</div>
                </div>
              ))}
            </div>
          </section>

          {/* ACADEMIC HISTORY */}
          <section id="academic" className="mt-12 sm:mt-20">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-10">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                    Academic History
                  </h2>
                  <p className="mt-2 text-sm text-white/65">
                    Concise summary of education and grades.
                  </p>
                </div>
              </div>

              <div className="relative mt-7 overflow-hidden rounded-3xl border border-white/10 bg-black/20 p-5 sm:mt-8 sm:p-6">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-14 -top-14 h-48 w-48 rounded-full bg-indigo-500/12 blur-3xl"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute -left-16 -bottom-16 h-56 w-56 rounded-full bg-fuchsia-500/10 blur-3xl"
                />

                <div
                  aria-hidden
                  className="absolute left-4 top-6 bottom-6 w-px bg-white/10"
                />

                <ol className="relative pl-10">
                  {education.map((e, idx) => (
                    <li key={`${e.period}-${idx}`} className="relative pb-7 last:pb-0">
                      <span className="absolute left-4 top-[6px] h-4 w-4 -translate-x-1/2 rounded-full border border-white/15 bg-[#070A12]">
                        <span className="absolute inset-0.5 rounded-full bg-white/10" />
                      </span>

                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <div className="text-sm font-semibold text-white/90">
                          {e.title}
                        </div>
                        <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                          {e.period}
                        </div>
                      </div>

                      <div className="mt-1 text-sm text-white/65">{e.org}</div>

                      <div className="mt-2 inline-flex rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/75">
                        {e.grade}
                      </div>

                      <ul className="mt-3 grid gap-1">
                        {e.points.map((p) => (
                          <li key={p} className="text-sm text-white/65">
                            <span className="mr-2 text-white/35">•</span>
                            {p}
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </section>

          {/* CONTACT */}
          <section id="contact" className="mt-12 pb-12 sm:mt-20 sm:pb-20">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-7 backdrop-blur sm:p-10">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Contact
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/70">
                Add your real email and profiles so it's easy to reach you.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <a
                  href="mailto:youremail@example.com"
                  className="rounded-3xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/8"
                >
                  <div className="text-sm font-semibold">Email</div>
                  <div className="mt-1 text-sm text-white/65">
                    youremail@example.com
                  </div>
                </a>

                <a
                  href="#"
                  className="rounded-3xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/8"
                >
                  <div className="text-sm font-semibold">LinkedIn</div>
                  <div className="mt-1 text-sm text-white/65">Add your link</div>
                </a>

                <a
                  href="#"
                  className="rounded-3xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/8"
                >
                  <div className="text-sm font-semibold">GitHub</div>
                  <div className="mt-1 text-sm text-white/65">Add your link</div>
                </a>
              </div>

              <div className="mt-8 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-sm text-white/55 sm:flex-row sm:items-center">
                <div>© {new Date().getFullYear()} Srutik Nandaniya</div>
                <div className="text-white/50">Classic • minimal • professional</div>
              </div>
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
            "border border-white/12 bg-white/10 text-white shadow-[0_10px_30px_-18px_rgba(0,0,0,0.9)] backdrop-blur",
            "transition hover:bg-white/14",
            showTop ? "opacity-100" : "pointer-events-none opacity-0",
          ].join(" ")}
        >
          <span className="text-lg leading-none">↑</span>
        </button>
      </div>
    </div>
  );
}
