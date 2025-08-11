"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Background from "@/public/Energieausweis_vor_ort_header_neu.webp";
import Pig from "@/public/Kleines-Schwein.jpg";
import { ArrowRight } from "lucide-react";

export default function Banner(){

  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") return;

    const priceContainer = document.getElementById('price-container');
    const priceFocus = document.getElementById('price-focus');

    if (!priceContainer || !priceFocus) {
      return;
    }

    const handleAnimation = () => {
      priceFocus.classList.add('animate-shake');
      setTimeout(() => {
        priceFocus.classList.remove('animate-shake');
      }, 4000); 
    };

    priceContainer.addEventListener('animationiteration', handleAnimation);

    // 5s delay + 1s (10% of 10s duration) = 6s
    const initialTimeout = setTimeout(handleAnimation, 6000);

    // clean
    return () => {
      priceContainer.removeEventListener('animationiteration', handleAnimation);
      clearTimeout(initialTimeout);
    };
  }, [pathname]);

  if (pathname !== "/") return null;

  return(
    <section className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
        <Image
          src={Background}
          alt="Energieausweis für Wohngebäude - Professionelle Erstellung vor Ort"
          fill
          priority
          sizes="100vw"
          fetchPriority="high"
          className="object-cover"
        />

        <div className="absolute left-2 top-8 md:left-3 md:top-16 lg:top-30 lg:left-4 animate-entrance">
          <div id="price-container" className="bg-primary w-36 h-36 md:w-42 md:h-42 lg:w-48 lg:h-48 rounded-full p-4 md:p-6 lg:p-8 text-white shadow-2xl animate-price transform -rotate-10 flex flex-col items-center justify-center">
              <div className="text-xs md:text-sm lg:text-base font-medium mb-1">
                FESTPREIS ab
              </div>
              <div id="price-focus" className="text-2xl md:text-4xl lg:text-5xl font-bold">
                349 €
              </div>
              <div className="text-xs md:text-sm lg:text-base">
                inkl. MwSt.
              </div>
            </div>
        </div>

        <div className="absolute left-6 bottom-12 md:left-22 md:bottom-16 lg:left-30 lg:bottom-24 w-32 h-32 md:w-38 md:h-38 lg:w-46 lg:h-46 rounded-full overflow-hidden shadow-lg hover:scale-120 cursor-pointer transform transition-all duration-1200 ease-out animate-entrance">
          <Image 
            src={Pig}
            alt="Sparschwein mit Geld"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 128px, (max-width: 1024px) 152px, 184px"
          />
        </div>

        <Link
        href="/ausweistyp"
        className="
        max-w-2/3 text-white
        text-center sm:text-left text-base md:text-lg p-3 md:p-4 
        absolute right-2 bottom-4 md:right-3 md:bottom-12 lg:right-4 lg:bottom-20 
        rounded-full shadow-lg bg-primary hover:bg-accent 
        flex items-center justify-center sm:justify-start gap-3 
        transform hover:scale-105 transition-transform duration-300">
          <ArrowRight size={28} className="hidden sm:block" />
          <span>Welchen Ausweis benötige ich? Jetzt kostenlos checken</span>
        </Link>      
    </section>
  )
}