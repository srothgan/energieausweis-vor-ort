'use client';

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import 'vanilla-cookieconsent/dist/cookieconsent.css';
import * as CookieConsent from 'vanilla-cookieconsent';

declare global {
  interface Window {
    gtag?: (command: string, action: string, parameters?: Record<string, unknown>) => void;
    dataLayer?: Array<Record<string, unknown> | unknown[]>;
  }
}

interface CookieConsentContextType {
  acceptedServices: string[];
}

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined);

export const useCookieConsent = (): CookieConsentContextType => {
  const context = useContext(CookieConsentContext);
  if (!context) {
    throw new Error('useCookieConsent must be used within a CookieConsentProvider');
  }
  return context;
};

// Service constants (like in the official docs)
const SERVICE_AD_STORAGE = 'ad_storage';
const SERVICE_AD_USER_DATA = 'ad_user_data';
const SERVICE_AD_PERSONALIZATION = 'ad_personalization';
const SERVICE_ANALYTICS_STORAGE = 'analytics_storage';
const SERVICE_FUNCTIONALITY_STORAGE = 'functionality_storage';
const SERVICE_PERSONALIZATION_STORAGE = 'personalization_storage';

// Category constants
const CAT_NECESSARY = 'necessary';
const CAT_ANALYTICS = 'analytics';
const CAT_FUNCTIONALITY = 'functionality';

/**
 * Update gtag consent according to users choices made in CookieConsent UI
 * (Following the official pattern from cookieconsent docs)
 */
function updateGtagConsent() {
  if (typeof window.gtag !== 'function') {
    // Push to dataLayer so GTM can pick it up when it loads
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(['consent', 'update', {
      [SERVICE_ANALYTICS_STORAGE]: CookieConsent.acceptedService?.(SERVICE_ANALYTICS_STORAGE, CAT_ANALYTICS) ? 'granted' : 'denied',
      [SERVICE_AD_STORAGE]: CookieConsent.acceptedService?.(SERVICE_AD_STORAGE, CAT_ANALYTICS) ? 'granted' : 'denied',
      [SERVICE_AD_USER_DATA]: CookieConsent.acceptedService?.(SERVICE_AD_USER_DATA, CAT_ANALYTICS) ? 'granted' : 'denied',
      [SERVICE_AD_PERSONALIZATION]: CookieConsent.acceptedService?.(SERVICE_AD_PERSONALIZATION, CAT_ANALYTICS) ? 'granted' : 'denied',
      [SERVICE_FUNCTIONALITY_STORAGE]: CookieConsent.acceptedService?.(SERVICE_FUNCTIONALITY_STORAGE, CAT_FUNCTIONALITY) ? 'granted' : 'denied',
      [SERVICE_PERSONALIZATION_STORAGE]: CookieConsent.acceptedService?.(SERVICE_PERSONALIZATION_STORAGE, CAT_FUNCTIONALITY) ? 'granted' : 'denied',
    }]);
    return;
  }

  window.gtag('consent', 'update', {
    [SERVICE_ANALYTICS_STORAGE]: CookieConsent.acceptedService(SERVICE_ANALYTICS_STORAGE, CAT_ANALYTICS) ? 'granted' : 'denied',
    [SERVICE_AD_STORAGE]: CookieConsent.acceptedService(SERVICE_AD_STORAGE, CAT_ANALYTICS) ? 'granted' : 'denied',
    [SERVICE_AD_USER_DATA]: CookieConsent.acceptedService(SERVICE_AD_USER_DATA, CAT_ANALYTICS) ? 'granted' : 'denied',
    [SERVICE_AD_PERSONALIZATION]: CookieConsent.acceptedService(SERVICE_AD_PERSONALIZATION, CAT_ANALYTICS) ? 'granted' : 'denied',
    [SERVICE_FUNCTIONALITY_STORAGE]: CookieConsent.acceptedService(SERVICE_FUNCTIONALITY_STORAGE, CAT_FUNCTIONALITY) ? 'granted' : 'denied',
    [SERVICE_PERSONALIZATION_STORAGE]: CookieConsent.acceptedService(SERVICE_PERSONALIZATION_STORAGE, CAT_FUNCTIONALITY) ? 'granted' : 'denied',
  });
}

interface CookieConsentProviderProps {
  children: ReactNode;
}

export const CookieConsentProvider: React.FC<CookieConsentProviderProps> = ({ children }) => {
  const [acceptedServices, setAcceptedServices] = useState<string[]>([]);

  useEffect(() => {
    const updateAcceptedServices = () => {
      const userPreferences = CookieConsent.getUserPreferences?.();
      if (!userPreferences) return;
      
      const services = userPreferences.acceptedServices || {};
      const servicesList = Object.values(services).flat() as string[];
      setAcceptedServices(servicesList);
    };

    // Get the correct domain for cookies
    const hostname = window.location.hostname;
    let cookieDomain: string | undefined = undefined;
    
    if (hostname.includes('energieausweis-vor-ort.nrw')) {
      cookieDomain = '.energieausweis-vor-ort.nrw';
    } else if (process.env.NEXT_PUBLIC_COOKIE_DOMAIN) {
      cookieDomain = process.env.NEXT_PUBLIC_COOKIE_DOMAIN;
    } else {
      // Let browser set domain automatically for localhost/preview
      cookieDomain = undefined;
    }

    CookieConsent.run({
      cookie: {
        name: 'cc_cookie',
        domain: cookieDomain,
        expiresAfterDays: 182,
      },
      
      guiOptions: {
        consentModal: { layout: 'cloud' },
      },
      
      // Callbacks following official pattern
      onFirstConsent: () => {
        updateAcceptedServices();
        updateGtagConsent();
      },
      
      onConsent: () => {
        updateAcceptedServices();
        updateGtagConsent();
      },
      
      onChange: () => {
        updateAcceptedServices();
        updateGtagConsent();
      },

      // Categories and services following official pattern
      categories: {
        [CAT_NECESSARY]: {
          enabled: true,
          readOnly: true,
        },
        [CAT_ANALYTICS]: {
          autoClear: {
            cookies: [
              { name: /^_ga/ },
              { name: '_gid' },
            ],
          },
          services: {
            [SERVICE_ANALYTICS_STORAGE]: {
              label: 'Google Analytics (Analytics Storage)',
            },
            [SERVICE_AD_STORAGE]: {
              label: 'Google Ads (Ad Storage)',
            },
            [SERVICE_AD_USER_DATA]: {
              label: 'Google Ads (User Data)',
            },
            [SERVICE_AD_PERSONALIZATION]: {
              label: 'Google Ads (Personalization)',
            },
          },
        },
        [CAT_FUNCTIONALITY]: {
          services: {
            [SERVICE_FUNCTIONALITY_STORAGE]: {
              label: 'Functionality Storage',
            },
            [SERVICE_PERSONALIZATION_STORAGE]: {
              label: 'Personalization Storage',
            },
          },
        },
      },

      language: {
        default: 'de',
        translations: {
          de: {
            consentModal: {
              title: 'Datenschutz-Einstellungen',
              description: 'Wir verwenden Cookies, um Ihr Erlebnis zu verbessern. Bitte wählen Sie Ihre Präferenzen.',
              acceptAllBtn: 'Alle akzeptieren',
              acceptNecessaryBtn: 'Nur notwendige Cookies akzeptieren',
              showPreferencesBtn: 'Einstellungen verwalten',
            },
            preferencesModal: {
              title: 'Cookie-Einstellungen verwalten',
              acceptAllBtn: 'Alle akzeptieren',
              acceptNecessaryBtn: 'Nur notwendige Cookies akzeptieren',
              savePreferencesBtn: 'Einstellungen speichern',
              sections: [
                {
                  title: "Einsatz von Cookies",
                  description: "Wir nutzen Cookies, um die grundlegenden Funktionen unserer Website sicherzustellen und Ihr Online-Erlebnis zu verbessern. Sie können Ihre Einwilligung jederzeit ändern oder widerrufen."
                },
                {
                  title: 'Notwendig',
                  description: 'Diese Cookies sind für den Betrieb der Website unbedingt erforderlich, z. B. für den Fragebogen und speichern Ihrer Cookie-Einstellungen.',
                  linkedCategory: CAT_NECESSARY,
                },
                {
                  title: 'Analyse & Werbung',
                  description: 'Diese Cookies helfen uns zu verstehen, wie Besucher unsere Website nutzen, und ermöglichen uns, relevante Werbung anzuzeigen. Dazu gehören Google Analytics und Google Ads.',
                  linkedCategory: CAT_ANALYTICS,
                },
                {
                  title: 'Funktionalität',
                  description: 'Diese Cookies ermöglichen erweiterte Funktionen und Personalisierungen, wie z. B. das Speichern von Spracheinstellungen oder Videoempfehlungen.',
                  linkedCategory: CAT_FUNCTIONALITY,
                },
              ],
            },
          },
        },
      },
    });

    // Initial sync if consent already exists
    const existingPreferences = CookieConsent.getUserPreferences?.();
    if (existingPreferences && existingPreferences.acceptedCategories) {
      updateAcceptedServices();
      updateGtagConsent();
    }
  }, []);

  return (
    <CookieConsentContext.Provider value={{ acceptedServices }}>
      {children}
    </CookieConsentContext.Provider>
  );
};