import { Bot, Globe, Workflow } from "lucide-react";
import { Fragment } from "react";

export function HeroIllustration() {
  return (
    <div className="relative">
      <div aria-hidden className="absolute -inset-10 -z-10 rounded-full bg-brand/20 blur-3xl" />
      <div
        aria-hidden
        className="absolute -inset-10 -z-10 translate-x-16 translate-y-16 rounded-full bg-orange/10 blur-3xl"
      />
      <div className="relative rounded-3xl border border-slate-700/60 bg-slate-900/70 p-6 shadow-2xl backdrop-blur-xl">
        <div className="mb-5 flex items-center gap-1.5">
          <div className="size-2.5 rounded-full bg-red-400/70" />
          <div className="size-2.5 rounded-full bg-orange-400/70" />
          <div className="size-2.5 rounded-full bg-brand/70" />
          <div className="ml-3 h-2 w-32 rounded-full bg-slate-700" />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2 rounded-2xl border border-slate-700/50 bg-slate-800/80 p-4">
            <div className="mb-3 flex items-center gap-2">
              <Globe className="size-4 text-brand" />
              <span className="text-caption text-slate-300">Website Traffic</span>
            </div>
            <div className="flex h-20 items-end gap-1.5">
              {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t bg-gradient-to-t from-brand-700 to-brand"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-between rounded-2xl border border-slate-700/50 bg-slate-800/80 p-4">
            <Bot className="size-4 text-orange" />
            <div>
              <div className="text-stat text-white">24/7</div>
              <div className="text-caption text-slate-400">AI support</div>
            </div>
          </div>
          <div className="col-span-3 rounded-2xl border border-slate-700/50 bg-slate-800/80 p-4">
            <div className="mb-3 flex items-center gap-2">
              <Workflow className="size-4 text-brand" />
              <span className="text-caption text-slate-300">Automated Pipeline</span>
            </div>
            <div className="flex items-center justify-between">
              {["Lead", "Qualify", "Notify", "Book"].map((s, i) => (
                <Fragment key={s}>
                  <div className="flex flex-col items-center gap-1.5">
                    <div className="flex size-8 items-center justify-center rounded-full bg-gradient-to-br from-brand to-orange text-[10px] font-bold text-brand-foreground">
                      {i + 1}
                    </div>
                    <span className="text-caption text-slate-400">{s}</span>
                  </div>
                  {i < 3 && <div className="mx-1 h-px flex-1 bg-slate-700" />}
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
