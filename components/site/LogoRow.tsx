import Card from "@/components/ui/Card";

export default function LogoRow() {
  const logos = ["Nictiz", "BAM", "ANWB", "De Huidkliniek", "Van Spaandonk"];

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {logos.map((l) => (
        <Card key={l} className="py-6 text-center">
          <p className="text-sm font-semibold text-neutral-700">{l}</p>
          <p className="mt-1 text-xs text-neutral-500">Placeholder logo</p>
        </Card>
      ))}
    </div>
  );
}
