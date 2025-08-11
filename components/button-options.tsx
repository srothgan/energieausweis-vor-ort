'use client'

import { ArrowBigUp, Cookie} from "lucide-react"
import { useState, useEffect } from "react"
import * as CookieConsent from 'vanilla-cookieconsent';

export default function ButtonOptions(){
    const [isVisible, setIsVisible] = useState(false)

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    const showCookiePreferences = () => {
        CookieConsent.showPreferences()
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility)
        return () => {
            window.removeEventListener('scroll', toggleVisibility)
        }
    }, [])


    return(
        <div className="fixed bottom-4 right-4 z-50 md:bottom-6 md:right-6 flex flex-row gap-3">
            {isVisible &&
            <button
                onClick={scrollToTop}
                className="hover:cursor-pointer bg-primary hover:bg-primary/90 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 border-2 border-white"
                aria-label="Scroll to top"
            >
                <ArrowBigUp className="w-6 h-6" />
            </button>
            }

            <button
                onClick={showCookiePreferences}
                className="bg-accent hover:bg-accent/90 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 border-2 border-white"
                aria-label="Cookie-Einstellungen öffnen"
            >
                <Cookie className="w-6 h-6" />
            </button>
        </div>
    )
}