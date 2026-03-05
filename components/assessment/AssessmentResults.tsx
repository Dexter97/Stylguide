"use client";

import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import type { AssessmentResult } from "@/lib/assessment/types";
import { topRecommendations } from "@/lib/assessment/recommendations";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer
} from "recharts";
import { useMemo, useState } from "react";

export default function AssessmentResults({
  result,
  onRestart,
}: {
  result: AssessmentResult;
  onRestart: () => void;
}) {
  const recs = useMemo(() => topRecommendations(result), [result]);
  const chartData = result.categoryScores.map((c) => ({ subject: c.label, score: c.score }));

  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function submitLead() {
    setLoading(true);
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, result }),
      });
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="grid gap-6">
      <Card>
        <p className="text-sm font-semibold text-neutral-600">Jouw score</p>
        <h2 className="mt-2 text-3xl font-semibold">{result.overall}/100</h2>
        <p className="mt-2 text-neutral-700">
          Niveau: <span className="font-semibold">{result.levelLabel}</span>
        </p>
        <p className="mt-3 text-neutral-600">{result.levelSummary}</p>

        <div className="mt-8 h-72 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={chartData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <Radar dataKey="score" stroke="currentColor" fill="currentColor" fillOpacity={0.12} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </Card>

      <Card>
        <h3 className="text-xl font-semibold">Aanbevolen focus</h3>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {recs.map((r) => (
            <div key={r.title} className="rounded-2xl border border-neutral-200 p-4">
              <p className="font-semibold">{r.title}</p>
              <ul className="mt-3 space-y-2 text-sm text-neutral-700">
                {r.bullets.map((b) => (
                  <li key={b}>• {b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <h3 className="text-xl font-semibold">Ontvang je rapport (mail)</h3>
        <p className="mt-2 text-neutral-600">
          Laat je e-mailadres achter. Dan sturen we een korte samenvatting en vervolgstappen.
        </p>

        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <input
            className="w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm outline-none focus:border-neutral-400"
            placeholder="jij@bedrijf.nl"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            aria-label="Email"
          />
          <Button onClick={submitLead} disabled={!email || loading}>
            {submitted ? "Verstuurd" : loading ? "Bezig..." : "Stuur mij het rapport"}
          </Button>
        </div>

        <p className="mt-3 text-xs text-neutral-500">
          Geen spam. Je kunt altijd uitschrijven. We delen je gegevens niet.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Button href="/scan">Boek de AI Rendementscan</Button>
          <Button variant="secondary" onClick={onRestart}>
            Opnieuw doen
          </Button>
        </div>
      </Card>
    </div>
  );
}
