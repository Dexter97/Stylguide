import Container from "@/components/ui/Container";
import type { Locale } from "@/lib/i18n";

export default function Footer({ locale }: { locale: Locale }) {
  return (
    <footer className="border-t border-neutral-200 py-10">
      <Container className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-neutral-600">© {new Date().getFullYear()} AI Bridgemakers</p>
        <p className="text-sm text-neutral-600">Pragmatische AI voor groei, controle en rendement.</p>
      </Container>
    </footer>
  );
}
