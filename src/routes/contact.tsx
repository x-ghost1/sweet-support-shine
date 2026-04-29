import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Visit Us — Ember & Bun" },
      { name: "description", content: "Find Ember & Bun in Brooklyn. Hours, location, phone, and reservations." },
      { property: "og:title", content: "Visit Us — Ember & Bun" },
      { property: "og:description", content: "Find us in Brooklyn. Reserve a table or just walk in." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <Layout>
      <section className="bg-charcoal text-cream">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-mustard">Visit Us</span>
          <h1 className="mt-3 text-5xl font-bold md:text-6xl">Come on in.</h1>
          <p className="mx-auto mt-4 max-w-xl text-cream/70">
            Walk-ins welcome. Reservations recommended for groups of 6 or more.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2">
        <div className="space-y-6">
          {[
            { icon: MapPin, title: "Location", body: "142 Grill Lane\nBrooklyn, NY 11201" },
            { icon: Clock, title: "Hours", body: "Mon–Thu: 11am – 10pm\nFri–Sat: 11am – Midnight\nSun: 12pm – 9pm" },
            { icon: Phone, title: "Phone", body: "(555) 421-0808" },
            { icon: Mail, title: "Email", body: "hello@emberandbun.com" },
          ].map((item) => (
            <div key={item.title} className="flex gap-4 rounded-2xl border border-border bg-card p-5">
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <item.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-bold">{item.title}</h3>
                <p className="mt-1 whitespace-pre-line text-sm text-muted-foreground">{item.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
          <h2 className="text-3xl font-bold">Reserve a Table</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Tell us when you're coming and we'll have your table ready.
          </p>

          {submitted ? (
            <div className="mt-8 rounded-xl bg-primary/10 p-6 text-center">
              <p className="font-display text-2xl font-bold text-primary">See you soon! 🍔</p>
              <p className="mt-2 text-sm text-muted-foreground">
                We'll confirm your reservation by email shortly.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="mt-6 space-y-4"
            >
              <div className="grid gap-4 md:grid-cols-2">
                <Field label="Name" name="name" required />
                <Field label="Phone" name="phone" type="tel" required />
              </div>
              <Field label="Email" name="email" type="email" required />
              <div className="grid gap-4 md:grid-cols-2">
                <Field label="Date" name="date" type="date" required />
                <Field label="Time" name="time" type="time" required />
              </div>
              <Field label="Party size" name="size" type="number" min={1} required />
              <button
                type="submit"
                className="w-full rounded-full bg-primary py-3.5 text-sm font-semibold text-primary-foreground shadow-warm transition-transform hover:scale-[1.02]"
              >
                Request Reservation
              </button>
            </form>
          )}
        </div>
      </section>
    </Layout>
  );
}

function Field({
  label,
  name,
  type = "text",
  ...rest
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  min?: number;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium">{label}</span>
      <input
        name={name}
        type={type}
        {...rest}
        className="mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
    </label>
  );
}
