import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Festpreis from "@/public/Festpreise_Energieausweis.webp";
import CTASection from "@/components/cta-section";
import { 
  Home, 
  Building, 
  Check, 
  Phone, 
  Euro, 
  Info,
  Shield,
  Clock,
  MapPin,
  Users,
  RotateCcw
} from "lucide-react";

export const metadata: Metadata = {
  title: "Festpreis",
  description: "Transparente Festpreise für Ihren Energieausweis vor Ort. Ab 349€ inkl. MwSt. für Verbrauchs- und Bedarfsausweis. All-inclusive Service ohne versteckte Kosten. Kurzfristige Termine verfügbar.",
  keywords: "Energieausweis Festpreis, Energieausweis Kosten, Bedarfsausweis Preis, Verbrauchsausweis Preis, Energieausweis günstig, transparente Preise",
  
  openGraph: {
    title: "Festpreis | Energieausweis vor Ort",
    description: "Transparente Festpreise für Ihren Energieausweis vor Ort. Ab 349€ inkl. MwSt. All-inclusive Service ohne versteckte Kosten.",
    url: "https://energieausweis-vor-ort.nrw/festpreis",
    images: [
      {
        url: "/Festpreise_Energieausweis.webp",
        width: 1200,
        height: 630,
        alt: "Festpreise für Energieausweise - transparente Kosten",
      },
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Festpreis | Energieausweis vor Ort",
    description: "Transparente Festpreise für Ihren Energieausweis vor Ort. Ab 349€ inkl. MwSt. All-inclusive Service ohne versteckte Kosten.",
    images: ["/Festpreise_Energieausweis.webp"],
  },
  
  alternates: {
    canonical: "https://energieausweis-vor-ort.nrw/festpreis",
  },
};


const pricingData = [
  {
    type: "VERBRAUCHS-AUSWEIS",
    units: "bis 4",
    price: "349",
    icon: Home,
    color: "bg-primary",
    textColor: "text-white"
  },
  {
    type: "BEDARFS-AUSWEIS", 
    units: "bis 4",
    price: "349",
    icon: Home,
    color: "bg-accent",
    textColor: "text-white"
  },
  {
    type: "VERBRAUCHS-AUSWEIS",
    units: "ab 5", 
    price: "399",
    icon: Building,
    color: "bg-primary",
    textColor: "text-white"
  },
  {
    type: "BEDARFS-AUSWEIS",
    units: "ab 5",
    price: "399", 
    icon: Building,
    color: "bg-accent",
    textColor: "text-white"
  }
];

const serviceFeatures = [
  {
    label: "ANZAHL DER WOHNUNGEN",
    key: "units"
  },
  {
    label: "ANTEIL GEWERBEFLÄCHE",
    value: "bis 10%",
    icon: Info
  },
  {
    label: "FAIRER FESTPREIS",
    icon: Euro
  },
  {
    label: "KURZFRISTIGE TERMINE", 
    icon: Clock
  },
  {
    label: "AN- UND ABFAHRT",
    icon: MapPin
  },
  {
    label: "DATENAUFNAHME VOR ORT",
    icon: Users
  },
  {
    label: "ERSTELLUNG ÜBER KOOPERATIONS-PARTNER",
    icon: Shield
  },
  {
    label: "GÜLTIGKEIT JAHRE",
    value: "10",
    icon: RotateCcw
  }
];

export default function FestpreisPage() {
  return (
    <>
      {/* Banner Image */}
      <div className="relative w-full h-[200px] md:h-[300px] lg:h-[400px] overflow-hidden">
        <Image
          src={Festpreis}
          alt="Festpreise für Energieausweise"
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
              Alles zum{" "}
              <span className="text-primary">Festpreis</span>
            </h1>
            <p className="text-lg md:text-xl text-text/80 max-w-4xl mx-auto leading-relaxed">
              <strong>ALL-INCLUSIVE-SERVICE:</strong> Von der Datenerhebung vor Ort über die Prüfung der erhobenen Daten bis zur abschließenden Erstellung eines zu Ihrer Immobilie passenden Energieausweises durch einen unserer dazu ausstellungsberechtigten Kooperationspartner. Alles aus einer Hand – zum günstigen Festpreis, ohne versteckte Kosten!
            </p>
          </div>

          {/* Pricing Table - Desktop */}
          <div className="mb-12 md:mb-16 hidden md:block">
            <div className="overflow-x-auto rounded-2xl shadow-xl">
              <table className="w-full min-w-[800px]">
                {/* Header Row */}
                <thead>
                  <tr>
                    <th className="bg-gray-100 p-4 text-left font-semibold text-text"></th>
                    {pricingData.map((item, index) => {
                      const IconComponent = item.icon;
                      return (
                        <th key={index} className={`${item.color} p-6 text-center ${item.textColor}`}>
                          <div className="flex flex-col items-center space-y-3">
                            <div className="font-bold text-sm md:text-base">
                              {item.type}
                            </div>
                            <IconComponent className="w-8 h-8 md:w-12 md:h-12" />
                            <div className="font-bold text-xl md:text-2xl">
                              {item.price} € inkl. MwSt.
                            </div>
                          </div>
                        </th>
                      );
                    })}
                  </tr>
                </thead>

                <tbody>
                  {serviceFeatures.map((feature, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="p-4 font-medium text-text border-r border-gray-200">
                        <div className="flex items-center gap-2">
                          {feature.icon && <feature.icon className="w-4 h-4 text-primary" />}
                          {feature.label}
                        </div>
                      </td>
                      {pricingData.map((_, colIndex) => (
                        <td key={colIndex} className="p-4 text-center border-r border-gray-200 last:border-r-0">
                          {feature.key === "units" ? (
                            <span className="font-semibold text-primary">
                              {pricingData[colIndex].units}
                            </span>
                          ) : feature.value ? (
                            <span className="font-semibold text-primary">
                              {feature.value}
                            </span>
                          ) : (
                            <Check className="w-6 h-6 text-green-600 mx-auto" />
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}

                  {/* Phone Number Row */}
                  <tr className="bg-accent/10">
                    <td className="p-4 font-bold text-text border-r border-gray-200">
                      ENERGIEBERATUNG
                    </td>
                    {pricingData.map((_, colIndex) => (
                      <td key={colIndex} className="p-4 text-center border-r border-gray-200 last:border-r-0">
                        <Link 
                          href="tel:02150794380" 
                          className="inline-flex items-center gap-2 bg-primary text-white px-3 py-2 rounded-lg font-medium hover:bg-accent transition-colors text-sm"
                        >
                          <Phone className="w-4 h-4" />
                          02150794380
                        </Link>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Pricing Cards - Mobile */}
          <div className="mb-12 md:mb-16 md:hidden">
            <div className="space-y-6">
              {pricingData.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="rounded-2xl shadow-xl overflow-hidden">
                    {/* Card Header */}
                    <div className={`${item.color} p-6 text-center ${item.textColor}`}>
                      <div className="flex flex-col items-center space-y-3">
                        <div className="font-bold text-base">
                          {item.type}
                        </div>
                        <IconComponent className="w-12 h-12" />
                        <div className="font-bold text-2xl">
                          {item.price} € inkl. MwSt.
                        </div>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="bg-white">
                      {serviceFeatures.map((feature, featureIndex) => (
                        <div key={featureIndex} className={`p-4 border-b border-gray-200 last:border-b-0 ${featureIndex % 2 === 0 ? "bg-gray-50" : "bg-white"}`}>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              {feature.icon && <feature.icon className="w-4 h-4 text-primary" />}
                              <span className="font-medium text-text text-sm">
                                {feature.label}
                              </span>
                            </div>
                            <div className="flex-shrink-0">
                              {feature.key === "units" ? (
                                <span className="font-semibold text-primary">
                                  {item.units}
                                </span>
                              ) : feature.value ? (
                                <span className="font-semibold text-primary">
                                  {feature.value}
                                </span>
                              ) : (
                                <Check className="w-5 h-5 text-green-600" />
                              )}
                            </div>
                          </div>
                        </div>
                      ))}

                      {/* Phone Number Row */}
                      <div className="p-4 bg-accent/10">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-text text-sm">
                            ENERGIEBERATUNG
                          </span>
                          <Link 
                            href="tel:02150794380" 
                            className="inline-flex items-center gap-2 bg-primary text-white px-3 py-2 rounded-lg font-medium hover:bg-accent transition-colors text-sm"
                          >
                            <Phone className="w-4 h-4" />
                            02150794380
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Warning Section */}
          <div className="max-w-3xl mx-auto mb-12">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-400 rounded-lg p-6 md:p-8">
              <div className="flex items-start gap-4">
                <Info className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-amber-800 mb-2">
                    Wichtiger Hinweis
                  </h3>
                  <p className="text-amber-700 leading-relaxed">
                    Bitte beachten Sie: Energieausweise werden nur für komplette Gebäude und nicht für einzelne Wohnungen erstellt.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <CTASection 
            title="Transparente Preise, erstklassiger Service"
            subtitle="Sichern Sie sich jetzt Ihren Energieausweis zum Festpreis"
          />
        </div>
      </div>
    </>
  );
}