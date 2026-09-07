import { createFileRoute } from "@tanstack/react-router";
import * as React from "react";

import { Container } from "@/components/site/container";
import { Reveal } from "@/components/site/motion-primitives";
import {
  Eyebrow,
  FinalCTA,
  PageHero,
  Section,
  SectionHeading,
  StatsSection,
} from "@/components/site/sections";
import { breadcrumbsSchema, createMetadata } from "@/lib/seo";
import { coreValues, team } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => {
    const { meta, links } = createMetadata({
      title: "About Amplifi — One Team, Four Disciplines",
      description:
        "Meet the designers, engineers, and strategists behind Amplifi — an agency built so growth doesn't require five different vendors.",
      path: "/about",
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
              { name: "About", path: "/about" },
            ]),
          ),
        },
      ],
    };
  },
  component: AboutComponent,
});

function AboutComponent() {
  return (
    <>
      <PageHero
        eyebrow="About Amplifi"
        title="We started Amplifi because growth shouldn't require five different vendors."
        subtitle="A team of designers, engineers, and strategists who believe a website, an AI agent, and an ad campaign should all pull in the same direction."
      />

      {/* Our Story */}
      <Section tone="light" className="py-20">
        <Container className="grid gap-16 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-h3 text-slate-900">Our story</h2>
            <p className="text-body mt-4 text-slate-600">
              Amplifi was founded by a small group of freelancers who kept watching clients hire separately for web design, AI tools, automation, and ads — then struggle to make them talk to each other. We built the agency we wished existed: one team, one strategy, four disciplines working from the same plan.
            </p>
          </Reveal>
          <div className="grid gap-6">
            <Reveal delay={80}>
              <div>
                <h3 className="text-caption text-brand-700">Mission</h3>
                <p className="text-body mt-2 text-slate-700">
                  Help businesses scale through beautiful websites, intelligent AI automation, and performance-driven marketing.
                </p>
              </div>
            </Reveal>
            <Reveal delay={140}>
              <div>
                <h3 className="text-caption text-orange-700">Vision</h3>
                <p className="text-body mt-2 text-slate-700">
                  A future where every growing business has access to the kind of integrated digital operation once reserved for venture-backed startups.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Core Values */}
      <Section tone="cream" className="py-20">
        <Container>
          <SectionHeading
            eyebrow="What We Value"
            title="Core values"
            accent="orange"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((value, index) => (
              <Reveal key={value.title} delay={index * 80} className="h-full">
                <div className="flex h-full flex-col rounded-2xl border border-slate-300/70 bg-white/60 p-6 transition-all duration-300 hover-green-glow hover:-translate-y-1">
                  <div className="mb-4 flex size-11 items-center justify-center rounded-xl bg-orange-100 text-orange-700">
                    <value.icon className="size-5" />
                  </div>
                  <h3 className="text-h4 text-slate-900">{value.title}</h3>
                  <p className="text-small text-slate-600">{value.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* The Team */}
      <Section tone="light" className="py-20">
        <Container>
          <Reveal className="mb-14 max-w-2xl">
            <Eyebrow light>The Team</Eyebrow>
            <h2 className="text-h2 mt-5 text-slate-900">
              The people behind the work
            </h2>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <Reveal key={member.name} delay={index * 80} className="h-full">
                <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 text-center transition-all duration-300 hover-green-glow hover:-translate-y-1">
                  <div
                    className={`mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-gradient-to-br ${member.gradient} text-lg font-bold text-white`}
                  >
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <h3 className="text-h4 text-slate-900">{member.name}</h3>
                  <p className="text-caption mt-1 text-slate-600">{member.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <StatsSection />
      <FinalCTA light />
    </>
  );
}
