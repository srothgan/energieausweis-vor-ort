import type { Metadata } from "next";
import { Suspense } from "react";
import Image from "next/image";
import Unterlagen from "@/public/Energieausweis-benoetigte-Unterlagen.webp";
import CTASection from "@/components/cta-section";
import Checklist from "@/components/checklist";

export const metadata: Metadata = {
  title: "Unterlagen",
  description: "Welche Unterlagen benötigen Sie für Ihren Energieausweis vor Ort? Vollständige Checkliste mit Baujahr, Grundrissen, Dämmungsmaßnahmen und mehr. PDF-Download verfügbar.",
  keywords: "Unterlagen Energieausweis, Energieausweis Dokumente, Checkliste Energieausweis, benötigte Unterlagen, Grundrisse, Baujahr, Dämmung, Wärmeschutznachweis",
  
  openGraph: {
    title: "Unterlagen | Energieausweis vor Ort",
    description: "Welche Unterlagen benötigen Sie für Ihren Energieausweis vor Ort? Vollständige Checkliste mit allen erforderlichen Dokumenten. PDF-Download verfügbar.",
    url: "https://energieausweis-vor-ort.nrw/unterlagen",
    images: [
      {
        url: "/Energieausweis-benoetigte-Unterlagen.webp",
        width: 1200,
        height: 630,
        alt: "Benötigte Unterlagen für den Energieausweis vor Ort",
      },
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Unterlagen | Energieausweis vor Ort",
    description: "Welche Unterlagen benötigen Sie für Ihren Energieausweis vor Ort? Vollständige Checkliste mit allen erforderlichen Dokumenten.",
    images: ["/Energieausweis-benoetigte-Unterlagen.webp"],
  },
  
  alternates: {
    canonical: "https://energieausweis-vor-ort.nrw/unterlagen",
  },
};

const requiredDocuments = [
  {
    id: 1,
    title: "Baujahr Ihrer Immobilie",
    description: "Angabe des Baujahres zur Bewertung der energetischen Standards"
  },
  {
    id: 2,
    title: "Wohn- und Nutzflächenangaben",
    description: "Baubeschreibung, Bauzeichnung bzw. Grundrisse"
  },
  {
    id: 3,
    title: "Durchgeführte Modernisierungen/ Sanierungen",
    description: "Falls ja: wann und welche Maßnahmen wurden durchgeführt?"
  },
  {
    id: 4,
    title: "Dämmungsmaßnahmen",
    description: "Außen-, Decken-, Keller-, Dachgeschossdämmung (falls ja: Dämmstärke und Baujahr)"
  },
  {
    id: 5,
    title: "Wärmeschutznachweis",
    description: "Für Objekte, die nach dem Jahr 2000 errichtet wurden"
  },
  {
    id: 6,
    title: "Messprotokoll des Schornsteinfegers",
    description: "Aktuelles Messprotokoll zur Bewertung der Heizungsanlage"
  },
  {
    id: 7,
    title: "Solarthermie",
    description: "Falls vorhanden: Fläche und Baujahr der Anlage"
  }
];

export default function UnterlagenPage() {
  return (
    <>
      {/* Banner Image */}
      <div className="relative w-full h-[200px] md:h-[300px] lg:h-[400px] overflow-hidden">
        <Image
          src={Unterlagen}
          alt="Benötigte Unterlagen für den Energieausweis vor Ort"
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
              Welche{" "}
              <span className="text-primary">Unterlagen</span>{" "}
              benötigen wir?
            </h1>
            <p className="text-lg md:text-xl text-text/80 max-w-3xl mx-auto">
              Um den Vor-Ort-Termin optimal vorbereiten zu können, wäre es hilfreich, wenn Sie uns im Vorfeld nachfolgende Unterlagen zur Verfügung stellen könnten oder diese spätestens bei der Vor-Ort-Begehung bereithalten.
            </p>
          </div>

            <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-6 md:p-8 mb-12 w-full overflow-hidden">
              <Suspense
                fallback={
                  <div className="space-y-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <div
                        key={i}
                        className="h-16 bg-gray-200 animate-pulse rounded-lg"
                      />
                    ))}
                  </div>
                }
              >
                <Checklist items={requiredDocuments} />
              </Suspense>
            </div>

          {/* Info Section */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-text mb-4">
                Wichtiger Hinweis
              </h3>
              <p className="text-lg text-text/80 leading-relaxed">
                Keine Sorge, falls Sie nicht alle Unterlagen zur Hand haben. Unser erfahrenes Team kann auch vor Ort viele Daten direkt erfassen. Je mehr Unterlagen Sie jedoch bereitstellen können, desto effizienter und präziser wird die Begutachtung.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <CTASection 
            title="Unterlagen bereit?"
            subtitle="Vereinbaren Sie jetzt Ihren Vor-Ort-Termin"
          />
        </div>
      </div>
    </>
  );
}
