import { createFileRoute } from "@tanstack/react-router";
import * as React from "react";

import { Container } from "@/components/site/container";
import { Reveal } from "@/components/site/motion-primitives";
import { FinalCTA, PageHero, Section } from "@/components/site/sections";
import { breadcrumbsSchema, createMetadata } from "@/lib/seo";
import { processSteps } from "@/lib/site-data";

export const Route = createFileRoute("/process")({
  head: () => {
    const { meta, links } = createMetadata({
      title: "Our Process — Eight Steps to Launch | Amplifi",
      description:
        "Discovery to continuous support: the disciplined eight-step process behind every Amplifi website, AI agent, and automation build.",
      path: "/process",
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
              { name: "Process", path: "/process" },
            ]),
          ),
        },
      ],
    };
  },
  component: ProcessComponent,
});

function ProcessComponent() {
  return (
    <>
      <PageHero
        eyebrow="Process"
        title="Eight steps. Zero guesswork."
        subtitle="The same disciplined process behind every Amplifi project, from the first conversation to ongoing support."
      />

      <Section tone="light" className="py-20">
        <Container size="4xl">
          <div className="relative">
            <div className="absolute bottom-0 left-6 top-0 hidden w-px bg-slate-200 sm:block" />
            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <Reveal key={step.title} delay={index * 60}>
                  <div className="relative flex gap-6">
                    <div className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full border border-slate-300 bg-white text-brand-700">
                      <step.icon className="size-5" />
                    </div>
                    <div className="flex-1 rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hovergreenglow hover:-translate-y-1">
                      <div className="text-caption mb-1 text-slate-600">
                        Step {index + 1}
                      </div>
                      <h3 className="text-h3 mb-2 text-slate-900">{step.title}</h3>
                      <p className="text-small text-slate-600">{step.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <FinalCTA
        title="Ready to start with Discovery?"
        subtitle="No commitment required for the first conversation — just a clear read on what growth needs next."
        secondaryLabel="See Our Work"
        secondaryTarget="/portfolio"
      />
    </>
  );
}
