import type { Metadata, Viewport } from "next"; 
import { Analytics } from '@vercel/analytics/next';
import Script from 'next/script';
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Copyright from "@/components/copyright";
import Banner from "@/components/banner";
import ButtonOptions from "@/components/button-options";
import Providers from "@/app/providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap', 
  preload: true
});

// Metadata for SEO
export const metadata: Metadata = {
  title: {
    default: "Energieausweis vor Ort - Ihr Experte für Energieausweise", 
    template: "%s | Energieausweis vor Ort",
  },
  metadataBase: new URL("https://energieausweis-vor-ort.nrw/"),
  description:
    "Professionelle Energieausweise vor Ort. Schnell, zuverlässig und zu fairen Festpreisen. Ihr Experte für alle Ausweistypen.",
  keywords:
    "Energieausweis, Energiepass, Energieberatung, Gebäudeenergieausweis, vor Ort",
  authors: [
    { name: "Markus Naczinsky" }
  ],
  creator: "Energieausweis vor Ort",
  publisher: "Energieausweis vor Ort",

  // Favicon and Icon Configuration
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "icon",
        url: "/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },

  // PWA Manifest
  manifest: "/site.webmanifest",

  // Open Graph for Social Media (Facebook, LinkedIn, etc.)
  openGraph: {
    title: "Energieausweis vor Ort - Ihr Experte für Energieausweise",
    description:
      "Professionelle Energieausweise vor Ort. Schnell, zuverlässig und zu fairen Festpreisen.",
    url: "https://energieausweis-vor-ort.nrw/",
    siteName: "Energieausweis vor Ort",
    images: [
      {
        url: "/Energieausweis_vor_ort_header_neu.webp", 
        width: 1200,
        height: 630,
        alt: "Energieausweis vor Ort Service",
      },
    ],
    locale: "de_DE",
    type: "website",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Energieausweis vor Ort - Ihr Experte für Energieausweise",
    description:
      "Professionelle Energieausweise vor Ort. Schnell, zuverlässig und zu fairen Festpreisen.",
    images: ["/Energieausweis_vor_ort_header_neu.webp"],
  },

  // Additional SEO
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

// Viewport configuration for theme and color scheme
export const viewport: Viewport = {
  themeColor: "#008b29",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        {/* Initialize GTM with default denied consent */}
        <Script id="gtm-init" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            
            // Set default consent (required before GTM loads)
            gtag('consent', 'default', {
              ad_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
              analytics_storage: 'denied',
              functionality_storage: 'granted',
              personalization_storage: 'denied'
            });
          `}
        </Script>

        {/* Load GTM */}
        <Script id="gtm-script" strategy="beforeInteractive">
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} antialiased min-h-screen flex flex-col`}
      >
        <Banner/>
        <Navbar />
        <ButtonOptions/>
        <Providers>
        <main className="flex-1">
          {children}
        </main>
        <Analytics />
        </Providers>
        <Footer />
        <Copyright />
      </body>
    </html>
  );
}