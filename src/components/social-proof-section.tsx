const companies = [
  "Northstar",
  "Kiteworks",
  "Fieldnote",
  "Arcadia",
  "Superhuman",
  "Monument",
];

export function SocialProofSection() {
  return (
    <section className="overflow-hidden border-b border-[#12211c]/10 bg-[#fffdf8]">
      <div className="border-b border-[#12211c]/10 py-6">
        <p className="eyebrow mb-5 text-center text-[#66716c]">
          Talent from teams shaping what’s next
        </p>
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#fffdf8] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#fffdf8] to-transparent" />
          <div className="marquee-track flex items-center">
            {[...companies, ...companies].map((company, index) => (
              <span
                key={`${company}-${index}`}
                aria-hidden={index >= companies.length}
                className="mx-8 flex items-center gap-8 whitespace-nowrap md:mx-12"
              >
                <span className="font-serif text-2xl text-[#35463f]/70 transition-colors duration-200 hover:text-[#12211c] md:text-3xl">
                  {company}
                </span>
                <span className="text-[#12211c]/15" aria-hidden>
                  ◆
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-center gap-3 px-5 py-8 md:gap-4 md:px-10">
        {[
          { value: "4.9/5", label: "avg. satisfaction" },
          { value: "12 min", label: "to first intro" },
          { value: "3×", label: "more replies vs cold apply" },
        ].map((chip) => (
          <div
            key={chip.label}
            className="rounded-full border border-[#12211c]/10 bg-[#edf2ed] px-5 py-2.5 text-center shadow-[0_8px_24px_-18px_rgba(18,33,28,0.45)] transition-transform duration-200 hover:-translate-y-0.5"
          >
            <p className="text-sm font-bold text-[#12211c]">{chip.value}</p>
            <p className="text-[11px] text-[#66716c]">{chip.label}</p>
          </div>
        ))}
      </div>

      <div className="mx-auto grid max-w-[1280px] gap-10 px-5 py-12 md:grid-cols-[1.3fr_0.7fr] md:items-end md:px-10 md:py-20">
        <blockquote className="display-text max-w-4xl text-4xl leading-[1.05] text-[#12211c] md:text-6xl">
          “Scout didn’t send me more jobs. It found the{" "}
          <span className="italic text-[#e6653f]">one conversation</span> that
          changed my year.”
        </blockquote>
        <div className="md:justify-end">
          <div className="flex items-center gap-1 text-[#e6653f]" aria-label="5 out of 5 stars">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className="text-lg" aria-hidden>
                ★
              </span>
            ))}
          </div>
          <div className="mt-5 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#b6d8c8] text-sm font-bold text-[#15382e] ring-2 ring-[#fffdf8]">
              MO
            </div>
            <div>
              <p className="font-bold text-[#12211c]">Millie O’Brien</p>
              <p className="mt-1 text-sm text-[#66716c]">
                Product lead · London
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
