import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Seite nicht gefunden
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Die von Ihnen gesuchte Seite existiert nicht oder wurde verschoben.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link 
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-green-700 transition-colors duration-200"
          >
            Zurück zur Startseite
          </Link>
          
          <div className="text-sm text-gray-500">
            <p>Oder besuchen Sie eine unserer anderen Seiten:</p>
            <div className="mt-4 space-x-4">
              <Link href="/festpreis" className="text-primary hover:underline">
                Festpreis
              </Link>
              <Link href="/ausweistyp" className="text-primary hover:underline">
                Ausweistyp
              </Link>
              <Link href="/kontakt" className="text-primary hover:underline">
                Kontakt
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
