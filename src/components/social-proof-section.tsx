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
                className="mx-10 whitespace-nowrap font-serif text-2xl text-[#35463f]/70 md:mx-16 md:text-3xl"
              >
                {company}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-[1280px] gap-10 px-5 py-16 md:grid-cols-[1.3fr_0.7fr] md:items-end md:px-10 md:py-24">
        <blockquote className="display-text max-w-4xl text-4xl leading-[1.05] text-[#12211c] md:text-6xl">
          “Scout didn’t send me more jobs. It found the{" "}
          <span className="italic text-[#e6653f]">one conversation</span> that
          changed my year.”
        </blockquote>
        <div className="flex items-center gap-4 md:justify-end">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#b6d8c8] text-sm font-bold text-[#15382e]">
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
    </section>
  );
}
