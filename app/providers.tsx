'use client';

import { CookieConsentProvider } from "@/components/cookie-consent";

interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <CookieConsentProvider>
      {children}
    </CookieConsentProvider>
  );
}