import type { Dimensie } from "@/data/types";

/* De vier sturingsdimensies uit het commitment-template (jaarplan, bijlage D). */
export const DIMENSIES: Record<Dimensie, { label: string; kleur: string }> = {
  1: { label: "Convergentie bouwblokken", kleur: "var(--dim-1)" },
  2: { label: "Migratie Nuts v5 → v6", kleur: "var(--dim-2)" },
  3: { label: "Schaal van gebruik", kleur: "var(--dim-3)" },
  4: { label: "Kwaliteit & eindgebruikersperspectief", kleur: "var(--dim-4)" },
};

export function DimensieTag({ dimensie }: { dimensie: Dimensie }) {
  const dim = DIMENSIES[dimensie];
  return (
    <span className="inline-flex items-center gap-1.5 text-xs text-ink-secondary">
      <span
        aria-hidden
        className="size-2 rounded-full"
        style={{ backgroundColor: dim.kleur }}
      />
      Dimensie {dimensie} · {dim.label}
    </span>
  );
}
