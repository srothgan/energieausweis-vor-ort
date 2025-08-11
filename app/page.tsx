import Hero from "@/components/hero";
import ContentSection from "@/components/content-section";
import Festpreis from "@/public/Festpreis-Energieausweis.webp";
import Strafen from "@/public/Strafen-Energieausweis.webp";
import Vorort from "@/public/Bedarfsausweis_vor_Ort.webp";
import Präzision from "@/public/Haftung-Energieausweis.webp";
import FeatureCards from "@/components/feature-cards";

export default function Home(){
  return(
    <div className="w-full bg-white">
      <Hero/>

      <FeatureCards/>
      
      <ContentSection
        title="Sie benötigen einen Energieausweis? Wir kommen zu Ihnen!"
        content="Wenn Sie Ihre Immobilie verkaufen oder neu vermieten möchten, benötigen Sie in den meisten Fällen einen Energieausweis. Allen Eigentümern, die sich dabei nicht um alles selbst kümmern möchten, bieten wir unseren ALL-INCLUSIVE-SERVICE: Von der Datenerhebung vor Ort über die Prüfung der erhobenen Daten bis zur abschließenden Erstellung eines zur Ihrer Immobilie passenden Energieausweises durch einen unserer dazu ausstellungsberechtigten Kooperationspartner. Alles aus einer Hand – zum günstigen Festpreis, ohne versteckte Kosten!"
        image={Festpreis}
        imageAlt="Festpreis Energieausweis Service"
        isReversed={false}
        fetchPriority="high"
      />

      <ContentSection
        title="Unwissenheit schützt nicht vor Strafen"
        content="Potenziellen Käufern oder Mietern müssen Sie bereits bei der Besichtigung Ihrer Immobilie den Energieausweis unaufgefordert vorzeigen. Auch in Zeitungsinseraten und in Immobilienportalen müssen die Pflichtangaben wie u.a. Endenergiebedarf oder -verbrauch und weitere aufgeführt werden. Wer keinen zulässigen Nachweis vorlegt, riskiert teure Abmahnungen und happige Bußgelder. Rechtsgrundlage dafür ist das im November 2020 in Kraft getretene Gebäudeenergiegesetz (GEG)."
        image={Strafen}
        imageAlt="Strafen bei fehlendem Energieausweis"
        isReversed={true}
        className="bg-gray-50"
      />

      <ContentSection
        title="Je grüner, desto besser"
        content="Um Auskunft über die energetische Qualität der Immobilie zu geben, ist ein Bedarfsausweis ideal. Mit klarer Farbcodierung und detaillierten Werten informiert es insbesondere über den Heizenergieverbrauch bzw. Heizenergiebedarf des Hauses. Dies erleichtert potentiellen Mietern oder Käufern die Einschätzung und den Vergleich der zu erwartenden Heizkosten der Immobilie.

        Denn energieeffiziente Gebäude sind attraktiver, insbesondere bei steigenden Energiepreisen. Ein weiterer Vorteil für Sie als Eigentümer sind die Tipps zur Modernisierung, die Bestandteil des Bedarfsausweises sind. So erhalten Sie konkrete Hinweise, wie Sie Energie sparen und damit den ökologischen Fußabdruck Ihrer Immobilie reduzieren können."
        image={Vorort}
        imageAlt="Bedarfsausweis vor Ort Service"
        isReversed={false}
      />

      <ContentSection
        title="Präzision gefragt"
        content="Für die Ausstellung eines Bedarfsausweises ist eine umfangreiche Dokumentation der Gebäudedaten notwendig, die für den Eigentümer selbst nur schwer zu bewerkstelligen ist. Bitte beachten Sie: Ist der Energieausweis fehlerhaft, kann man Sie in Haftung nehmen, was Sie teuer zu stehen kommen könnte.

        Wenn Sie also auf Nummer sicher gehen wollen, führen wir für Ihr Wohngebäude gerne eine umfangreiche Datenerhebung vor Ort durch. In nur wenigen Tagen erhalten Sie Ihren Energieausweis, der von einem unserer dazu berechtigten Kooperationspartner ausgestellt wird."
        image={Präzision}
        imageAlt="Präzise Datenerhebung für Energieausweis"
        isReversed={true}
        className="bg-gray-50"
      />
    </div>
  )
}