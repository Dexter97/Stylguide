import { getTranslations } from "next-intl/server";
import Hero from "@/components/site/Hero";
import Section from "@/components/ui/Section";
import LogoRow from "@/components/site/LogoRow";
import Card from "@/components/ui/Card";
import CTA from "@/components/site/CTA";
import FAQ from "@/components/site/FAQ";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("home");
  const cta = await getTranslations("cta");

  return (
    <>
      <Hero
        title={t("heroTitle")}
        sub={t("heroSub")}
        primaryHref={`/${locale}/scan`}
        primaryLabel={cta("bookScan")}
        secondaryHref={`/${locale}/assessment`}
        secondaryLabel="Start AI Maturity Assessment"
      />

      <Section eyebrow={t("trustTitle")} title="Werk dat echt landt">
        <LogoRow />
      </Section>

      <Section
        eyebrow="Probleem"
        title={t("problemTitle")}
        sub="Losse pilots, losse tools en losse prompts leveren onrust op. Teams werken sneller, maar zonder kaders. Daar ontstaat risico én verspilling."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <h3 className="text-lg font-semibold">Versnippering</h3>
            <p className="mt-2 text-neutral-600">Iedereen experimenteert. Niemand stuurt op samenhang, kwaliteit en governance.</p>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold">Shadow AI</h3>
            <p className="mt-2 text-neutral-600">Gevoelige info belandt in tools zonder afspraken. Dat is een bedrijfsrisico.</p>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold">Geen rendement</h3>
            <p className="mt-2 text-neutral-600">Zonder use case selectie en adoptie blijft het bij enthousiasme, niet bij impact.</p>
          </Card>
        </div>
      </Section>

      <Section
        eyebrow="Aanpak"
        title={t("solutionTitle")}
        sub="Wij verbinden strategie, mensen en tooling. Eerst controle en richting. Daarna versnellen met workflows die blijven hangen."
      >
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <h3 className="text-lg font-semibold">4D Method</h3>
            <ul className="mt-3 space-y-2 text-neutral-700">
              <li><span className="font-semibold">Discover</span>: maturity, processen, data, risico, team readiness</li>
              <li><span className="font-semibold">Design</span>: roadmap, use cases met ROI, governance, tools</li>
              <li><span className="font-semibold">Deploy</span>: workflows, pilots die landen, automatisering</li>
              <li><span className="font-semibold">Drive</span>: playbooks, training, borging</li>
            </ul>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold">Waarom dit werkt</h3>
            <p className="mt-2 text-neutral-600">
              Niet alleen technologie. Ook taal, gedrag en afspraken. Daardoor stijgt adoptie en daalt risico.
            </p>
            <p className="mt-4 text-neutral-600">
              Extra focus op marketing, commercie, HR en recruitment. Daar zit vaak snel rendement.
            </p>
          </Card>
        </div>
      </Section>

      <Section eyebrow="Volgende stap" title={t("finalCtaTitle")} sub={t("finalCtaSub")}>
        <CTA
          title="Start met een diagnose"
          sub="Doe de AI Maturity Assessment of boek direct de AI Rendementscan (14 dagen)."
          primaryHref={`/${locale}/assessment`}
          primaryLabel="Start AI Maturity Assessment"
          secondaryHref={`/${locale}/scan`}
          secondaryLabel={cta("bookScan")}
        />
      </Section>

      <Section eyebrow="FAQ" title="Veelgestelde vragen">
        <FAQ />
      </Section>
    </>
  );
}
