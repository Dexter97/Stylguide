import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/lib/i18n";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";

export const metadata = {
  title: "AI Bridgemakers",
  description: "Van chaos naar richting. Van experiment naar resultaat.",
};

async function getMessages(locale: Locale) {
  try {
    return (await import(`@/messages/${locale}.json`)).default;
  } catch {
    return null;
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const messages = await getMessages(locale);
  if (!messages) notFound();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Header locale={locale} />
      <main>{children}</main>
      <Footer locale={locale} />
    </NextIntlClientProvider>
  );
}
