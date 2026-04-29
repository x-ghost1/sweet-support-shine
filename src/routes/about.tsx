import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import heroBurger from "@/assets/hero-pretzel-burger.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Pretzel Burgers" },
      { name: "description", content: "Learn about Pretzel Burgers, Egypt's first pretzel burger concept serving Alexandria and North Coast." },
      { property: "og:title", content: "About — Pretzel Burgers" },
      { property: "og:description", content: "Signature pretzel buns, bold sauces, and branches across Alexandria and North Coast." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <Layout>
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">About us</span>
          <h1 className="mt-3 text-5xl font-bold leading-tight md:text-6xl">
            Built around the <span className="text-primary">pretzel bun</span>.
          </h1>
          <div className="mt-6 space-y-4 text-muted-foreground">
            <p>
              Pretzel Burgers is built on one clear idea: burgers should look memorable, taste bold, and feel instantly recognizable from the first glance.
            </p>
            <p>
              The signature pretzel bun, rich sauces, and loaded burger builds gave the brand its identity and helped make it known as Egypt's first pretzel burger.
            </p>
            <p>
              Today the brand serves guests from Sporting on Alexandria Corniche to Rhactus Mall in North Coast, with direct phone and WhatsApp ordering for fast service.
            </p>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-3xl bg-secondary/30 shadow-warm">
          <img
            src={heroBurger}
            alt="Pretzel burger hero shot with rich sauce and glossy bun"
            loading="lazy"
            width={1365}
            height={768}
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="bg-charcoal text-cream">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-20 md:grid-cols-3">
          {[
            { num: "2", label: "Active branches" },
            { num: "9", label: "Main sandwiches shown" },
            { num: "100%", label: "Pretzel burger focus" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-6xl font-black text-mustard md:text-7xl">{s.num}</div>
              <div className="mt-2 text-sm uppercase tracking-widest text-cream/70">{s.label}</div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
