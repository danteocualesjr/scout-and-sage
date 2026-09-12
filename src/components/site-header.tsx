import Link from "next/link";

const nav = [
  { label: "For Candidates", href: "#candidates" },
  { label: "For Companies", href: "#companies" },
  { label: "Pricing", href: "#pricing" },
  { label: "About Us", href: "#about" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#eee] bg-[#fafafa]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <Link
          href="/"
          className="font-serif text-2xl tracking-tight text-[#0a0a0a]"
        >
          Scout & Sage
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-[#555] md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-[#0a0a0a]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4 text-sm">
          <Link href="#login" className="text-[#555] hover:text-[#0a0a0a]">
            Log in
          </Link>
          <Link
            href="#signup"
            className="rounded-full bg-[#0a0a0a] px-4 py-2 font-medium text-white transition-opacity hover:opacity-90"
          >
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
}
