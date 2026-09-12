import Link from "next/link";

const perks = [
  { icon: "⚡", label: "Jobs in 10 minutes" },
  { icon: "$", label: "Free" },
  { icon: "👤", label: "You control sharing" },
];

export function HeroSection() {
  return (
    <section id="candidates" className="border-b border-[#eee] bg-[#fafafa]">
      <div className="mx-auto max-w-6xl px-5 pb-16 pt-10 md:px-8 md:pb-20 md:pt-14">
        <Link
          href="#announcement"
          className="mb-8 inline-flex items-center gap-2 text-sm text-[#555] transition-colors hover:text-[#0a0a0a]"
        >
          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-xs text-emerald-700">
            ✓
          </span>
          $18m seed round announcement
          <span aria-hidden>→</span>
        </Link>

        <div className="max-w-3xl">
          <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight md:text-5xl lg:text-[3.25rem]">
            Meet Scout
          </h1>
          <p className="mt-4 text-xl text-[#444] md:text-2xl md:leading-snug">
            An AI agent that finds your next job and helps you land it
          </p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-[#666] md:text-lg">
            Scout scans 15 million jobs daily and introduces you directly to
            hiring managers.{" "}
            <Link href="#signup" className="font-semibold text-[#0a0a0a] underline-offset-2 hover:underline">
              Join 240,000+ professionals today →
            </Link>
          </p>

          <ul className="mt-8 flex flex-wrap gap-6 text-sm text-[#555]">
            {perks.map((perk) => (
              <li key={perk.label} className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#e5e5e5] bg-white text-sm">
                  {perk.icon}
                </span>
                {perk.label}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="#signup"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0a0a0a] px-8 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              Sign up to Scout
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/15 text-xs">
                ↗
              </span>
            </Link>
            <Link
              href="#companies"
              className="text-sm font-medium text-[#444] hover:text-[#0a0a0a]"
            >
              Hiring? Meet Sage <span aria-hidden>🙂</span>
            </Link>
          </div>
        </div>

        <div className="relative mt-12 overflow-hidden rounded-2xl border border-[#e8e8e8] bg-[#111] shadow-2xl shadow-black/10">
          <div className="aspect-[16/9] w-full bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]">
            <div className="flex h-full flex-col items-center justify-center gap-4 p-8 text-center text-white">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/10 ring-2 ring-white/20">
                <span className="text-3xl">🎙</span>
              </div>
              <p className="text-lg font-medium">Talk to Scout — live career coaching</p>
              <p className="max-w-md text-sm text-white/70">
                Demo preview — your conversation helps Scout learn what great looks like for your next role.
              </p>
              <button
                type="button"
                className="mt-2 rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm backdrop-blur-sm"
              >
                Tap to unmute
              </button>
            </div>
          </div>
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 rounded-full bg-black/60 px-4 py-2 text-xs text-white backdrop-blur-md">
            <span>Pause</span>
            <span className="text-white/40">|</span>
            <span>CC</span>
            <span className="text-white/40">|</span>
            <span>1×</span>
          </div>
        </div>
      </div>
    </section>
  );
}
