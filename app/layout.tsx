import type { Metadata } from "next";
import { Geist, Spectral } from "next/font/google";
import "./globals.css";

const spectral = Spectral({
  variable: "--font-spectral",
  subsets: ["latin", "latin-ext"],
  weight: ["200", "300", "400"],
  style: ["normal", "italic"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Sojorn Studio · Transformació d'allotjaments amb encant",
  description:
    "Analitzem, transformem i comuniquem allotjaments amb encant perquè siguin més atractius, més rendibles i més connectats amb el territori.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ca" className={`${spectral.variable} ${geistSans.variable} h-full`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
