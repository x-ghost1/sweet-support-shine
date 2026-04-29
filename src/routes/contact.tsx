import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { MapPin, MessageCircle, Phone } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Pretzel Burgers" },
      { name: "description", content: "Contact Pretzel Burgers in Alexandria and North Coast. Phone numbers, WhatsApp, and branch locations." },
      { property: "og:title", content: "Contact — Pretzel Burgers" },
      { property: "og:description", content: "Call or WhatsApp Pretzel Burgers for Alexandria and North Coast orders." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <Layout>
      <section className="bg-charcoal text-cream">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-mustard">Contact</span>
          <h1 className="mt-3 text-5xl font-bold md:text-6xl">Order from Pretzel Burgers.</h1>
          <p className="mx-auto mt-4 max-w-xl text-cream/70">
            Reach the nearest branch fast by phone or WhatsApp.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-20 md:grid-cols-2">
        <div className="space-y-6">
          {[
            { icon: MapPin, title: "Alexandria branch", body: "75 El Gaish Rd, Sporting\nAlexandria Corniche" },
            { icon: Phone, title: "Alexandria phone", body: "03 5925817" },
            { icon: MapPin, title: "North Coast branch", body: "Rhactus Mall\nNorth Coast, El Alamein" },
            { icon: Phone, title: "North Coast phone", body: "01119421888" },
            { icon: MessageCircle, title: "WhatsApp", body: "01031995666\n01034988777" },
          ].map((item) => (
            <div key={item.title} className="flex gap-4 rounded-2xl border border-border bg-card p-5">
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <item.icon className="h-5 w-5" />
              </div>
              <div>
                <h2 className="font-bold">{item.title}</h2>
                <p className="mt-1 whitespace-pre-line text-sm text-muted-foreground">{item.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
          <h2 className="text-3xl font-bold">Quick order options</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Use the fastest channel for your branch.
          </p>
          <div className="mt-8 space-y-4">
            <a
              href="tel:035925817"
              className="flex items-center justify-between rounded-2xl border border-border px-5 py-4 transition-colors hover:border-primary hover:bg-secondary/40"
            >
              <span>
                <span className="block font-semibold">Call Alexandria</span>
                <span className="text-sm text-muted-foreground">03 5925817</span>
              </span>
              <Phone className="h-5 w-5 text-primary" />
            </a>
            <a
              href="tel:01119421888"
              className="flex items-center justify-between rounded-2xl border border-border px-5 py-4 transition-colors hover:border-primary hover:bg-secondary/40"
            >
              <span>
                <span className="block font-semibold">Call North Coast</span>
                <span className="text-sm text-muted-foreground">01119421888</span>
              </span>
              <Phone className="h-5 w-5 text-primary" />
            </a>
            <a
              href="https://wa.me/201031995666"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between rounded-2xl bg-primary px-5 py-4 text-primary-foreground shadow-warm"
            >
              <span>
                <span className="block font-semibold">WhatsApp orders</span>
                <span className="text-sm text-primary-foreground/80">01031995666 / 01034988777</span>
              </span>
              <MessageCircle className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
