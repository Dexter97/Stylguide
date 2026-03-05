import Container from "./Container";
import { cn } from "@/lib/utils";

export default function Section({
  title,
  eyebrow,
  sub,
  children,
  className,
}: {
  title?: string;
  eyebrow?: string;
  sub?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("py-16", className)}>
      <Container>
        {(eyebrow || title || sub) && (
          <div className="mb-10 max-w-2xl">
            {eyebrow && <p className="text-sm font-semibold text-neutral-600">{eyebrow}</p>}
            {title && <h2 className="mt-2 text-3xl font-semibold tracking-tight">{title}</h2>}
            {sub && <p className="mt-3 text-lg text-neutral-600">{sub}</p>}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}
