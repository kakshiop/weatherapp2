import React from "react";
import Link from "next/link";

const services = [
  {
    title: "Residential Interiors",
    description:
      "Curated living spaces with custom furniture, layered textures, and warm lighting for everyday luxury.",
  },
  {
    title: "Commercial Design",
    description:
      "Functional, brand-forward interiors for offices, boutiques, and hospitality spaces that leave a lasting impression.",
  },
  {
    title: "Renovation & Styling",
    description:
      "End-to-end upgrades, from concept boards to final accessories, tailored to your timeline and budget.",
  },
];

const projects = [
  "Modern Penthouse Retreat",
  "Minimalist Executive Office",
  "Boutique Hotel Lounge",
  "Contemporary Family Villa",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] text-[#f6f1eb]">
      <section className="mx-auto flex max-w-6xl flex-col gap-8 px-6 pb-20 pt-8 md:px-10">
        <header className="flex items-center justify-between border-b border-[#2b2b2b] pb-5">
          <div>
            <p className="text-xs uppercase tracking-[0.45em] text-[#b89b7a]">Interior Studio</p>
            <h1 className="text-2xl font-semibold">Luxora</h1>
          </div>
          <Link
            href="/consultation"
            className="rounded-full border border-[#b89b7a] px-5 py-2 text-sm transition hover:bg-[#b89b7a] hover:text-[#0f0f0f]"
          >
            Book Consultation
          </Link>
        </header>

        <div className="grid items-center gap-10 py-8 md:grid-cols-2">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.35em] text-[#b89b7a]">Crafting Elevated Spaces</p>
            <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
              Timeless interior design for homes and businesses.
            </h2>
            <p className="max-w-xl text-base text-[#d8d0c6]">
              Luxora transforms ordinary rooms into elegant, functional environments. We blend modern aesthetics
              with personalized details to reflect your lifestyle and vision.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="rounded-full bg-[#b89b7a] px-6 py-3 text-sm font-medium text-[#0f0f0f] transition hover:opacity-90">
                View Portfolio
              </button>
              <button className="rounded-full border border-[#3c3c3c] px-6 py-3 text-sm font-medium hover:border-[#b89b7a]">
                Our Process
              </button>
            </div>
          </div>

          <div className="rounded-2xl border border-[#2a2a2a] bg-gradient-to-br from-[#1f1b16] to-[#141414] p-8 shadow-2xl">
            <p className="text-sm uppercase tracking-[0.3em] text-[#c6ae91]">Why Luxora</p>
            <ul className="mt-5 space-y-4 text-[#ece4da]">
              <li>• Bespoke concepts tailored to your space.</li>
              <li>• Transparent project planning and execution.</li>
              <li>• Premium material sourcing and vendor network.</li>
              <li>• Dedicated design team from idea to completion.</li>
            </ul>
          </div>
        </div>

        <section className="grid gap-5 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-xl border border-[#2b2b2b] bg-[#171717] p-6 transition hover:-translate-y-1 hover:border-[#b89b7a]"
            >
              <h3 className="text-xl font-medium">{service.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#c9c0b3]">{service.description}</p>
            </article>
          ))}
        </section>

        <section className="rounded-2xl border border-[#2b2b2b] bg-[#161616] p-8">
          <h3 className="text-2xl font-semibold">Featured Projects</h3>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {projects.map((project) => (
              <div
                key={project}
                className="rounded-lg border border-[#2d2d2d] bg-[#111111] p-5 text-sm text-[#ddd4c9]"
              >
                {project}
              </div>
            ))}
          </div>
        </section>

        <footer className="mt-6 flex flex-col items-start justify-between gap-4 border-t border-[#2b2b2b] pt-6 text-sm text-[#bcb2a5] md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Luxora Interiors. Designed with elegance.</p>
          <p>hello@luxora.design · +1 (555) 204-1818</p>
        </footer>
      </section>
    </main>
  );
}
