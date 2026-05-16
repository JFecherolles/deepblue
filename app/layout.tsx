import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://deepblue-diving.com"),
  title: {
    default: "DeepBlue Diving | Guide Plongée Sous-Marine & Spots Mondiaux",
    template: "%s | DeepBlue Diving",
  },
  description:
    "Découvrez les meilleurs spots de plongée sous-marine au monde, comparatifs d'équipement, conditions météo marines et conseils d'experts. Votre guide complet pour explorer les fonds marins.",
  keywords: [
    "plongée sous-marine",
    "spots de plongée",
    "équipement plongée",
    "scuba diving",
    "plongée Maldives",
    "plongée Égypte",
    "formation plongée",
    "PADI",
    "SSI",
    "ordinateur plongée",
    "masque plongée",
    "palmes plongée",
  ],
  authors: [{ name: "DeepBlue Diving Team" }],
  creator: "DeepBlue Diving",
  publisher: "DeepBlue Diving",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://deepblue-diving.com",
    siteName: "DeepBlue Diving",
    title: "DeepBlue Diving | Guide Plongée Sous-Marine & Spots Mondiaux",
    description:
      "Explorez les meilleurs spots de plongée, comparez l'équipement et préparez vos aventures sous-marines avec nos guides experts.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DeepBlue Diving - Explorez les fonds marins",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DeepBlue Diving | Guide Plongée Sous-Marine",
    description: "Votre guide complet pour la plongée sous-marine",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${spaceGrotesk.variable} bg-background`}
    >
      <head>
        {/* 
          Google AdSense - Replace ca-pub-XXXXXXXXXXXXXXXX with your AdSense publisher ID:
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" crossOrigin="anonymous" />
          
          Google Analytics - Replace G-XXXXXXXXXX with your GA4 measurement ID:
          <Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" strategy="afterInteractive" />
          <Script id="gtag-init" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');`}
          </Script>
        */}
      </head>
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
