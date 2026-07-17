import type { Toepassing } from "./types";

/**
 * Voorbeelddata voor de mockup. Aantallen, scores, namen en kanalen zijn
 * illustratief; de doelen zijn afgeleid uit het Jaarplan Kring Toepassingen
 * 2026/2027 (bijlage A). Bijwerken vóór een check-in = dit bestand aanpassen.
 */
export const toepassingen: Toepassing[] = [
  {
    slug: "anw-zorg",
    naam: "ANW-zorg",
    beschrijving:
      "Digitale ondersteuning van avond-, nacht- en weekendzorg in de VVT: inzage in cliëntgegevens en overdracht tussen zorgorganisaties in de regio.",
    status: "productie",
    regios: ["Rijnmond", "Utrecht", "Achterhoek", "Friesland"],
    aantalZorgaanbieders: 38,
    actieveEindgebruikers: 1240,
    eindgebruikersScore: 28,
    laatstBijgewerkt: "2026-07-14",
    contactpersonen: {
      operationeel: { naam: "A. de Boer", rol: "Subkring-coördinator" },
      technisch: { naam: "S. Koning", rol: "Technisch coördinator" },
    },
    slackKanaal: "#zt-anw-zorg",
    docsUrl: "https://docs.voorbeeld.nl/anw-zorg",
    doelen: [
      {
        titel: "Opschaling naar nieuwe regio's",
        dimensie: 3,
        objective:
          "ANW-zorg is eind 2026 in gebruik in vijf nieuwe regio's, met tijdregistratie en verrekening als werkende randvoorwaarden.",
        keyResults: [
          "Twente, Midden-Brabant en regio Den Bosch live vóór Q4 2026",
          "Tijdregistratie/verrekening opgeleverd en in gebruik in ≥ 3 regio's",
          "Aansluiting van Altide en Enovation gerealiseerd",
        ],
        beschrijving:
          "Opschaling vanuit de bestaande regio's naar o.a. Achterhoek, Friesland, Twente, Midden-Brabant en regio Den Bosch, met de oplevering van tijdregistratie/verrekening als randvoorwaarde.",
        tijdlijn: "Q2 2026 – Q4 2026",
        status: "op-koers",
        recenteUpdate: {
          datum: "2026-07-14",
          tekst:
            "Achterhoek en Friesland zijn live. Voorbereiding Twente loopt; verrekenmodule in acceptatietest bij twee aanbieders.",
        },
      },
      {
        titel: "Gecoördineerde migratie Nuts v5 → v6",
        dimensie: 2,
        objective:
          "ANW-zorg migreert in 2026/2027 gecoördineerd van Nuts v5 naar Nuts v6 zonder verstoring van het productiegebruik.",
        keyResults: [
          "Migratievolgorde per leverancier vastgesteld en gecommitteerd",
          "Tweewekelijks leveranciersoverleg operationeel als stuurinstrument",
          "Eerste leverancier in productie op Nuts v6 vóór Q1 2027",
        ],
        beschrijving:
          "Via een leveranciersspoor (tweewekelijks leveranciersoverleg) wordt de impact op leverancierscapaciteit beheersbaar gehouden, in samenhang met de uitfasering van Nuts v5.",
        tijdlijn: "Q3 2026 – Q3 2027",
        status: "risico",
        recenteUpdate: {
          datum: "2026-07-10",
          tekst:
            "Twee leveranciers geven aan pas in Q1 2027 capaciteit te hebben. Migratievolgorde wordt herijkt in het leveranciersoverleg van augustus.",
        },
      },
      {
        titel: "Convergentie op gedeelde bouwblokken",
        dimensie: 1,
        objective:
          "ANW-zorg convergeert aantoonbaar op de gedeelde bouwblokken en generieke functies, met per bouwblok een tijdpad en de afhankelijkheden in beeld.",
        keyResults: [
          "Per bouwblok (adressering, lokalisatie, toestemming, autorisatie) een tijdpad en afhankelijkheden vastgesteld",
          "Verkenning met leveranciers in de kopgroep afgerond in 2026",
        ],
        beschrijving:
          "Elk onderdeel van ANW-zorg krijgt een convergentie- en migratiepad richting de gedeelde bouwblokken; het ontwerpersoverleg bewaakt volgorde en afhankelijkheden.",
        tijdlijn: "2026",
        status: "gepland",
        recenteUpdate: {
          datum: "2026-06-24",
          tekst:
            "Verkenning start na de zomer; eerste bouwblokken-inventarisatie met de leveranciers ingepland.",
        },
      },
    ],
  },
  {
    slug: "ha-inzage",
    naam: "HA Inzage",
    beschrijving:
      "Inzage in huisartsgegevens voor de wijkverpleging (fase 1) en op termijn inzage vanuit de VVT richting huisartsen (fase 2), samen met Inéén en NVAVG.",
    status: "productie",
    regios: [
      "Rijnmond",
      "Midden-Holland",
      "Utrecht",
      "Twente",
      "Noord-Holland Noord",
      "Zuid-Limburg",
    ],
    aantalZorgaanbieders: 54,
    actieveEindgebruikers: 2150,
    eindgebruikersScore: 32,
    laatstBijgewerkt: "2026-07-15",
    contactpersonen: {
      operationeel: { naam: "M. Visser", rol: "Subkring-coördinator" },
      technisch: { naam: "E. van Leeuwen", rol: "Technisch coördinator" },
    },
    slackKanaal: "#zt-ha-inzage",
    docsUrl: "https://docs.voorbeeld.nl/ha-inzage",
    doelen: [
      {
        titel: "Fase 1 opschalen in productie",
        dimensie: 3,
        objective:
          "Inzage huisartsen → wijkverpleging groeit van pilotregio's naar breed productiegebruik.",
        keyResults: [
          "≥ 75 aangesloten zorgaanbieders eind 2026",
          "≥ 3.000 actieve eindgebruikers eind 2026",
          "Twee nieuwe regio's live per kwartaal",
        ],
        beschrijving:
          "Doorgaande opschaling van fase 1 (huisartsen → wijkverpleging) in productie, langs het bestaande implementatiepad met regio-ondersteuning.",
        tijdlijn: "Doorlopend 2026",
        status: "op-koers",
        recenteUpdate: {
          datum: "2026-07-15",
          tekst:
            "Zuid-Limburg live sinds juni. Groei actieve gebruikers +9% ten opzichte van vorig kwartaal.",
        },
      },
      {
        titel: "Fase 2: VVT → huisartsen ontwikkelen",
        dimensie: 1,
        objective:
          "Fase 2 (inzage vanuit de VVT richting huisartsen) is samen met Inéén, NVAVG en de leveranciers ontwikkeld en in pilot.",
        keyResults: [
          "Functioneel ontwerp gevalideerd met Inéén en NVAVG",
          "Eerste pilot met twee leveranciers gestart vóór Q2 2027",
        ],
        beschrijving:
          "Ontwikkeling van de omgekeerde inzagerichting, met vraagarticulatie via de werkgroep Vraagarticulatie en Eindgebruikersperspectief.",
        tijdlijn: "Q3 2026 – Q2 2027",
        status: "op-koers",
        recenteUpdate: {
          datum: "2026-07-08",
          tekst:
            "Eerste ontwerpsessie met Inéén en NVAVG gepland in september; leveranciers hebben capaciteit toegezegd.",
        },
      },
      {
        titel: "Convergentie op gedeelde bouwblokken",
        dimensie: 1,
        objective:
          "HA Inzage convergeert in 2026/2027 per bouwblok op de gedeelde bouwblokken en generieke functies, waar mogelijk op één gedeelde basis met PZP.",
        keyResults: [
          "Migratiepad per bouwblok vastgesteld in het ontwerpersoverleg",
          "Besluit over gedeelde basis HA Inzage × PZP vóór eind 2026",
        ],
        beschrijving:
          "Samen met de PZP-coalitie wordt onderzocht of HA Inzage en PZP op één gedeelde basis kunnen; de convergentie loopt per bouwblok via het ontwerpersoverleg.",
        tijdlijn: "2026 – 2027",
        status: "op-koers",
        recenteUpdate: {
          datum: "2026-07-01",
          tekst:
            "Gezamenlijke werksessie met de PZP-coalitie heeft een eerste gedeelde backlog opgeleverd.",
        },
      },
    ],
  },
  {
    slug: "eoverdracht-meo",
    naam: "eOverdracht / MeO",
    beschrijving:
      "Verpleegkundige overdracht tussen zorgorganisaties: afronden van de TA Routering en de geharmoniseerde TA/NP, en borgen van productiegebruik in pilotregio's.",
    status: "pilot",
    regios: ["Rijnmond", "Den Bosch"],
    aantalZorgaanbieders: 11,
    actieveEindgebruikers: 320,
    eindgebruikersScore: null,
    laatstBijgewerkt: "2026-07-09",
    contactpersonen: {
      operationeel: { naam: "K. Smit", rol: "Subkring-coördinator" },
      technisch: { naam: "P. Dijkstra", rol: "Technisch coördinator" },
    },
    slackKanaal: "#zt-eoverdracht",
    docsUrl: "https://docs.voorbeeld.nl/eoverdracht",
    doelen: [
      {
        titel: "TA Routering en geharmoniseerde TA/NP afronden",
        dimensie: 1,
        objective:
          "De technische afspraken zijn afgerond in samenwerking met LDN en VZVZ en vastgesteld als gedeelde basis.",
        keyResults: [
          "TA Routering vastgesteld vóór Q4 2026",
          "Geharmoniseerde TA/NP gepubliceerd en geadopteerd door de pilotleveranciers",
        ],
        beschrijving:
          "Afronding van de TA Routering en de geharmoniseerde TA/NP in samenwerking met LDN en VZVZ; convergentie op GF Adressering naarmate die in trial-use komt.",
        tijdlijn: "Q3 2026 – Q4 2026",
        status: "achterop",
        recenteUpdate: {
          datum: "2026-07-09",
          tekst:
            "Afstemming met VZVZ over de routeringsafspraken loopt langzamer dan gepland; nieuwe bestuurlijke sessie in september.",
        },
      },
      {
        titel: "Productiegebruik pilotregio's borgen",
        dimensie: 3,
        objective:
          "Het gebruik in de pilotregio's is geborgd en groeit gestaag richting structureel productiegebruik.",
        keyResults: [
          "≥ 15 zorgaanbieders actief eind 2026",
          "Maandelijkse gebruiksrapportage in het operationeel overleg",
        ],
        beschrijving:
          "Borgen van het productiegebruik in Rijnmond en Den Bosch als basis voor verdere opschaling.",
        tijdlijn: "Doorlopend 2026",
        status: "op-koers",
        recenteUpdate: {
          datum: "2026-06-30",
          tekst:
            "Twee nieuwe VVT-organisaties in Den Bosch gestart met de overdrachtsflow.",
        },
      },
      {
        titel: "Migratie eOverdracht Nuts v5 → v6 inplannen",
        dimensie: 2,
        objective:
          "De migratie van eOverdracht naar Nuts v6 is expliciet ingepland: volgorde, leveranciers en afhankelijkheden.",
        keyResults: [
          "Migratieplan vastgesteld in samenhang met de gecoördineerde uitfasering van Nuts v5",
          "Leveranciersafhankelijkheden in beeld vóór Q1 2027",
        ],
        beschrijving:
          "In 2026/2027 wordt de migratie van Nuts v5 naar Nuts v6 expliciet ingepland, in samenhang met de uitfasering van Nuts v5 (bijlage C van het jaarplan).",
        tijdlijn: "Q4 2026 – 2027",
        status: "gepland",
        recenteUpdate: {
          datum: "2026-06-18",
          tekst:
            "Eerste inventarisatie van leveranciersafhankelijkheden gestart samen met de Kring Techniek.",
        },
      },
    ],
  },
  {
    slug: "kik-v",
    naam: "KIK-V",
    beschrijving:
      "Keteninformatie Kwaliteit Verpleeghuiszorg: uitwisseling van kwaliteitsinformatie onder regie van het Zorginstituut, landelijk in gebruik.",
    status: "productie",
    regios: ["Landelijk"],
    aantalZorgaanbieders: 210,
    actieveEindgebruikers: 480,
    eindgebruikersScore: 18,
    laatstBijgewerkt: "2026-07-11",
    contactpersonen: {
      operationeel: { naam: "J. van Dijk", rol: "Subkring-coördinator" },
      technisch: { naam: "R. van den Berg", rol: "Technisch coördinator" },
    },
    slackKanaal: "#zt-kik-v",
    docsUrl: "https://docs.voorbeeld.nl/kik-v",
    doelen: [
      {
        titel: "Doorgaande opschaling onder regie Zorginstituut",
        dimensie: 3,
        objective:
          "Het aantal aangesloten zorgaanbieders groeit door richting landelijke dekking.",
        keyResults: [
          "≥ 275 aangesloten zorgaanbieders eind 2026",
          "Kwartaalrapportage adoptie in het operationeel overleg",
        ],
        beschrijving:
          "Doorgaande opschaling van KIK-V onder regie van het Zorginstituut, met adoptiemeting als vaste rapportagelijn.",
        tijdlijn: "Doorlopend 2026 – 2027",
        status: "op-koers",
        recenteUpdate: {
          datum: "2026-07-11",
          tekst: "228 aanbieders aangesloten; groei vlakt licht af richting de zomer.",
        },
      },
      {
        titel: "Migratie naar did:web-feature van Nuts v6",
        dimensie: 2,
        objective:
          "KIK-V draait op de did:web-feature van Nuts v6 als een van de eerste Toepassingen.",
        keyResults: [
          "Migratie technisch afgerond vóór Q1 2027",
          "Leerervaringen gedeeld met Geboortezorg en ANW-zorg",
        ],
        beschrijving:
          "KIK-V staat vooraan in de migratievolgorde omdat Nuts v6 hier al op de agenda staat; leerervaringen voeden de gecoördineerde uitfasering van v5.",
        tijdlijn: "Q3 2026 – Q1 2027",
        status: "op-koers",
        recenteUpdate: {
          datum: "2026-07-02",
          tekst: "Testmigratie met did:web geslaagd in de acceptatieomgeving.",
        },
      },
      {
        titel: "Profiel voor het meten van Nuts-gebruik",
        dimensie: 3,
        objective:
          "Er is een KIK-V-profiel waarmee Nuts-gebruik gemeten wordt als proxy voor toegevoegde waarde.",
        keyResults: [
          "Profiel uitgewerkt samen met de Kring Techniek vóór eind 2026",
          "Eerste meting over ≥ 2 Toepassingen gepubliceerd",
        ],
        beschrijving:
          "Samen met de Kring Techniek wordt een profiel uitgewerkt voor het meten van Nuts-gebruik; dit voedt de schaal-rapportage van álle Toepassingen.",
        tijdlijn: "Q3 2026 – Q2 2027",
        status: "gepland",
        recenteUpdate: {
          datum: "2026-06-26",
          tekst: "Scopingsessie met de Kring Techniek gepland in augustus.",
        },
      },
    ],
  },
  {
    slug: "integrale-netwerkcommunicatie",
    naam: "Integrale Netwerkcommunicatie",
    beschrijving:
      "Netwerkbrede communicatie tussen zorgverleners over organisatiegrenzen heen, aansluitend op domeinen buiten de zorg waar OZO Verbindzorg en GIDS Open Standaarden actief zijn.",
    status: "ontwikkeling",
    regios: ["Rijnmond"],
    aantalZorgaanbieders: 5,
    actieveEindgebruikers: 60,
    eindgebruikersScore: null,
    laatstBijgewerkt: "2026-07-07",
    contactpersonen: {
      operationeel: { naam: "L. Bakker", rol: "Subkring-coördinator" },
      technisch: { naam: "M. Kuiper", rol: "Technisch coördinator" },
    },
    slackKanaal: "#zt-netwerkcommunicatie",
    docsUrl: "https://docs.voorbeeld.nl/netwerkcommunicatie",
    doelen: [
      {
        titel: "Eerste pilot met meerdere leveranciers",
        dimensie: 3,
        objective:
          "Er draait minimaal één pilot met meerdere leveranciers in Rijnmond en/of Den Bosch.",
        keyResults: [
          "Pilot gestart met ≥ 2 leveranciers vóór Q4 2026",
          "Evaluatie met eindgebruikers afgerond vóór Q1 2027",
        ],
        beschrijving:
          "Minimaal één pilot starten met meerdere leveranciers; de evaluatie voedt de startcriteria voor productie.",
        tijdlijn: "Q3 2026 – Q1 2027",
        status: "op-koers",
        recenteUpdate: {
          datum: "2026-07-07",
          tekst:
            "Tweede leverancier heeft deelname aan de Rijnmond-pilot bevestigd; start verwacht in oktober.",
        },
      },
      {
        titel: "Startcriteria en pad naar productie",
        dimensie: 1,
        objective:
          "De minimale startcriteria en het pad naar productie zijn vastgelegd en bestuurlijk gedragen.",
        keyResults: [
          "Startcriteria vastgesteld in de subkring vóór eind 2026",
          "Aansluiting verkend bij OZO Verbindzorg en GIDS Open Standaarden",
        ],
        beschrijving:
          "Vastleggen van minimale startcriteria en het pad naar productie, met aansluiting bij domeinen buiten de zorg.",
        tijdlijn: "Q4 2026",
        status: "gepland",
        recenteUpdate: {
          datum: "2026-06-20",
          tekst: "Concept-startcriteria besproken in de subkring; verwerking loopt.",
        },
      },
    ],
  },
  {
    slug: "zorginzage-2026",
    naam: "Zorginzage 2026",
    beschrijving:
      "Het gedeelde halffabrikaat voor inzage-use-cases: één specificatie als groeipad voor HA Inzage, 360-graden cliëntbeeld, PZP en op termijn delen van ANW-zorg. In beheer bij ActiZ.",
    status: "ontwikkeling",
    regios: [],
    aantalZorgaanbieders: null,
    actieveEindgebruikers: null,
    eindgebruikersScore: null,
    laatstBijgewerkt: "2026-07-12",
    contactpersonen: {
      operationeel: { naam: "R. Mulder", rol: "Subkring-coördinator" },
      technisch: { naam: "H. Vos", rol: "Technisch coördinator" },
    },
    slackKanaal: "#zt-zorginzage-2026",
    docsUrl: "https://docs.voorbeeld.nl/zorginzage-2026",
    doelen: [
      {
        titel: "Release v0.1 in beheer bij ActiZ",
        dimensie: 1,
        objective:
          "De eerste release van de specificatie is gepubliceerd en belegd in beheer bij ActiZ.",
        keyResults: [
          "Release v0.1 gepubliceerd in juni 2026",
          "Beheerproces met releasekalender ingericht",
        ],
        beschrijving:
          "Release v0.1 in juni 2026, met een beheercyclus van twee releases per jaar.",
        tijdlijn: "Q2 2026",
        status: "afgerond",
        recenteUpdate: {
          datum: "2026-07-12",
          tekst:
            "v0.1 gepubliceerd en overgedragen aan het beheerteam; eerste wijzigingsverzoeken binnen.",
        },
      },
      {
        titel: "Eerste use-case: 360-graden cliëntbeeld",
        dimensie: 1,
        objective:
          "Het 360-graden cliëntbeeld is als eerste use-case op de specificatie uitgewerkt.",
        keyResults: [
          "Functioneel ontwerp afgerond vóór Q4 2026",
          "Eerste implementatie bij een leverancier in Q1 2027",
        ],
        beschrijving:
          "Uitwerking van het 360-graden cliëntbeeld als eerste use-case; daarna geleidelijke adoptie door HA Inzage-, PZP- en BgZ-use-cases.",
        tijdlijn: "Q3 2026 – Q1 2027",
        status: "op-koers",
        recenteUpdate: {
          datum: "2026-07-05",
          tekst: "Ontwerpsessies met drie leveranciers afgerond; ontwerp in review.",
        },
      },
      {
        titel: "Adoptie door inzage-Toepassingen",
        dimensie: 3,
        objective:
          "De inzage-Toepassingen op het Nuts-netwerk adopteren de specificatie als gedeelde basis.",
        keyResults: [
          "HA Inzage en PZP hebben een migratiepad vastgesteld",
          "≥ 2 Toepassingen bouwen aantoonbaar op de specificatie eind 2027",
        ],
        beschrijving:
          "Geleidelijke adoptie door HA Inzage, PZP en BgZ-use-cases, bewaakt via het zorgtoepassings ontwerpersoverleg.",
        tijdlijn: "2026 – 2027",
        status: "op-koers",
        recenteUpdate: {
          datum: "2026-06-27",
          tekst: "Adoptieroadmap besproken in het ontwerpersoverleg.",
        },
      },
    ],
  },
  {
    slug: "geboortezorg",
    naam: "Geboortezorg",
    beschrijving:
      "Gegevensuitwisseling in de geboortezorgketen tussen verloskundigen, kraamzorg en ziekenhuizen op het Nuts-netwerk.",
    status: "productie",
    regios: ["Noord-Nederland", "Amsterdam", "Zuid-Limburg"],
    aantalZorgaanbieders: 14,
    actieveEindgebruikers: 260,
    eindgebruikersScore: 21,
    laatstBijgewerkt: "2026-07-03",
    contactpersonen: {
      operationeel: { naam: "T. de Groot", rol: "Subkring-coördinator" },
      technisch: { naam: "I. Meijer", rol: "Technisch coördinator" },
    },
    slackKanaal: "#zt-geboortezorg",
    docsUrl: "https://docs.voorbeeld.nl/geboortezorg",
    doelen: [
      {
        titel: "Migratie naar Nuts v6 (did:web)",
        dimensie: 2,
        objective:
          "De huidige Toepassing draait op Nuts v6 met did:web, als een van de eerste migraties.",
        keyResults: [
          "Migratieplan met leveranciers vastgesteld in Q3 2026",
          "Productie op Nuts v6 vóór Q2 2027",
        ],
        beschrijving:
          "Geplande migratie van de huidige Toepassing naar Nuts v6 (did:web), in de migratievolgorde direct na KIK-V.",
        tijdlijn: "Q3 2026 – Q2 2027",
        status: "gepland",
        recenteUpdate: {
          datum: "2026-07-03",
          tekst:
            "Wacht op leerervaringen uit de KIK-V-testmigratie; planningssessie met leveranciers in september.",
        },
      },
    ],
  },
  {
    slug: "iwlz",
    naam: "iWLZ",
    beschrijving:
      "Uitvoering van het groeipad nID–Nuts voor de Wet langdurige zorg, gecoördineerd via het Actieprogramma iWLZ.",
    status: "verkenning",
    regios: [],
    aantalZorgaanbieders: null,
    actieveEindgebruikers: null,
    eindgebruikersScore: null,
    laatstBijgewerkt: "2026-06-25",
    contactpersonen: {
      operationeel: { naam: "F. Peters", rol: "Subkring-coördinator" },
      technisch: { naam: "C. Post", rol: "Technisch coördinator" },
    },
    slackKanaal: "#zt-iwlz",
    docsUrl: "https://docs.voorbeeld.nl/iwlz",
    doelen: [
      {
        titel: "Groeipad nID–Nuts uitvoeren",
        dimensie: 1,
        objective:
          "Het groeipad nID–Nuts wordt uitgevoerd met het SIG-rapport als architectuurbasis.",
        keyResults: [
          "Architectuurkeuzes vastgelegd samen met het Actieprogramma iWLZ",
          "Eerste beproeving van het groeipad gestart vóór Q2 2027",
        ],
        beschrijving:
          "Uitvoeren van het groeipad nID–Nuts; coördinatie via het Actieprogramma iWLZ en meeschrijven aan de architectuurkeuzes (SIG-rapport als basis).",
        tijdlijn: "2026 – 2027",
        status: "op-koers",
        recenteUpdate: {
          datum: "2026-06-25",
          tekst:
            "Reactie op de SIG-architectuurnotitie ingediend; vervolgsessie met het Actieprogramma gepland.",
        },
      },
    ],
  },
  {
    slug: "medicatieoverdracht-lsp-nuts",
    naam: "Medicatieoverdracht via LSP × Nuts",
    beschrijving:
      "Medicatieoverdracht over de infrastructuurgrens heen: pilots met autorisatie als concrete drager van de werklijn GF Autorisatie.",
    status: "pilot",
    regios: ["Utrecht"],
    aantalZorgaanbieders: 6,
    actieveEindgebruikers: 45,
    eindgebruikersScore: null,
    laatstBijgewerkt: "2026-07-06",
    contactpersonen: {
      operationeel: { naam: "N. Hendriks", rol: "Subkring-coördinator" },
      technisch: { naam: "W. Brouwer", rol: "Technisch coördinator" },
    },
    slackKanaal: "#zt-medicatieoverdracht",
    docsUrl: "https://docs.voorbeeld.nl/medicatieoverdracht",
    doelen: [
      {
        titel: "Pilot 1: route 1 met UZI-pas",
        dimensie: 1,
        objective:
          "Pilot 1 (route 1) draait in 2026 met de UZI-pas als tijdelijke autorisatie.",
        keyResults: [
          "Pilot live met ≥ 3 apotheken en ≥ 2 VVT-organisaties",
          "Evaluatierapport opgeleverd vóór Q1 2027",
        ],
        beschrijving:
          "Eerste pilot met UZI-pas als tijdelijke autorisatievorm, als opstap naar decentrale autorisatie.",
        tijdlijn: "2026",
        status: "op-koers",
        recenteUpdate: {
          datum: "2026-07-06",
          tekst: "Vierde apotheek aangesloten; eerste evaluatiegesprekken gepland.",
        },
      },
      {
        titel: "Pilot 2: decentrale autorisatie",
        dimensie: 1,
        objective:
          "Pilot 2 beproeft decentrale autorisatie als concrete drager van de werklijn GF Autorisatie.",
        keyResults: [
          "Ontwerp decentrale autorisatie afgestemd met de werklijn GF Autorisatie",
          "Pilotstart vóór Q3 2027",
        ],
        beschrijving:
          "Tweede pilot met decentrale autorisatie; doorontwikkeling in 2027 richting productie.",
        tijdlijn: "2027",
        status: "gepland",
        recenteUpdate: {
          datum: "2026-06-19",
          tekst: "Afstemming met de werklijn GF Autorisatie gestart.",
        },
      },
    ],
  },
  {
    slug: "pzp",
    naam: "PZP / Advance Care Planning",
    beschrijving:
      "Proactieve zorgplanning: vastleggen en delen van behandelwensen en -grenzen. Convergentie met HA Inzage wordt onderzocht.",
    status: "verkenning",
    regios: [],
    aantalZorgaanbieders: null,
    actieveEindgebruikers: null,
    eindgebruikersScore: null,
    laatstBijgewerkt: "2026-06-28",
    contactpersonen: {
      operationeel: { naam: "D. Willems", rol: "Subkring-coördinator" },
      technisch: { naam: "G. Timmermans", rol: "Technisch coördinator" },
    },
    slackKanaal: "#zt-pzp",
    docsUrl: "https://docs.voorbeeld.nl/pzp",
    doelen: [
      {
        titel: "Convergentie met HA Inzage onderzoeken",
        dimensie: 1,
        objective:
          "Er ligt een onderbouwd besluit of PZP en HA Inzage op één gedeelde basis kunnen.",
        keyResults: [
          "Gezamenlijke verkenning met de PZP-coalitie afgerond vóór eind 2026",
          "Besluit over gedeelde basis of afzonderlijke Toepassing vastgelegd",
        ],
        beschrijving:
          "PZP wordt alleen als afzonderlijke Toepassing opgenomen als convergentie met HA Inzage niet haalbaar blijkt of als het tempo van de PZP-coalitie daarom vraagt.",
        tijdlijn: "Q3 2026 – Q4 2026",
        status: "op-koers",
        recenteUpdate: {
          datum: "2026-06-28",
          tekst:
            "Eerste gezamenlijke werksessie met de PZP-coalitie en HA Inzage afgerond; gedeelde backlog in opbouw.",
        },
      },
    ],
  },
];

export function getToepassing(slug: string): Toepassing | undefined {
  return toepassingen.find((t) => t.slug === slug);
}
