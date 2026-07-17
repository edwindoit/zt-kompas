import Link from "next/link";
import type { DoelStatus, Toepassing } from "@/data/types";
import { formatAantal, formatDatum, formatScore } from "@/lib/format";
import { StatBlok } from "./StatBlok";
import { StatusBadge } from "./StatusBadge";
import { DOEL_STATUS } from "./DoelStatusBadge";

export function DoelenSamenvatting({ toepassing }: { toepassing: Toepassing }) {
  const volgorde: DoelStatus[] = [
    "op-koers",
    "risico",
    "achterop",
    "afgerond",
    "gepland",
  ];
  const aantallen = volgorde
    .map((status) => ({
      status,
      aantal: toepassing.doelen.filter((d) => d.status === status).length,
    }))
    .filter(({ aantal }) => aantal > 0);

  return (
    <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-ink-secondary">
      <span className="text-ink-muted">
        {toepassing.doelen.length}{" "}
        {toepassing.doelen.length === 1 ? "doel" : "doelen"}
      </span>
      {aantallen.map(({ status, aantal }) => (
        <span key={status} className="inline-flex items-center gap-1">
          <span
            aria-hidden
            className="size-1.5 rounded-full"
            style={{ backgroundColor: DOEL_STATUS[status].kleur }}
          />
          {aantal} {DOEL_STATUS[status].label.toLowerCase()}
        </span>
      ))}
    </p>
  );
}

export function ToepassingCard({ toepassing }: { toepassing: Toepassing }) {
  return (
    <article className="relative flex flex-col gap-4 rounded-2xl border border-hairline bg-surface p-5 transition-shadow hover:shadow-md">
      <header className="flex items-start justify-between gap-3">
        <h2 className="font-heading text-base font-bold text-ink">
          <Link
            href={`/toepassingen/${toepassing.slug}`}
            className="after:absolute after:inset-0 after:rounded-2xl"
          >
            {toepassing.naam}
          </Link>
        </h2>
        <StatusBadge status={toepassing.status} />
      </header>

      <p className="line-clamp-2 text-sm text-ink-secondary">
        {toepassing.beschrijving}
      </p>

      <dl className="grid grid-cols-2 gap-x-4 gap-y-3">
        <StatBlok
          label="Regio's in gebruik"
          waarde={
            toepassing.regios.length > 0
              ? `${toepassing.regios.length}`
              : "—"
          }
        />
        <StatBlok
          label="Zorgaanbieders"
          waarde={formatAantal(toepassing.aantalZorgaanbieders)}
        />
        <StatBlok
          label="Actieve eindgebruikers"
          waarde={formatAantal(toepassing.actieveEindgebruikers)}
        />
        <StatBlok
          label="Eindgebruikersscore"
          waarde={formatScore(toepassing.eindgebruikersScore)}
        />
      </dl>

      <DoelenSamenvatting toepassing={toepassing} />

      <footer className="mt-auto space-y-1 border-t border-hairline pt-3 text-xs text-ink-muted">
        <p>Bijgewerkt {formatDatum(toepassing.laatstBijgewerkt)}</p>
        <p>
          Operationeel: {toepassing.contactpersonen.operationeel.naam} ·
          Technisch: {toepassing.contactpersonen.technisch.naam}
        </p>
        <p className="flex items-center gap-3">
          <span className="font-mono">{toepassing.slackKanaal}</span>
          <a
            href={toepassing.docsUrl}
            className="relative z-10 text-ink-secondary underline decoration-hairline underline-offset-2 hover:text-ink"
          >
            Documentatie ↗
          </a>
        </p>
      </footer>
    </article>
  );
}
