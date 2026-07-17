import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DoelCard } from "@/components/DoelCard";
import { DIMENSIES } from "@/components/DimensieTag";
import { StatBlok } from "@/components/StatBlok";
import { StatusBadge } from "@/components/StatusBadge";
import { getToepassing, toepassingen } from "@/data/toepassingen";
import type { Dimensie } from "@/data/types";
import { formatAantal, formatDatum, formatScore } from "@/lib/format";

export function generateStaticParams() {
  return toepassingen.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const toepassing = getToepassing(slug);
  return { title: toepassing?.naam ?? "Onbekende toepassing" };
}

export default async function ToepassingPagina({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const toepassing = getToepassing(slug);
  if (!toepassing) notFound();

  return (
    <div className="space-y-8">
      <Link
        href="/"
        className="text-sm text-ink-secondary underline decoration-hairline underline-offset-2 hover:text-ink"
      >
        ← Alle toepassingen
      </Link>

      <header className="space-y-3">
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="font-heading text-3xl font-bold tracking-tight">
            {toepassing.naam}
          </h1>
          <StatusBadge status={toepassing.status} />
        </div>
        <p className="max-w-3xl text-sm text-ink-secondary">
          {toepassing.beschrijving}
        </p>
        <p className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-ink-muted">
          <span>
            Operationeel contact:{" "}
            {toepassing.contactpersonen.operationeel.naam}
            {toepassing.contactpersonen.operationeel.rol
              ? ` (${toepassing.contactpersonen.operationeel.rol})`
              : ""}
          </span>
          <span>
            Technisch contact: {toepassing.contactpersonen.technisch.naam}
            {toepassing.contactpersonen.technisch.rol
              ? ` (${toepassing.contactpersonen.technisch.rol})`
              : ""}
          </span>
          <span className="font-mono">{toepassing.slackKanaal}</span>
          <a
            href={toepassing.docsUrl}
            className="text-ink-secondary underline decoration-hairline underline-offset-2 hover:text-ink"
          >
            Documentatie ↗
          </a>
          <span>Bijgewerkt {formatDatum(toepassing.laatstBijgewerkt)}</span>
        </p>
      </header>

      <dl className="grid grid-cols-2 gap-4 rounded-2xl border border-hairline bg-surface p-5 sm:grid-cols-4">
        <StatBlok
          label="Regio's in gebruik"
          waarde={toepassing.regios.length > 0 ? `${toepassing.regios.length}` : "—"}
          sub={toepassing.regios.length > 0 ? toepassing.regios.join(", ") : undefined}
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
          sub={toepassing.eindgebruikersScore === null ? "nog niet gemeten" : undefined}
        />
      </dl>

      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="font-heading text-xl font-bold tracking-tight">
            Ontwikkelingen 2026–2027
          </h2>
          <p className="text-xs text-ink-muted">
            Elk doel is gekoppeld aan een sturingsdimensie uit het
            commitment-template (jaarplan, bijlage D):
          </p>
          <ul className="flex flex-wrap gap-x-4 gap-y-1">
            {(Object.keys(DIMENSIES) as unknown as Dimensie[]).map((nr) => (
              <li
                key={nr}
                className="inline-flex items-center gap-1.5 text-xs text-ink-secondary"
              >
                <span
                  aria-hidden
                  className="size-2 rounded-full"
                  style={{ backgroundColor: DIMENSIES[nr].kleur }}
                />
                {nr}. {DIMENSIES[nr].label}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          {toepassing.doelen.map((doel) => (
            <DoelCard key={doel.titel} doel={doel} />
          ))}
        </div>
      </section>
    </div>
  );
}
