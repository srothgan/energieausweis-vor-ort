import type { Metadata } from "next";
import Image from "next/image";
import Ablauf from "@/public/Ablauf-Energieausweis-vor-Ort.webp";
import Link from "next/link";
import { Phone, Calendar, FileText, Home, Award } from "lucide-react";
import CTASection from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Ablauf",
  description: "Erfahren Sie, wie der Ablauf für Ihren Energieausweis vor Ort funktioniert. Von der Kontaktaufnahme bis zur Ausstellung in 5 einfachen Schritten. Kurzfristige Termine möglich.",
  keywords: "Ablauf Energieausweis, Energieausweis Prozess, Vor-Ort-Termin, Energieausweis Schritte, Begehung, Unterlagen",
  
  openGraph: {
    title: "Ablauf | Energieausweis vor Ort",
    description: "Erfahren Sie, wie der Ablauf für Ihren Energieausweis vor Ort funktioniert. Von der Kontaktaufnahme bis zur Ausstellung in 5 einfachen Schritten.",
    url: "https://energieausweis-vor-ort.nrw/ablauf",
    images: [
      {
        url: "/Ablauf-Energieausweis-vor-Ort.webp",
        width: 1200,
        height: 630,
        alt: "Ablauf Energieausweis vor Ort - 5 Schritte zum Energieausweis",
      },
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Ablauf | Energieausweis vor Ort",
    description: "Erfahren Sie, wie der Ablauf für Ihren Energieausweis vor Ort funktioniert. Von der Kontaktaufnahme bis zur Ausstellung in 5 einfachen Schritten.",
    images: ["/Ablauf-Energieausweis-vor-Ort.webp"],
  },
  
  alternates: {
    canonical: "https://energieausweis-vor-ort.nrw/ablauf",
  },
};

const steps = [
  {
    id: 1,
    icon: Phone,
    title: "KONTAKT-AUFNAHME",
    description: "Gerne stehen wir Ihnen telefonisch unter oder direkt über unser zur Verfügung.",
    phoneNumber: "02150 79 43 80",
    contactLink: "/kontakt"
  },
  {
    id: 2,
    icon: Calendar,
    title: "TERMIN-ABSPRACHE",
    description: "Wir vereinbaren einen kurzfristigen Termin und kommen zu Ihnen. Selbstverständlich vollständig geimpft und unter Einhaltung aller notwendigen Hygiene-Regeln."
  },
  {
    id: 3,
    icon: FileText,
    title: "UNTERLAGEN-CHECK",
    description: "Um den Vor-Ort-Termin optimal vorbereiten zu können, wäre es hilfreich, wenn Sie uns vorab noch einige zukommen lassen können oder diese spätestens bei der Vor-Ort-Begehung bereithalten.",
    documentsLink: "/unterlagen"
  },
  {
    id: 4,
    icon: Home,
    title: "VOR-ORT-BESICHTIGUNG",
    description: "Unser Objektbesichtigter fertigt aussagekräftige Innen- und Außenfotos an und nimmt alle relevanten Daten Ihrer Immobilie auf. Mit Unterschrift des Erfassungsbogens bestätigen Sie die Korrektheit der aufgenommenen Daten."
  },
  {
    id: 5,
    icon: Award,
    title: "PRÜFUNG & AUSSTELLUNG",
    description: "Unsere zertifizierten Kooperationspartner prüfen die von uns vor Ort erfassten Gebäudedaten und erstellen nach deren Verifizierung innerhalb kurzer Zeit Ihren Energieausweis. Sie erhalten diesen kostenlos per E-Mail und auf Wunsch – gegen einen Aufpreis – ausgedruckt per Post."
  }
];

export default function AblaufPage() {
  return (
    <>
    <div className="relative w-full h-[200px] md:h-[300px] lg:h-[400px] overflow-hidden">
        <Image
          src={Ablauf}
          alt="Symbolbild für den Ablauf eines Energieausweises"
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
            Ablauf{" "}
            <span className="text-primary">Energieausweis vor Ort</span>
          </h1>
          <p className="text-lg md:text-xl text-text/80 max-w-3xl mx-auto">
            In 5 einfachen Schritten zu Ihrem Energieausweis
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-12 md:space-y-18">
          {steps.map((step) => {
            const IconComponent = step.icon;
            
            return (
              <div 
                key={step.id}
                className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12"
              >
                {/* Step Number and Icon */}
                <div className="flex-shrink-0 relative">
                  <div className="w-32 h-32 md:w-40 md:h-40 bg-primary rounded-full flex items-center justify-center shadow-xl">
                    <IconComponent className="w-12 h-12 md:w-16 md:h-16 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-accent rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl md:text-2xl lg:text-3xl">
                      {step.id}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center lg:text-left">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text mb-4">
                    {step.title}
                  </h2>
                  <div className="text-lg md:text-xl text-text/80 leading-relaxed">
                    {step.id === 1 ? (
                      <p>
                        Gerne stehen wir Ihnen telefonisch unter{" "}
                        <Link 
                          href={`tel:${step.phoneNumber?.replace(/\s/g, '')}`}
                          className="text-primary font-semibold hover:text-primary/80 transition-colors"
                        >
                          {step.phoneNumber}
                        </Link>{" "}
                        oder direkt über unser{" "}
                        <Link 
                          href={step.contactLink || "/kontakt"}
                          className="text-primary font-semibold hover:text-primary/80 transition-colors"
                        >
                          KONTAKTFORMULAR
                        </Link>{" "}
                        zur Verfügung.
                      </p>
                    ) : step.id === 3 ? (
                      <p>
                        Um den Vor-Ort-Termin optimal vorbereiten zu können, wäre es hilfreich, wenn Sie uns vorab noch einige{" "}
                        <Link 
                          href={step.documentsLink || "/unterlagen"}
                          className="text-primary font-semibold hover:text-primary/80 transition-colors"
                        >
                          UNTERLAGEN
                        </Link>{" "}
                        zukommen lassen können oder diese spätestens bei der Vor-Ort-Begehung bereithalten.
                      </p>
                    ) : (
                      <p>{step.description}</p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 md:mt-20">
          <CTASection 
            title="Bereit für Ihren Energieausweis?"
            subtitle="Starten Sie noch heute mit der Kontaktaufnahme"
          />
        </div>
      </div>
    </div>

    </>

  );
}
