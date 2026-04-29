import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Twitter } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-charcoal text-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground font-display text-lg font-bold">
              E
            </span>
            <span className="font-display text-xl font-bold">Ember & Bun</span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-cream/70">
            Hand-crafted burgers, locally sourced ingredients, and a smoky char that keeps you coming back.
          </p>
          <div className="mt-5 flex gap-3">
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/20 transition-colors hover:bg-primary hover:border-primary"
                aria-label="Social link"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-base font-semibold text-mustard">Visit Us</h4>
          <p className="mt-3 text-sm text-cream/70">
            142 Grill Lane<br />
            Brooklyn, NY 11201<br />
            (555) 421-0808
          </p>
        </div>

        <div>
          <h4 className="font-display text-base font-semibold text-mustard">Hours</h4>
          <p className="mt-3 text-sm text-cream/70">
            Mon–Thu: 11am – 10pm<br />
            Fri–Sat: 11am – Midnight<br />
            Sun: 12pm – 9pm
          </p>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-5 text-xs text-cream/50 md:flex-row">
          <p>© {new Date().getFullYear()} Ember & Bun. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/" className="hover:text-cream">Privacy</Link>
            <Link to="/" className="hover:text-cream">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
