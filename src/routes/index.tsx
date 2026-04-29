import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Flame, Leaf, Award } from "lucide-react";
import heroBurger from "@/assets/hero-burger.jpg";
import menuClassic from "@/assets/menu-classic.jpg";
import menuSpicy from "@/assets/menu-spicy.jpg";
import menuTruffle from "@/assets/menu-truffle.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ember & Bun — Hand-Crafted Burgers in Brooklyn" },
      { name: "description", content: "Smoky, juicy, hand-crafted burgers made with locally sourced beef. Brooklyn's beloved burger joint." },
      { property: "og:title", content: "Ember & Bun — Hand-Crafted Burgers" },
      { property: "og:description", content: "Brooklyn's beloved burger joint. Smoky, juicy, unforgettable." },
    ],
  }),
  component: HomePage,
});

const featured = [
  { name: "The Classic", price: "$12", img: menuClassic, desc: "Smash patty, american cheese, pickles, secret sauce." },
  { name: "Inferno", price: "$15", img: menuSpicy, desc: "Jalapeños, pepper jack, sriracha aioli, crispy onions." },
  { name: "Black Truffle", price: "$18", img: menuTruffle, desc: "Charcoal bun, swiss, bacon jam, truffle mayo." },
];

function HomePage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-charcoal text-cream">
        <div className="absolute inset-0">
          <img
            src={heroBurger}
            alt="Signature cheeseburger with melted cheddar"
            width={1920}
            height={1080}
            className="h-full w-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/80 to-transparent" />
        </div>
        <div className="relative mx-auto grid max-w-7xl gap-8 px-6 py-24 md:py-36 lg:py-44">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-mustard/40 bg-mustard/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-mustard">
              <Flame className="h-3.5 w-3.5" /> Brooklyn's #1 Burger Joint
            </span>
            <h1 className="mt-6 text-5xl font-black leading-[0.95] md:text-7xl lg:text-8xl">
              Burgers worth <span className="text-mustard">burning</span> for.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-cream/80 md:text-xl">
              Hand-pressed patties, locally sourced beef, and a smoky char from our open flame grill. Every bite, a love letter to the classics.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/menu"
                className="rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-warm transition-all hover:scale-105"
              >
                Explore the Menu
              </Link>
              <Link
                to="/contact"
                className="rounded-full border border-cream/30 px-8 py-3.5 text-sm font-semibold text-cream transition-all hover:bg-cream/10"
              >
                Reserve a Table
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-14 md:grid-cols-3">
          {[
            { icon: Flame, title: "Open Flame Grill", desc: "Charred over real hardwood for that unmistakable smoky finish." },
            { icon: Leaf, title: "Locally Sourced", desc: "Grass-fed beef from upstate farms. Fresh produce delivered daily." },
            { icon: Award, title: "Award-Winning", desc: "Voted Best Burger in Brooklyn three years running." },
          ].map((v) => (
            <div key={v.title} className="flex gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <v.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold">{v.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured menu */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">Crowd favorites</span>
            <h2 className="mt-2 text-4xl font-bold md:text-5xl">Signature Burgers</h2>
          </div>
          <Link to="/menu" className="text-sm font-semibold text-primary hover:underline">
            See full menu →
          </Link>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {featured.map((b) => (
            <article key={b.name} className="group overflow-hidden rounded-2xl bg-card shadow-sm transition-all hover:shadow-warm">
              <div className="aspect-square overflow-hidden">
                <img
                  src={b.img}
                  alt={b.name}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
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

      {/* CTA */}
      <section className="bg-charcoal text-cream">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 py-20 text-center">
          <h2 className="max-w-3xl text-4xl font-bold md:text-5xl">
            Hungry yet? <span className="text-mustard">Come grab a seat.</span>
          </h2>
          <p className="max-w-xl text-cream/70">
            Walk-ins welcome. For groups of 6+ we recommend reserving a table in advance.
          </p>
          <Link
            to="/contact"
            className="rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-warm transition-transform hover:scale-105"
          >
            Reserve Now
          </Link>
        </div>
      </section>
    </Layout>
  );
}
