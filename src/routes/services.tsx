import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import * as React from "react";

import { Container } from "@/components/site/container";
import { Reveal } from "@/components/site/motion-primitives";
import {
  FinalCTA,
  PageHero,
  PrimaryButton,
  Section,
} from "@/components/site/sections";
import { breadcrumbsSchema, createMetadata } from "@/lib/seo";
import { services, type Service } from "@/lib/site-data";

export const Route = createFileRoute("/services")({
  head: () => {
    const { meta, links } = createMetadata({
      title: "Services — Web, AI Agents, Automation & Ads | Amplifi",
      description:
        "Web development, AI agents, workflow automation, and paid social advertising built to work together as one growth stack.",
      path: "/services",
    });
    return {
      meta,
      links,
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbsSchema([
              { name: "Home", path: "/" },
              { name: "Services", path: "/services" },
            ]),
          ),
        },
      ],
    };
  },
  component: ServicesComponent,
});

function ServiceRow({ service, index }: { service: Service; index: number }) {
  const Icon = service.icon;
  const isEven = index % 2 === 0;
  const isOdd = index % 2 === 1;

  return (
    <Section
      tone={index === 3 ? "cream-flip" : isEven ? "light" : "cream"}
      className="py-20"
    >
      <Container
        className={`grid items-center gap-14 lg:grid-cols-2 ${
          isOdd ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <Reveal>
          <div
            className={`mb-6 flex size-14 items-center justify-center rounded-2xl ${
              service.accent === "green"
                ? "bg-brand-100 text-brand-700"
                : "bg-orange-100 text-orange-700"
            }`}
          >
            <Icon className="size-7" />
          </div>
          <h2 className="text-h2 text-slate-900">{service.title}</h2>
          <p className="text-lead mt-4 text-slate-600">{service.blurb}</p>
          <div className="mt-8">
            <PrimaryButton to="/contact">Get Started</PrimaryButton>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div
            className={`rounded-3xl border p-8 transition-all duration-300 hovergreenglow hover:-translate-y-1 ${
              isEven
                ? "border-slate-200 bg-slate-50"
                : "border-slate-300/70 bg-white/60"
            }`}
          >
            <ul className="grid gap-4 sm:grid-cols-2">
              {service.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className={`mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full ${
                      service.accent === "green"
                        ? "bg-brand-100 text-brand-700"
                        : "bg-orange-100 text-orange-700"
                    }`}
                  >
                    <Check className="size-3" />
                  </span>
                  <span className="text-small text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

function ServicesComponent() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Everything your growth stack needs."
        subtitle="Web development, AI agents, workflow automation, and paid social — built to work together, not as disconnected add-ons."
      />
      {services.map((service, index) => (
        <ServiceRow key={service.id} service={service} index={index} />
      ))}
      <FinalCTA
        light
        title="Not sure which service fits?"
        subtitle="Tell us what you're working with — we'll recommend where to start."
        secondaryLabel="See Our Work"
        secondaryTarget="/portfolio"
      />
    </>
  );
}
