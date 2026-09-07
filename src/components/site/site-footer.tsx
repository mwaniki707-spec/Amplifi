import { Link } from "@tanstack/react-router";
import { Zap } from "lucide-react";

import { Container } from "@/components/site/container";
import { services, socials } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <Container className="py-16">
        <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-10 md:grid-cols-5">
          <div className="col-span-2">
            <div className="mb-4 flex items-center gap-2.5">
              <span className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-orange">
                <Zap className="size-5 text-white" fill="white" />
              </span>
              <span className="font-display text-xl font-bold text-white">Amplifi</span>
            </div>
            <p className="mb-6 max-w-xs text-sm text-slate-400">
              Building websites. Automating business. Driving growth.
            </p>
            <div className="flex gap-3">
              {socials.map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex size-9 items-center justify-center rounded-full border border-slate-700 text-slate-400 transition-colors hover:border-brand hover:text-brand"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-4 text-sm font-semibold text-white">Services</div>
            <ul className="space-y-3 text-sm text-slate-400">
              {services.map((s) => (
                <li key={s.id}>
                  <Link to="/services" className="hover:text-brand">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="mb-4 text-sm font-semibold text-white">Company</div>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <Link to="/about" className="hover:text-brand">
                  About
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-brand">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/process" className="hover:text-brand">
                  Process
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-brand">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="mb-4 text-sm font-semibold text-white">Stay in the loop</div>
            <p className="mb-3 text-sm text-slate-400">Growth tips, no spam.</p>
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
              <label className="sr-only" htmlFor="footer-email">
                Email
              </label>
              <input
                id="footer-email"
                type="email"
                placeholder="you@company.com"
                className="w-full min-w-0 rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-white placeholder-slate-500 outline-none focus:border-brand"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-brand px-4 py-2 text-sm font-semibold text-brand-foreground hover:bg-brand-soft"
              >
                Join
              </button>
            </form>
          </div>
        </nav>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 text-xs text-slate-500 sm:flex-row">
          <span>© {new Date().getFullYear()} Amplifi. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-slate-300">
              Terms
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
