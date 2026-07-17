export type ToepassingStatus =
  | "productie"
  | "pilot"
  | "ontwikkeling"
  | "verkenning";

export type DoelStatus =
  | "op-koers"
  | "risico"
  | "achterop"
  | "afgerond"
  | "gepland";

/** Sturingsdimensie uit het commitment-template (jaarplan, bijlage D). */
export type Dimensie = 1 | 2 | 3 | 4;

export interface Contactpersoon {
  naam: string;
  rol?: string;
}

export interface Doel {
  titel: string;
  dimensie: Dimensie;
  objective: string;
  keyResults: string[];
  beschrijving: string;
  tijdlijn: string;
  status: DoelStatus;
  recenteUpdate: { datum: string; tekst: string };
}

export interface Toepassing {
  slug: string;
  naam: string;
  beschrijving: string;
  status: ToepassingStatus;
  regios: string[];
  /** null = nog niet gemeten / niet van toepassing */
  aantalZorgaanbieders: number | null;
  actieveEindgebruikers: number | null;
  /** NPS-achtige score, bijv. 28 betekent +28; null = nog niet gemeten */
  eindgebruikersScore: number | null;
  laatstBijgewerkt: string;
  /** Elke Zorgtoepassing heeft een operationeel én een technisch contactpersoon. */
  contactpersonen: {
    operationeel: Contactpersoon;
    technisch: Contactpersoon;
  };
  slackKanaal: string;
  docsUrl: string;
  doelen: Doel[];
}
