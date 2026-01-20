import Image from "next/image";

const LINKS = {
  github: "https://github.com/Chachabrian",
  resume: "https://drive.google.com/file/d/1m2GqksJvu3sHKd2Q62z81BvuWfX4NmiX/view?usp=drive_link",
  linkedin: "https://www.linkedin.com/in/chacha-isaac-010622225/",
};

type ExperienceHighlight = {
  company: string;
  role: string;
  period: string;
  summary: string;
};

const EXPERIENCE: ExperienceHighlight[] = [
  {
    company: "MooveIt Limited",
    role: "Full Stack Engineer",
    period: "Jan 2024 – Present · Remote",
    summary:
      "Designing and shipping full-stack web and mobile experiences with React Native and Go, from architecture through production deployments on GCP, AWS, and Play Console.",
  },
  {
    company: "Chpter Holdings",
    role: "Senior Frontend Engineer",
    period: "Aug 2023 – Sep 2025 · Remote",
    summary:
      "Led modern React/Next.js frontend architecture for an omnichannel commerce platform (WhatsApp, Instagram, Messenger, TikTok), including real-time dashboards backed by gRPC streaming services and performance work that improved page load by ~45%.",
  },
  {
    company: "Marketforce Technologies",
    role: "Frontend Developer",
    period: "Sep 2021 – Sep 2022",
    summary:
      "Built responsive React and Angular applications focused on usability, performance, and scalable component systems for multiple product teams.",
  },
];

type CaseStudy = {
  id: string;
  label: string;
  name: string;
  stack: string;
  role: string;
  impact: string;
  bullets: string[];
};

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "chpter-dashboard",
    label: "Project 01",
    name: "Chpter Omnichannel Commerce Dashboard",
    stack:
      "React · Next.js · TypeScript · gRPC streams · Node.js · Go · PostgreSQL · Redis · Docker · AWS",
    role:
      "Led the frontend architecture for Chpter’s merchant dashboard, consolidating WhatsApp, Instagram, Messenger, and TikTok conversations, orders, and payments into a single view.",
    impact:
      "Enabled merchants to manage all social commerce channels from one place, while improving key dashboard screens by ~45% in perceived performance under real traffic.",
    bullets: [
      "Worked closely with backend teams using gRPC and streaming APIs to surface live conversations, orders, and payment events across WhatsApp, Instagram, Messenger, and TikTok.",
      "Designed the dashboard information architecture and component system to keep omnichannel data manageable and fast to navigate at scale.",
      "Implemented table and chart virtualization, memoized expensive components, and tuned React rendering patterns to keep UI responsive as data volume grew.",
      "Introduced a measured rollout strategy and safe deploy practices so new dashboard features could ship behind flags without disrupting merchants.",
    ],
  },
  {
    id: "mobile-app",
    label: "Project 02",
    name: "MooveIt Field Operations Mobile App",
    stack:
      "React Native · Go · REST/gRPC APIs · JWT Auth · GCP Cloud Run · Push Notifications",
    role:
      "Owned the mobile application experience for field and operations teams, from offline-first UX to deep integration with Go backend services.",
    impact:
      "Improved reliability in low-connectivity environments and reduced support tickets around failed visits, sync conflicts, and missed notifications.",
    bullets: [
      "Designed an offline-first data model with persisted state and background sync routines for riders operating in low-bandwidth regions.",
      "Implemented robust network failure handling with queued mutations, optimistic UI, and conflict resolution strategies so work could continue offline.",
      "Integrated secure auth with JWT + refresh tokens and protected routes on both app and API layers, including token refresh flows tuned for mobile.",
      "Optimized bundle size, startup time, and navigation flows to keep the app performant on mid-range Android devices used in the field.",
    ],
  },
  {
    id: "perf-lab",
    label: "Project 03",
    name: "Chpter Dashboard Performance Deep Dive",
    stack: "React · Next.js · TypeScript · React Query · Lighthouse · React Profiler",
    role:
      "Drove a focused performance initiative on key Chpter dashboard screens, profiling real user flows and systematically removing bottlenecks.",
    impact:
      "Improved dashboard load and interaction performance by ~45% and documented a repeatable playbook for React performance work that the team could reuse.",
    bullets: [
      "Constructed stress-test UIs with large virtualized tables, charts, and live updates to surface real performance bottlenecks.",
      "Captured before/after Lighthouse scores and React Profiler timelines to reason about the impact of each optimization.",
      "Applied code splitting, memoization, and dependency tuning while deliberately avoiding premature micro-optimizations.",
      "Summarized findings into a written case study that can be used as a reference during architecture and design reviews.",
    ],
  },
];

const TECH_GROUPS = [
  {
    title: "Frontend",
    items: [
      "React, Next.js, TypeScript",
      "React Native, Angular",
      "Performance optimization",
      "Design systems & accessibility",
    ],
  },
  {
    title: "Backend",
    items: [
      "Golang, Node.js, Express.js",
      "RESTful APIs, BFF patterns",
      "PostgreSQL, MongoDB, Prisma",
    ],
  },
  {
    title: "Infra & DevOps",
    items: [
      "Docker, Git, GitHub Actions",
      "GCP (Cloud Run, Firebase)",
      "AWS (ECS, S3, RDS)",
      "Play Console deployments, CI/CD",
    ],
  },
  {
    title: "Leadership",
    items: [
      "Technical mentorship & reviews",
      "Agile delivery & sprint planning",
      "Cross-functional collaboration",
    ],
  },
];

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col gap-16 px-4 pb-24 pt-10 sm:px-6 lg:px-8 lg:pt-14">
      {/* Header / Hero */}
      <header className="flex flex-col gap-10 border-b border-white/5 pb-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-5">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-300/80">
            Available for senior frontend & full‑stack roles
          </p>
          <div className="flex items-start gap-5">
            <div className="relative flex-shrink-0">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-cyan-400/30 to-emerald-400/20 blur-sm" />
              <div className="relative h-[120px] w-[120px] overflow-hidden rounded-full border-2 border-white/10 shadow-lg">
                <Image
                  src="/profile.jpeg"
                  alt="Chacha Isaac"
                  width={120}
                  height={120}
                  className="h-full w-full object-cover"
                  priority
                  unoptimized
                />
              </div>
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.7rem]">
                <span className="block text-zinc-100">Chacha Isaac</span>
                <span className="mt-2 block prose-gradient">
                  Senior Frontend Engineer
                </span>
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-zinc-300/80 sm:text-base">
                I build scalable, high-performance web and mobile products — from
                React and Next.js frontends to Go and Node.js services and
                production deployments on AWS and GCP.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="#case-studies"
              className="group inline-flex items-center justify-center rounded-full bg-cyan-400 px-5 py-2 text-sm font-medium text-zinc-950 shadow-[0_12px_40px_rgba(34,211,238,0.45)] transition hover:bg-cyan-300"
            >
              View case studies
              <span className="ml-2 text-xs transition-transform group-hover:translate-x-0.5">
                ↗
              </span>
            </a>
            <a
              href="#sample-projects"
              className="inline-flex items-center justify-center rounded-full border border-cyan-400/60 bg-cyan-400/5 px-5 py-2 text-sm font-medium text-cyan-100 shadow-[0_0_0_1px_rgba(8,145,178,0.4)] transition hover:bg-cyan-400/10 hover:border-cyan-300/80"
            >
              Sample projects
            </a>
            <a
              href={LINKS.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-2 text-sm font-medium text-zinc-100/90 transition hover:border-cyan-300/70 hover:text-cyan-50"
            >
              GitHub
            </a>
            <a
              href={LINKS.resume}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-transparent bg-white/5 px-5 py-2 text-sm font-medium text-zinc-50 transition hover:border-cyan-300/70 hover:bg-white/10"
            >
              Resume
            </a>
          </div>
        </div>

        <div className="section-card w-full max-w-xs text-sm text-zinc-300/90">
          <h2 className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">
            Snapshot
          </h2>
          <p className="text-xs leading-relaxed text-zinc-300/80">
            Senior frontend engineer with 4+ years building production systems
            used by real users. I care about performance, maintainability, and
            shipping software that survives real-world usage — not just demos.
          </p>
          <dl className="mt-4 space-y-2 text-xs">
            <div className="flex justify-between gap-3">
              <dt className="text-zinc-500">Location</dt>
              <dd className="text-zinc-200">Remote · Kenya</dd>
            </div>
            <div className="flex justify-between gap-3">
              <dt className="text-zinc-500">Focus</dt>
              <dd className="text-zinc-200">
                Frontend, mobile, and performance
              </dd>
            </div>
            <div className="flex justify-between gap-3">
              <dt className="text-zinc-500">Stack</dt>
              <dd className="text-zinc-200">
                React · Next.js · Go · Node.js · RN · AWS · GCP
              </dd>
            </div>
          </dl>
        </div>
      </header>

      {/* About + Experience */}
      <section
        id="about"
        className="grid gap-8 md:grid-cols-[minmax(0,2fr)_minmax(0,1.3fr)]"
      >
        <div className="section-card">
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">
            About
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-zinc-200/90">
            <p>
              I’m a senior software engineer with over 4 years of hands-on
              experience designing, building, and shipping web and mobile
              applications across startups and distributed teams.
            </p>
            <p>
              I’ve worked across the stack — from React and React Native
              frontends to Golang and Node.js services and cloud deployments on
              AWS and GCP. My focus is on building systems that are resilient,
              observable, and pleasant to work in for both users and engineers.
            </p>
            <p>
              I enjoy leading architecture discussions, mentoring engineers, and
              taking products from zero to one and beyond — measuring impact in
              terms of performance, reliability, and business outcomes.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="section-card">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">
              Recent roles
            </h2>
            <ul className="mt-4 space-y-4 text-xs text-zinc-200/90">
              {EXPERIENCE.map((exp) => (
                <li key={exp.company} className="border-l border-zinc-800 pl-3">
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-medium">{exp.role}</p>
                    <span className="text-[0.65rem] text-zinc-500">
                      {exp.period}
                    </span>
                  </div>
                  <p className="mt-0.5 text-[0.7rem] text-zinc-400">
                    {exp.company}
                  </p>
                  <p className="mt-1 text-[0.7rem] leading-relaxed text-zinc-300/80">
                    {exp.summary}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Sample Projects */}
      <section id="sample-projects" className="space-y-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">
              Sample projects
            </h2>
            <p className="mt-2 max-w-xl text-sm text-zinc-300/85">
              A closer look at selected applications in production. These are
              simplified snapshots you can quickly explore, with deeper case
              studies above.
            </p>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1.6fr)] md:items-stretch">
          <div className="section-card flex flex-col justify-between">
            <div>
              <p className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-cyan-300/80">
                Mobile · MooveIt Limited
              </p>
              <h3 className="mt-2 text-sm font-semibold text-zinc-50">
                MooveIt – Instant & Scheduled Delivery App
              </h3>
              <p className="mt-1 text-[0.7rem] text-cyan-100/80">
                React Native · Expo · Golang · REST/gRPC APIs · GCP · AWS ·
                Play Store & App Store
              </p>
              <p className="mt-3 text-[0.8rem] leading-relaxed text-zinc-300/90">
                MooveIt makes it easier for drivers and clients to move parcels
                around cities and upcountry with a mix of Uber-style on-demand
                delivery and scheduled countryside trips.
              </p>

              <div className="mt-4 space-y-2 text-[0.78rem] text-zinc-300/90">
                <p className="font-medium text-emerald-300/90">
                  🚗 Instant delivery flow
                </p>
                <p>
                  For urgent city deliveries, users enter pickup and drop-off
                  locations and are automatically matched to the nearest
                  available driver. Once a driver accepts, the app shows
                  real-time driver movement from pickup to delivery.
                </p>
                <p className="mt-3 font-medium text-emerald-300/90">
                  🚚 Scheduled & countryside flow
                </p>
                <p>
                  For flexible or long-distance trips, users browse an{" "}
                  <span className="font-medium text-zinc-100">
                    Available Rides
                  </span>{" "}
                  tab with drivers already heading toward specific destinations.
                  They select a ride, attach parcel details (image, receiver
                  name, phone, email), and send a booking request that the
                  driver can accept if it fits their route.
                </p>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-3 text-sm">
              <a
                href="https://play.google.com/store/apps/details?id=com.mesongo.mooveit"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-5 py-2 text-sm font-medium text-zinc-950 shadow-[0_12px_40px_rgba(34,211,238,0.45)] transition hover:bg-cyan-300"
              >
                View on Google Play
              </a>
              <span className="inline-flex items-center rounded-full border border-white/10 px-4 py-1.5 text-[0.78rem] text-zinc-300/85">
                iOS build available · App Store
              </span>
            </div>
          </div>

          <div className="section-card flex items-center justify-center">
            <div className="relative w-full max-w-xs">
              <div className="pointer-events-none absolute -inset-4 rounded-[2.3rem] bg-gradient-to-b from-cyan-400/25 via-transparent to-emerald-400/10 blur-lg" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900/80 shadow-[0_22px_70px_rgba(0,0,0,0.9)]">
                <Image
                  src="/mooveit-mobile.png"
                  alt="MooveIt mobile app – live driver tracking screen"
                  width={334}
                  height={706}
                  className="h-auto w-full object-cover"
                  priority
                  unoptimized
                />
              </div>
              <p className="mt-3 text-center text-[0.7rem] text-zinc-400">
                Example in-app screen showing live driver tracking and driver
                details for an active delivery.
              </p>
            </div>
          </div>
        </div>

        {/* Chpter Dashboard */}
        <div className="grid gap-5 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1.6fr)] md:items-stretch">
          <div className="section-card flex flex-col justify-between">
            <div>
              <p className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-cyan-300/80">
                Web Dashboard · Chpter Holdings
              </p>
              <h3 className="mt-2 text-sm font-semibold text-zinc-50">
                Chpter – AI-First Omnichannel Commerce Platform
              </h3>
              <p className="mt-1 text-[0.7rem] text-cyan-100/80">
                React · Next.js · TypeScript · gRPC streams · Node.js · Go ·
                PostgreSQL · Redis · AWS
              </p>
              <p className="mt-3 text-[0.8rem] leading-relaxed text-zinc-300/90">
                Chpter enables businesses to sell and support customers on
                WhatsApp and Instagram through AI agents, omnichannel messaging,
                checkout flows, and marketing automation — all from one unified
                dashboard.
              </p>

              <div className="mt-4 space-y-2 text-[0.78rem] text-zinc-300/90">
                <p className="font-medium text-emerald-300/90">
                  🤖 AI-powered sales & support
                </p>
                <p>
                  AI agents handle customer queries, process orders, and complete
                  checkouts directly on WhatsApp and Instagram DMs, working
                  24/7 to respond instantly and personalize every interaction.
                </p>
                <p className="mt-3 font-medium text-emerald-300/90">
                  🌐 Unified omnichannel dashboard
                </p>
                <p>
                  Merchants manage conversations, orders, and payments across
                  WhatsApp, Instagram, Messenger, and TikTok from a single
                  interface, with real-time updates powered by gRPC streaming
                  APIs.
                </p>
                <p className="mt-3 font-medium text-emerald-300/90">
                  📈 Marketing automation & analytics
                </p>
                <p>
                  Create WhatsApp campaigns, recover abandoned carts, track
                  revenue, and integrate with Shopify/WooCommerce stores for
                  seamless e-commerce workflows.
                </p>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-3 text-sm">
              <a
                href="https://www.chpter.co/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-5 py-2 text-sm font-medium text-zinc-950 shadow-[0_12px_40px_rgba(34,211,238,0.45)] transition hover:bg-cyan-300"
              >
                Visit Chpter.co
                <span className="ml-2 text-xs">↗</span>
              </a>
            </div>
          </div>

          <div className="section-card flex items-center justify-center">
            <div className="relative w-full max-w-xs">
              <div className="pointer-events-none absolute -inset-4 rounded-[2.3rem] bg-gradient-to-b from-cyan-400/25 via-transparent to-emerald-400/10 blur-lg" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900/80 shadow-[0_22px_70px_rgba(0,0,0,0.9)]">
                <Image
                  src="/chpter.png"
                  alt="Chpter omnichannel dashboard – unified view of WhatsApp, Instagram, and other channels"
                  width={800}
                  height={600}
                  className="h-auto w-full object-cover"
                  priority
                  unoptimized
                />
              </div>
              <p className="mt-3 text-center text-[0.7rem] text-zinc-400">
                Merchant dashboard showing unified conversations, orders, and
                analytics across multiple social commerce channels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="space-y-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">
              Case studies
            </h2>
            <p className="mt-2 max-w-xl text-sm text-zinc-300/85">
              Not side projects — production-grade work with real constraints,
              tradeoffs, and iteration. Each one focuses on how architecture,
              performance, and DX decisions drove outcomes.
            </p>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {CASE_STUDIES.map((project) => (
            <article
              key={project.id}
              className="section-card flex flex-col justify-between"
            >
              <div>
                <p className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-cyan-300/80">
                  {project.label}
                </p>
                <h3 className="mt-2 text-sm font-semibold text-zinc-50">
                  {project.name}
                </h3>
                <p className="mt-1 text-[0.7rem] text-cyan-100/80">
                  {project.stack}
                </p>
                <p className="mt-3 text-[0.75rem] leading-relaxed text-zinc-300/90">
                  {project.role}
                </p>
                <p className="mt-2 text-[0.75rem] font-medium text-emerald-300/90">
                  Impact: {project.impact}
                </p>
                <ul className="mt-3 space-y-1.5 text-[0.72rem] text-zinc-300/80">
                  {project.bullets.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-[0.3rem] h-1 w-1 flex-shrink-0 rounded-full bg-cyan-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section id="tech" className="grid gap-6 md:grid-cols-[minmax(0,1.3fr)_minmax(0,2fr)]">
        <div className="section-card">
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">
            Tech stack
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-300/85">
            I prefer boring, proven technology for most problems — and reach
            for more specialized tools like Go, React Native, or Cloud Run when
            scale or constraints demand it.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {TECH_GROUPS.map((group) => (
            <div key={group.title} className="section-card">
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">
                {group.title}
              </h3>
              <ul className="mt-3 space-y-1.5 text-[0.8rem] text-zinc-300/90">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-[0.35rem] h-1 w-1 flex-shrink-0 rounded-full bg-zinc-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="section-card flex flex-col items-start justify-between gap-4 md:flex-row md:items-center"
      >
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">
            Contact
          </h2>
          <p className="mt-3 max-w-xl text-sm text-zinc-300/85">
            I’m most interested in senior frontend or full-stack roles at
            product-focused startups, growth-stage companies, or remote-first
            teams. Happy to talk about performance work, design systems, or
            scaling React / RN codebases.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 text-sm">
          <a
            href="mailto:chachaisaac12@gmail.com"
            className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-5 py-2 text-sm font-medium text-zinc-950 shadow-[0_12px_40px_rgba(34,211,238,0.45)] transition hover:bg-cyan-300"
          >
            Email me
          </a>
          <a
            href={LINKS.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-2 text-sm font-medium text-zinc-100/90 transition hover:border-cyan-300/70 hover:text-cyan-50"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </main>
  );
}
