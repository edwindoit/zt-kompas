# ZT-Kompas

Publiek statusdashboard voor de **Zorgtoepassingen op het Nuts-netwerk** (Kring
Toepassingen). Eén plek voor de stand van zaken per Toepassing: gebruik,
voortgang en de doelen uit het jaarplan 2026/2027.

> **Mockup met voorbeelddata.** Aantallen, scores, namen en kanalen zijn
> illustratief. Er is (nog) geen database, authenticatie of edit-functionaliteit.

## Wat het toont

- **Overzicht** (tegels of tabel) met per Toepassing: fase, regio's in gebruik,
  zorgaanbieders, actieve eindgebruikers, eindgebruikersscore, contactpersonen
  (operationeel én technisch), Slack-kanaal en documentatie.
- **Detailpagina** per Toepassing met de _Ontwikkelingen 2026–2027_: doelen met
  objective, key results, tijdlijn, status en recente update. Elk doel is
  gekoppeld aan een sturingsdimensie uit het commitment-template (jaarplan,
  bijlage D).

## Data bijwerken

Alle content staat getypeerd in [`src/data/toepassingen.ts`](src/data/toepassingen.ts).
Bijwerken vóór of tijdens een check-in = dit bestand aanpassen; de totalen en
indicatoren worden daaruit afgeleid.

## Ontwikkelen

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # statische export-check
```

Gebouwd met Next.js (App Router) + TypeScript + Tailwind CSS. Volledig statisch
gegenereerd.
