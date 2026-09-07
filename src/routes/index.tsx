import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MessageSquare, Star } from "lucide-react";
import * as React from "react";

import { Container } from "@/components/site/container";
import { HeroIllustration } from "@/components/site/hero-illustration";
import { Reveal } from "@/components/site/motion-primitives";
import { ProjectCard } from "@/components/site/project-card";
import {
  Eyebrow,
  FinalCTA,
  Section,
  SectionHeading,
  StatsSection,
} from "@/components/site/sections";
import {
  breadcrumbsSchema,
  createMetadata,
  localBusinessSchema,
} from "@/lib/seo";
import {
  portfolio,
  processSteps,
  services,
  testimonials,
  whyAmplifi,
} from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => {
    const { meta, links } = createMetadata({
      title: "Amplifi — Websites, AI Agents & Growth Automation",
      description:
        "Amplifi builds high-converting websites, AI agents, workflow automation, and paid social campaigns for growing businesses.",
      path: "/",
    });
    return {
      meta,
      links,
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(localBusinessSchema()),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbsSchema([{ name: "Home", path: "/" }]),
          ),
        },
      ],
    };
  },
  component: HomeComponent,
});

function LazyHeroVideo() {
  const ref = React.useRef<HTMLDivElement>(null);
  const [inView, setInView] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="absolute inset-0">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        className="absolute inset-0 size-full object-cover"
        src={inView ? "/hero-video.mp4" : undefined}
        aria-hidden="true"
      />
    </div>
  );
}

function HomeComponent() {
  return (
    <>
      {/* Hero Section */}
      <Section className="relative min-h-screen overflow-hidden flex items-center pt-16 pb-24 lg:pt-24">
        <div className="absolute inset-0 z-0">
          <LazyHeroVideo />
          <div className="absolute inset-0 bg-gradient-to-br from-green-600/75 via-blue-900/90 to-orange-600/75" />
        </div>
        <Container className="relative z-10 grid items-center gap-16 lg:grid-cols-2">
          <div>
            <Reveal>
              <Eyebrow light showDot className="text-brand-soft">
                Digital Growth Agency
              </Eyebrow>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="text-display mt-6 text-white">
                Build <span className="text-orange">Smarter.</span>
                <br />
                Grow <span className="text-orange">Faster.</span>
                <br />
                <span className="text-brand-700">Driving growth.</span>
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-lead mt-6 max-w-lg text-white">
                Amplifi helps businesses scale with custom websites, AI agents,
                workflow automation, and high performing digital advertising.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://wa.me/254714931314?text=Hello%2C%20I%27d%20like%20to%20get%20in%20touch%20with%20Amplifi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-brand-foreground shadow-lg shadow-brand/20 transition-all duration-300 hover:bg-brand-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                >
                  <MessageSquare className="size-4" />
                  Contact Us
                </a>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 rounded-full border px-6 py-3.5 text-sm font-semibold transition-all duration-300 bg-orange text-white border-orange hover:bg-orange/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
                >
                  Explore Our Services
                </Link>
              </div>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <div className="hero-drift">
              <HeroIllustration />
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Services Section */}
      <Section tone="light" className="py-24">
        <Container>
          <SectionHeading
            eyebrow="What We Do"
            title="Four disciplines. One growth engine."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <Reveal key={service.id} delay={index * 80} className="h-full">
                <Link
                  to="/services"
                  className="group flex h-full w-full flex-col rounded-2xl border border-slate-200 bg-white p-6 text-left transition-all duration-300 hover:-translate-y-1.5 hover-green-glow"
                >
                  <div
                    className={`mb-5 flex size-11 items-center justify-center rounded-xl ${service.accent === "green"
                        ? "bg-brand-100 text-brand-700"
                        : "bg-orange-100 text-orange-700"
                      }`}
                  >
                    <service.icon className="size-5" />
                  </div>
                  <h3 className="text-h4 mb-2 text-slate-900">{service.title}</h3>
                  <p className="text-small text-slate-600 flex-1">{service.blurb}</p>
                  <span className="text-small mt-4 inline-flex items-center gap-1 font-medium text-brand-700 opacity-0 transition-opacity group-hover:opacity-100">
                    Learn more <ArrowRight className="size-3.5" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Why Amplifi Section */}
      <Section tone="cream" className="py-24">
        <Container className="grid items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <Eyebrow light>Why Amplifi</Eyebrow>
            <h2 className="text-h2 mt-5 text-slate-900">
              An agency that operates like a growth team, not a vendor.
            </h2>
            <p className="text-lead mt-4 text-slate-600">
              Most agencies hand off a deliverable and disappear. We stay close
              to the outcome — because a beautiful site that doesn't convert, or
              an AI agent nobody trained, isn't a finished job.
            </p>
          </Reveal>
          <div className="grid gap-5">
            {whyAmplifi.map((point, index) => (
              <Reveal key={point.title} delay={index * 100}>
                <div className="flex items-start gap-4 rounded-2xl border border-slate-300/70 bg-white/60 p-5 transition-all duration-300 hover:-translate-y-1 hover-green-glow">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand-100 text-brand-700">
                    <point.icon className="size-5" />
                  </div>
                  <div>
                    <h3 className="text-h4 text-slate-900">{point.title}</h3>
                    <p className="text-small mt-1 text-slate-600">{point.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Featured Work Section */}
      <Section tone="light" className="py-24">
        <Container>
          <Reveal className="mb-14 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div className="max-w-xl">
              <Eyebrow light accent="orange">
                Featured Work
              </Eyebrow>
              <h2 className="text-h2 mt-5 text-slate-900">
                Recent projects, real results.
              </h2>
            </div>
            <Link
              to="/portfolio"
              className="text-small inline-flex items-center gap-1 font-semibold text-brand-700 hover:text-brand"
            >
              View full portfolio <ArrowRight className="size-4" />
            </Link>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {portfolio.slice(0, 3).map((project, index) => (
              <Reveal key={project.title} delay={index * 100} className="h-full">
                <ProjectCard project={project} light />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Our Process Section */}
      <Section tone="cream-flip" className="py-24">
        <Container>
          <SectionHeading
            eyebrow="Our Process"
            title="A clear path from first call to launch."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.slice(0, 4).map((step, index) => (
              <Reveal key={step.title} delay={index * 80} className="h-full">
                <div className="flex h-full flex-col rounded-2xl border border-slate-300/70 bg-white/60 p-6 transition-all duration-300 hover:-translate-y-1 hover-green-glow">
                  <div className="mb-4 flex size-10 items-center justify-center rounded-lg bg-orange-100 text-orange-700">
                    <step.icon className="size-5" />
                  </div>
                  <div className="text-caption mb-1 text-slate-600">
                    Step {index + 1}
                  </div>
                  <h3 className="text-h4 mb-2 text-slate-900">{step.title}</h3>
                  <p className="text-small text-slate-600">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-8 text-center">
            <Link
              to="/process"
              className="text-small inline-flex items-center gap-1 font-semibold text-brand-700 hover:text-brand"
            >
              See the full process <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </Container>
      </Section>

      {/* Testimonials */}
      <Section tone="light" className="py-24">
        <Container>
          <SectionHeading
            eyebrow="Client Voices"
            title="What it's like to work with us."
            accent="orange"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Reveal key={testimonial.name} delay={index * 100} className="h-full">
                <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-1 hover-green-glow">
                  <div className="mb-4 flex gap-0.5 text-orange-500">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="size-4" fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-body flex-1 text-slate-600">
                    "{testimonial.quote}"
                  </p>
                  <div className="mt-5 border-t border-slate-200 pt-4">
                    <div className="text-small font-semibold text-slate-900">
                      {testimonial.name}
                    </div>
                    <div className="text-caption text-slate-500">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Stats */}
      <StatsSection />

      {/* Final CTA */}
      <FinalCTA light />
    </>
  );
}
