import type { Metadata } from "next";
import { Inter, Red_Hat_Display } from "next/font/google";
import Link from "next/link";
import { NutsLogo } from "@/components/NutsLogo";
import "./globals.css";

const redHatDisplay = Red_Hat_Display({
  variable: "--font-red-hat-display",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "ZT-Kompas — Zorgtoepassingen op het Nuts-netwerk",
    template: "%s · ZT-Kompas",
  },
  description:
    "Publiek statusdashboard van de Zorgtoepassingen op het Nuts-netwerk: gebruik, voortgang en doelen per toepassing (Kring Toepassingen).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nl"
      className={`${redHatDisplay.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <header className="bg-brand">
          <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center gap-x-3 gap-y-1 px-4 py-5 sm:px-6">
            <Link href="/" className="flex items-center gap-3">
              <NutsLogo className="h-7 w-auto" />
              <span
                aria-hidden
                className="h-6 w-px bg-brand-contrast/30"
              />
              <span className="font-heading text-xl font-bold tracking-tight text-brand-contrast">
                ZT-Kompas
              </span>
            </Link>
            <span className="text-sm text-brand-contrast/80">
              Zorgtoepassingen op het Nuts-netwerk
            </span>
          </div>
        </header>

        <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-6">
          {children}
        </main>

        <footer className="border-t border-hairline">
          <div className="mx-auto w-full max-w-6xl px-4 py-6 text-xs text-ink-muted sm:px-6">
            <p>
              Mockup met voorbeelddata — aantallen, scores, namen en kanalen
              zijn illustratief. Gebaseerd op het Jaarplan Kring Toepassingen
              2026/2027 (concept, mei 2026).
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
