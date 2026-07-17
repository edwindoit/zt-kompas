"use client";

import Link from "next/link";
import { useState } from "react";
import type { Toepassing } from "@/data/types";
import { formatAantal, formatDatum, formatScore } from "@/lib/format";
import { StatusBadge } from "./StatusBadge";
import { DoelenSamenvatting, ToepassingCard } from "./ToepassingCard";

type Weergave = "tegels" | "tabel";

export function ToepassingenWeergave({
  toepassingen,
}: {
  toepassingen: Toepassing[];
}) {
  const [weergave, setWeergave] = useState<Weergave>("tabel");

  return (
    <section aria-label="Toepassingen" className="space-y-4">
      <div className="flex items-center justify-end">
        <div
          role="group"
          aria-label="Weergave"
          className="inline-flex rounded-full border border-hairline bg-surface p-1"
        >
          {(
            [
              ["tegels", "Tegels"],
              ["tabel", "Tabel"],
            ] as const
          ).map(([waarde, label]) => (
            <button
              key={waarde}
              type="button"
              aria-pressed={weergave === waarde}
              onClick={() => setWeergave(waarde)}
              className={`rounded-full px-4 py-1 text-sm font-medium transition-colors ${
                weergave === waarde
                  ? "bg-brand text-brand-contrast"
                  : "text-ink-secondary hover:text-ink"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {weergave === "tegels" ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {toepassingen.map((toepassing) => (
            <ToepassingCard key={toepassing.slug} toepassing={toepassing} />
          ))}
        </div>
      ) : (
        <ToepassingenTabel toepassingen={toepassingen} />
      )}
    </section>
  );
}

function ToepassingenTabel({ toepassingen }: { toepassingen: Toepassing[] }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-hairline bg-surface">
      <table className="w-full min-w-4xl text-sm">
        <thead>
          <tr className="text-left text-xs text-ink-muted">
            <th className="px-4 py-3 font-medium">Toepassing</th>
            <th className="px-4 py-3 font-medium">Status</th>
            <th className="px-4 py-3 text-right font-medium">Regio&apos;s</th>
            <th className="px-4 py-3 text-right font-medium">Zorgaanbieders</th>
            <th className="px-4 py-3 text-right font-medium">Eindgebruikers</th>
            <th className="px-4 py-3 text-right font-medium">Score</th>
            <th className="px-4 py-3 font-medium">Doelen</th>
            <th className="px-4 py-3 font-medium">Bijgewerkt</th>
          </tr>
        </thead>
        <tbody>
          {toepassingen.map((toepassing) => (
            <tr
              key={toepassing.slug}
              className="border-t border-hairline align-top hover:bg-plane/60"
            >
              <td className="px-4 py-3">
                <Link
                  href={`/toepassingen/${toepassing.slug}`}
                  className="font-medium text-ink underline decoration-hairline underline-offset-2 hover:decoration-inherit"
                >
                  {toepassing.naam}
                </Link>
              </td>
              <td className="px-4 py-3">
                <StatusBadge status={toepassing.status} />
              </td>
              <td
                className="px-4 py-3 text-right tabular-nums"
                title={
                  toepassing.regios.length > 0
                    ? toepassing.regios.join(", ")
                    : undefined
                }
              >
                {toepassing.regios.length > 0 ? toepassing.regios.length : "—"}
              </td>
              <td className="px-4 py-3 text-right tabular-nums">
                {formatAantal(toepassing.aantalZorgaanbieders)}
              </td>
              <td className="px-4 py-3 text-right tabular-nums">
                {formatAantal(toepassing.actieveEindgebruikers)}
              </td>
              <td className="px-4 py-3 text-right tabular-nums">
                {formatScore(toepassing.eindgebruikersScore)}
              </td>
              <td className="px-4 py-3">
                <DoelenSamenvatting toepassing={toepassing} />
              </td>
              <td className="px-4 py-3 whitespace-nowrap text-ink-secondary">
                {formatDatum(toepassing.laatstBijgewerkt)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
