import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Haladó Szoftvertechnológia — Kvíz",
  description:
    "Felkészülő kvíz az ELTE Haladó Szoftvertechnológia (w38–w49) heti kérdéseiből. Random sorrend, élő pontszám, magyarázatokkal.",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "SwTech Kvíz",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0e1a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hu">
      <body className="font-sans">{children}</body>
    </html>
  );
}
