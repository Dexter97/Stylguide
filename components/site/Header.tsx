import Container from "@/components/ui/Container";
import Link from "next/link";
import { routes } from "@/lib/routes";
import LanguageToggle from "./LanguageToggle";
import type { Locale } from "@/lib/i18n";
import { getTranslations } from "next-intl/server";

export default async function Header({ locale }: { locale: Locale }) {
  const t = await getTranslations("nav");

  const nav = [
    { href: routes.approach, label: t("approach") },
    { href: routes.services, label: t("services") },
    { href: routes.assessment, label: t("assessment") },
    { href: routes.scan, label: t("scan") },
    { href: routes.cases, label: t("cases") },
    { href: routes.resources, label: t("resources") },
    { href: routes.about, label: t("about") },
    { href: routes.contact, label: t("contact") },
  ];

  return (
    <header className="sticky top-0 z-30 border-b border-neutral-200 bg-white/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href={`/${locale}`} className="flex items-center gap-2 no-underline">
          <div className="h-8 w-8 rounded-xl bg-neutral-900" aria-hidden />
          <span className="text-sm font-semibold tracking-tight">AI Bridgemakers</span>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex">
          {nav.map((item) => (
            <Link key={item.href} href={`/${locale}${item.href}`} className="text-sm font-medium text-neutral-700 hover:text-neutral-900 no-underline">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageToggle locale={locale} />
        </div>
      </Container>
    </header>
  );
}
