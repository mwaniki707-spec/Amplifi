import { createFileRoute } from "@tanstack/react-router";
import * as React from "react";

import { Container } from "@/components/site/container";
import { Reveal } from "@/components/site/motion-primitives";
import { ProjectCard } from "@/components/site/project-card";
import { FinalCTA, PageHero, Section } from "@/components/site/sections";
import { breadcrumbsSchema, createMetadata } from "@/lib/seo";
import { categories, portfolio } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/portfolio")({
  head: () => {
    const { meta, links } = createMetadata({
      title: "Portfolio — Case Studies & Results | Amplifi",
      description:
        "Recent Amplifi projects across web development, AI agents, automation, and advertising — with the results each one delivered.",
      path: "/portfolio",
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
              { name: "Portfolio", path: "/portfolio" },
            ]),
          ),
        },
      ],
    };
  },
  component: PortfolioComponent,
});

function PortfolioComponent() {
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [expandedProject, setExpandedProject] = React.useState<string | null>(null);

  const filtered =
    selectedCategory === "All"
      ? portfolio
      : portfolio.filter((p) => p.category === selectedCategory);

  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Work that made a measurable difference."
        subtitle="A sample of recent projects across web development, AI agents, automation, and advertising."
      />

      <Section tone="light" className="py-20">
        <Container>
          <Reveal className="mb-10 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={cn(
                  "text-small rounded-full px-4 py-2 font-medium transition-all duration-200",
                  selectedCategory === cat
                    ? "scale-105 bg-brand text-brand-foreground shadow-md shadow-brand/25"
                    : "border border-slate-300 text-slate-600 hover:border-slate-400 hover:text-slate-900",
                )}
              >
                {cat}
              </button>
            ))}
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project, index) => (
              <Reveal key={project.title} delay={index * 60} className="h-full">
                <ProjectCard
                  project={project}
                  light
                  expanded={expandedProject === project.title}
                  onToggle={() =>
                    setExpandedProject(
                      expandedProject === project.title ? null : project.title,
                    )
                  }
                />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <FinalCTA
        title="Want results like these?"
        subtitle="Every project above started with a short conversation about what wasn't working. Let's start yours."
        secondaryLabel="Our Process"
        secondaryTarget="/process"
      />
    </>
  );
}
