import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Flame, MapPin, MessageCircle } from "lucide-react";
import heroBurger from "@/assets/hero-pretzel-burger.jpg";
import classicBeef from "@/assets/burger-classic-beef.jpg";
import jalapenoBeef from "@/assets/burger-jalapeno-beef.jpg";
import ranchChicken from "@/assets/burger-ranch-chicken.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pretzel Burgers — Alexandria & North Coast" },
      {
        name: "description",
        content:
          "Pretzel Burgers serves signature beef and chicken burgers in Alexandria and North Coast with fast ordering by phone and WhatsApp.",
      },
      { property: "og:title", content: "Pretzel Burgers — Alexandria & North Coast" },
      {
        property: "og:description",
        content: "Egypt's first pretzel burger with bold flavors, clean presentation, and fast ordering.",
      },
    ],
  }),
  component: HomePage,
});

const featured = [
  { name: "Classic Beef", price: "180 EGP", img: classicBeef, desc: "Pretzel bun, beef patty, lettuce, tomato, pickles, and creamy signature sauce." },
  { name: "Jalapeño Beef", price: "190 EGP", img: jalapenoBeef, desc: "Pretzel bun, beef patty, jalapeños, red peppers, pickles, tomato, and signature sauce." },
  { name: "Ranch Chicken", price: "190 EGP", img: ranchChicken, desc: "Crispy chicken in a pretzel bun with ranch sauce, pickles, tomato, and lettuce." },
];

function HomePage() {
  return (
    <Layout>
      <section className="relative overflow-hidden bg-charcoal text-cream">
        <div className="absolute inset-0">
          <img
            src={heroBurger}
            alt="Pretzel burger with glossy bun and rich sauce"
            width={1365}
            height={768}
            className="h-full w-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/85 to-charcoal/30" />
        </div>
        <div className="relative mx-auto grid min-h-[78svh] max-w-7xl items-center gap-8 px-6 py-24 md:py-32 lg:grid-cols-[1.1fr_0.9fr] lg:py-40">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-mustard/40 bg-mustard/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-mustard">
              <Flame className="h-3.5 w-3.5" /> Egypt's first pretzel burger
            </span>
            <h1 className="mt-6 text-5xl font-black leading-[0.95] md:text-7xl lg:text-8xl">
              Pretzel buns. <span className="text-mustard">Bold burgers.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-cream/80 md:text-xl">
              Big flavor, rich sauces, and signature burgers served in Alexandria Corniche and North Coast, El Alamein.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/menu"
                className="rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-warm transition-all hover:scale-105"
              >
                View Menu
              </Link>
              <a
                href="https://wa.me/201031995666"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-8 py-3.5 text-sm font-semibold text-cream transition-all hover:bg-cream/10"
              >
                <MessageCircle className="h-4 w-4" /> Order on WhatsApp
              </a>
            </div>
          </div>

          <div className="grid gap-4 self-end md:grid-cols-2 lg:grid-cols-1">
            {[
              { icon: MapPin, label: "Alexandria", text: "75 El Gaish Rd, Sporting · 03 5925817" },
              { icon: MapPin, label: "North Coast", text: "Rhactus Mall, El Alamein · 01119421888" },
            ].map((item) => (
              <div key={item.label} className="max-w-md rounded-2xl border border-cream/10 bg-background/10 p-5 backdrop-blur-sm">
                <div className="flex items-center gap-3 text-mustard">
                  <item.icon className="h-5 w-5" />
                  <span className="text-sm font-semibold uppercase tracking-widest">{item.label}</span>
                </div>
                <p className="mt-2 text-sm text-cream/80">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-14 md:grid-cols-3">
          {[
            { icon: Flame, title: "Signature Pretzel Bun", desc: "Glossy, soft, and baked to give every burger its unmistakable identity." },
            { icon: MessageCircle, title: "Fast Ordering", desc: "Call or WhatsApp directly for quick pickup and delivery coordination." },
            { icon: MapPin, title: "Two Branches", desc: "Serving Pretzel Burgers from Alexandria Corniche to North Coast, El Alamein." },
          ].map((v) => (
            <div key={v.title} className="flex gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <v.icon className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-lg font-bold">{v.title}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">Best sellers</span>
            <h2 className="mt-2 text-4xl font-bold md:text-5xl">Featured burgers</h2>
          </div>
          <Link to="/menu" className="text-sm font-semibold text-primary hover:underline">
            See full menu →
          </Link>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {featured.map((b) => (
            <article key={b.name} className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:shadow-warm">
              <div className="aspect-square overflow-hidden bg-secondary/30">
                <img
                  src={b.img}
                  alt={b.name}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-2xl font-bold">{b.name}</h3>
                  <span className="font-display text-xl font-bold text-primary">{b.price}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{b.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-charcoal text-cream">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 py-20 text-center">
          <h2 className="max-w-3xl text-4xl font-bold md:text-5xl">
            Ready to order? <span className="text-mustard">Message us now.</span>
          </h2>
          <p className="max-w-xl text-cream/70">
            Alexandria: 03 5925817 · WhatsApp: 01031995666 / 01034988777 · North Coast: 01119421888
          </p>
          <a
            href="https://wa.me/201031995666"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-warm transition-transform hover:scale-105"
          >
            Order Now
          </a>
        </div>
      </section>
    </Layout>
  );
}
