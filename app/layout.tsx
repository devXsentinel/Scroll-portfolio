import type { Metadata } from "next";
import { Bangers, Caveat, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const bangers = Bangers({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bangers",
  display: "swap",
});
const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const TITLE = "Ravish Kumar -- Portfolio";
const DESCRIPTION =
  "Ravish Kumar -- Full-Stack Developer & AI Engineer (B.Tech Cybersecurity & Forensics). A scroll-driven comic-book portfolio.";

export const metadata: Metadata = {
  // metadataBase is required for the opengraph-image file convention to emit an
  // absolute URL; most unfurlers drop a relative one.
  metadataBase: new URL("https://ravishkumar.dev"),
  title: TITLE,
  description: DESCRIPTION,
  // The opengraph-image file convention supplies og:image on its own; this block
  // is only here for the fields it cannot infer.
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://ravishkumar.dev",
    siteName: TITLE,
    type: "website",
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${bangers.variable} ${caveat.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
