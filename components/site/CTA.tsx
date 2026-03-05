import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export default function CTA({
  title,
  sub,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: {
  title: string;
  sub: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref: string;
  secondaryLabel: string;
}) {
  return (
    <Card className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-2 text-neutral-600">{sub}</p>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Button href={primaryHref}>{primaryLabel}</Button>
        <Button href={secondaryHref} variant="secondary">
          {secondaryLabel}
        </Button>
      </div>
    </Card>
  );
}
