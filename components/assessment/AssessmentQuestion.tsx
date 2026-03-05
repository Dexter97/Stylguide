import Card from "@/components/ui/Card";
import type { LikertValue } from "@/lib/assessment/types";

export default function AssessmentQuestion({
  text,
  value,
  onChange,
}: {
  text: string;
  value?: LikertValue;
  onChange: (v: LikertValue) => void;
}) {
  const options: LikertValue[] = [1, 2, 3, 4, 5];

  return (
    <Card>
      <p className="text-lg font-semibold">{text}</p>
      <div className="mt-6 grid grid-cols-5 gap-2">
        {options.map((opt) => {
          const active = value === opt;
          return (
            <button
              key={opt}
              onClick={() => onChange(opt)}
              className={[
                "rounded-xl border px-3 py-3 text-sm font-semibold transition",
                active ? "border-neutral-900 bg-neutral-900 text-white" : "border-neutral-200 hover:bg-neutral-50"
              ].join(" ")}
              aria-label={`Score ${opt}`}
            >
              {opt}
            </button>
          );
        })}
      </div>
      <div className="mt-4 flex justify-between text-xs text-neutral-500">
        <span>Nee, nauwelijks</span>
        <span>Ja, volledig</span>
      </div>
    </Card>
  );
}
