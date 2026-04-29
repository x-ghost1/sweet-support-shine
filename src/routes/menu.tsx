import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import classicBeef from "@/assets/burger-classic-beef.jpg";
import jalapenoBeef from "@/assets/burger-jalapeno-beef.jpg";
import classicChicken from "@/assets/burger-classic-chicken.jpg";
import jalapenoChicken from "@/assets/burger-jalapeno-chicken.jpg";
import texasBeef from "@/assets/burger-texas-beef.jpg";
import mushroomBeef from "@/assets/burger-mushroom-beef.jpg";
import ranchBeef from "@/assets/burger-ranch-beef.jpg";
import ranchChicken from "@/assets/burger-ranch-chicken.jpg";
import cordonBleu from "@/assets/burger-cordon-bleu.jpg";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Pretzel Burgers" },
      { name: "description", content: "Explore the Pretzel Burgers menu with beef burgers, chicken burgers, and combo pricing in EGP." },
      { property: "og:title", content: "Menu — Pretzel Burgers" },
      { property: "og:description", content: "Classic, jalapeño, mushroom, ranch, Texas beef, and chicken burgers on pretzel buns." },
    ],
  }),
  component: MenuPage,
});

const burgers = [
  { name: "Classic Beef Burger Meal", price: "180 EGP", img: classicBeef, desc: "Pretzel bun, beef patty, tomato, lettuce, pickles, and signature sauce." },
  { name: "Jalapeño Beef Burger Meal", price: "190 EGP", img: jalapenoBeef, desc: "Pretzel bun, beef patty, jalapeños, red peppers, pickles, tomato, and signature sauce." },
  { name: "Texas Beef Burger Meal", price: "190 EGP", img: texasBeef, desc: "Pretzel bun, beef patty, pastrami-style beef, cheddar sauce, tomato, lettuce, and pickles." },
  { name: "Mushroom Beef Burger Meal", price: "190 EGP", img: mushroomBeef, desc: "Pretzel bun, beef patty, creamy mushroom sauce, tomato, lettuce, and pickles." },
  { name: "Ranch Beef Burger Meal", price: "190 EGP", img: ranchBeef, desc: "Pretzel bun, beef patty, ranch sauce, tomato, lettuce, pickles, and caramelized onions." },
  { name: "Classic Chicken Burger Meal", price: "170 EGP", img: classicChicken, desc: "Pretzel bun, crispy chicken, tomato, lettuce, pickles, and creamy sauce." },
  { name: "Jalapeño Chicken Burger Meal", price: "180 EGP", img: jalapenoChicken, desc: "Pretzel bun, crispy chicken, jalapeños, red peppers, tomato, pickles, and sauce." },
  { name: "Ranch Chicken Burger Meal", price: "190 EGP", img: ranchChicken, desc: "Pretzel bun, crispy chicken, ranch sauce, tomato, lettuce, and pickles." },
  { name: "Cordon Bleu Meal", price: "110 EGP", img: cordonBleu, desc: "Pretzel sandwich loaded with crispy chicken, cheese sauce, lettuce, tomato, and creamy sauce." },
];

const extras = [
  { name: "Meal served with fries", price: "Included" },
  { name: "2 extra sauces", price: "Included" },
  { name: "Alexandria branch", price: "03 5925817" },
  { name: "North Coast branch", price: "01119421888" },
  { name: "WhatsApp 1", price: "01031995666" },
  { name: "WhatsApp 2", price: "01034988777" },
];

function MenuPage() {
  return (
    <Layout>
      <section className="bg-charcoal text-cream">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center md:py-28">
          <span className="text-xs font-semibold uppercase tracking-widest text-mustard">The Menu</span>
          <h1 className="mt-3 text-5xl font-bold md:text-6xl">Pretzel Burgers menu.</h1>
          <p className="mx-auto mt-4 max-w-xl text-cream/70">
            Real product shots, pretzel buns, and the current meal pricing for your branches.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-4xl font-bold md:text-5xl">Burgers & meals</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {burgers.map((b) => (
            <article key={b.name} className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:shadow-warm">
              <div className="aspect-square overflow-hidden bg-secondary/30">
                <img src={b.img} alt={b.name} loading="lazy" width={1024} height={1024} className="h-full w-full object-cover" />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl font-bold leading-tight">{b.name}</h3>
                  <span className="font-display text-lg font-bold text-primary">{b.price}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{b.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-secondary/40">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2">
          <div>
            <h2 className="text-4xl font-bold md:text-5xl">Included with meals</h2>
            <ul className="mt-8 divide-y divide-border">
              {extras.slice(0, 2).map((item) => (
                <li key={item.name} className="flex items-baseline justify-between py-4">
                  <span className="font-medium">{item.name}</span>
                  <span className="font-display text-lg font-bold text-primary">{item.price}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-4xl font-bold md:text-5xl">Order & branches</h2>
            <ul className="mt-8 divide-y divide-border">
              {extras.slice(2).map((item) => (
                <li key={item.name} className="flex items-baseline justify-between gap-4 py-4">
                  <span className="font-medium">{item.name}</span>
                  <span className="text-right font-display text-lg font-bold text-primary">{item.price}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
}
