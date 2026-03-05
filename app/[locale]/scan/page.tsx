import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function ScanPage() {
  return (
    <>
      <Section
        eyebrow="Product"
        title="AI Rendementscan"
        sub="14 dagen. Vaste prijs. Boardroom-waardige diagnose en roadmap met concrete use cases."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <Card className="md:col-span-2">
            <h3 className="text-xl font-semibold">Wat je krijgt</h3>
            <ul className="mt-4 space-y-2 text-neutral-700">
              <li>• AI maturity en risicoanalyse (incl. Shadow AI)</li>
              <li>• Use case selectie met ROI en prioriteiten</li>
              <li>• Governance en Standard Operating Prompt (Cultural Coding)</li>
              <li>• Roadmap 30-60-90 dagen</li>
              <li>• Board-ready rapport</li>
            </ul>
          </Card>
          <Card>
            <p className="text-sm font-semibold text-neutral-600">Vaste prijs</p>
            <p className="mt-2 text-3xl font-semibold">€15.000</p>
            <p className="mt-2 text-neutral-600">Excl. btw. In 14 dagen.</p>
            <div className="mt-6 grid gap-3">
              <Button href="/contact">Boek de Rendementscan</Button>
              <Button href="/assessment" variant="secondary">Start eerst de maturity assessment</Button>
            </div>
            <p className="mt-4 text-xs text-neutral-500">Reactie meestal binnen 1 werkdag.</p>
          </Card>
        </div>
      </Section>
    </>
  );
}
