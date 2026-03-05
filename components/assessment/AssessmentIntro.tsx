import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function AssessmentIntro({ onStart }: { onStart: () => void }) {
  return (
    <Card>
      <h1 className="text-3xl font-semibold tracking-tight">AI Maturity Assessment</h1>
      <p className="mt-3 text-neutral-700">
        Een snelle, praktische diagnose van AI volwassenheid. Geen hype. Wel richting.
      </p>
      <ul className="mt-5 space-y-2 text-neutral-700">
        <li>• 5 thema’s</li>
        <li>• 10 minuten</li>
        <li>• Direct score + aanbevelingen</li>
      </ul>
      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
        <Button onClick={onStart}>Start</Button>
        <Button href="/scan" variant="secondary">
          Bekijk de AI Rendementscan
        </Button>
      </div>
      <p className="mt-4 text-xs text-neutral-500">
        Tip: beantwoord eerlijk. Dit is voor jouw eigen inzicht.
      </p>
    </Card>
  );
}
