import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function ContactPage() {
  return (
    <Section eyebrow="Contact" title="Plan een gesprek" sub="Vertel kort waar je tegenaan loopt. We reageren snel.">
      <Card>
        <form className="grid gap-4">
          <div className="grid gap-2">
            <label className="text-sm font-semibold">Naam</label>
            <input className="rounded-xl border border-neutral-200 px-4 py-3 text-sm" />
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-semibold">E-mail</label>
            <input className="rounded-xl border border-neutral-200 px-4 py-3 text-sm" type="email" />
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-semibold">Bericht</label>
            <textarea className="min-h-[140px] rounded-xl border border-neutral-200 px-4 py-3 text-sm" />
          </div>
          <Button type="submit">Verstuur</Button>
          <p className="text-xs text-neutral-500">Geen spam. Je gegevens blijven van jou.</p>
        </form>
      </Card>
    </Section>
  );
}
