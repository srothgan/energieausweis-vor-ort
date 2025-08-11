import { Calendar, MapPin, Euro } from "lucide-react";

interface FeatureCard {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  bgColor: string;
  hoverColor: string;
}

const features: FeatureCard[] = [
  {
    icon: Calendar,
    title: "KURZFRISTIGE\nTERMINE",
    bgColor: "bg-primary/80",
    hoverColor: "hover:bg-accent"
  },
  {
    icon: MapPin,
    title: "Erfassung des\nObjektes VOR ORT",
    bgColor: "bg-accent/80",
    hoverColor: "hover:bg-primary"
  },
  {
    icon: Euro,
    title: "GÜNSTIGER\nFESTPREIS",
    bgColor: "bg-primary/80",
    hoverColor: "hover:bg-accent"
  }
];

export default function FeatureCards() {
  return (
    <section className="bg-gray-50 py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-4">
            Ihre Vorteile mit{" "}
            <span className="text-primary">Energieausweis Vor Ort</span>
          </h2>
          <p className="text-lg text-text/70 max-w-2xl mx-auto">
            Professionelle Energieausweise mit persönlichem Service direkt bei Ihnen vor Ort
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`group ${feature.bgColor} backdrop-blur-sm rounded-xl p-6 md:p-8 border border-gray-100 transition-all duration-300 hover:shadow-xl ${feature.hoverColor} hover:border-opacity-20 transform hover:-translate-y-2 hover:scale-105`}
              >
                <div className="h-full flex flex-col items-center justify-center text-center gap-4">
                  <div className="p-3 rounded-full bg-white/20 transition-transform group-hover:scale-110 group-hover:rotate-3">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg uppercase tracking-wider leading-tight whitespace-pre-line">
                      {feature.title}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
