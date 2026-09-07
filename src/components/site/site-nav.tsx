import { Link } from "@tanstack/react-router";
import { ArrowRight, Menu } from "lucide-react";

import { nav } from "@/lib/site-data";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2.5">
          <img src="/tab-icon.png" alt="Amplifi logo" className="size-9 rounded-xl" />
          <span className="font-display text-xl font-bold tracking-tight text-white">Amplifi</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="relative rounded-full px-4 py-2 text-sm font-medium text-slate-400 transition-colors hover:text-white data-[status=active]:bg-slate-800 data-[status=active]:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-brand-foreground transition-all duration-300 hover:bg-brand-soft hovergreenglow"
          >
            Start a Project <ArrowRight className="size-4" />
          </Link>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <button type="button" className="text-white md:hidden" aria-label="Open menu">
              <Menu className="size-6" />
            </button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="flex w-[280px] flex-col border-slate-800 bg-slate-950 p-0 sm:w-80"
          >
            <SheetTitle className="sr-only">Mobile navigation</SheetTitle>
            <SheetDescription className="sr-only">
              Navigate to different pages on the Amplifi website.
            </SheetDescription>
            <div className="flex h-20 items-center border-b border-slate-800 px-6">
              <Link to="/" className="flex items-center gap-2.5">
                <img src="/tab-icon.png" alt="Amplifi logo" className="size-9 rounded-xl" />
                <span className="font-display text-xl font-bold tracking-tight text-white">
                  Amplifi
                </span>
              </Link>
            </div>
            <nav className="flex flex-1 flex-col gap-1 p-6" aria-label="Mobile">
              {nav.map((item) => (
                <SheetClose asChild key={item.to}>
                  <Link
                    to={item.to}
                    activeOptions={{ exact: item.to === "/" }}
                    className="rounded-lg px-3 py-3 text-left text-base font-medium text-slate-300 transition-colors hover:bg-slate-900 hover:text-white data-[status=active]:bg-slate-900 data-[status=active]:text-white"
                  >
                    {item.label}
                  </Link>
                </SheetClose>
              ))}
            </nav>
            <div className="border-t border-slate-800 p-6">
              <SheetClose asChild>
                <Link
                  to="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground transition-colors hover:bg-brand-soft"
                >
                  Start a Project <ArrowRight className="size-4" />
                </Link>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
