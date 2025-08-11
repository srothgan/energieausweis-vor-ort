import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Kontaktformular from "@/components/contact";
import Kontaktbild from "@/public/Kontakt-Energieausweis-vor-Ort.webp";
import Markus from "@/public/Markus-Naczinsky-Energieausweis-Experte-400x480.webp";
import { Phone, Smartphone, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Kontaktieren Sie uns für Ihren Energieausweis vor Ort. Persönliche Beratung durch Experte Markus Naczinsky. Tel: 02150/794380. Kurzfristige Termine möglich. Montag-Freitag 8-18 Uhr.",
  keywords: "Kontakt Energieausweis, Energieausweis Beratung, Markus Naczinsky, Energieausweis Experte, Vor-Ort-Termin vereinbaren, Energieberatung Kontakt",
  
  openGraph: {
    title: "Kontakt | Energieausweis vor Ort",
    description: "Kontaktieren Sie uns für Ihren Energieausweis vor Ort. Persönliche Beratung durch Experte Markus Naczinsky. Kurzfristige Termine möglich.",
    url: "https://energieausweis-vor-ort.nrw/kontakt",
    images: [
      {
        url: "/Kontakt-Energieausweis-vor-Ort.webp",
        width: 1200,
        height: 630,
        alt: "Kontakt - Energieausweis vor Ort Beratung",
      },
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Kontakt | Energieausweis vor Ort",
    description: "Kontaktieren Sie uns für Ihren Energieausweis vor Ort. Persönliche Beratung durch Experte Markus Naczinsky. Kurzfristige Termine möglich.",
    images: ["/Kontakt-Energieausweis-vor-Ort.webp"],
  },
  
  alternates: {
    canonical: "https://energieausweis-vor-ort.nrw/kontakt",
  },
};

export default function Kontakt(){
    return(
        <>
            {/* Banner Image */}
            <div className="relative w-full h-[200px] md:h-[300px] lg:h-[400px] overflow-hidden">
                <Image
                    src={Kontaktbild}
                    alt="Kontakt - Energieausweis vor Ort"
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
                            Sie haben{" "}
                            <span className="text-primary">Fragen?</span>
                        </h1>
                        <p className="text-lg md:text-xl text-text/80 max-w-4xl mx-auto leading-relaxed">
                            <strong>Ich helfe Ihnen gerne weiter! Jederzeit und persönlich</strong>
                        </p>
                    </div>

                    {/* Content Grid */}
                    <div className="grid lg:grid-cols-3 gap-4 lg:gap-8 items-stretch">
                        {/* Contact Form */}
                        <div className="order-2 lg:order-1 lg:col-span-2">
                            <Kontaktformular />
                        </div>

                        {/* Personal Card */}
                        <div className="order-1 lg:order-2 lg:col-span-1">
                            <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-6 md:p-8 shadow-xl h-full">
                                <div className="text-center mb-6">
                                    <div className="relative mx-auto mb-6 w-48 h-60 md:w-56 md:h-72 overflow-hidden rounded-2xl shadow-lg">
                                        <Image
                                            src={Markus}
                                            alt="Markus Naczinsky - Energieausweis Experte"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-text mb-2">
                                        Markus Naczinsky
                                    </h3>
                                    <p className="text-lg text-primary font-semibold mb-6">
                                        Ihr Energieausweis-Experte
                                    </p>
                                </div>

                                {/* Contact Information */}
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                                        <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                                            <Phone className="w-6 h-6 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm text-text/70 font-medium">Telefon</p>
                                            <Link 
                                                href="tel:02150794380"
                                                className="text-lg font-semibold text-primary hover:text-primary/80 transition-colors"
                                            >
                                                02150 / 79 43 80
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                                        <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                                            <Smartphone className="w-6 h-6 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm text-text/70 font-medium">Mobil</p>
                                            <Link 
                                                href="tel:01751234567"
                                                className="text-lg font-semibold text-primary hover:text-primary/80 transition-colors"
                                            >
                                                0175 / 123 45 67
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                                        <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                                            <Mail className="w-6 h-6 text-white" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm text-text/70 font-medium">E-Mail</p>
                                            <Link 
                                                href="mailto:mail@energieausweis-vor-ort.nrw"
                                                className="text-sm lg:text-base font-semibold text-primary hover:text-primary/80 transition-colors break-all"
                                            >
                                                mail@energieausweis-vor-ort.nrw
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                {/* Availability Note */}
                                <div className="mt-6 p-4 bg-white rounded-lg border-l-4 border-primary">
                                    <p className="text-sm text-text/80 leading-relaxed">
                                        <strong>Verfügbarkeit:</strong> Montag bis Freitag 8:00 - 18:00 Uhr, 
                                        Samstag nach Vereinbarung. Kurzfristige Termine möglich!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}