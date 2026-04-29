import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, MessageCircle, Phone } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-charcoal text-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-black text-primary-foreground">
              PB
            </span>
            <div>
              <span className="font-display text-xl font-bold">Pretzel Burgers</span>
              <p className="text-xs uppercase tracking-[0.24em] text-cream/55">Alexandria & North Coast</p>
            </div>
          </div>
          <p className="mt-4 max-w-sm text-sm text-cream/70">
            Bold pretzel buns, loaded burgers, and the original Pretzel Burgers experience served fresh in Egypt.
          </p>
          <div className="mt-5 flex gap-3">
            {[
              { icon: MessageCircle, href: "https://wa.me/201031995666", label: "WhatsApp" },
              { icon: Phone, href: "tel:035925817", label: "Call Alexandria" },
              { icon: Instagram, href: "#", label: "Instagram" },
              { icon: Facebook, href: "#", label: "Facebook" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/20 transition-colors hover:border-primary hover:bg-primary"
                  aria-label={item.label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>

        <div>
          <h4 className="font-display text-base font-semibold text-mustard">Locations</h4>
          <p className="mt-3 text-sm text-cream/70">
            75 El Gaish Rd, Sporting<br />
            Alexandria Corniche<br />
            03 5925817
          </p>
          <p className="mt-4 text-sm text-cream/70">
            Rhactus Mall<br />
            North Coast, El Alamein<br />
            01119421888
          </p>
        </div>

        <div>
          <h4 className="font-display text-base font-semibold text-mustard">WhatsApp</h4>
          <p className="mt-3 text-sm text-cream/70">
            01031995666<br />
            01034988777
          </p>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-5 text-xs text-cream/50 md:flex-row">
          <p>© {new Date().getFullYear()} Pretzel Burgers. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/menu" className="hover:text-cream">Menu</Link>
            <Link to="/contact" className="hover:text-cream">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
