export function formatAantal(waarde: number | null): string {
  if (waarde === null) return "—";
  return waarde.toLocaleString("nl-NL");
}

export function formatScore(score: number | null): string {
  if (score === null) return "—";
  return score > 0 ? `+${score}` : `${score}`;
}

export function formatDatum(iso: string): string {
  return new Date(`${iso}T12:00:00`).toLocaleDateString("nl-NL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
