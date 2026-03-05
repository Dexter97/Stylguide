export default function ProgressBar({ value }: { value: number }) {
  return (
    <div className="w-full">
      <div className="h-2 w-full rounded-full bg-neutral-100">
        <div
          className="h-2 rounded-full bg-neutral-900 transition-all"
          style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
        />
      </div>
      <p className="mt-2 text-xs text-neutral-500">{Math.round(value)}% voltooid</p>
    </div>
  );
}
