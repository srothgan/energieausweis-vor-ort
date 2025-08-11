import Link from "next/link";
import { Phone, FileText } from "lucide-react";

interface CTASectionProps {
  title: string;
  subtitle: string;
}

export default function CTASection({ title, subtitle }: CTASectionProps) {
  return (
    <div className="text-center">
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 md:p-12">
        <h3 className="text-2xl md:text-3xl font-bold text-text mb-4">
          {title}
        </h3>
        <p className="text-lg text-text/80 mb-8">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="tel:02150794380"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-medium rounded-lg transition-all duration-300 hover:bg-primary/90 shadow-lg transform hover:-translate-y-1"
          >
            <Phone className="w-5 h-5 mr-2" />
            02150 79 43 80
          </Link>
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center px-6 py-3 bg-accent text-white font-medium rounded-lg transition-all duration-300 hover:bg-accent/90 shadow-lg transform hover:-translate-y-1"
          >
            <FileText className="w-5 h-5 mr-2" />
            Kontaktformular
          </Link>
        </div>
      </div>
    </div>
  );
}
