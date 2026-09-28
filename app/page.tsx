import Image from "next/image";

const projects = [
  {
    name: "Rasid",
    type: "Personal Finance App",
    description:
      "A personal finance platform for tracking balances, income, expenses, budgets, savings goals, alerts, categories, and recent transactions.",
    stack: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "TanStack Query", "Zod", "Zustand", "Recharts"],
    github: "https://github.com/abdelkhalekligflam/Rasid",
    image: "/rasid-dashboard.png.jpg",
  },
  {
    name: "Taskora",
    type: "Productivity App",
    description:
      "A modern productivity application built with Next.js and Supabase, focused on a clean experience, reusable UI, and scalable app structure.",
    stack: ["Next.js", "React", "TypeScript", "Supabase", "Tailwind CSS", "shadcn/ui", "Radix UI"],
    github: "https://github.com/abdelkhalekligflam/Taskora",
    image: null,
  },
];

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Supabase",
  "Git",
  "GitHub",
  "Responsive Design",
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#09090b] text-zinc-100">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(99,102,241,0.16),transparent_30%),radial-gradient(circle_at_80%_25%,rgba(59,130,246,0.10),transparent_28%)]" />

      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#09090b]/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="text-sm font-semibold tracking-[0.22em] text-white">
            AKL
          </a>
          <div className="hidden items-center gap-7 text-sm text-zinc-400 md:flex">
            <a className="transition hover:text-white" href="#projects">Projects</a>
            <a className="transition hover:text-white" href="#skills">Skills</a>
            <a className="transition hover:text-white" href="#about">About</a>
            <a className="transition hover:text-white" href="#contact">Contact</a>
          </div>
          <a
            href="https://github.com/abdelkhalekligflam"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-zinc-200 transition hover:border-indigo-400/40 hover:bg-indigo-500/10 hover:text-white"
          >
            GitHub
          </a>
        </nav>
      </header>

      <section id="top" className="relative mx-auto flex min-h-[86vh] max-w-6xl items-center px-6 py-24">
        <div className="max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-400/20 bg-indigo-500/10 px-3 py-1.5 text-xs font-medium text-indigo-300">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
            Available for opportunities
          </div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Front-End Developer
          </p>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.04em] text-white sm:text-6xl md:text-8xl">
            Abdelkhalek
            <span className="block bg-gradient-to-r from-white via-zinc-300 to-indigo-400 bg-clip-text text-transparent">
              Ligflam.
            </span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400 md:text-xl">
            I build modern, responsive web applications with React, Next.js and TypeScript,
            with a focus on clean interfaces, performance, and practical user experiences.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-full bg-indigo-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-400"
            >
              View my work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-zinc-200 transition hover:bg-white/10 hover:text-white"
            >
              Contact me
            </a>
          </div>
        </div>
      </section>

      <section id="projects" className="relative mx-auto max-w-6xl px-6 py-28">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-indigo-400">Selected work</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-5xl">Featured projects</h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-zinc-500">
            Real applications built around useful product ideas, scalable UI, and modern web technologies.
          </p>
        </div>

        <div className="grid gap-6">
          {projects.map((project, index) => (
            <article
              key={project.name}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] transition hover:border-indigo-400/30 hover:bg-white/[0.05]"
            >
              <div className="grid min-h-[360px] lg:grid-cols-[1.1fr_0.9fr]">
                <div className="flex flex-col justify-between p-7 md:p-10">
                  <div>
                    <div className="mb-8 flex items-center justify-between">
                      <span className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
                        0{index + 1} / {project.type}
                      </span>
                      <span className="text-zinc-600 transition group-hover:text-indigo-400">↗</span>
                    </div>
                    <h3 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">{project.name}</h3>
                    <p className="mt-5 max-w-xl text-base leading-7 text-zinc-400">{project.description}</p>
                  </div>
                  <div>
                    <div className="mt-8 flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <span key={item} className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs text-zinc-400">
                          {item}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-indigo-300"
                    >
                      View GitHub repository <span aria-hidden>↗</span>
                    </a>
                  </div>
                </div>

                <div className="relative min-h-[280px] overflow-hidden border-t border-white/10 bg-[#0d0d12] lg:border-l lg:border-t-0">
                  {project.image ? (
                    <div className="absolute inset-5 overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 shadow-2xl">
                      <Image
                        src={project.image}
                        alt={`${project.name} application dashboard`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 45vw"
                        className="object-cover object-left-top transition duration-700 group-hover:scale-[1.025]"
                      />
                      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/5" />
                    </div>
                  ) : (
                    <div className="absolute inset-5 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-500/15 via-zinc-900 to-black p-5 shadow-2xl">
                      <div className="mb-5 flex items-center gap-1.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                        <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                        <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                      </div>
                      <div className="grid h-[calc(100%-28px)] grid-cols-[72px_1fr] gap-4">
                        <div className="rounded-xl border border-white/5 bg-white/[0.03]" />
                        <div className="grid grid-rows-[1fr_1.25fr] gap-4">
                          <div className="grid grid-cols-3 gap-3">
                            <div className="rounded-xl border border-white/5 bg-white/[0.04]" />
                            <div className="rounded-xl border border-indigo-400/10 bg-indigo-500/[0.08]" />
                            <div className="rounded-xl border border-white/5 bg-white/[0.04]" />
                          </div>
                          <div className="rounded-xl border border-white/5 bg-[linear-gradient(180deg,rgba(99,102,241,0.08),rgba(255,255,255,0.02))]" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="relative mx-auto max-w-6xl px-6 py-24">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-indigo-400">Tech stack</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">Tools I work with</h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span key={skill} className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-zinc-300">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="relative mx-auto grid max-w-6xl gap-10 px-6 py-28 md:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-indigo-400">About</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-5xl">Building, learning, improving.</h2>
        </div>
        <div className="space-y-6 text-lg leading-8 text-zinc-400">
          <p>
            I&apos;m a front-end developer focused on creating clean, responsive, and maintainable web products.
            My current work centers on React, Next.js, TypeScript, Tailwind CSS, and Supabase.
          </p>
          <p>
            I enjoy turning product ideas into polished interfaces and continuously improving both my technical
            foundations and the quality of the experiences I build.
          </p>
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ["React Front-End Developer", "Algorium Academy"],
            ["React Foundations", "Vercel"],
            ["Next.js Fundamentals", "Vercel"],
          ].map(([title, issuer]) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">Certification</p>
              <h3 className="mt-5 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-zinc-500">{issuer}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="relative mx-auto max-w-6xl px-6 py-28">
        <div className="rounded-[2rem] border border-indigo-400/20 bg-gradient-to-br from-indigo-500/10 via-white/[0.03] to-transparent p-8 md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-indigo-400">Contact</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
            Let&apos;s build something useful.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400">
            I&apos;m open to front-end opportunities, collaborations, and projects where I can contribute and keep growing.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://github.com/abdelkhalekligflam"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-zinc-200"
            >
              GitHub profile
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-zinc-200 transition hover:bg-white/10"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <footer className="relative border-t border-white/5">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Abdelkhalek Ligflam</p>
          <p>Built with Next.js & Tailwind CSS</p>
        </div>
      </footer>
    </main>
  );
}
