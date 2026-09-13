import Link from "next/link";

const perks = [
  { value: "15M", label: "roles scanned daily" },
  { value: "10 min", label: "to first matches" },
  { value: "$0", label: "always free for talent" },
];

export function HeroSection() {
  return (
    <section id="candidates" className="paper-grid relative overflow-hidden border-b border-[#12211c]/10 bg-[#f5f2ea]">
      <div className="pointer-events-none absolute -right-28 top-24 h-72 w-72 rounded-full bg-[#b6d8c8]/50 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-16 h-64 w-64 rounded-full bg-[#f4c9b9]/35 blur-3xl" />
      <div className="mx-auto grid min-h-[calc(100svh-72px)] max-w-[1280px] items-center gap-12 px-5 py-14 md:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:py-20">
        <div className="relative z-10">
          <Link
            href="#announcement"
            id="announcement"
            className="eyebrow hero-rise surface-card inline-flex min-h-11 items-center gap-3 rounded-full px-4 py-2 text-[#52635b] transition-[color,box-shadow] hover:text-[#12211c] hover:shadow-[0_14px_36px_-24px_rgba(18,33,28,0.45)]"
          >
            <span className="h-2 w-2 rounded-full bg-[#e6653f] shadow-[0_0_0_4px_rgba(230,101,63,0.15)]" />
            Built for ambitious careers
            <span aria-hidden>↗</span>
          </Link>

          <h1 className="display-text hero-rise hero-delay-1 mt-5 max-w-[680px] text-balance text-[clamp(4.25rem,8vw,7.75rem)] leading-[0.84] text-[#12211c]">
            Your next move,
            <span className="block italic text-[#e6653f]">found.</span>
          </h1>
          <p className="hero-rise hero-delay-2 mt-8 max-w-lg text-lg leading-8 text-[#46534d] md:text-xl">
            Scout searches every corner of the market, learns what matters to
            you, and opens doors to hiring managers before roles get crowded.
          </p>

          <div className="hero-rise hero-delay-3 mt-8 flex items-center gap-3">
            <div className="flex -space-x-2" aria-hidden>
              {["#b6d8c8", "#f4c9b9", "#15382e", "#e6653f"].map((color, i) => (
                <span
                  key={color}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#f5f2ea] text-[10px] font-bold text-white"
                  style={{ backgroundColor: color, zIndex: 4 - i }}
                >
                  {["AK", "JR", "LM", "TS"][i]}
                </span>
              ))}
            </div>
            <p className="text-sm text-[#58655f]">
              <span className="font-semibold text-[#12211c]">2,400+</span> professionals matched this week
            </p>
          </div>

          <div className="hero-rise hero-delay-3 mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="#signup"
              className="button-lift inline-flex min-h-14 items-center justify-center rounded-full bg-[#12211c] px-7 text-[15px] font-semibold text-[#fffdf8]"
            >
              Start with Scout <span className="ml-4" aria-hidden>→</span>
            </Link>
            <Link
              href="#companies"
              className="button-lift inline-flex min-h-14 items-center justify-center rounded-full border border-[#12211c]/12 bg-[#fffdf8]/70 px-7 text-[15px] font-semibold text-[#30453c] transition-colors hover:border-[#e6653f]/35 hover:text-[#12211c]"
            >
              Hiring? Meet Sage
            </Link>
          </div>

          <dl className="hero-rise hero-delay-3 mt-12 grid grid-cols-3 gap-2 sm:gap-3">
            {perks.map((perk) => (
              <div
                key={perk.label}
                className="rounded-2xl border border-[#12211c]/10 bg-[#fffdf8]/80 px-3 py-4 text-center shadow-[0_12px_30px_-22px_rgba(18,33,28,0.35)] sm:px-4 sm:text-left"
              >
                <dt className="text-lg font-bold text-[#12211c] md:text-xl">{perk.value}</dt>
                <dd className="mt-1 text-[11px] leading-4 text-[#66716c] sm:text-xs sm:leading-5">{perk.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="hero-rise hero-delay-2 relative mx-auto w-full max-w-[690px]">
          <div className="absolute -top-4 left-4 z-20 -rotate-6 rounded-full bg-[#e6653f] px-4 py-2 text-xs font-bold text-white shadow-xl sm:left-8 sm:px-5 sm:py-3 sm:text-sm">
            94% match
          </div>
          <div className="overflow-hidden rounded-[30px] border border-[#12211c]/15 bg-[#fffdf8] shadow-[0_35px_80px_-25px_rgba(18,33,28,0.28)] transition-transform duration-500 lg:hover:-rotate-1 lg:hover:scale-[1.01]">
            <div className="flex items-center justify-between border-b border-[#12211c]/10 bg-[#faf8f3] px-5 py-4">
              <div className="flex items-center gap-2" aria-hidden>
                <span className="h-2.5 w-2.5 rounded-full bg-[#e6653f]/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#f4c9b9]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#b6d8c8]" />
              </div>
              <div className="flex flex-1 items-center justify-center gap-3 sm:justify-start sm:pl-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#15382e] text-xs font-bold text-white">SC</div>
                <div>
                  <p className="text-sm font-bold">Scout call</p>
                  <p className="text-xs text-[#66716c]">Career brief · 08:42</p>
                </div>
              </div>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#47665a]">
                <span className="h-2 w-2 animate-[pulse-ring_2s_infinite] rounded-full bg-[#e6653f]" />
                Live
              </div>
            </div>
            <div className="bg-[#15382e] p-5 text-[#fffdf8] sm:p-7">
              <p className="eyebrow text-[#b6d8c8]">Scout is listening</p>
              <p className="display-text mt-4 max-w-lg text-3xl leading-tight sm:text-4xl">
                “What kind of work would make Monday feel worth it?”
              </p>
              <div className="voice-wave mt-8 flex h-12 items-end gap-1.5" aria-hidden="true">
                {[20, 34, 18, 44, 28, 50, 32, 22, 42, 58, 37, 48, 25, 36, 20, 31, 17, 27].map((height, index) => (
                  <span
                    key={`${height}-${index}`}
                    className="w-1.5 rounded-full bg-[#b6d8c8]"
                    style={{ height: `${height}%`, opacity: 0.45 + (index % 4) * 0.15 }}
                  />
                ))}
              </div>
            </div>
            <div className="grid gap-3 p-4 sm:grid-cols-2 sm:p-5">
              <div className="rounded-[18px] bg-[#edf2ed] p-4">
                <p className="eyebrow text-[#66716c]">Top signal</p>
                <p className="mt-2 text-sm font-semibold">Small team, real ownership</p>
                <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-[#d8e0da]">
                  <div className="h-full w-[88%] rounded-full bg-[#e6653f]" />
                </div>
              </div>
              <div className="rounded-[18px] bg-[#f7e8e1] p-4">
                <p className="eyebrow text-[#8b5b4d]">Next step</p>
                <p className="mt-2 text-sm font-semibold">7 high-fit roles ready</p>
                <p className="mt-3 text-xs text-[#76584e]">First introductions today →</p>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-8 -right-4 hidden max-w-[220px] animate-[float_5s_ease-in-out_infinite] rounded-[20px] border border-[#12211c]/10 bg-[#fffdf8] p-4 shadow-xl md:block">
            <p className="eyebrow text-[#66716c]">New introduction</p>
            <p className="mt-2 text-sm font-bold">Founding Engineer</p>
            <p className="mt-1 text-xs text-[#66716c]">Series A · Remote · $220k</p>
          </div>
        </div>
      </div>
    </section>
  );
}
