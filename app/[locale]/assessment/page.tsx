import Section from "@/components/ui/Section";
import AssessmentShell from "@/components/assessment/AssessmentShell";

export default function AssessmentPage() {
  return (
    <Section
      eyebrow="Diagnose"
      title="AI Maturity Assessment"
      sub="Beantwoord een korte set vragen. Je krijgt direct een score, niveau en concrete vervolgstappen."
    >
      <AssessmentShell />
    </Section>
  );
}
