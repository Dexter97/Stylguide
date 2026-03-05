"use client";

import { useState } from "react";
import Card from "@/components/ui/Card";

const items = [
  { q: "Is dit tool-only advies?", a: "Nee. Tooling is onderdeel, maar we starten bij risico, doelen, processen en adoptie." },
  { q: "Hoe snel zien we resultaat?", a: "Vaak binnen weken: heldere prioriteiten en workflows die direct tijd besparen." },
  { q: "Doen jullie ook implementatie?", a: "We ontwerpen en begeleiden. We kunnen uitvoeren met partners, zonder vendor lock-in." },
  { q: "Wat doen jullie met privacy en data?", a: "Risk-first. We leggen kaders vast en beperken Shadow AI. Gevoelige data blijft beschermd." },
  { q: "Past dit ook bij kleinere teams?", a: "Ja, zolang er eigenaarschap is en een duidelijke business case." },
  { q: "Welke afdelingen profiteren het meest?", a: "Marketing, sales, HR en recruitment. Daar zit vaak snel rendement." },
  { q: "Is de AI maturity assessment gratis?", a: "Ja. Het is bedoeld als eerste diagnose en startpunt voor vervolgstappen." },
  { q: "Wat is de AI Rendementscan precies?", a: "Een 14-daags traject met businesscase, risicoanalyse, roadmap en concrete use cases." }
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="grid gap-4">
      {items.map((it, idx) => (
        <Card key={it.q} className="p-0">
          <button
            className="flex w-full items-center justify-between px-6 py-5 text-left"
            onClick={() => setOpen(open === idx ? null : idx)}
            aria-expanded={open === idx}
          >
            <span className="font-semibold">{it.q}</span>
            <span className="text-neutral-500">{open === idx ? "−" : "+"}</span>
          </button>
          {open === idx && <div className="px-6 pb-6 text-neutral-700">{it.a}</div>}
        </Card>
      ))}
    </div>
  );
}
