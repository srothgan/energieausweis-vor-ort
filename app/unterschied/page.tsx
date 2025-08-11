import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Unterlagen from "@/public/Energieausweis-benoetigte-Unterlagen.webp";
import {
  TrendingUp,
  TrendingDown,
  FileText,
  CheckCircle,
  XCircle,
  Clock,
  Building,
  Calculator,
  ArrowRight,
} from "lucide-react";
import CTASection from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Unterschied",
  description: "Bedarfsausweis vs. Verbrauchsausweis - alle Unterschiede im Detail. Welcher Energieausweis ist der richtige für Sie? Vergleich, Vor- und Nachteile, Entscheidungshilfe.",
  keywords: "Bedarfsausweis vs Verbrauchsausweis, Unterschied Energieausweis, Energieausweis Vergleich, welcher Energieausweis, Vor- und Nachteile, Entscheidungshilfe",
  
  openGraph: {
    title: "Unterschied | Energieausweis vor Ort",
    description: "Bedarfsausweis vs. Verbrauchsausweis - alle Unterschiede im Detail. Welcher Energieausweis ist der richtige für Sie? Kompakter Vergleich mit Entscheidungshilfe.",
    url: "https://energieausweis-vor-ort.nrw/unterschied",
    images: [
      {
        url: "/Energieausweis-benoetigte-Unterlagen.webp",
        width: 1200,
        height: 630,
        alt: "Bedarfsausweis vs Verbrauchsausweis Vergleich",
      },
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Unterschied | Energieausweis vor Ort",
    description: "Bedarfsausweis vs. Verbrauchsausweis - alle Unterschiede im Detail. Welcher Energieausweis ist der richtige für Sie?",
    images: ["/Energieausweis-benoetigte-Unterlagen.webp"],
  },
  
  alternates: {
    canonical: "https://energieausweis-vor-ort.nrw/unterschied",
  },
};

const comparisonTable = [
  {
    feature: "Berechnungsgrundlage",
    bedarfs: "Theoretischer Energiebedarf (Standard-Nutzung & Klima)",
    verbrauch: "Tatsächlicher Energieverbrauch der letzten 3 Jahre",
  },
  {
    feature: "Datenbasis",
    bedarfs: "Gebäudehülle, Heizungsanlage, Baujahr, Dämmung etc.",
    verbrauch: "Verbrauchsdaten (Heizung, Warmwasser, Strom)",
  },
  {
    feature: "Aussagekraft",
    bedarfs: "Zeigt Potenzial & Energieeffizienz des Gebäudes",
    verbrauch: "Spiegelt tatsächliche Nutzerverhalten wider",
  },
  {
    feature: "Gültigkeit",
    bedarfs: "10 Jahre",
    verbrauch: "10 Jahre",
  },
  {
    feature: "Pflicht ab",
    bedarfs: "Neubau & Kernsanierung",
    verbrauch: "Bestandsgebäude ohne Kernsanierung",
  },
];

const prosCons = {
  bedarfs: {
    pros: [
      "Unabhängig vom Nutzerverhalten",
      "Ideal bei Vermietung/Verkauf",
      "Zeigt energetisches Potenzial",
      "Auch bei fehlenden Verbrauchsdaten möglich",
    ],
    cons: ["Aufwand durch Datenerhebung", "Theoretische Werte"],
  },
  verbrauch: {
    pros: [
      "Einfache Erstellung",
      "Spiegelt reale Verbräuche",
      "Geringerer Aufwand",
      "Aussagekräftig bei gleichbleibender Nutzung",
    ],
    cons: [
      "Beeinflusst durch Nutzerverhalten",
      "Nicht bei Kernsanierung möglich",
      "Verbrauchsdaten erforderlich",
    ],
  },
};

const decisionSteps = [
  {
    icon: Building,
    title: "Gebäudeart prüfen",
    description: "Neubau oder Altbau? Anzahl der Wohneinheiten?",
  },
  {
    icon: Clock,
    title: "Baujahr & Sanierung",
    description: "Wann wurde gebaut bzw. kernsanier?",
  },
  {
    icon: FileText,
    title: "Verbrauchsdaten vorhanden?",
    description: "3 Jahre Heiz- & Warmwasser-Verbrauch?",
  },
  {
    icon: Calculator,
    title: "Auswahl treffen",
    description: "Mit unserem Quiz den passenden Ausweis finden.",
  },
];

export default function UnterschiedPage() {

  // TODO: replace image

  return (
    <>
      {/* Hero */}
      <div className="relative w-full h-[200px] md:h-[300px] lg:h-[400px] overflow-hidden">
        <Image
          src={Unterlagen}
          alt="Bedarfsausweis vs Verbrauchsausweis Vergleich"
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
              Bedarfs- vs.{" "}
              <span className="text-primary">Verbrauchsausweis</span>
            </h1>
            <p className="text-lg md:text-xl text-text/80 max-w-3xl mx-auto">
              Alles, was Sie über die beiden Energieausweis-Typen wissen müssen –
              einfach erklärt und übersichtlich dargestellt.
            </p>
          </div>

          {/* Quick Comparison Cards */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-text mb-8 text-center">
              Kurzübersicht
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Bedarfsausweis */}
              <div className="text-text bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8">
                <div className="flex items-center mb-4">
                  <TrendingUp className="w-8 h-8 text-primary mr-3" />
                  <h3 className="text-2xl font-bold">Bedarfsausweis</h3>
                </div>
                <p className="text-text/80 mb-4">
                  Berechnet den theoretischen Energiebedarf Ihres Gebäudes.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Ideal bei Vermietung/Verkauf</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Unabhängig vom Nutzerverhalten</span>
                  </li>
                </ul>
              </div>

              {/* Verbrauchsausweis */}
              <div className="text-text bg-gradient-to-br from-accent/5 to-accent/10 rounded-2xl p-8">
                <div className="flex items-center mb-4">
                  <TrendingDown className="w-8 h-8 text-accent mr-3" />
                  <h3 className="text-2xl font-bold">Verbrauchsausweis</h3>
                </div>
                <p className="text-text/80 mb-4">
                  Basierend auf dem tatsächlichen Energieverbrauch der letzten 3 Jahre.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Einfache Erstellung</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Spiegelt reale Verbräuche</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Detailed Comparison Table */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-text mb-8 text-center">
              Detailvergleich
            </h2>
            
            {/* Desktop Table */}
            <div className="text-text overflow-x-auto rounded-2xl shadow-xl hidden md:block">
              <table className="w-full min-w-[768px]">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="p-4 text-left font-semibold text-text">Merkmal</th>
                    <th className="p-4 text-center font-semibold text-text bg-primary/10">
                      Bedarfsausweis
                    </th>
                    <th className="p-4 text-center font-semibold text-text bg-accent/10">
                      Verbrauchsausweis
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonTable.map((row, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                      <td className="p-4 font-medium text-text border-r border-gray-200">
                        {row.feature}
                      </td>
                      <td className="p-4 text-center border-r border-gray-200">
                        {row.bedarfs}
                      </td>
                      <td className="p-4 text-center">{row.verbrauch}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden space-y-6">
              <div className="grid gap-6">
                {/* Bedarfsausweis Card */}
                <div className="rounded-2xl shadow-xl overflow-hidden">
                  {/* Card Header */}
                  <div className="bg-primary p-6 text-center text-white">
                    <div className="flex flex-col items-center space-y-3">
                      <TrendingUp className="w-12 h-12" />
                      <div className="font-bold text-xl">
                        Bedarfsausweis
                      </div>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="bg-white">
                    {comparisonTable.map((row, index) => (
                      <div key={index} className={`p-4 border-b border-gray-200 last:border-b-0 ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}>
                        <div className="space-y-2">
                          <div className="font-medium text-primary text-sm">
                            {row.feature}
                          </div>
                          <div className="text-text/80 text-sm">
                            {row.bedarfs}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Verbrauchsausweis Card */}
                <div className="rounded-2xl shadow-xl overflow-hidden">
                  {/* Card Header */}
                  <div className="bg-accent p-6 text-center text-white">
                    <div className="flex flex-col items-center space-y-3">
                      <TrendingDown className="w-12 h-12" />
                      <div className="font-bold text-xl">
                        Verbrauchsausweis
                      </div>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="bg-white">
                    {comparisonTable.map((row, index) => (
                      <div key={index} className={`p-4 border-b border-gray-200 last:border-b-0 ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}>
                        <div className="space-y-2">
                          <div className="font-medium text-accent text-sm">
                            {row.feature}
                          </div>
                          <div className="text-text/80 text-sm">
                            {row.verbrauch}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Pros & Cons */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-text mb-8 text-center">
              Vor- & Nachteile
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Bedarfsausweis */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-primary mb-6 flex items-center">
                  <TrendingUp className="w-6 h-6 mr-2" />
                  Bedarfsausweis
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-green-600 mb-2 flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Vorteile
                    </h4>
                    <ul className="space-y-1 text-sm text-text/80">
                      {prosCons.bedarfs.pros.map((p, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-green-600 mr-2">•</span>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-600 mb-2 flex items-center">
                      <XCircle className="w-4 h-4 mr-2" />
                      Nachteile
                    </h4>
                    <ul className="space-y-1 text-sm text-text/80">
                      {prosCons.bedarfs.cons.map((c, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-red-600 mr-2">•</span>
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Verbrauchsausweis */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-accent mb-6 flex items-center">
                  <TrendingDown className="w-6 h-6 mr-2" />
                  Verbrauchsausweis
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-green-600 mb-2 flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Vorteile
                    </h4>
                    <ul className="space-y-1 text-sm text-text/80">
                      {prosCons.verbrauch.pros.map((p, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-green-600 mr-2">•</span>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-600 mb-2 flex items-center">
                      <XCircle className="w-4 h-4 mr-2" />
                      Nachteile
                    </h4>
                    <ul className="space-y-1 text-sm text-text/80">
                      {prosCons.verbrauch.cons.map((c, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-red-600 mr-2">•</span>
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Decision Helper */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-text mb-8 text-center">
              Welcher Ausweis passt zu mir?
            </h2>
            <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {decisionSteps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-bold text-text mb-2">{step.title}</h3>
                      <p className="text-sm text-text/70">{step.description}</p>
                    </div>
                  );
                })}
              </div>
              <div className="text-center mt-8">
                <Link
                  href="/ausweistyp"
                  className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-xl hover:bg-primary/90 transition-colors"
                >
                  Zum Ausweis-Fragebogen
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-text mb-8 text-center">
              Häufige Fragen
            </h2>
            <div className="max-w-3xl mx-auto space-y-4">
              {[
                {
                  q: "Kann ich den Ausweis selbst erstellen?",
                  a: "Nein, nur zertifizierte Energieberater dürfen gültige Energieausweise ausstellen.",
                },
                {
                  q: "Wie lange ist der Ausweis gültig?",
                  a: "Beide Ausweisarten sind 10 Jahre gültig.",
                },
                {
                  q: "Was kostet ein Energieausweis?",
                  a: "Unsere Preise starten bei 349 € inkl. MwSt. – alle Kosten transparent im Voraus.",
                },
              ].map((faq, i) => (
                <details
                  key={i}
                  className="bg-white rounded-xl shadow-md p-6 group"
                >
                  <summary className="font-semibold text-text cursor-pointer list-none flex justify-between items-center">
                    {faq.q}
                    <ChevronDown className="w-5 h-5 text-primary group-open:rotate-180 transition-transform" />
                  </summary>
                  <p className="text-text/80 mt-3">{faq.a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* CTA */}
          <CTASection
            title="Bedarfs- oder Verbrauchsausweis? Wir helfen bei der Entscheidung"
            subtitle="Kostenlose Erstberatung und maßgeschneiderte Empfehlung für Ihr Gebäude"
          />
        </div>
      </div>
    </>
  );
}

// Chevron icon for FAQ
const ChevronDown = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);