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
      <div className="space-y-3 rounded-[24px] border border-[#12211c]/10 bg-[#fffdf8] p-5 shadow-[0_24px_60px_-38px_rgba(18,33,28,0.45)]">
        <div className="flex items-center justify-between">
          <p className="eyebrow text-[#66716c]">Today’s matches</p>
          <span className="rounded-full bg-[#f7e8e1] px-3 py-1 text-xs font-bold text-[#ad4f33]">7 new</span>
        </div>
        {jobs.slice(0, 3).map((job) => (
          <div key={job.title} className="group flex items-center justify-between gap-4 border-t border-[#12211c]/10 pt-4">
            <div>
              <p className="font-semibold text-[#12211c]">{job.title}</p>
              <p className="mt-1 text-xs text-[#66716c]">{job.meta}</p>
            </div>
            <span className="text-lg text-[#e6653f] transition-transform duration-200 group-hover:translate-x-1" aria-hidden>→</span>
          </div>
        ))}
      </div>
    );
  }
  if (type === "intro") {
    return (
      <div className="rounded-[24px] border border-[#12211c]/10 bg-[#15382e] p-6 text-[#fffdf8] shadow-[0_24px_60px_-38px_rgba(18,33,28,0.65)]">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#e6653f]" />
          <p className="eyebrow text-[#b6d8c8]">Warm introduction</p>
        </div>
        <p className="display-text mt-4 text-3xl">Marcus wants to meet you.</p>
        <p className="mt-4 text-sm leading-relaxed text-[#d5e4dc]">
          Marcus, CTO at Acme, wants to chat about the Founding Engineer role. He liked your distributed systems experience.
        </p>
        <button type="button" className="button-lift mt-6 min-h-12 w-full rounded-full bg-[#fffdf8] px-5 text-sm font-bold text-[#15382e]">
          Accept Introduction
        </button>
      </div>
    );
  }
  if (type === "interview") {
    return (
      <div className="space-y-4 rounded-[24px] border border-[#12211c]/10 bg-[#fffdf8] p-5 text-sm shadow-[0_24px_60px_-38px_rgba(18,33,28,0.45)]">
        <p className="eyebrow text-[#66716c]">Mock interview · Question 4</p>
        <p className="display-text rounded-[18px] bg-[#15382e] p-5 text-2xl leading-snug text-[#fffdf8]">
          Tell me about a technical migration you led under time pressure.
        </p>
        <p className="rounded-[18px] bg-[#edf2ed] p-4 leading-relaxed text-[#46534d]">
          I led a six-week migration of 40 services in three phases. We aligned stakeholders early and shipped two days ahead with zero downtime.
        </p>
        <div className="grid gap-2 sm:grid-cols-2">
          <p className="rounded-xl bg-[#e1f0e8] p-3 text-xs font-medium text-[#315d4a]">✓ Clear structure and metrics</p>
          <p className="rounded-xl bg-[#f7e8e1] p-3 text-xs font-medium text-[#8b4b37]">↗ Add stakeholder tension</p>
        </div>
      </div>
    );
  }
  if (type === "salary") {
    return (
      <div className="rounded-[24px] border border-[#12211c]/10 bg-[#fffdf8] p-6 shadow-[0_24px_60px_-38px_rgba(18,33,28,0.45)]">
        <p className="eyebrow text-[#66716c]">Your market benchmark</p>
        <div className="mt-4 grid grid-cols-3 gap-3 text-center">
          {[
            ["Base", "$155k"],
            ["Equity", "$40k"],
            ["Bonus", "$15k"],
          ].map(([label, val]) => (
            <div key={label} className="rounded-[16px] bg-[#edf2ed] p-4">
              <p className="text-xs text-[#66716c]">{label}</p>
              <p className="mt-1 text-lg font-bold text-[#12211c]">{val}</p>
            </div>
          ))}
        </div>
        <div className="mt-5 flex items-end gap-2" aria-hidden="true">
          {[42, 58, 67, 84, 76, 62, 48].map((height, index) => (
            <div key={height} className="flex-1 rounded-t bg-[#b6d8c8]" style={{ height: `${height}px`, opacity: 0.55 + index * 0.05 }} />
          ))}
        </div>
        <p className="mt-4 text-xs leading-5 text-[#66716c]">
          Based on Senior Engineer roles in London, Series A–B startups.
        </p>
      </div>
    );
  }
  if (type === "coaching") {
    return (
      <div className="space-y-3 rounded-[24px] border border-[#12211c]/10 bg-[#fffdf8] p-5 text-sm shadow-[0_24px_60px_-38px_rgba(18,33,28,0.45)]">
        <p className="max-w-[85%] rounded-[18px_18px_4px_18px] bg-[#f7e8e1] p-4 text-[#523b33]">
          I’ve been a senior engineer for 3 years. Should I push for Staff or move into management?
        </p>
        <p className="ml-auto max-w-[90%] rounded-[18px_18px_18px_4px] bg-[#15382e] p-4 leading-relaxed text-[#eef5f1]">
          That’s the right question to ask at this stage. Let’s compare both paths: compensation, day-to-day work, and long-term fit.
        </p>
      </div>
    );
  }
  return (
    <div className="space-y-4 rounded-[24px] border border-[#12211c]/10 bg-[#fffdf8] p-6 text-sm shadow-[0_24px_60px_-38px_rgba(18,33,28,0.45)]">
      <p className="eyebrow text-[#66716c]">Live offer guidance</p>
      <p className="display-text text-2xl text-[#12211c]">Employer: “We can offer $128,000 base.”</p>
      <p className="rounded-[18px] bg-[#e1f0e8] p-4 leading-relaxed text-[#315d4a]">
        <span className="font-medium">Scout:</span> Below P50. Counter at $148k — they’ve run 4 rounds, they won’t walk.
      </p>
      <p className="border-t border-[#12211c]/10 pt-4 font-bold text-[#12211c]">Your target: $148,000</p>
    </div>
  );
}

export function FeaturesSection() {
  return (
    <section className="border-b border-[#12211c]/10 bg-[#fffdf8] py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-5 md:px-10">
        <div className="grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <p className="eyebrow text-[#e6653f]">Scout works while you live</p>
          <h2 className="display-text max-w-3xl text-5xl leading-[0.98] text-[#12211c] md:text-7xl">
            The unfair advantage in your job search.
          </h2>
        </div>

        <div className="mt-14 flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
          {jobs.map((job) => (
            <article
              key={job.title}
              className="group min-w-[280px] shrink-0 snap-start rounded-[22px] border border-[#12211c]/10 bg-[#edf2ed]/60 p-5 transition-[transform,box-shadow,background-color] duration-200 hover:-translate-y-1 hover:bg-[#edf2ed] hover:shadow-[0_18px_40px_-24px_rgba(18,33,28,0.35)]"
            >
              <p className="eyebrow text-[#66716c]">94% match</p>
              <h3 className="mt-3 text-lg font-bold text-[#12211c]">{job.title}</h3>
              <p className="mt-2 text-sm text-[#66716c]">{job.meta}</p>
              <p className="mt-4 text-xs font-semibold text-[#e6653f]">{job.tag} <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span></p>
            </article>
          ))}
        </div>

        <div className="mt-24">
          {showcases.map((item, i) => (
            <div
              key={item.title}
              className={`grid items-center gap-10 border-t border-[#12211c]/12 py-16 md:grid-cols-2 md:gap-20 md:py-24 ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}
            >
              <div>
                <p className="eyebrow text-[#e6653f]">0{i + 1} / 06</p>
                <h3 className="display-text mt-4 text-4xl leading-tight text-[#12211c] md:text-5xl">{item.title}</h3>
                <p className="mt-5 max-w-lg text-base leading-7 text-[#58655f] md:text-lg md:leading-8">{item.body}</p>
              </div>
              <div className="rounded-[32px] bg-[#edf2ed] p-4 ring-1 ring-[#12211c]/5 sm:p-8">
                <FeaturePanel type={item.panel} />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-8 border-y border-[#12211c]/15 py-10 md:flex-row md:items-center">
          <h2 className="display-text max-w-2xl text-3xl text-[#12211c] md:text-4xl">
            Your best role should find you, too.
          </h2>
          <Link
            href="#signup"
            className="button-lift inline-flex min-h-14 items-center rounded-full bg-[#12211c] px-7 text-sm font-bold text-[#fffdf8]"
          >
            Start with Scout <span className="ml-4">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
