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
    <section id="about" className="border-b border-[#eee] bg-[#fafafa] py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Why Scout exists</h2>
        <p className="mt-6 text-lg leading-relaxed text-[#555]">
          Finding a new job feels like a full-time job. Recruiters flood your inbox with irrelevant roles and by the time a job hits LinkedIn, hundreds have already applied. Scout works differently. He's an AI career agent that learns what you want, searches at scale, and connects you with hiring managers through Sage's network — with coaching so you show up ready.
        </p>
      </div>
    </section>
  );
}

export function StepsSection() {
  return (
    <section className="border-b border-[#eee] bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          From conversation to offer, in 5 steps.
        </h2>
        <ol className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, i) => (
            <li key={step.title} className="rounded-2xl border border-[#eee] bg-[#fafafa] p-6">
              <span className="text-sm font-medium text-[#888]">Step {i + 1}</span>
              <h3 className="mt-3 text-xl font-semibold">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#555]">{step.body}</p>
            </li>
          ))}
          <li className="flex flex-col justify-center rounded-2xl border border-[#0a0a0a] bg-[#0a0a0a] p-6 text-white md:col-span-2 lg:col-span-1">
            <h3 className="text-xl font-semibold">Ready to get started?</h3>
            <p className="mt-3 text-sm text-white/75">
              Talk to Scout for 10 minutes and see your first matches.
            </p>
            <Link
              href="#signup"
              className="mt-6 inline-flex h-11 items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-[#0a0a0a]"
            >
              Sign up to Scout
            </Link>
          </li>
        </ol>
      </div>
    </section>
  );
}

export function PricingSection() {
  return (
    <section id="pricing" className="border-b border-[#eee] bg-[#fafafa] py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Pricing</h2>
        <p className="mt-6 text-2xl font-medium">Scout is completely free to use.</p>
        <div className="mx-auto mt-10 max-w-md rounded-2xl border border-[#eee] bg-white p-8 shadow-sm">
          <p className="text-sm text-[#888]">Your Plan</p>
          <p className="mt-2 text-4xl font-semibold">$0</p>
          <p className="mt-4 text-sm text-[#555]">Companies pay when they hire through Sage.</p>
        </div>
        <div className="mt-12 text-left">
          <h3 className="text-lg font-semibold">Why is Scout free?</h3>
          <p className="mt-3 leading-relaxed text-[#555]">
            Scout's mission is to give everyone high-quality career support, not just those who've already made it. When Scout introduces you to a company through Sage's network and you get hired, the company pays a success fee — Scout stays free for you.
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
    <section className="border-b border-[#eee] bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">The numbers.</h2>
        <dl className="mt-14 grid gap-8 md:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="border-t border-[#eee] pt-6">
              <dt className="text-4xl font-semibold tracking-tight md:text-5xl">{s.value}</dt>
              <dd className="mt-3 text-[#555]">{s.label}</dd>
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
    <section className="border-b border-[#eee] bg-[#fafafa] py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">FAQs</h2>
        <ul className="mt-10 divide-y divide-[#e5e5e5] border-y border-[#e5e5e5]">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <li key={item.q}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 py-5 text-left font-medium"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  {item.q}
                  <span className="text-xl text-[#888]">{isOpen ? "−" : "+"}</span>
                </button>
                {isOpen && (
                  <p className="pb-5 text-sm leading-relaxed text-[#555]">{item.a}</p>
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
    <section className="border-b border-[#eee] bg-white py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 md:grid-cols-2 md:px-8">
        <div id="signup" className="rounded-2xl border border-[#eee] bg-[#fafafa] p-10">
          <h2 className="text-2xl font-semibold md:text-3xl">Looking for a job? Speak to Scout</h2>
          <Link
            href="#"
            className="mt-8 inline-flex h-12 items-center rounded-full bg-[#0a0a0a] px-8 text-sm font-medium text-white"
          >
            Sign up
          </Link>
        </div>
        <div id="companies" className="rounded-2xl border border-[#eee] bg-[#0a0a0a] p-10 text-white">
          <h2 className="text-2xl font-semibold md:text-3xl">Hiring? Speak to Sage</h2>
          <Link
            href="#"
            className="mt-8 inline-flex h-12 items-center rounded-full bg-white px-8 text-sm font-medium text-[#0a0a0a]"
          >
            Learn more
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
    <footer className="bg-[#fafafa] py-16">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="flex flex-col gap-8 border-b border-[#eee] pb-12 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-serif text-2xl">Scout & Sage</p>
            <p className="mt-2 max-w-xs text-sm text-[#666]">
              AI agents for job searching & hiring.
            </p>
          </div>
          <div className="flex gap-4 text-sm text-[#555]">
            {["X", "LinkedIn", "Instagram", "TikTok"].map((s) => (
              <Link key={s} href="#" className="hover:text-[#0a0a0a]">
                {s}
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-sm font-semibold">{col.title}</p>
              <ul className="mt-4 space-y-2 text-sm text-[#666]">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="hover:text-[#0a0a0a]">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-12 text-xs text-[#888]">
          © {new Date().getFullYear()} Scout & Sage Labs, Inc. All rights reserved. Inspired clone for demo purposes — not affiliated with Jack & Jill.
        </p>
      </div>
    </footer>
  );
}
