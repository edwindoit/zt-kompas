import { StatBlok } from "@/components/StatBlok";
import { ToepassingenWeergave } from "@/components/ToepassingenWeergave";
import { toepassingen } from "@/data/toepassingen";
import { formatAantal } from "@/lib/format";

export default function Home() {
  const uniekeRegios = new Set(toepassingen.flatMap((t) => t.regios));
  const totaalZorgaanbieders = toepassingen.reduce(
    (som, t) => som + (t.aantalZorgaanbieders ?? 0),
    0,
  );
  const totaalEindgebruikers = toepassingen.reduce(
    (som, t) => som + (t.actieveEindgebruikers ?? 0),
    0,
  );

  return (
    <div className="space-y-8">
      <section className="space-y-2">
        <h1 className="font-heading text-3xl font-bold tracking-tight">
          Status van de Zorgtoepassingen
        </h1>
        <p className="max-w-3xl text-sm text-ink-secondary">
          Eén plek voor de stand van zaken per Toepassing op het Nuts-netwerk:
          waar wordt gewerkt, door wie, en hoe staan de doelen uit het jaarplan
          2026/2027 ervoor. Klik op een toepassing voor de ontwikkelingen en
          doelen.
        </p>
      </section>

      <dl className="grid grid-cols-2 gap-4 rounded-2xl border border-hairline bg-surface p-5 sm:grid-cols-4">
        <StatBlok label="Toepassingen" waarde={`${toepassingen.length}`} />
        <StatBlok label="Regio's actief" waarde={`${uniekeRegios.size}`} />
        <StatBlok
          label="Zorgaanbieders"
          waarde={formatAantal(totaalZorgaanbieders)}
        />
        <StatBlok
          label="Actieve eindgebruikers"
          waarde={formatAantal(totaalEindgebruikers)}
        />
      </dl>

      <ToepassingenWeergave toepassingen={toepassingen} />
    </div>
  );
}
