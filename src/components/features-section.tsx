import Link from "next/link";

const jobs = [
  {
    title: "Principal Engineer",
    meta: "Payments Infra · Remote · $320–400k",
    tag: "High-reliability systems",
  },
  {
    title: "Head of Engineering",
    meta: "Series B Healthtech · London · £160–220k",
    tag: "Scaling eng orgs 10–40",
  },
  {
    title: "Engineering Lead",
    meta: "AI Safety · SF · $300–380k",
    tag: "ML infra + team leadership",
  },
  {
    title: "Staff Engineer",
    meta: "Frontend Platform · Remote · $280–350k",
    tag: "Next.js + edge infra",
  },
  {
    title: "Senior Backend Engineer",
    meta: "Digital Banking · London · £130–180k",
    tag: "Distributed systems + fintech",
  },
];

const showcases = [
  {
    title: "Job Search On Autopilot",
    body: "Scout gets to know you through a conversation and searches 15 million jobs daily. You tell Scout yes or no, and he gets smarter about what you're looking for with each response.",
    panel: "jobs",
  },
  {
    title: "Introductions to Hiring Managers",
    body: "When Scout finds a match in Sage's network, he introduces you directly to the hiring manager. No applications. No waiting. Warm introductions to people who already want to meet you.",
    panel: "intro",
  },
  {
    title: "Mock Interviews",
    body: "Run a mock interview with Scout and get specific feedback on your stories, clarity, and answers to the hard questions.",
    panel: "interview",
  },
  {
    title: "Salary Benchmarking",
    body: "Scout shows you what 'good' looks like for your role, level, and location based on thousands of real jobs.",
    panel: "salary",
  },
  {
    title: "Career Clarity Coaching",
    body: "Scout helps you get clear on what you want next, what you're great at, and what kind of work will actually fulfil you.",
    panel: "coaching",
  },
  {
    title: "Salary Negotiation Coaching",
    body: "Scout helps you build a negotiation plan with data and specific language you can use.",
    panel: "negotiate",
  },
];

function FeaturePanel({ type }: { type: string }) {
  if (type === "jobs") {
    return (
      <div className="space-y-3 rounded-xl border border-[#eee] bg-white p-4 shadow-sm">
        <p className="text-xs font-medium uppercase tracking-wide text-[#888]">New matches</p>
        {jobs.slice(0, 3).map((job) => (
          <div key={job.title} className="rounded-lg border border-[#f0f0f0] p-3">
            <p className="font-medium">{job.title}</p>
            <p className="mt-1 text-xs text-[#666]">{job.meta}</p>
            <span className="mt-2 inline-block rounded-full bg-[#f5f5f5] px-2 py-0.5 text-xs text-[#555]">
              {job.tag}
            </span>
          </div>
        ))}
      </div>
    );
  }
  if (type === "intro") {
    return (
      <div className="rounded-xl border border-[#eee] bg-white p-5 shadow-sm">
        <p className="text-xs text-[#888]">Introduction</p>
        <p className="mt-1 font-medium">Scout made an introduction</p>
        <p className="mt-3 text-sm leading-relaxed text-[#555]">
          Marcus, CTO at Acme, wants to chat about the Founding Engineer role. He liked your distributed systems experience.
        </p>
        <button type="button" className="mt-4 w-full rounded-lg bg-[#0a0a0a] py-2.5 text-sm font-medium text-white">
          Accept Introduction
        </button>
      </div>
    );
  }
  if (type === "interview") {
    return (
      <div className="space-y-3 rounded-xl border border-[#eee] bg-white p-4 text-sm shadow-sm">
        <p className="rounded-lg bg-[#f8f8f8] p-3 text-[#444]">
          Tell me about a technical migration you led under time pressure.
        </p>
        <p className="rounded-lg border border-[#eee] p-3 text-[#555]">
          I led a six-week migration of 40 services in three phases. We aligned stakeholders early and shipped two days ahead with zero downtime.
        </p>
        <p className="text-xs text-emerald-700">Strong: Clear structure, specific metrics</p>
        <p className="text-xs text-amber-700">Improve: Add stakeholder conflict detail</p>
      </div>
    );
  }
  if (type === "salary") {
    return (
      <div className="rounded-xl border border-[#eee] bg-white p-5 shadow-sm">
        <p className="text-xs font-medium text-[#888]">Salary Benchmark</p>
        <div className="mt-4 grid grid-cols-3 gap-3 text-center">
          {[
            ["Base", "$155k"],
            ["Equity", "$40k"],
            ["Bonus", "$15k"],
          ].map(([label, val]) => (
            <div key={label} className="rounded-lg bg-[#fafafa] p-3">
              <p className="text-xs text-[#888]">{label}</p>
              <p className="mt-1 font-semibold">{val}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-[#666]">
          Based on Senior Engineer roles in London, Series A–B startups.
        </p>
      </div>
    );
  }
  if (type === "coaching") {
    return (
      <div className="space-y-2 rounded-xl border border-[#eee] bg-white p-4 text-sm shadow-sm">
        <p className="rounded-lg bg-[#f0f4ff] p-3 text-[#333]">
          I've been a senior engineer for 3 years. Should I push for Staff or move into management?
        </p>
        <p className="rounded-lg bg-[#f8f8f8] p-3 text-[#555]">
          That's the right question to ask at this stage. Let's compare both paths: compensation, day-to-day work, and long-term fit.
        </p>
      </div>
    );
  }
  return (
    <div className="space-y-3 rounded-xl border border-[#eee] bg-white p-4 text-sm shadow-sm">
      <p className="text-[#666]">Employer: "We can offer $128,000 base salary."</p>
      <p className="rounded-lg bg-[#f0fdf4] p-3">
        <span className="font-medium">Scout:</span> Below P50. Counter at $148k — they've run 4 rounds, they won't walk.
      </p>
      <p className="font-medium">You said: $148,000</p>
    </div>
  );
}

export function FeaturesSection() {
  return (
    <section className="border-b border-[#eee] bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <h2 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
          Everything you need to land your next job
        </h2>

        <div className="mt-10 flex gap-4 overflow-x-auto pb-4">
          {jobs.map((job) => (
            <article
              key={job.title}
              className="min-w-[260px] shrink-0 rounded-2xl border border-[#eee] bg-[#fafafa] p-5"
            >
              <p className="text-xs font-medium uppercase tracking-wide text-[#888]">New matches</p>
              <h3 className="mt-3 text-lg font-semibold">{job.title}</h3>
              <p className="mt-2 text-sm text-[#666]">{job.meta}</p>
              <p className="mt-4 inline-block rounded-full bg-white px-3 py-1 text-xs text-[#555] ring-1 ring-[#eee]">
                {job.tag}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-20 space-y-24">
          {showcases.map((item, i) => (
            <div
              key={item.title}
              className={`grid items-center gap-10 md:grid-cols-2 ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}
            >
              <div>
                <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">{item.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-[#555] md:text-lg">{item.body}</p>
              </div>
              <FeaturePanel type={item.panel} />
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <h2 className="text-2xl font-semibold md:text-3xl">
            Join professionals working with Scout to land their next role.
          </h2>
          <Link
            href="#signup"
            className="mt-8 inline-flex h-12 items-center rounded-full bg-[#0a0a0a] px-8 text-sm font-medium text-white"
          >
            Sign up to Scout
          </Link>
        </div>
      </div>
    </section>
  );
}
