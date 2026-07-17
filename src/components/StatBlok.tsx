export function StatBlok({
  label,
  waarde,
  sub,
}: {
  label: string;
  waarde: string;
  sub?: string;
}) {
  return (
    <div>
      <dt className="text-xs text-ink-muted">{label}</dt>
      <dd className="text-xl font-semibold text-ink">{waarde}</dd>
      {sub && <dd className="mt-0.5 text-xs text-ink-muted">{sub}</dd>}
    </div>
  );
}
