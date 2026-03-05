"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";

export default function LanguageToggle({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const other = locale === "nl" ? "en" : "nl";

  const stripped = pathname.replace(/^\/(nl|en)/, "");
  const target = `/${other}${stripped || ""}`;

  return (
    <Link
      href={target}
      className="rounded-lg border border-neutral-200 px-3 py-2 text-xs font-semibold hover:bg-neutral-50"
      aria-label="Switch language"
    >
      {locale === "nl" ? "EN" : "NL"}
    </Link>
  );
}
