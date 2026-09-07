import { ChevronDown, ExternalLink } from "lucide-react";

import { cn } from "@/lib/utils";
import { categoryIcons } from "@/lib/site-data";
import type { Project } from "@/lib/site-data";

export function ProjectCard({
  project,
  expanded,
  onToggle,
  light = false,
}: {
  project: Project;
  expanded?: boolean;
  onToggle?: () => void;
  light?: boolean;
}) {
  const green = project.color === "green";
  const CatIcon = categoryIcons[project.category];
  return (
    <div
      className={cn(
        "flex h-full flex-col overflow-hidden rounded-2xl border transition-all duration-300 hover:-translate-y-1.5 hovergreenglow",
        light
          ? "border-slate-200 bg-white"
          : "border-slate-800 bg-slate-900",
      )}
    >
      {project.preview ? (
        /* Browser-frame preview */
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block overflow-hidden"
          tabIndex={-1}
          aria-hidden="true"
        >
          {/* mock browser chrome */}
          <div
            className={cn(
              "flex items-center gap-1.5 px-3 py-2",
              light ? "bg-slate-100" : "bg-slate-800",
            )}
          >
            <span className="size-2.5 rounded-full bg-red-400/70" />
            <span className="size-2.5 rounded-full bg-yellow-400/70" />
            <span className="size-2.5 rounded-full bg-green-400/70" />
            <span
              className={cn(
                "ml-2 flex-1 rounded px-2 py-0.5 text-[10px] truncate",
                light ? "bg-white text-slate-400" : "bg-slate-700 text-slate-400",
              )}
            >
              {project.url?.replace(/^https?:\/\//, "").replace(/\/$/, "")}
            </span>
          </div>
          {/* screenshot */}
          <div className="relative h-40 overflow-hidden">
            <picture>
              <source
                srcSet={project.preview.replace(/\.(png|jpg|jpeg)$/, ".webp")}
                type="image/webp"
              />
              <img
                src={project.preview}
                alt={`${project.title} website preview`}
                width={800}
                height={450}
                className="w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
            </picture>
            {/* subtle overlay on hover */}
            <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
            {/* industry badge */}
            <span
              className={cn(
                "text-caption absolute bottom-2.5 left-3 rounded-full px-3 py-1 backdrop-blur-sm",
                light
                  ? green
                    ? "bg-brand-100/90 text-brand-700"
                    : "bg-orange-100/90 text-orange-700"
                  : green
                    ? "bg-brand-500/30 text-brand-200"
                    : "bg-orange-500/30 text-orange-200",
              )}
            >
              {project.industry}
            </span>
          </div>

        </a>
      ) : (
        /* Fallback gradient header */
        <div
          className={cn(
            "relative flex h-36 items-end overflow-hidden bg-gradient-to-br p-5",
            light
              ? green
                ? "from-brand-100 via-white to-white"
                : "from-orange-100 via-white to-white"
              : green
                ? "from-brand/40 via-slate-900 to-slate-900"
                : "from-orange/40 via-slate-900 to-slate-900",
          )}
        >
          {CatIcon && (
            <CatIcon
              className={cn(
                "absolute -right-4 -top-4 size-28",
                light
                  ? green
                    ? "text-brand-100"
                    : "text-orange-100"
                  : green
                    ? "text-brand-500/20"
                    : "text-orange-500/20",
              )}
              strokeWidth={1.25}
            />
          )}
          <span
            className={cn(
              "text-caption relative rounded-full px-3 py-1",
              light
                ? green
                  ? "bg-brand-100 text-brand-700"
                  : "bg-orange-100 text-orange-700"
                : green
                  ? "bg-brand-500/20 text-brand-300"
                  : "bg-orange-500/20 text-orange-300",
            )}
          >
            {project.industry}
          </span>
        </div>
      )}

      <div className="flex flex-1 flex-col p-6">
        <h3 className={cn("text-h4 mb-1", light ? "text-slate-900" : "text-white")}>
          {project.title}
        </h3>
        <div className="mb-4 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className={cn(
                "rounded-full border px-2.5 py-0.5 text-[11px]",
                light ? "border-slate-200 text-slate-500" : "border-slate-700 text-slate-400",
              )}
            >
              {t}
            </span>
          ))}
        </div>
        <div className="text-body space-y-3">
          <div>
            <span className={cn("font-medium", light ? "text-slate-700" : "text-slate-300")}>
              Challenge:{" "}
            </span>
            <span className={light ? "text-slate-600" : "text-slate-400"}>{project.challenge}</span>
          </div>
          {onToggle ? (
            expanded && (
              <>
                <div>
                  <span className={cn("font-medium", light ? "text-slate-700" : "text-slate-300")}>
                    Solution:{" "}
                  </span>
                  <span className={light ? "text-slate-600" : "text-slate-400"}>
                    {project.solution}
                  </span>
                </div>
                <div>
                  <span className={cn("font-medium", light ? "text-slate-700" : "text-slate-300")}>
                    Results:{" "}
                  </span>
                  <span className={light ? "text-slate-600" : "text-slate-400"}>
                    {project.results}
                  </span>
                </div>
              </>
            )
          ) : (
            <div>
              <span className={cn("font-medium", light ? "text-slate-700" : "text-slate-300")}>
                Results:{" "}
              </span>
              <span className={light ? "text-slate-600" : "text-slate-400"}>{project.results}</span>
            </div>
          )}
        </div>
        <div className="mt-4 flex items-center gap-4">
          {onToggle && (
            <button
              type="button"
              onClick={onToggle}
              className={cn(
                "text-small inline-flex items-center gap-1 self-start font-medium",
                light ? "text-brand hover:text-brand-700" : "text-brand/80 hover:text-brand",
              )}
            >
              {expanded ? "Show less" : "View case study"}
              <ChevronDown
                className={cn("size-3.5 transition-transform", expanded && "rotate-180")}
              />
            </button>
          )}
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "text-small inline-flex items-center gap-1 self-start font-medium",
                light ? "text-slate-500 hover:text-slate-800" : "text-slate-400 hover:text-white",
              )}
            >
              Visit site
              <ExternalLink className="size-3" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

