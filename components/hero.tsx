import Image from "next/image";
import Link from "next/link";
import Markus from "@/public/Markus-Naczinsky-Energieausweis-Experte-400x480.webp";
import WaveBackground from "./wave-background";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <div className="bg-white w-full py-16 md:py-20 lg:py-24 relative overflow-hidden">
      {/* Wave Background */}
      <WaveBackground />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          {/* Hero Content */}
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text leading-tight animate-fadeIn">
              Energieausweis{" "}
              <span className="text-primary">Vor Ort!</span>
            </h1>

            <div className="space-y-4">
              <div className="flex items-center gap-2 transition-transform hover:translate-x-2 w-fit">
                <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-lg md:text-xl font-medium text-text">
                  Verbrauchsausweis
                </p>
              </div>

              <div className="flex items-center gap-2 transition-transform hover:translate-x-2 w-fit">
                <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-lg md:text-xl font-medium text-text">
                  Bedarfsausweis
                </p>
              </div>

              <div className="flex items-center gap-2 transition-transform hover:translate-x-2 w-fit">
                <div className="h-10 w-10 rounded-full bg-accent flex items-center justify-center text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <p className="text-lg md:text-xl font-medium text-text">
                  Jahrelange Erfahrung mit Immobilien
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Link
                href="/festpreis"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-medium rounded-lg transition-all duration-300 hover:bg-primary/90 shadow-lg transform hover:-translate-y-1"
              >
                Festpreise ansehen
                <ArrowRight size={28} className="pl-2"/>
              </Link>

              <Link
                href="tel:+491234567890"
                className="inline-flex items-center justify-center px-6 py-3 bg-accent text-white font-medium rounded-lg transition-all duration-300 hover:bg-accent/90 shadow-lg transform hover:-translate-y-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Telefonisch anfragen
              </Link>
            </div>
          </div>

          {/* Expert Card */}
          <div className="w-full md:w-auto flex-shrink-0">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 max-w-xs mx-auto px-4 pt-4">
              <div className="relative h-80 w-64 mx-auto">
                <Image
                  src={Markus}
                  alt="Markus Naczinsky - Energieausweis Experte"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-t-lg"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 320px, 256px"
                  fetchPriority="high"
                />
              </div>
              <div className="p-4 text-center bg-gradient-to-r from-primary/10 to-accent/10 -mx-4">
                <h3 className="font-bold text-lg text-text">
                  Markus Naczinsky
                </h3>
                <p className="text-text/80">Energieausweis-Experte</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
