import Link from "next/link";

const nav = [
  { label: "For Candidates", href: "#candidates" },
  { label: "For Companies", href: "#companies" },
  { label: "Pricing", href: "#pricing" },
  { label: "About Us", href: "#about" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#12211c]/10 bg-[#f5f2ea]/92 shadow-[0_1px_0_rgb(18_33_28/0.04)] backdrop-blur-xl supports-[backdrop-filter]:bg-[#f5f2ea]/78">
      <div className="hidden border-b border-[#12211c]/8 bg-[#15382e] px-5 py-2 text-center text-xs font-medium text-[#cfe0d7] sm:block">
        Scout is free for candidates forever —{" "}
        <Link href="#signup" className="font-semibold text-[#b6d8c8] underline decoration-[#e6653f]/50 underline-offset-2 hover:text-white">
          start in 10 minutes
        </Link>
      </div>
      <div className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between px-5 md:px-10">
        <Link
          href="/"
          className="display-text group flex min-h-11 items-center gap-2 text-[1.75rem] text-[#12211c]"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#12211c] text-[11px] font-sans font-bold tracking-normal transition-colors group-hover:bg-[#12211c] group-hover:text-[#f5f2ea]">
            S·S
          </span>
          Scout &amp; Sage
        </Link>
        <nav className="hidden items-center gap-8 text-[13px] font-medium text-[#46534d] md:flex" aria-label="Main navigation">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="border-b border-transparent py-2 transition-[color,border-color] duration-200 hover:border-[#e6653f] hover:text-[#12211c]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-2 text-sm md:ml-0">
          <details className="group relative md:hidden">
            <summary className="flex min-h-11 list-none items-center px-3 font-semibold text-[#30453c] marker:content-none">
              Menu
              <span className="ml-2 transition-transform duration-200 group-open:rotate-45" aria-hidden>+</span>
            </summary>
            <nav
              aria-label="Mobile navigation"
              className="absolute right-0 top-12 w-56 overflow-hidden rounded-[18px] border border-[#12211c]/10 bg-[#fffdf8]/95 p-2 shadow-[0_20px_50px_-20px_rgba(18,33,28,0.4)] backdrop-blur-md"
            >
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex min-h-11 items-center rounded-xl px-4 font-medium text-[#30453c] transition-colors hover:bg-[#edf2ed] hover:text-[#12211c]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </details>
          <Link href="#login" className="hidden min-h-11 items-center px-3 text-[#46534d] hover:text-[#12211c] md:flex">
            Log in
          </Link>
          <Link
            href="#companies"
            className="button-lift hidden min-h-11 items-center rounded-full border border-[#12211c]/15 bg-[#fffdf8]/80 px-4 text-sm font-semibold text-[#30453c] md:flex"
          >
            Meet Sage
          </Link>
          <Link
            href="#signup"
            className="button-lift flex min-h-11 items-center rounded-full bg-[#12211c] px-5 font-semibold text-[#fffdf8] ring-1 ring-[#12211c]/10"
          >
            Meet Scout <span className="ml-2 hidden sm:inline" aria-hidden>↗</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
