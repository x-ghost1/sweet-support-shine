import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import menuClassic from "@/assets/menu-classic.jpg";
import menuSpicy from "@/assets/menu-spicy.jpg";
import menuTruffle from "@/assets/menu-truffle.jpg";
import heroBurger from "@/assets/hero-burger.jpg";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Ember & Bun" },
      { name: "description", content: "Explore our full menu of hand-crafted burgers, sides, and shakes." },
      { property: "og:title", content: "Menu — Ember & Bun" },
      { property: "og:description", content: "Burgers, loaded fries, milkshakes, and craft sodas." },
    ],
  }),
  component: MenuPage,
});

const burgers = [
  { name: "The Classic", price: "$12", img: menuClassic, desc: "Smash patty, american cheese, pickles, secret sauce." },
  { name: "Inferno", price: "$15", img: menuSpicy, desc: "Jalapeños, pepper jack, sriracha aioli, crispy onions." },
  { name: "Black Truffle", price: "$18", img: menuTruffle, desc: "Charcoal bun, swiss, bacon jam, truffle mayo." },
  { name: "The OG", price: "$13", img: heroBurger, desc: "Single patty, cheddar, lettuce, tomato, house sauce." },
];

const sides = [
  { name: "Hand-Cut Fries", price: "$5" },
  { name: "Loaded Cheese Fries", price: "$8" },
  { name: "Onion Rings", price: "$6" },
  { name: "Crispy Brussels", price: "$7" },
  { name: "Mac & Cheese Bites", price: "$8" },
  { name: "House Slaw", price: "$4" },
];

const drinks = [
  { name: "Vanilla Bean Shake", price: "$7" },
  { name: "Salted Caramel Shake", price: "$8" },
  { name: "Chocolate Malt", price: "$7" },
  { name: "Craft Root Beer", price: "$5" },
  { name: "Cherry Cola", price: "$5" },
  { name: "Local IPA", price: "$8" },
];

function MenuPage() {
  return (
    <Layout>
      <section className="bg-charcoal text-cream">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center md:py-28">
          <span className="text-xs font-semibold uppercase tracking-widest text-mustard">The Menu</span>
          <h1 className="mt-3 text-5xl font-bold md:text-6xl">Eat with your hands.</h1>
          <p className="mx-auto mt-4 max-w-xl text-cream/70">
            Everything we make is built for joy. Mess optional, but encouraged.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-4xl font-bold md:text-5xl">Burgers</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {burgers.map((b) => (
            <article key={b.name} className="flex gap-5 overflow-hidden rounded-2xl bg-card p-4 shadow-sm transition-all hover:shadow-warm">
              <div className="h-28 w-28 flex-shrink-0 overflow-hidden rounded-xl">
                <img src={b.img} alt={b.name} loading="lazy" width={112} height={112} className="h-full w-full object-cover" />
              </div>
              <div className="flex-1">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-xl font-bold">{b.name}</h3>
                  <span className="font-display text-lg font-bold text-primary">{b.price}</span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{b.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-secondary/40">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2">
          <div>
            <h2 className="text-4xl font-bold md:text-5xl">Sides</h2>
            <ul className="mt-8 divide-y divide-border">
              {sides.map((s) => (
                <li key={s.name} className="flex items-baseline justify-between py-4">
                  <span className="font-medium">{s.name}</span>
                  <span className="font-display text-lg font-bold text-primary">{s.price}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-4xl font-bold md:text-5xl">Drinks & Shakes</h2>
            <ul className="mt-8 divide-y divide-border">
              {drinks.map((d) => (
                <li key={d.name} className="flex items-baseline justify-between py-4">
                  <span className="font-medium">{d.name}</span>
                  <span className="font-display text-lg font-bold text-primary">{d.price}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
}
