import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { Container } from "@/components/site/container";
import { Counter, Reveal } from "@/components/site/motion-primitives";
import { stats } from "@/lib/site-data";

export function Section({
  children,
  tone = "dark",
  className,
  id,
}: {
  children: ReactNode;
  tone?: "darkest" | "dark" | "light" | "cream" | "cream-flip" | "hero-gradient";
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative overflow-hidden",
        tone === "darkest" && "bg-slate-950 text-white",
        tone === "dark" && "bg-slate-900 text-white",
        tone === "light" && "section-light",
        tone === "cream" && "section-cream",
        tone === "cream-flip" && "section-cream-flip",
        tone === "hero-gradient" && "hero-gradient",
        className,
      )}
    >
      {children}
    </section>
  );
}

export function Eyebrow({
  children,
  light = false,
  accent = "green",
  showDot = false,
  className,
}: {
  children: ReactNode;
  light?: boolean;
  accent?: "green" | "orange";
  showDot?: boolean;
  className?: string;
}) {
  const styles = light
    ? accent === "orange"
      ? "border-orange-100 bg-orange-100 text-orange-700"
      : "border-brand-100 bg-brand-100 text-brand-700"
    : accent === "orange"
      ? "border-slate-700 bg-slate-800/60 text-orange"
      : "border-slate-700 bg-slate-800/60 text-brand";
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-caption",
        styles,
        className,
      )}
    >
      {showDot && <span aria-hidden className="hero-status-dot" />}
      {children}
    </div>
  );
}

export function PrimaryButton({
  children,
  to,
  type,
  className,
}: {
  children: ReactNode;
  to?: string;
  type?: "submit";
  className?: string;
}) {
  const cls = cn(
    "group inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-brand-foreground shadow-lg shadow-brand/20 transition-all duration-300 hover:bg-brand-soft hovergreenglow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950",
    className,
  );
  const inner = (
    <>
      {children}
      <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
    </>
  );
  if (to) {
    return (
      <Link to={to} className={cls}>
        {inner}
      </Link>
    );
  }
  return (
    <button type={type ?? "button"} className={cls}>
      {inner}
    </button>
  );
}

export function SecondaryButton({
  children,
  to,
  className,
  light = false,
}: {
  children: ReactNode;
  to: string;
  className?: string;
  light?: boolean;
}) {
  return (
    <Link
      to={to}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full border px-6 py-3.5 text-sm font-semibold transition-all duration-300 hovergreenglow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2",
        light
          ? "border-slate-300 text-slate-700 hover:bg-slate-100 focus-visible:ring-offset-white"
          : "border-slate-600 text-slate-100 hover:bg-slate-800 focus-visible:ring-offset-slate-950",
        className,
      )}
    >
      {children}
    </Link>
  );
}

export function HeroBackground({ warm = false }: { warm?: boolean }) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="hero-grid-anim absolute inset-0 opacity-30"
        style={{
          backgroundImage: warm
            ? "linear-gradient(rgba(120,105,70,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(120,105,70,0.16) 1px, transparent 1px)"
            : "linear-gradient(rgba(148,163,184,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.14) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 60% 60% at 50% 40%, black 20%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 60% at 50% 40%, black 20%, transparent 75%)",
        }}
      />
      <div
        className={cn(
          "hero-blob-a absolute -left-20 -top-24 size-80 rounded-full blur-3xl",
          warm ? "bg-brand/20" : "bg-brand/25",
        )}
      />
      <div
        className={cn(
          "hero-blob-b absolute -bottom-28 -right-16 size-96 rounded-full blur-3xl",
          warm ? "bg-orange/20" : "bg-orange/15",
        )}
      />
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  className,
  light = true,
  accent = "green",
}: {
  eyebrow: string;
  title: string;
  className?: string;
  light?: boolean;
  accent?: "green" | "orange";
}) {
  return (
    <Reveal className={cn("mb-14 max-w-2xl", className)}>
      <Eyebrow light={light} accent={accent}>
        {eyebrow}
      </Eyebrow>
      <h2 className="text-h2 mt-5">{title}</h2>
    </Reveal>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <Section tone="hero-gradient" className="relative overflow-hidden pb-16 pt-20">
      <HeroBackground warm />
      <Container size="4xl" className="relative text-center">
        <Reveal>
          <Eyebrow
            light
            showDot
            className="border-white/20 bg-white/10 text-brand-soft"
          >
            {eyebrow}
          </Eyebrow>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="text-h1 mt-6 text-white">{title}</h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="text-lead mx-auto mt-5 max-w-2xl text-white">{subtitle}</p>
        </Reveal>
      </Container>
    </Section>
  );
}

export function FinalCTA({
  light = false,
  flip = false,
  title = "Let's build something amplified.",
  subtitle = "Tell us where growth is stalling. We'll tell you exactly what we'd do about it.",
  secondaryLabel = "See Our Work",
  secondaryTarget = "/portfolio",
}: {
  light?: boolean;
  flip?: boolean;
  title?: string;
  subtitle?: string;
  secondaryLabel?: string;
  secondaryTarget?: string;
}) {
  return (
    <Section
      tone={flip ? "cream-flip" : light ? "light" : "cream"}
      className="relative overflow-hidden py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(249,115,22,0.10),transparent_65%)]"
      />
      <Reveal className="relative">
        <Container size="3xl" className="text-center">
          <h2 className="text-h2 text-slate-900">{title}</h2>
          <p className="text-lead mx-auto mt-4 max-w-xl text-slate-600">{subtitle}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <PrimaryButton to="/contact">Start a Project</PrimaryButton>
            <SecondaryButton light to={secondaryTarget}>
              {secondaryLabel}
            </SecondaryButton>
          </div>
        </Container>
      </Reveal>
    </Section>
  );
}

export function StatsSection() {
  return (
    <Section tone="cream" className="py-20">
      <Container>
        <div className="rounded-3xl border border-slate-700/60 bg-slate-900/90 px-8 py-10 shadow-xl">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 80} className="text-center">
                <div className="text-stat text-white">
                  <Counter end={s.value} suffix={s.suffix} />
                </div>
                <div className="text-small mt-2 text-slate-400">{s.label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
