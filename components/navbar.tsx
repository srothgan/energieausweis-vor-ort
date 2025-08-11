"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import Logo from "@/public/EVO_Logo_klein-600x151.png"
import { Menu, X } from "lucide-react"

export default function Navbar(){

    const pathname = usePathname()
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    // Close mobile menu when pathname changes
    useEffect(() => {
        setIsMobileMenuOpen(false)
    }, [pathname])

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }

        // Cleanup function to restore scroll on unmount
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isMobileMenuOpen])

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
        }
    ]

    return(
        <>
            <nav className="bg-primary w-full flex items-center justify-between p-4 md:p-6 lg:p-8 relative z-50 sticky top-0 border-b-4 border-accent">
                <Link href="/" className="w-2/3 md:w-1/2 lg:w-1/4 h-fit">
                <Image
                    src={Logo}
                    alt="Logo von Energusausweis vor Ort"
                    width={600}
                    height={151}
                    placeholder="blur"
                />
                </Link>
                <div className="hidden md:flex space-x-8">
                    {links.map((link, index) => {
                        const isActive = pathname === link.href
                        return (
                            <Link 
                                key={index}
                                href={link.href}
                                className={`transition-colors duration-200 uppercase ${
                                    isActive 
                                        ? "text-accent underline" 
                                        : "text-white hover:text-accent hover:underline"
                                }`}
                            >
                                {link.name}
                            </Link>
                        )
                    })}
                </div>
                <button 
                    className="flex md:hidden z-50 relative"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                >
                    <div className="relative w-6 h-6">
                        <Menu 
                            size={24} 
                            className={`text-white absolute transition-all duration-300 ${
                                isMobileMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'
                            }`}
                        />
                        <X 
                            size={24} 
                            className={`text-white absolute transition-all duration-300 ${
                                isMobileMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'
                            }`}
                        />
                    </div>
                </button>
            </nav>

            {/* Mobile Menu */}
            <div 
                className={`fixed bottom-0 left-0 right-0 bg-white z-60 md:hidden transform transition-transform duration-300 ease-out ${
                    isMobileMenuOpen ? 'translate-y-0' : 'translate-y-full'
                }`}
                style={{
                    borderTopLeftRadius: '24px',
                    borderTopRightRadius: '24px',
                    boxShadow: '0 -10px 25px rgba(0, 0, 0, 0.1)'
                }}
            >
                <div className="px-6 py-8">
                    <div className="flex items-center justify-between mb-6">
                        <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto"></div>
                        <button 
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
                            aria-label="Close menu"
                        >
                            <X size={24} />
                        </button>
                    </div>
                    <nav className="space-y-6">
                        {links.map((link, index) => {
                            const isActive = pathname === link.href
                            return (
                                <Link 
                                    key={index}
                                    href={link.href}
                                    className={`block text-lg font-medium transition-colors duration-200 uppercase ${
                                        isActive 
                                            ? "text-accent border-l-4 border-accent pl-4" 
                                            : "text-text hover:text-accent hover:border-l-4 hover:border-accent hover:pl-4"
                                    }`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            )
                        })}
                    </nav>
                </div>
            </div>
        </>
    )
}