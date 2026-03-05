"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Hero({
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
    <section className="relative overflow-hidden border-b border-neutral-200">
      <div className="absolute inset-0">
        <motion.div
          className="absolute -top-24 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-neutral-200/60 blur-3xl"
          animate={{ y: [0, 18, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-28 left-1/3 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-neutral-300/50 blur-3xl"
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <Container className="relative py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-neutral-600">AI Bridgemakers</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">{title}</h1>
          <p className="mt-5 text-lg text-neutral-700">{sub}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={primaryHref}>{primaryLabel}</Button>
            <Button href={secondaryHref} variant="secondary">
              {secondaryLabel}
            </Button>
          </div>

          <p className="mt-4 text-xs text-neutral-500">
            Je gegevens blijven van jou. Geen spam. Reactie meestal binnen 1 werkdag.
          </p>
        </div>
      </Container>
    </section>
  );
}
