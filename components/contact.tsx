

'use client';

import { useState } from 'react';
import { z, type ZodIssue } from 'zod';
import { Send, User, Mail, Phone, MessageSquare, Check } from 'lucide-react';
import Link from 'next/link';

// Zod Schema für Formularvalidierung
const contactSchema = z.object({
  name: z.string()
    .min(4, 'Der Name muss mindestens 4 Zeichen lang sein')
    .max(100, 'Der Name darf maximal 100 Zeichen lang sein'),
  email: z.string()
    .min(1, 'E-Mail ist erforderlich')
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Bitte geben Sie eine gültige E-Mail-Adresse ein'),
  phone: z.string()
    .min(10, 'Bitte geben Sie eine gültige Telefonnummer ein')
    .max(20, 'Die Telefonnummer ist zu lang')
    .regex(/^[\d\s\-\+\(\)\/]+$/, 'Bitte geben Sie eine gültige Telefonnummer ein'),
  message: z.string()
    .min(10, 'Die Nachricht muss mindestens 10 Zeichen lang sein')
    .max(1000, 'Die Nachricht darf maximal 1000 Zeichen lang sein'),
  privacy: z.boolean()
    .refine((val: boolean) => val === true, 'Sie müssen der Datenschutzerklärung zustimmen')
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Kontaktformular() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    privacy: false
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field: keyof ContactFormData, value: string | boolean) => {
    setFormData((prev: ContactFormData) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev: Partial<Record<keyof ContactFormData, string>>) => ({ ...prev, [field]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      // Validierung mit Zod
      contactSchema.parse(formData);

      // Hier würde normalerweise der API-Call erfolgen
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulierte Verzögerung

      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        privacy: false
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
        error.issues.forEach((err: ZodIssue) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as keyof ContactFormData] = err.message;
          }
        });
        setErrors(fieldErrors);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-8 text-center">
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <Check className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-green-800 mb-2">
          Vielen Dank für Ihre Nachricht!
        </h3>
        <p className="text-green-700 mb-4">
          Wir haben Ihre Anfrage erhalten und werden uns schnellstmöglich bei Ihnen melden.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="text-green-600 hover:text-green-800 font-medium transition-colors"
        >
          Neue Nachricht senden
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 h-full flex flex-col">
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-text mb-2">
          Kontaktformular
        </h2>
        <p className="text-text/70">
          Senden Sie uns eine Nachricht und wir melden uns schnellstmöglich bei Ihnen zurück.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 flex-1 flex flex-col">
        <div className="flex-1 space-y-6">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-text mb-2">
            Ihr Name *
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <User className="h-5 w-5 text-text/40" />
            </div>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className={`text-text w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:outline-none focus:ring-primary focus:border-transparent transition-colors ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Max Mustermann"
            />
          </div>
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name}</p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-text mb-2">
            E-Mail-Adresse *
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-text/40" />
            </div>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className={`text-text w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:outline-none focus:ring-primary focus:border-transparent transition-colors ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="max.mustermann@email.de"
            />
          </div>
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email}</p>
          )}
        </div>

        {/* Phone Field */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-text mb-2">
            Rückrufnummer *
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Phone className="h-5 w-5 text-text/40" />
            </div>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className={`text-text w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:outline-none focus:ring-primary focus:border-transparent transition-colors ${
                errors.phone ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="0211 / 123 456 789"
            />
          </div>
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
          )}
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-text mb-2">
            Ihre Nachricht *
          </label>
          <div className="relative">
            <div className="absolute top-3 left-3 pointer-events-none">
              <MessageSquare className="h-5 w-5 text-text/40" />
            </div>
            <textarea
              id="message"
              rows={5}
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              className={`text-text w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:outline-none focus:ring-primary focus:border-transparent transition-colors resize-none ${
                errors.message ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Beschreiben Sie hier Ihr Anliegen oder stellen Sie Ihre Fragen..."
            />
          </div>
          {errors.message && (
            <p className="mt-1 text-sm text-red-600">{errors.message}</p>
          )}
        </div>

        {/* Privacy Checkbox */}
        <div>
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="privacy"
              checked={formData.privacy}
              onChange={(e) => handleInputChange('privacy', e.target.checked)}
              className={`mt-1 h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded accent-primary ${
                errors.privacy ? 'border-red-500' : ''
              }`}
            />
            <label htmlFor="privacy" className="text-sm text-text/80 leading-relaxed">
              Ich habe die{' '}
              <Link 
                href="/datenschutzerklaerung" 
                className="text-primary hover:text-primary/80 font-medium transition-colors"
              >
                Datenschutzerklärung
              </Link>{' '}
              gelesen und bin mit der Verarbeitung meiner Daten einverstanden. *
            </label>
          </div>
          {errors.privacy && (
            <p className="mt-1 text-sm text-red-600">{errors.privacy}</p>
          )}
        </div>

        {/* Submit Button */}
        <div>
          <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full flex items-center justify-center gap-2 py-3 px-6 rounded-lg font-medium transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg hover:cursor-pointer ${
            isSubmitting
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-primary hover:bg-accent text-white'
          }`}
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              Wird gesendet...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              Nachricht abschicken
            </>
          )}
        </button>
        </div>
        </div>
      </form>
      <div className="mt-6 pt-6 border-t border-gray-200">
        <p className="text-xs text-text/60 leading-relaxed">
          * Pflichtfelder. Ihre Daten werden verschlüsselt übertragen und vertraulich behandelt.
        </p>
      </div>
    </div>
  );
}