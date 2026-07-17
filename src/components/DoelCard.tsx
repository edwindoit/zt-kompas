import type { Doel } from "@/data/types";
import { formatDatum } from "@/lib/format";
import { DimensieTag } from "./DimensieTag";
import { DoelStatusBadge } from "./DoelStatusBadge";

export function DoelCard({ doel }: { doel: Doel }) {
  return (
    <article className="rounded-2xl border border-hairline bg-surface p-5">
      <header className="flex flex-wrap items-start justify-between gap-x-3 gap-y-2">
        <div className="space-y-1">
          <h3 className="font-heading text-base font-bold text-ink">{doel.titel}</h3>
          <DimensieTag dimensie={doel.dimensie} />
        </div>
        <DoelStatusBadge status={doel.status} />
      </header>

      <div className="mt-4 space-y-4 text-sm">
        <div>
          <h4 className="text-xs font-medium uppercase tracking-wide text-ink-muted">
            Objective
          </h4>
          <p className="mt-1 font-medium text-ink">{doel.objective}</p>
        </div>

        <div>
          <h4 className="text-xs font-medium uppercase tracking-wide text-ink-muted">
            Key results
          </h4>
          <ul className="mt-1 list-disc space-y-1 pl-5 text-ink-secondary">
            {doel.keyResults.map((kr) => (
              <li key={kr}>{kr}</li>
            ))}
          </ul>
        </div>

        <p className="text-ink-secondary">{doel.beschrijving}</p>

        <p className="text-xs text-ink-muted">
          Tijdlijn: <span className="text-ink-secondary">{doel.tijdlijn}</span>
        </p>

        <div className="border-l-2 border-gridline pl-3">
          <p className="text-xs text-ink-muted">
            Laatste update · {formatDatum(doel.recenteUpdate.datum)}
          </p>
          <p className="mt-1 text-ink-secondary">{doel.recenteUpdate.tekst}</p>
        </div>
      </div>
    </article>
  );
}
