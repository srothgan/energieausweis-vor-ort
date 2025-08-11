import Logo from "@/public/EVO_Logo_klein-600x151.png"
import Image from "next/image"
import Link from "next/link"

export default function Footer(){

    const links = [
        {
            name : "Home",
            href : "/"
        },
        {
            name : "Ausweistyp",
            href : "/ausweistyp"
        },
        {
            name : "Unterschied",
            href : "/unterschied"
        },
        {
            name : "Ablauf",
            href : "/ablauf"
        },
        {
            name : "Unterlagen",
            href : "/unterlagen"
        },
        {
            name : "Festpreis",
            href : "/festpreis"
        },
        {
            name : "Kontakt",
            href : "/kontakt"
        },
        {
            name : "Impressum",
            href : "/impressum"
        },
        {
            name : "Datenschutzerklärung",
            href : "/datenschutzerklaerung"
        }
    ]


    return( 
        <footer className="w-full bg-primary flex flex-col p-4 md:p-6 lg:p-8 border-t-8 border-accent text-white">
            <Link href="/" className="w-2/3 md:w-1/2 lg:w-1/4 h-fit mb-4">
            <Image
                src={Logo}
                alt="Logo von Energusausweis vor Ort"
                width={600}
                height={151}
                placeholder="blur"
            />
            </Link>
            <div className="w-full grid grid-cols-1 md:grid-cols-5 gap-8">

                <div className="w-full flex flex-col gap-4 md:col-span-2">
                    <span className="uppercase underline font-bold">
                        Wir kommen zu Ihnen! Zum Festpreis!
                    </span>
                    <p>
                        Wenn Sie Ihre Immobilie verkaufen oder neu vermieten möchten, benötigen Sie in den meisten Fällen einen Energieausweis. Allen Eigentümern, die sich dabei nicht um alles selbst kümmern möchten, bieten wir unseren ALL-INCLUSIVE-SERVICE: Von der Datenerhebung vor Ort über die Prüfung der erhobenen Daten bis zur abschließenden Ausstellung eines zu Ihrer Immobilie passenden Energieausweises durch einen unserer dazu berechtigten Kooperationspartner. Alles aus einer Hand – zum günstigen Festpreis, ohne versteckte Kosten!
                    </p>
                </div>

                <div className="w-full flex flex-col gap-4 md:col-span-2">
                    <span className="uppercase underline font-bold">
                        Kontakt
                    </span>
                    <div className="space-y-3">
                        <p>
                            Energieausweis vor Ort <br/>
                            Markus Naczinsky
                        </p>

                        <div>
                            <p className="font-medium">Adresse:</p>
                            <div className="pl-4">
                            <Link 
                                href="https://maps.app.goo.gl/q6SFMpqhJWMfNspL9"
                                target="_blank"
                                className="underline">
                                Am Oberen Feld 5 <br/>
                                40668 Meerbusch <br/>
                                NRW, Deutschland
                            </Link>
                            </div>
                        </div>

                        <div>
                            <p className="font-medium">
                                Tel: 
                                <Link 
                                    href="tel:02150794380"
                                    className="underline ml-1">
                                    02150794380
                                </Link>
                            </p>
                        </div>

                        <div>
                            <p className="font-medium">
                                E-Mail:
                                <Link 
                                    href="mailto:mail@energieausweis-vor-ort.nrw"
                                    className="underline ml-1">
                                    mail@energieausweis-vor-ort.nrw
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="w-full flex flex-col gap-4 md:col-span-1">
                    <span className="uppercase underline font-bold">
                        Links
                    </span>

                    <div className="flex flex-col gap-2">
                        {links.map((link, index) => (
                            <Link 
                                key={index}
                                href={link.href}
                                className="hover:text-gray-300 transition-colors">
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}