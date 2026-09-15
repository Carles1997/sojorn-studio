import type { Metadata } from "next";
import { Geist, Spectral } from "next/font/google";
import { MotionProvider } from "./_components/motion";
import { SiteFooter } from "./_components/site-footer";
import { SiteHeader } from "./_components/site-header";
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
  title: {
    default: "Sojorn Studio · Transformació d’allotjaments amb encant",
    template: "%s · Sojorn Studio",
  },
  description:
    "Analitzem, transformem i comuniquem allotjaments amb encant perquè siguin més atractius, més rendibles i més connectats amb el territori.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ca" className={`${spectral.variable} ${geistSans.variable} h-full`}>
      <head>
        {/* Scroll reveals start hidden; without JavaScript, show everything. */}
        <noscript>
          <style>{"[data-reveal]{opacity:1!important;transform:none!important}"}</style>
        </noscript>
      </head>
      <body className="min-h-full">
        <MotionProvider>
          <SiteHeader />
          {children}
          <SiteFooter />
        </MotionProvider>
      </body>
    </html>
  );
}
