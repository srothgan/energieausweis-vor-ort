import Image from "next/image";
import DatenschutzImg from "@/public/Datenschutz-Energieausweis-vor-Ort.webp";
import Link from "next/link";
import type { Metadata } from "next";

const LAST_UPDATED = new Date("2025-08-11T14:10:00+02:00");

function formatDeDate(d: Date) {
  return new Intl.DateTimeFormat("de-DE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(d);
}

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description:
    "Datenschutzerklärung von Energieausweis vor Ort – Informationen zur Erhebung, Verarbeitung und Nutzung personenbezogener Daten, Ihren Rechten sowie zu eingesetzten Analyse- und Tracking-Tools.",
  keywords:
    "Datenschutzerklärung, Datenschutz, Energieausweis vor Ort, personenbezogene Daten, DSGVO, Analyse-Tools, Tracking, Cookies, Vercel Analytics, Rechte der Betroffenen",
  
  openGraph: {
    type: "article",
    title: "Datenschutzerklärung | Energieausweis vor Ort",
    description:
      "Erfahren Sie, wie Energieausweis vor Ort mit Ihren personenbezogenen Daten umgeht. Details zu Datenerhebung, Verarbeitung, Analyse-Tools und Ihren Rechten gemäß DSGVO.",
    url: "https://energieausweis-vor-ort.nrw/datenschutzerklaerung",
    modifiedTime: LAST_UPDATED.toISOString(),
    images: [
      {
        url: "/Datenschutz-Energieausweis-vor-Ort.webp",
        width: 1200,
        height: 630,
        alt: "Datenschutzerklärung - Energieausweis vor Ort",
      },
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Datenschutzerklärung | Energieausweis vor Ort",
    description:
      "Informationen zum Datenschutz bei Energieausweis vor Ort – Datenerhebung, Verarbeitung, Analyse-Tools und Ihre Rechte gemäß DSGVO.",
    images: ["/Datenschutz-Energieausweis-vor-Ort.webp"],
  },
  
  alternates: {
    canonical: "https://energieausweis-vor-ort.nrw/datenschutzerklaerung",
  },
};

export default function Datenschutz() {

    return (
        <>
            {/* Banner Image */}
            <div className="relative w-full h-[200px] md:h-[300px] lg:h-[400px] overflow-hidden">
                <Image
                    src={DatenschutzImg}
                    alt="Datenschutzerklärung"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover"
                />
            </div>

            <div className="bg-white w-full py-16 md:py-20 lg:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <h1 className="text-4xl md:text-5xl font-bold text-text mb-2">
                        Datenschutzerklärung
                    </h1>
                    <p className="text-sm text-text/60 mb-12">
                        Stand: {formatDeDate(LAST_UPDATED)}
                    </p>

                    <div className="max-w-none text-text space-y-16">
                        {/* 1. Datenschutz auf einen Blick */}
                        <section id="ueberblick">
                            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                                1. Datenschutz auf einen Blick
                            </h2>

                            <div className="ml-4 md:ml-8 text-text/80 leading-relaxed space-y-8">
                                {/* Allgemeine Hinweise */}
                                <div>
                                    <h3 className="text-xl md:text-2xl text-primary font-semibold mb-3">
                                        Allgemeine Hinweise
                                    </h3>
                                    <p>
                                        Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
                                    </p>
                                </div>

                                {/* Datenerfassung */}
                                <div>
                                    <h3 className="text-xl md:text-2xl text-primary font-semibold mb-3">
                                        Datenerfassung auf dieser Website
                                    </h3>

                                    <p className="font-bold mb-2">
                                        Wer ist verantwortlich für die Datenerfassung auf dieser Website?
                                    </p>
                                    <p>
                                        Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle“ in dieser Datenschutzerklärung entnehmen.
                                    </p>

                                    <p className="font-bold mt-6 mb-2">
                                        Wie erfassen wir Ihre Daten?
                                    </p>
                                    <p>
                                        Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
                                    </p>
                                    <p>
                                        Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
                                    </p>

                                    <p className="font-bold mt-6 mb-2">
                                        Wofür nutzen wir Ihre Daten?
                                    </p>
                                    <p>
                                        Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
                                    </p>

                                    <p className="font-bold mt-6 mb-2">
                                        Welche Rechte haben Sie bezüglich Ihrer Daten?
                                    </p>
                                    <p>
                                        Sie haben jederzeit das Recht, unentgeltlich Auskunft über  Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
                                    </p>
                                    <p>
                                        Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.
                                    </p>
                                </div>

                                {/* Analyse-Tools */}
                                <div>
                                    <h3 className="text-xl md:text-2xl text-primary font-semibold mb-3">
                                        Analyse-Tools und Tools von Drittanbietern
                                    </h3>
                                    <p>
                                        Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor allem mit sogenannten Analyseprogrammen.
                                    </p>
                                    <p>
                                        Detaillierte Informationen zu diesen Analyseprogrammen finden Sie in der folgenden Datenschutzerklärung.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* 2. Hosting */}
                        <section id="hosting">
                            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                                2. Hosting
                            </h2>
                            <div className="ml-4 md:ml-8 text-text/80 leading-relaxed space-y-8">
                                <div>
                                    <h3 className="text-xl md:text-2xl text-primary font-semibold">
                                        Externes Hosting bei Vercel
                                    </h3>
                                    <p>
                                        Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
                                    </p>
                                    <p>
                                        Diese Website wird bei Vercel gehostet. Anbieter ist die Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA. Wenn Sie unsere Website besuchen, erfasst Vercel verschiedene Logfiles inklusive Ihrer IP-Adressen.
                                    </p>
                                    <p className="mt-4">
                                        Die Verwendung von Vercel erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer möglichst sicheren,schnellen und zuverlässigen Darstellung unserer Website. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne des TDDDG umfasst. Die Einwilligung ist jederzeit widerrufbar.
                                    </p>
                                    <p className="mt-4">
                                        Wir haben mit Vercel einen Vertrag zur Auftragsverarbeitung (AVV) bzw. ein Data Processing Addendum (DPA) abgeschlossen. Dieser Vertrag stellt sicher, dass Vercel die Daten unserer Websitebesucher nur nach unseren Weisungen und unter Einhaltung der DSGVO verarbeitet. Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gestützt. Details entnehmen Sie der Datenschutzerklärung von Vercel:{" "}
                                        <Link
                                            href="https://vercel.com/legal/privacy-policy"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="underline hover:text-primary"
                                        >
                                            https://vercel.com/legal/privacy-policy
                                        </Link>
                                    </p>
                                    <p className="mt-4">
                                        Soweit eine Übermittlung in Drittstaaten (insb. USA) erfolgt, stützen wir diese auf die EU-Standardvertragsklauseln. Soweit der Anbieter nach dem EU–US Data Privacy Framework zertifiziert ist, erfolgt die Übermittlung zudem auf Grundlage des hierzu ergangenen Angemessenheitsbeschlusses. Details: <Link
                                            href="https://vercel.com/legal/dpa"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="underline hover:text-primary"
                                        >https://vercel.com/legal/dpa</Link>.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl md:text-2xl text-primary font-semibold">
                                        Protokoll- und Logspeicherung bei Vercel
                                    </h3>
                                    <p>
                                    Build-Logs sind mit Deployments verknüpft und stehen so lange zur
                                    Verfügung, wie das jeweilige Deployment vorhanden ist. Optional kann
                                    eine Aufbewahrungsrichtlinie (Deployment Retention Policy) in den
                                    Projekteinstellungen konfiguriert werden. Details:{" "}
                                    <Link
                                        href="https://vercel.com/docs/deployment-retention"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="underline hover:text-primary"
                                    >
                                        https://vercel.com/docs/deployment-retention
                                    </Link>
                                    .
                                    </p>
                                <p className="mt-4">
                                    Runtime-Logs (u. a. Serverless-/Edge Functions, Middleware) werden je nach Vercel-Plan im Dashboard vorgehalten – Hobby: 1 Stunde, Pro: 1 Tag, Enterprise: 3 Tage. Für weitergehende Analyse können Logs gefiltert und exportiert werden. Referenz:{" "}
                                    <Link
                                        href="https://vercel.com/pricing"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="underline hover:text-primary"
                                    >
                                        https://vercel.com/pricing
                                    </Link>
                                    .
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* 3. Allgemeine Hinweise */}
                        <section id="allgemein">
                            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                                3. Allgemeine Hinweise und Pflichtinformationen
                            </h2>

                            <div className="ml-4 md:ml-8 text-text/80 leading-relaxed space-y-8">
                                {/* Datenschutz */}
                                <div>
                                    <h3 className="text-xl md:text-2xl text-primary font-semibold mb-3">
                                        Datenschutz
                                    </h3>
                                    <p className="mt-4">
                                        Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                                    </p>
                                    <p className="mt-4">
                                        Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
                                    </p>
                                    <p className="mt-4">
                                        Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
                                    </p>
                                </div>

                                {/* Hinweis zur verantwortlichen Stelle */}
                                <div>
                                    <h3 className="text-xl md:text-2xl text-primary font-semibold mb-3">
                                        Hinweis zur verantwortlichen Stelle
                                    </h3>
                                    <p>
                                        Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
                                    </p>
                                    <p className="my-2">
                                        <Link 
                                            href="https://maps.app.goo.gl/q6SFMpqhJWMfNspL9"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="underline hover:text-primary">
                                            Am Oberen Feld 5 <br/>
                                            40668 Meerbusch <br/>
                                            NRW, Deutschland
                                        </Link>
                                    </p>

                                    <p className="my-2">
                                        Telefon: <Link 
                                            href="tel:02150794380"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="underline hover:text-primary">
                                            02150794380
                                        </Link>
                                        <br/>
                                        E-Mail: <Link 
                                            href="mailto:mail@energieausweis-vor-ort.nrw"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="underline hover:text-primary">
                                            mail@energieausweis-vor-ort.nrw
                                        </Link>
                                    </p>
                                    <p>
                                        Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
                                    </p>
                                </div>

                                {/* Links zu externen Websites */}
                                <div>
                                    <h3 className="text-xl md:text-2xl text-primary font-semibold mb-3">
                                        Links zu externen Websites
                                    </h3>
                                    <p className="mb-4">
                                        Unsere Website kann Links zu externen Websites Dritter enthalten, auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Eine fortwährende inhaltliche Kontrolle der verlinkten Seiten ist ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen. Bitte beachten Sie, dass für die auf externen Websites erhobenen Daten die jeweiligen Datenschutzbestimmungen des Drittanbieters gelten.
                                    </p>
                                </div>

                                {/* Speicherdauer */}
                                <div>
                                    <h3 className="text-xl md:text-2xl text-primary font-semibold mb-3">
                                        Speicherdauer
                                    </h3>
                                    <p>
                                        Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.
                                    </p>
                                </div>

                                {/* Rechtsgrundlage */}
                                <div>
                                    <h3 className="text-xl md:text-2xl text-primary font-semibold mb-3">
                                        Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser Website
                                    </h3>
                                    <p>
                                        Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Im Falle einer ausdrücklichen Einwilligung in die Übertragung personenbezogener Daten in Drittstaaten erfolgt die Datenverarbeitung außerdem auf Grundlage von Art. 49 Abs. 1 lit. a DSGVO. Sofern Sie in die Speicherung von Cookies oder in den Zugriff auf Informationen in Ihr Endgerät (z. B. via Device-Fingerprinting) eingewilligt haben, erfolgt die Datenverarbeitung zusätzlich auf Grundlage von § 25 Abs. 1 TDDDG. Die Einwilligung ist jederzeit widerrufbar. Sind Ihre Daten zur Vertragserfüllung oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, verarbeiten wir Ihre Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir Ihre Daten, sofern diese zur Erfüllung einer rechtlichen Verpflichtung erforderlich sind auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO. Die Datenverarbeitung kann ferner auf Grundlage unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO erfolgen. Über die jeweils im Einzelfall einschlägigen Rechtsgrundlagen wird in den folgenden Absätzen dieser Datenschutzerklärung informiert.
                                    </p>
                                </div>

                                {/* Datenweitergabe */}
                                <div>
                                    <h3 className="text-xl md:text-2xl text-primary font-semibold mb-3">
                                        Hinweis zur Datenweitergabe in die USA und sonstige Drittstaaten
                                    </h3>
                                    <p>
                                        Wir verwenden unter anderem Tools von Unternehmen mit Sitz in den USA oder sonstigen datenschutzrechtlich nicht sicheren Drittstaaten. Wenn diese Tools aktiv sind, können Ihre personenbezogene Daten in diese Drittstaaten übertragen und dort verarbeitet werden. Wir weisen darauf hin, dass in diesen Ländern kein mit der EU vergleichbares Datenschutzniveau garantiert werden kann. Beispielsweise sind US-Unternehmen dazu verpflichtet, personenbezogene Daten an Sicherheitsbehörden herauszugeben, ohne dass Sie als Betroffener hiergegen gerichtlich vorgehen könnten. Es kann daher nicht ausgeschlossen werden, dass US-Behörden (z. B. Geheimdienste) Ihre auf US-Servern befindlichen Daten zu Überwachungszwecken verarbeiten, auswerten und dauerhaft speichern. Wir haben auf diese Verarbeitungstätigkeiten keinen Einfluss.
                                    </p>
                                </div>

                                {/* Widerruf */}
                                <div>
                                    <h3 className="text-xl md:text-2xl text-primary font-semibold mb-3">
                                        Widerruf Ihrer Einwilligung zur Datenverarbeitung
                                    </h3>
                                    <p>
                                        Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
                                    </p>
                                </div>

                                {/* Widerruf besondere Fälle */}
                                <div>
                                    <h3 className="text-xl md:text-2xl text-primary font-semibold mb-3">
                                        Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)
                                    </h3>
                                    <p>
                                        WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN; DIES GILT AUCH FÜR EIN AUF DIESE BESTIMMUNGEN GESTÜTZTES PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER DATENSCHUTZERKLÄRUNG. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES SEI DENN, WIR KÖNNEN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN ÜBERWIEGEN ODER DIE VERARBEITUNG DIENT DER GELTENDMACHUNG, AUSÜBUNG ODER VERTEIDIGUNG VON RECHTSANSPRÜCHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).
                                    </p>
                                    <p className="mt-4">
                                        WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH FÜR DAS PROFILING, SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH NACH ART. 21 ABS. 2 DSGVO).
                                    </p>
                                </div>

                                {/* Beschwerde­recht */}
                                <div>
                                    <h3 className="text-xl md:text-2xl text-primary font-semibold mb-3">
                                        Beschwerderecht bei der zuständigen Aufsichtsbehörde
                                    </h3>
                                    <p>
                                        Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
                                    </p>
                                    <p className="mt-4">
                                        Sie können sich bei der zuständigen Aufsichtsbehörde beschweren: Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen (LDI NRW), <Link
                                            href="https://www.ldi.nrw.de"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="underline hover:text-primary"
                                        >
                                            www.ldi.nrw.de
                                        </Link>.
                                    </p>
                                </div>

                                {/* Datenübertragbarkeit */}
                                <div>
                                    <h3 className="text-xl md:text-2xl text-primary font-semibold mb-3">
                                        Recht auf Datenübertragbarkeit
                                    </h3>
                                    <p>
                                        Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.
                                    </p>
                                </div>

                                {/* Auskunft und Löschung */}
                                <div>
                                    <h3 className="text-xl md:text-2xl text-primary font-semibold mb-3">
                                        Auskunft, Löschung und Berichtigung
                                    </h3>
                                    <p>
                                        Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.
                                    </p>
                                </div>

                                 {/* Einschränkung */}
                                <div>
                                    <h3 className="text-xl md:text-2xl text-primary font-semibold mb-3">
                                        Recht auf Einschränkung der Verarbeitung
                                    </h3>
                                    <p className="mb-4">
                                        Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu können Sie sich jederzeit an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in folgenden Fällen:
                                    </p>

                                    <ul className="list-disc ml-4 space-y-3 text-text/80">
                                        <li>
                                            Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
                                        </li>
                                        <li>
                                            Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht, können Sie statt der Löschung die Einschränkung der Datenverarbeitung verlangen.
                                        </li>
                                        <li>
                                            Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung, Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
                                        </li>
                                        <li>
                                            Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
                                        </li>
                                    </ul>

                                    <p className="mt-4">
                                        Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten – von ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der Europäischen Union oder eines Mitgliedstaats verarbeitet werden.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl md:text-2xl text-primary font-semibold mb-3">
                                        SSL- bzw. TLS-Verschlüsselung
                                    </h3>
                                    <p>
                                        Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung
                                        vertraulicher Inhalte, wie zum Beispiel Anfragen, die Sie an uns als
                                        Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. Eine
                                        verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des
                                        Browsers von „http://“ auf „https://“ wechselt und an dem Schloss-Symbol
                                        in Ihrer Browserzeile. Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert
                                        ist, können Daten, die Sie an uns übermitteln, nicht von Dritten
                                        mitgelesen werden.
                                    </p>
                                </div>  
                            </div>                           
                        </section>

                        {/* 4. Datenerfassung */}
                        <section id="datenerfassung">
                            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                                4. Datenerfassung auf dieser Website
                            </h2>

                            <div className="ml-4 md:ml-8 text-text/80 leading-relaxed space-y-8">
                                {/* Cookies */}
                                <div>
                                    <h3 className="text-xl md:text-2xl text-primary font-semibold mb-3">
                                        Cookies
                                    </h3>
                                    <p>
                                        Unsere Internetseiten verwenden so genannte „Cookies“. Cookies sind kleine Datenpakete und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert. Session-Cookies werden nach Ende Ihres Besuchs automatisch gelöscht. Permanente Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese selbst löschen oder eine automatische Löschung durch Ihren Webbrowser erfolgt.
                                    </p>
                                    <p className="mt-4">
                                        Teilweise können auch Cookies von Drittunternehmen auf Ihrem Endgerät gespeichert werden, wenn Sie unsere Seite betreten (Third-Party-Cookies). Diese ermöglichen uns oder Ihnen die Nutzung bestimmter Dienstleistungen des Drittunternehmens (z. B. Cookies zur Abwicklung von Zahlungsdienstleistungen).
                                    </p>
                                    <p className="mt-4">
                                        Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind technisch notwendig, da bestimmte Websitefunktionen ohne diese nicht funktionieren würden (z. B. die Warenkorbfunktion oder die Anzeige von Videos). Andere Cookies dienen dazu, das Nutzerverhalten auszuwerten oder Werbung anzuzeigen.
                                    </p>
                                    <p className="mt-4">
                                        Cookies, die zur Durchführung des elektronischen Kommunikationsvorgangs, zur Bereitstellung bestimmter, von Ihnen erwünschter Funktionen (z. B. für die Warenkorbfunktion) oder zur Optimierung der Website (z. B. Cookies zur Messung des Webpublikums) erforderlich sind (notwendige Cookies), werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert, sofern keine andere Rechtsgrundlage angegeben wird. Der Websitebetreiber hat ein berechtigtes Interesse an der Speicherung von notwendigen Cookies zur technisch fehlerfreien und optimierten Bereitstellung seiner Dienste. Sofern eine Einwilligung zur Speicherung von Cookies und vergleichbaren Wiedererkennungstechnologien abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage dieser Einwilligung (Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG); die Einwilligung ist jederzeit widerrufbar.
                                    </p>
                                    <p className="mt-4">
                                        Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browsers aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein.
                                    </p>
                                    <p className="mt-4">
                                        Soweit Cookies von Drittunternehmen oder zu Analysezwecken eingesetzt werden, werden wir Sie hierüber im Rahmen dieser Datenschutzerklärung gesondert informieren und ggf. eine Einwilligung abfragen.
                                    </p>
                                </div>

                                {/* Vanilla Cookie */}
                                <div>
                                    <h3 className="text-xl md:text-2xl text-primary font-semibold mb-3">
                                        Einwilligung mit Vanilla Cookie
                                    </h3>
                                    <p>
                                        Unsere Website nutzt die Consent-Technologie von „vanilla-cookieconsent“, um Ihre Einwilligung zur Speicherung bestimmter Cookies in Ihrem Browser einzuholen und diese datenschutzkonform zu dokumentieren. Bei „vanilla-cookieconsent“ handelt es sich um eine Open-Source-Softwarebibliothek und nicht um ein Unternehmen.
                                    </p>
                                    <p className="mt-4">
                                        Wenn Sie unsere Website betreten, wird ein Cookie in Ihrem Browser gespeichert, in dem Ihre erteilten Einwilligungen oder der Widerruf dieser Einwilligungen hinterlegt sind. Diese Daten werden ausschließlich in Ihrem Browser gespeichert und nicht an externe Server oder Dritte weitergegeben. Die gesamte Verarbeitung findet lokal auf Ihrem Endgerät statt.
                                    </p>
                                    <p className="mt-4">
                                        Die erfassten Daten werden gespeichert, bis Sie uns zur Löschung auffordern, das Cookie selbst in Ihren Browsereinstellungen löschen oder der Zweck für die Datenspeicherung entfällt. Zwingende gesetzliche Aufbewahrungsfristen bleiben unberührt.
                                    </p>
                                    <p className="mt-4">
                                        Der Einsatz der „vanilla-cookieconsent“-Technologie erfolgt, um die gesetzlich vorgeschriebenen Einwilligungen für den Einsatz von Cookies einzuholen. Rechtsgrundlage hierfür ist Art. 6 Abs. 1 S. 1 lit. c DSGVO.
                                    </p>
                                </div>

                                {/* Log Dateien */}
                                <div>
                                    <h3 className="text-xl md:text-2xl text-primary font-semibold mb-3">
                                        Server-Log-Dateien
                                    </h3>
                                    <p className="mb-4">
                                        Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
                                    </p>
                                    <ul className="list-disc ml-4 space-y-3 text-text/80">
                                        <li>
                                            Browsertyp und Browserversion
                                        </li>
                                        <li>
                                            verwendetes Betriebssystem
                                        </li>
                                        <li>
                                            Referrer URL
                                        </li>
                                        <li>
                                            Hostname des zugreifenden Rechners
                                        </li>
                                        <li>
                                            Uhrzeit der Serveranfrage
                                        </li>
                                        <li>
                                            IP-Adresse 
                                        </li>
                                    </ul>
                                    <p className="mt-4">
                                        Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
                                    </p>
                                    <p className="mt-4">
                                        Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website – hierzu müssen die Server-Log-Files erfasst werden.
                                    </p>
                                </div>

                                {/* Kontaktformular */}
                                <div>
                                    <h3 className="text-xl md:text-2xl text-primary font-semibold mb-3">
                                        Kontaktformular
                                    </h3>
                                    <p>
                                        Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                                    </p>
                                    <p className="mt-4">
                                        Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde; die Einwilligung ist jederzeit widerrufbar.
                                    </p>
                                    <p className="mt-4">
                                        Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.
                                    </p>
                                </div>

                                {/* Email und Telefon */}
                                <div>
                                    <h3 className="text-xl md:text-2xl text-primary font-semibold mb-3">
                                        Anfrage per E-Mail, Telefon oder Telefax
                                    </h3>
                                    <p>
                                        Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                                    </p>
                                    <p className="mt-4">
                                        Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde; die Einwilligung ist jederzeit widerrufbar.
                                    </p>
                                    <p className="mt-4">
                                        Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen – insbesondere gesetzliche Aufbewahrungsfristen – bleiben unberührt.
                                    </p>
                                </div>

                                {/* WhatsApp */}
                                <div>
                                    <h3 className="text-xl md:text-2xl text-primary font-semibold mb-3">
                                       Kommunikation via WhatsApp
                                    </h3>
                                    <p>
                                        Für die Kommunikation mit unseren Kunden und sonstigen Dritten nutzen wir unter anderem den Instant-Messaging-Dienst WhatsApp. Anbieter ist die WhatsApp Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland.
                                    </p>
                                    <p className="mt-4">
                                        Die Kommunikation erfolgt über eine Ende-zu-Ende-Verschlüsselung (Peer-to-Peer), die verhindert, dass WhatsApp oder sonstige Dritte Zugriff auf die Kommunikationsinhalte erlangen können. WhatsApp erhält jedoch Zugriff auf Metadaten, die im Zuge des Kommunikationsvorgangs entstehen (z. B. Absender, Empfänger und Zeitpunkt). Wir weisen ferner darauf hin, dass WhatsApp nach eigener Aussage, personenbezogene Daten seiner Nutzer mit seiner in den USA ansässigen Konzernmutter Meta teilt. Weitere Details zur Datenverarbeitung finden Sie in der Datenschutzrichtlinie von WhatsApp unter: 
                                        <Link
                                            href="https://www.whatsapp.com/legal/#privacy-policy"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="underline hover:text-primary"
                                        >
                                            https://www.whatsapp.com/legal/#privacy-policy
                                        </Link>.
                                    </p>
                                    <p className="mt-4">
                                        Der Einsatz von WhatsApp erfolgt auf Grundlage unseres berechtigten Interesses an einer möglichst schnellen und effektiven Kommunikation mit Kunden, Interessenten und sonstigen Geschäfts- und Vertragspartnern (Art. 6 Abs. 1 lit. f DSGVO). Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Datenverarbeitung ausschließlich auf Grundlage der Einwilligung; diese ist jederzeit mit Wirkung für die Zukunft widerrufbar.
                                    </p>
                                    <p className="mt-4">
                                        Die zwischen und auf WhatsApp ausgetauschten Kommunikationsinhalte verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.
                                    </p>
                                    <p className="mt-4">
                                        Wir nutzen WhatsApp in der Variante „WhatsApp Business“.
                                    </p>
                                    <p className="mt-4">
                                        Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gestützt. Details finden Sie hier: 
                                        <Link
                                            href="https://www.whatsapp.com/legal/business-data-transfer-addendum"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="underline hover:text-primary"
                                        >
                                            https://www.whatsapp.com/legal/business-data-transfer-addendum
                                        </Link>.
                                    </p>
                                </div>
                            </div> 
                        </section>

                        {/* 5. Analyse */}
                        <section id="analysis-tools">
                            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                                5. Analyse-Tools und Werbung
                            </h2>

                            <div className="ml-4 md:ml-8 text-text/80 leading-relaxed space-y-8">
                                
                                {/* Vercel Analytics */}
                                <div>
                                    <h3 className="text-xl md:text-2xl text-primary font-semibold mb-3">
                                        Vercel Analytics
                                    </h3>
                                    <p>
                                        Diese Website nutzt Vercel Analytics zur statistischen Auswertung der Besucherzugriffe. Anbieter ist die Vercel Inc., 340 S Lemon Ave #4133, Walnut CA 91789, USA.
                                    </p>
                                    <p className="mt-4">
                                        Die Nutzung von Vercel Analytics erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an der anonymisierten Analyse des Nutzerverhaltens, um unser Webangebot zu optimieren. Sofern eine entsprechende Einwilligung abgefragt wurde (z. B. eine Einwilligung zur Speicherung von Cookies), erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO; die Einwilligung ist jederzeit widerrufbar.
                                    </p>
                                    <p className="mt-4">
                                        Wir haben mit Vercel einen Vertrag zur Auftragsverarbeitung (AVV) abgeschlossen. Dieser Vertrag stellt sicher, dass Vercel die Daten unserer Websitebesucher nur nach unseren Weisungen und unter Einhaltung der DSGVO  verarbeitet. Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gestützt. Weitere Informationen finden Sie in der Datenschutzerklärung von Vercel:{" "}
                                    <Link
                                        href="https://vercel.com/legal/privacy-policy"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="underline hover:text-primary"
                                    >
                                        https://vercel.com/legal/privacy-policy
                                    </Link>
                                    </p>
                                    <p className="mt-4">
                                        Vercel Analytics arbeitet cookie-frei; Besucher werden über einen Hash der eingehenden Anfrage identifiziert. Die Session-Lebensdauer beträgt 24 Stunden; personenbezogene Identifikatoren (insb. IP-Adressen) werden nicht gespeichert. Details:{" "}
                                        <Link
                                            href="https://vercel.com/docs/analytics/privacy-policy"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="underline hover:text-primary"
                                        >
                                            https://vercel.com/docs/analytics/privacy-policy
                                        </Link>
                                        .
                                    </p>
                                    <p className="mt-4">
                                    Aufbewahrung/Reporting: Der verfügbare Analysezeitraum richtet sich nach dem Vercel-Plan; mit dem Add-on „Web Analytics Plus“ stehen bis zu 24 Monate zur Verfügung. Details:{" "}
                                    <Link
                                        href="https://vercel.com/pricing"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="underline hover:text-primary"
                                    >
                                        https://vercel.com/pricing
                                    </Link>
                                    .
                                    </p>
                                </div>

                                {/* Google Ads */}
                                <div>
                                    <h3 className="text-xl md:text-2xl text-primary font-semibold mb-3">
                                        Google Ads
                                    </h3>
                                    <p>
                                        Der Websitebetreiber verwendet Google Ads. Google Ads ist ein Online-Werbeprogramm der Google Ireland Limited („Google“), Gordon House, Barrow Street, Dublin 4, Irland.
                                    </p>
                                    <p className="mt-4">
                                        Google Ads ermöglicht es uns Werbeanzeigen in der Google-Suchmaschine oder auf Drittwebseiten auszuspielen, wenn der Nutzer bestimmte Suchbegriffe bei Google eingibt (Keyword-Targeting). Ferner können zielgerichtete Werbeanzeigen anhand der bei Google vorhandenen Nutzerdaten (z. B. Standortdaten und Interessen) ausgespielt werden (Zielgruppen-Targeting). Wir als Websitebetreiber können diese Daten quantitativ auswerten, indem wir beispielsweise analysieren, welche Suchbegriffe zur Ausspielung unserer Werbeanzeigen geführt haben und wie viele Anzeigen zu entsprechenden Klicks geführt haben.
                                    </p>
                                    <p className="mt-4">
                                        Die Nutzung dieses Dienstes erfolgt auf Grundlage Ihrer Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG. Die Einwilligung ist jederzeit widerrufbar.
                                    </p>
                                    <p className="mt-4">
                                       Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gestützt. Details finden Sie hier: 
                                       <Link
                                            href="https://policies.google.com/privacy/frameworks"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="underline hover:text-primary"
                                        >
                                            https://policies.google.com/privacy/frameworks
                                        </Link> und <Link
                                            href="https://privacy.google.com/businesses/controllerterms/mccs/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="underline hover:text-primary"
                                        >
                                            https://privacy.google.com/businesses/controllerterms/mccs/
                                        </Link>.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* 6. Plugins und Tools */}
                        <section id="plugins">
                            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                                6. Plugins und Tools
                            </h2>

                            <div className="ml-4 md:ml-8 text-text/80 leading-relaxed space-y-8">
                                
                                {/*  Google Fonts */}
                                <div>
                                    <h3 className="text-xl md:text-2xl text-primary font-semibold mb-3">
                                        Google Fonts (lokales Hosting)
                                    </h3>
                                    <p>
                                        Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Google Fonts, die von Google bereitgestellt werden. Die Google Fonts sind lokal installiert. Eine Verbindung zu Servern von Google findet dabei nicht statt.
                                    </p>
                                    <p className="mt-4">
                                        Weitere Informationen zu Google Fonts finden Sie unter 
                                        <Link
                                            href="https://developers.google.com/fonts/faq"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="underline hover:text-primary"
                                        >
                                            https://developers.google.com/fonts/faq
                                        </Link> und in der Datenschutzerklärung von Google: 
                                        <Link
                                            href="https://policies.google.com/privacy?hl=de"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="underline hover:text-primary"
                                        >
                                            https://policies.google.com/privacy?hl=de
                                        </Link>.
                                    </p>
                                </div>
                            </div>
                        </section>
                        
                    </div>
                </div>
            </div>
        </>
  );
}