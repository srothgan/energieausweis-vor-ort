import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import ImpressumImg from "@/public/AdobeStock_579286995.webp";
import EnergieAusweisImg from "@/public/Energieausweis_vor_ort_header_neu.webp";
import FestpreisImg from "@/public/Festpreis-Energieausweis.webp";
import StrafenImg from "@/public/Strafen-Energieausweis.webp";
import VorortImg from "@/public/Bedarfsausweis_vor_Ort.webp";
import PräzisionImg from "@/public/Haftung-Energieausweis.webp";
import AblaufImg from "@/public/Ablauf-Energieausweis-vor-Ort.webp";
import AusweisTypImg from '@/public/Ausweistypen_Energieausweis.webp';
import FestpreiseImg from "@/public/Festpreise_Energieausweis.webp";
import KontaktbildImg from "@/public/Kontakt-Energieausweis-vor-Ort.webp";
import UnterlagenImg from "@/public/Energieausweis-benoetigte-Unterlagen.webp";
import Logo from "@/public/EVO_Logo_klein-600x151.png";
import Favicon from "@/public/favicon.svg";
import Pig from "@/public/Kleines-Schwein.jpg";
import DatenschutzImg from "@/public/Datenschutz-Energieausweis-vor-Ort.webp";
import { ExternalLink, Camera, User, Fingerprint } from "lucide-react";

export const metadata: Metadata = {
  title: "Impressum",
  description:
    "Impressum von Energieausweis vor Ort – Anbieterkennzeichnung, Kontaktinformationen, rechtliche Hinweise, Urheberrecht und Bildnachweise.",
  keywords:
    "Impressum, Energieausweis vor Ort, Anbieterkennzeichnung, Kontakt, Rechtliche Hinweise, Urheberrecht, Bildnachweis",
  openGraph: {
    title: "Impressum | Energieausweis vor Ort",
    description:
      "Rechtliche Informationen, Kontaktangaben und Bildnachweise von Energieausweis vor Ort.",
    url: "https://energieausweis-vor-ort.nrw/impressum",
    images: [
      {
        url: "/AdobeStock_579286995.webp",
        width: 1200,
        height: 630,
        alt: "Impressum - Energieausweis vor Ort",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Impressum | Energieausweis vor Ort",
    description:
      "Rechtliche Informationen, Kontaktangaben und Bildnachweise von Energieausweis vor Ort.",
    images: ["/AdobeStock_579286995.webp"],
  },
  alternates: {
    canonical: "https://energieausweis-vor-ort.nrw/impressum",
  },
};

const imageSources = [
  {
    id: "#57717253",
    img: Logo,
    author: "amedeoemaja",
    agency : "Depositphotos Inc.",
    link: "https://de.depositphotos.com"
  },
  {
    id: "#340036432",
    img: Favicon,
    author: "PantherMediaSeller",
    agency : "Depositphotos Inc.",
    link: "https://de.depositphotos.com"
  },
  {
    id: "#340036434",
    img: Pig,
    author: "PantherMediaSeller",
    agency : "Depositphotos Inc.",
    link: "https://de.depositphotos.com"
  },
  {
    id: "#166472159",
    img: EnergieAusweisImg,
    author: "Eisenhans",
    agency: "Adobe Stock",
    link: "https://stock.adobe.com"
  },
  {
    id: "#123456",
    img: FestpreisImg,
    author: "Max Mustermann",
    agency : "XYZ",
    link: "https://google.com"
  },
  {
    id: "#185478274",
    img: StrafenImg,
    author: "Isergey",
    agency : "Depositphotos Inc.",
    link: "https://de.depositphotos.com"
  },
  {
    id: "#79631680",
    img: VorortImg,
    author: "Oliay",
    agency : "Depositphotos Inc.",
    link: "https://de.depositphotos.com"
  },
  {
    id: "#66055569",
    img: PräzisionImg,
    author: "doomu",
    agency : "Depositphotos Inc.",
    link: "https://de.depositphotos.com"
  },
  {
    id: "#188354142",
    img: AblaufImg,
    author: "Delphotostock",
    agency: "Adobe Stock",
    link: "https://stock.adobe.com"
  },
  {
    id: "#238580072",
    img: AusweisTypImg,
    author: "Fokussiert",
    agency: "Adobe Stock",
    link: "https://stock.adobe.com"
  },
  {
    id: "#593215172",
    img: FestpreiseImg,
    author: "magele-picture",
    agency: "Adobe Stock",
    link: "https://stock.adobe.com"
  },
  {
    id: "#380413524",
    img: KontaktbildImg,
    author: "NiroDesign",
    agency : "Depositphotos Inc.",
    link: "https://de.depositphotos.com"
  },
  {
    id: "#212568908",
    img: UnterlagenImg,
    author: "sdecoret",
    agency : "Depositphotos Inc.",
    link: "https://de.depositphotos.com"
  },
  {
    id: "#579286995",
    img: ImpressumImg,
    author: "Nelos",
    agency: "Adobe Stock",
    link: "https://stock.adobe.com"
  },
  {
    id: "#abcdefg",
    img: DatenschutzImg,
    author: "Nina Mustermann",
    agency: "Adobe Stock",
    link: "https://stock.adobe.com"
  },
];

export default function Impressum() {
  return (
    <>
      {/* Hero Image */}
      <div className="relative w-full h-[200px] md:h-[300px] lg:h-[400px] overflow-hidden">
        <Image
          src={ImpressumImg}
          alt="Impressum und rechtliche Informationen - Energieausweis vor Ort"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="bg-white w-full py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          {/* Header */}
          <h1 className="text-4xl md:text-5xl font-bold text-text mb-8">
            Impressum & Rechtliche Hinweise
          </h1>

          {/* Impressum Content */}
          <div className="max-w-none text-text mb-16">
            <div className="mb-8">
              <p className="text-lg">
                <strong>Markus Naczinsky</strong>
                <br />
                Am Oberen Feld 5
                <br />
                40668 Meerbusch
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                  Kontakt
                </h2>
                <div className="ml-4 md:ml-8 text-text/80 leading-relaxed">
                  <p>
                    Telefon: 02150 79 43 80
                    <br />
                    Telefax: 02150 79 43 81
                    <br />
                    E-Mail:{" "}
                    <Link
                      href="mailto:mail@energieausweis-vor-ort.nrw"
                      className="text-primary hover:underline"
                    >
                      mail@energieausweis-vor-ort.nrw
                    </Link>
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                  Umsatzsteuer-ID
                </h2>
                <div className="ml-4 md:ml-8 text-text/80 leading-relaxed">
                  <p>
                    Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
                    DE814771274
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                  Redaktionell verantwortlich
                </h2>
                <div className="ml-4 md:ml-8 text-text/80 leading-relaxed">
                  <p>Markus Naczinsky</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                  EU-Streitschlichtung
                </h2>
                <div className="ml-4 md:ml-8 text-text/80 leading-relaxed">
                  <p>
                    Die Europäische Kommission stellt eine Plattform zur
                    Online-Streitbeilegung (OS) bereit:{" "}
                    <Link
                      href="https://ec.europa.eu/consumers/odr/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      https://ec.europa.eu/consumers/odr/
                    </Link>
                    . Unsere E-Mail-Adresse finden Sie oben im Impressum.
                  </p>
                  <p className="mt-4">
                    Wir sind nicht bereit oder verpflichtet, an
                    Streitbeilegungsverfahren vor einer
                    Verbraucherschlichtungsstelle teilzunehmen.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                  Haftung für Inhalte
                </h2>
                <div className="ml-4 md:ml-8 text-text/80 leading-relaxed">
                  <p>
                    Als Diensteanbieter sind wir gemäß § 7 Abs.1 DDG für eigene Inhalte
                    auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                  </p>
                  <p className="mt-4">
                    Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                  Haftung für Links
                </h2>
                <div className="ml-4 md:ml-8 text-text/80 leading-relaxed">
                  <p>
                    Unser Angebot enthält Links zu externen Websites Dritter, auf deren
                    Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
                    fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte
                    der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
                    der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
                  </p>
                  <p className="mt-4">
                    Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                  Urheberrecht
                </h2>
                <div className="ml-4 md:ml-8 text-text/80 leading-relaxed">
                  <p>
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
                    diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                  </p>
                  <p className="mt-4">
                    Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bildnachweis */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 md:p-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Camera className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-text">
                Bildnachweis & Urheberrecht
              </h2>
            </div>

            {/* Desktop Table */}
            <div className="hidden md:block overflow-hidden rounded-2xl shadow-xl bg-white mb-0">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-primary to-accent text-white">
                    <th className="p-6 text-left font-semibold">
                      <div className="flex items-center gap-2">
                        <Camera className="w-5 h-5" />
                        Bild
                      </div>
                    </th>
                    <th className="p-6 text-left font-semibold">
                      <div className="flex items-center gap-2">
                        <Fingerprint className="w-5 h-5" />
                        ID
                      </div>
                    </th>
                    <th className="p-6 text-left font-semibold">
                      <div className="flex items-center gap-2">
                        <User className="w-5 h-5" />
                        Autor
                      </div>
                    </th>
                    <th className="p-6 text-left font-semibold">Bildagentur</th>
                    <th className="p-6 text-center font-semibold">
                      <div className="flex items-center justify-center gap-2">
                        <ExternalLink className="w-5 h-5" />
                        Quelle
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {imageSources.map((img) => (
                    <tr key={img.id} className="border-b border-gray-100 hover:bg-gray-100 transition-colors">
                      <td className="p-6">
                        <div className="relative w-20 h-14 rounded-lg overflow-hidden shadow-md group">
                          <Image
                            src={img.img}
                            alt={img.id}
                            fill
                            className="object-contain bg-white group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      </td>
                      <td className="p-6">
                        <span className="font-medium text-text">{img.id}</span>
                      </td>
                      <td className="p-6">
                        <span className="text-text/80">{img.author}</span>
                      </td>
                      <td className="p-6">
                        <span className="text-text/80">{img.agency}</span>
                      </td>
                      <td className="p-6 text-center">
                        <Link
                          href={img.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors text-sm group"
                        >
                          <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
                          Quelle
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden space-y-6">
              {imageSources.map((img) => (
                <div
                  key={img.id}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                >
                  <div className="relative w-full h-48">
                    <Image
                      src={img.img}
                      alt={img.id}
                      fill
                      className="object-contain p-2"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="font-bold text-lg">{img.id}</h3>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <User className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-text/60 font-medium">Autor</p>
                        <p className="font-semibold text-text">{img.author}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                        <Fingerprint className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="text-sm text-text/60 font-medium">Bildagentur</p>
                        <p className="font-semibold text-text">{img.agency}</p>
                      </div>
                    </div>
                    <div className="pt-2">
                      <Link
                        href={img.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-accent text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300 group"
                      >
                        <ExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        Quelle ansehen
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}