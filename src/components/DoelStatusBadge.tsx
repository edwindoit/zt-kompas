import type { DoelStatus } from "@/data/types";

/* Statuskleur draagt nooit alleen de betekenis: elk niveau heeft een eigen
   vorm (icoon) én tekstlabel. */
export const DOEL_STATUS: Record<
  DoelStatus,
  { label: string; kleur: string }
> = {
  "op-koers": { label: "Op koers", kleur: "var(--status-good)" },
  risico: { label: "Risico", kleur: "var(--status-warning)" },
  achterop: { label: "Achterop", kleur: "var(--status-serious)" },
  afgerond: { label: "Afgerond", kleur: "var(--ink-muted)" },
  gepland: { label: "Gepland", kleur: "var(--ink-muted)" },
};

function StatusIcoon({ status }: { status: DoelStatus }) {
  const kleur = DOEL_STATUS[status].kleur;
  const props = { width: 12, height: 12, viewBox: "0 0 12 12", "aria-hidden": true };
  switch (status) {
    case "op-koers":
      return (
        <svg {...props}>
          <path d="M2 6.5 4.8 9.2 10 3.2" fill="none" stroke={kleur} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "risico":
      return (
        <svg {...props}>
          <path d="M6 1.2 11.2 10.5H.8Z" fill={kleur} />
        </svg>
      );
    case "achterop":
      return (
        <svg {...props}>
          <path d="M6 .8 11.2 6 6 11.2.8 6Z" fill={kleur} />
        </svg>
      );
    case "afgerond":
      return (
        <svg {...props}>
          <circle cx="6" cy="6" r="5.2" fill={kleur} />
          <path d="M3.6 6.2 5.4 8 8.5 4.4" fill="none" stroke="var(--surface)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "gepland":
      return (
        <svg {...props}>
          <circle cx="6" cy="6" r="4.4" fill="none" stroke={kleur} strokeWidth="1.6" strokeDasharray="2.3 2.3" />
        </svg>
      );
  }
}

export function DoelStatusBadge({ status }: { status: DoelStatus }) {
  return (
    <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-hairline bg-surface px-2.5 py-0.5 text-xs font-medium text-ink-secondary">
      <StatusIcoon status={status} />
      {DOEL_STATUS[status].label}
    </span>
  );
}
