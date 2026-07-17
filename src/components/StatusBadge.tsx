import type { ToepassingStatus } from "@/data/types";

const FASEN: Record<ToepassingStatus, { label: string; kleur: string }> = {
  productie: { label: "Productie", kleur: "var(--fase-productie)" },
  pilot: { label: "Pilot", kleur: "var(--fase-pilot)" },
  ontwikkeling: { label: "In ontwikkeling", kleur: "var(--fase-ontwikkeling)" },
  verkenning: { label: "Verkenning", kleur: "var(--fase-verkenning)" },
};

export function StatusBadge({ status }: { status: ToepassingStatus }) {
  const fase = FASEN[status];
  return (
    <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-hairline bg-surface px-2.5 py-0.5 text-xs font-medium text-ink-secondary">
      <span
        aria-hidden
        className="size-2 rounded-full"
        style={{ backgroundColor: fase.kleur }}
      />
      {fase.label}
    </span>
  );
}
