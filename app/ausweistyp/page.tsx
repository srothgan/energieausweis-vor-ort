import type { Metadata } from "next";
import DynamicForm from "@/components/form";
import { Suspense } from "react";
import Image from "next/image";
import AusweisTyp from '@/public/Ausweistypen_Energieausweis.webp';
import CTASection from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Ausweistyp",
  description: "Bedarfsausweis oder Verbrauchsausweis? Mit unserem kostenlosen Fragebogen finden Sie in wenigen Klicks heraus, welchen Energieausweis-Typ Sie benötigen. Unverbindlich und ohne persönliche Daten.",
  keywords: "Bedarfsausweis, Verbrauchsausweis, Energieausweis Typ, Ausweistyp bestimmen, Energieausweis Fragebogen, welcher Energieausweis",
  
  openGraph: {
    title: "Ausweistyp | Energieausweis vor Ort",
    description: "Bedarfsausweis oder Verbrauchsausweis? Mit unserem kostenlosen Fragebogen finden Sie in wenigen Klicks heraus, welchen Energieausweis-Typ Sie benötigen.",
    url: "https://energieausweis-vor-ort.nrw/ausweistyp",
    images: [
      {
        url: "/Ausweistypen_Energieausweis.webp",
        width: 1200,
        height: 630,
        alt: "Ausweistypen - Bedarfsausweis oder Verbrauchsausweis",
      },
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Ausweistyp | Energieausweis vor Ort",
    description: "Bedarfsausweis oder Verbrauchsausweis? Mit unserem kostenlosen Fragebogen finden Sie in wenigen Klicks heraus, welchen Energieausweis-Typ Sie benötigen.",
    images: ["/Ausweistypen_Energieausweis.webp"],
  },
  
  alternates: {
    canonical: "https://energieausweis-vor-ort.nrw/ausweistyp",
  },
};

export default function FormPage() {
  return (
    <>
      {/* Banner Image */}
      <div className="relative w-full h-[200px] md:h-[300px] lg:h-[400px] overflow-hidden">
        <Image
          src={AusweisTyp}
          alt="Ausweistypen - Bedarfsausweis oder Verbrauchsausweis"
          fill
          priority
          sizes="100vw"
          fetchPriority="high"
          className="object-cover"
        />
      </div>

      <div className="bg-white w-full py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text mb-6">
              <span className="text-primary">Bedarfsausweis</span>{" "}
              oder{" "}
              <span className="text-primary">Verbrauchsausweis</span>?
            </h1>
            <p className="text-lg md:text-xl text-text/80 mx-auto">
              Sie wissen nicht, welchen Ausweistyp Sie wirklich benötigen? Mit nur wenigen Klicks finden Sie es ganz einfach heraus. Kostenlos, unverbindlich und ohne Eingabe Ihrer persönlichen Daten.
            </p>
          </div>

          {/* Dynamic Form */}
          <div className="mb-12 md:mb-16">
            <Suspense
              fallback={
                <div className="max-w-2xl mx-auto p-6 text-center">
                  <div className="animate-pulse bg-gray-200 rounded-xl h-64" />
                </div>
              }
            >
              <DynamicForm />
            </Suspense>
          </div>

          {/* CTA Section */}
          <CTASection 
            title="Haben Sie Ihren passenden Ausweistyp gefunden?"
            subtitle="Kontaktieren Sie uns jetzt für Ihren Energieausweis vor Ort"
          />
        </div>
      </div>
    </>
  );
}