"use client";

import Link from "next/link";
import { useState } from "react";

const faqs = [
  {
    q: "Is Scout just another AI chatbot?",
    a: "No. Scout is a career agent built for job search — matching, introductions, interview prep, and negotiation in one workflow.",
  },
  {
    q: "How does Scout find better opportunities than LinkedIn?",
    a: "Scout searches millions of roles daily and prioritizes step-up matches, not keyword spam. Warm intros through Sage's hiring network cut through the application pile.",
  },
  {
    q: "Will I get spammed with irrelevant opportunities?",
    a: "You control what Scout sends. Every match improves from your yes/no feedback.",
  },
  {
    q: "How long does it take to see opportunities?",
    a: "Most people see first matches within minutes after a short onboarding conversation.",
  },
  {
    q: "Does Scout work with recruiters or agencies?",
    a: "Scout focuses on direct hiring manager introductions via Sage's company network.",
  },
  {
    q: "What if I'm not actively job searching?",
    a: "Scout can run in passive mode — light-touch check-ins when exceptional roles appear.",
  },
  {
    q: "Is this proven? Does it actually work?",
    a: "Thousands of professionals use Scout for coaching and introductions every week.",
  },
  {
    q: "What information does Scout need from me?",
    a: "A résumé or LinkedIn profile plus a 10-minute conversation about goals and constraints.",
  },
  {
    q: "Can I trust an AI with my career?",
    a: "You decide what's shared and when. Scout never applies on your behalf without explicit approval.",
  },
];

const steps = [
  {
    title: "Tell Scout what you're looking for",
    body: "A 10-minute conversation is all it takes. Scout asks the right questions to understand what good looks like for you.",
  },
  {
    title: "Scout searches while you sleep",
    body: "15 million jobs searched daily. Not just keyword matches — genuine step ups you'd never find yourself.",
  },
  {
    title: "Scout brings you the best matches",
    body: "Tell him what feels right and what doesn't. He refines until there's a genuine match.",
  },
  {
    title: "Scout prepares you to land the role",
    body: "Mock interviews, salary negotiation, CV feedback — tailored to you and the specific role.",
  },
  {
    title: "Start doing your best work",
    body: "Direct introductions to hiring managers. No applications. No waiting.",
  },
];

export function WhySection() {
  return (
    <section id="about" className="overflow-hidden border-b border-[#fffdf8]/10 bg-[#15382e] py-24 text-[#fffdf8] md:py-36">
      <div className="mx-auto grid max-w-[1280px] gap-12 px-5 md:grid-cols-[0.65fr_1.35fr] md:px-10">
        <div>
          <p className="eyebrow text-[#b6d8c8]">Why we built Scout</p>
          <div className="mt-8 flex items-center gap-3 text-sm text-[#cfe0d7]">
            <span className="h-px w-12 bg-[#e6653f]" />
            The old way is broken
          </div>
        </div>
        <div>
          <h2 className="display-text text-5xl leading-[0.98] md:text-7xl">
            Finding a job shouldn’t feel like having a second one.
          </h2>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#cfe0d7]">
          Finding a new job feels like a full-time job. Recruiters flood your inbox with irrelevant roles and by the time a job hits LinkedIn, hundreds have already applied. Scout works differently. He’s an AI career agent that learns what you want, searches at scale, and connects you with hiring managers through Sage’s network — with coaching so you show up ready.
        </p>
          <blockquote className="display-text mt-12 border-l border-[#e6653f] pl-6 text-3xl italic text-[#b6d8c8]">
            “Less applying. More choosing.”
          </blockquote>
        </div>
      </div>
    </section>
  );
}

export function StepsSection() {
  return (
    <section className="border-b border-[#12211c]/10 bg-[#f5f2ea] py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-5 md:px-10">
        <div className="grid gap-5 md:grid-cols-[0.7fr_1.3fr] md:items-end">
          <p className="eyebrow text-[#e6653f]">How it works</p>
          <h2 className="display-text text-5xl leading-none md:text-7xl">
            One conversation.<br /><span className="italic text-[#e6653f]">Five smart moves.</span>
          </h2>
        </div>
        <ol className="mt-16 border-t border-[#12211c]/15">
          {steps.map((step, i) => (
            <li key={step.title} className="group grid gap-4 border-b border-[#12211c]/15 py-7 md:grid-cols-[100px_0.9fr_1.1fr] md:items-center md:py-9">
              <span className="display-text text-3xl italic text-[#e6653f]">0{i + 1}</span>
              <h3 className="text-xl font-bold text-[#12211c] transition-transform duration-200 group-hover:translate-x-1">{step.title}</h3>
              <p className="max-w-xl text-base leading-7 text-[#66716c]">{step.body}</p>
            </li>
          ))}
          <li className="flex flex-col items-start justify-between gap-7 border-b border-[#12211c]/15 py-10 md:flex-row md:items-center">
            <div>
              <h3 className="display-text text-3xl">Ready to see your first matches?</h3>
              <p className="mt-2 text-base text-[#66716c]">
              Talk to Scout for 10 minutes and see your first matches.
            </p>
            </div>
            <Link
              href="#signup"
              className="button-lift inline-flex min-h-14 items-center justify-center rounded-full bg-[#12211c] px-7 text-sm font-bold text-[#fffdf8]"
            >
              Meet Scout <span className="ml-4">→</span>
            </Link>
          </li>
        </ol>
      </div>
    </section>
  );
}

export function PricingSection() {
  return (
    <section id="pricing" className="border-b border-[#12211c]/10 bg-[#fffdf8] py-24 md:py-32">
      <div className="mx-auto grid max-w-[1280px] overflow-hidden rounded-[32px] border border-[#12211c]/10 bg-[#edf2ed] md:grid-cols-2">
        <div className="p-8 md:p-14">
          <p className="eyebrow text-[#e6653f]">Simple pricing</p>
          <h2 className="display-text mt-5 text-5xl leading-none md:text-7xl">A career agent<br />for <span className="italic">everyone.</span></h2>
          <p className="mt-7 max-w-md text-lg leading-8 text-[#58655f]">
            Scout is completely free for candidates. No trial, no card, no hidden premium tier.
          </p>
        </div>
        <div className="flex flex-col justify-between bg-[#e6653f] p-8 text-white md:p-14">
          <div>
            <p className="eyebrow text-white/70">Your plan</p>
            <p className="display-text mt-4 text-[7rem] leading-none">$0</p>
            <p className="mt-3 text-lg font-semibold">Forever. Really.</p>
          </div>
          <p className="mt-16 max-w-md border-t border-white/25 pt-6 leading-7 text-white/85">
            Companies pay only when they make a great hire through Sage. Your career support stays free.
          </p>
        </div>
      </div>
    </section>
  );
}

export function StatsSection() {
  const stats = [
    { value: "240K+", label: "Professionals working with Scout" },
    { value: "15M", label: "Jobs scanned every day" },
    { value: "40hrs", label: "Saved on average vs traditional job searching" },
  ];
  return (
    <section className="border-b border-[#12211c]/10 bg-[#fffdf8] py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-5 md:px-10">
        <p className="eyebrow text-[#66716c]">Built at market scale</p>
        <dl className="mt-10 grid border-t border-[#12211c]/15 md:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="border-b border-[#12211c]/15 py-8 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0">
              <dt className="display-text text-6xl text-[#12211c] md:text-7xl">{s.value}</dt>
              <dd className="mt-3 max-w-[220px] text-sm leading-6 text-[#66716c]">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="border-b border-[#12211c]/10 bg-[#f5f2ea] py-24 md:py-32">
      <div className="mx-auto grid max-w-[1280px] gap-12 px-5 md:grid-cols-[0.65fr_1.35fr] md:px-10">
        <div>
          <p className="eyebrow text-[#e6653f]">Good questions</p>
          <h2 className="display-text mt-4 text-5xl md:text-7xl">Before you ask Scout.</h2>
        </div>
        <ul className="border-t border-[#12211c]/15">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <li key={item.q}>
                <button
                  type="button"
                  className="flex min-h-16 w-full items-center justify-between gap-4 border-b border-[#12211c]/15 py-5 text-left text-base font-bold text-[#12211c]"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  {item.q}
                  <span className="display-text text-3xl text-[#e6653f]">{isOpen ? "−" : "+"}</span>
                </button>
                {isOpen && (
                  <p className="border-b border-[#12211c]/15 pb-6 pr-10 text-base leading-7 text-[#58655f]">{item.a}</p>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export function DualCtaSection() {
  return (
    <section className="border-b border-[#12211c]/10 bg-[#fffdf8]">
      <div className="mx-auto grid max-w-[1440px] md:grid-cols-2">
        <div id="signup" className="group min-h-[420px] bg-[#e6653f] p-8 text-white md:p-14">
          <p className="eyebrow text-white/70">For candidates</p>
          <h2 className="display-text mt-6 max-w-lg text-5xl leading-[0.98] md:text-7xl">Find work that feels like <span className="italic">you.</span></h2>
          <Link
            href="#"
            className="button-lift mt-10 inline-flex min-h-14 items-center rounded-full bg-[#fffdf8] px-7 text-sm font-bold text-[#12211c]"
          >
            Meet Scout <span className="ml-4 transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
        <div id="companies" className="group min-h-[420px] bg-[#15382e] p-8 text-[#fffdf8] md:p-14">
          <p className="eyebrow text-[#b6d8c8]">For companies</p>
          <h2 className="display-text mt-6 max-w-lg text-5xl leading-[0.98] md:text-7xl">Meet people worth changing your plans for.</h2>
          <Link
            href="#"
            className="button-lift mt-10 inline-flex min-h-14 items-center rounded-full border border-[#b6d8c8]/40 px-7 text-sm font-bold text-[#fffdf8]"
          >
            Meet Sage <span className="ml-4 transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  const columns = [
    {
      title: "For candidates",
      links: ["Learn about Scout", "Career Clarity", "Salary Negotiation", "Mock Interviews"],
    },
    {
      title: "For companies",
      links: ["AI Recruiting Agent", "Engineer Roles", "Bias Report", "Pricing"],
    },
    {
      title: "Company",
      links: ["About Us", "Contact", "Refer & Earn", "Docs"],
    },
    {
      title: "Resources",
      links: ["FAQs", "Guides & Blog", "Comparisons", "Privacy Policy"],
    },
  ];
  return (
    <footer className="bg-[#12211c] py-16 text-[#fffdf8]">
      <div className="mx-auto max-w-[1280px] px-5 md:px-10">
        <div className="flex flex-col gap-8 border-b border-white/15 pb-12 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="display-text text-4xl">Scout &amp; Sage</p>
            <p className="mt-3 max-w-xs text-sm text-white/60">
              Better matches, on both sides of the table.
            </p>
          </div>
          <div className="flex flex-wrap gap-5 text-sm text-white/60">
            {["X", "LinkedIn", "Instagram", "TikTok"].map((s) => (
              <Link key={s} href="#" className="inline-flex min-h-11 min-w-11 items-center justify-center px-1 transition-colors hover:text-white">
                {s}
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-sm font-semibold">{col.title}</p>
              <ul className="mt-4 space-y-1 text-sm text-white/55">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="inline-flex min-h-11 items-center py-2 transition-colors hover:text-white">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-12 max-w-3xl border-t border-white/15 pt-8 text-xs leading-5 text-white/40">
          © {new Date().getFullYear()} Scout & Sage Labs, Inc. All rights reserved. Inspired clone for demo purposes — not affiliated with Jack & Jill.
        </p>
      </div>
    </footer>
  );
}
