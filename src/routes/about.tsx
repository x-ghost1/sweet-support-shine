import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import interior from "@/assets/restaurant-interior.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story — Ember & Bun" },
      { name: "description", content: "From a backyard grill to Brooklyn's favorite burger joint. Meet the team behind Ember & Bun." },
      { property: "og:title", content: "Our Story — Ember & Bun" },
      { property: "og:description", content: "From backyard grill to Brooklyn's favorite burger joint." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <Layout>
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">Our Story</span>
          <h1 className="mt-3 text-5xl font-bold leading-tight md:text-6xl">
            Born from a <span className="text-primary">backyard grill</span>.
          </h1>
          <div className="mt-6 space-y-4 text-muted-foreground">
            <p>
              Ember & Bun started in 2017 as a stubborn obsession. Two friends, one cast-iron skillet, and a relentless quest for the perfect smash patty. We tested every cheese, every bun, every sauce — until we got it right.
            </p>
            <p>
              Today, our Brooklyn flagship serves thousands every week, but the recipe hasn't changed. Locally sourced grass-fed beef. House-baked brioche. Real hardwood char. Done with care, every single time.
            </p>
            <p>
              We don't take ourselves too seriously. We just take the burgers seriously.
            </p>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-3xl shadow-warm">
          <img
            src={interior}
            alt="Cozy restaurant interior with warm lighting and brick walls"
            loading="lazy"
            width={1536}
            height={1024}
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="bg-charcoal text-cream">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-20 md:grid-cols-3">
          {[
            { num: "9", label: "Years grilling" },
            { num: "1.2M+", label: "Burgers served" },
            { num: "3x", label: "Best of Brooklyn" },
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
