'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { FormQuestion as FormQuestionType, FormOption, FormState } from '@/types/form';
import FormQuestion from './question';
import * as Icons from 'lucide-react';

const formQuestions: Record<string, FormQuestionType> = {
  start: {
    id: 'start',
    question: 'Um welche Art von Wohngebäude handelt es sich?',
    description: 'xxx',
    options: [
      {
        id: 'neubau',
        label: 'Neubau',
        icon: Icons.HousePlus,
        iconColor: 'text-accent',
        nextQuestionId: 'neubau-result',
      },
      {
        id: 'altbau',
        label: 'Altbau',
        icon: Icons.House,
        iconColor: 'text-primary',
        nextQuestionId: 'altbau-type',
      },
    ],
  },

  'neubau-result': {
    id: 'neubau-result',
    question: 'Es handelt sich um einen Neubau',
    options: [
      {
        id: 'neubau-final',
        label: 'Bitte wenden Sie sich an den zuständigen Architekten oder Planer Ihrer Immobilie',
        icon: Icons.UserPen,
        iconColor: 'text-blue-600',
        isTerminal: true,
      },
    ],
  },

  'altbau-type': {
    id: 'altbau-type',
    question: 'Wie viele Wohneinheiten hat Ihre Immobilie?',
    description: 'Eine Einliegerwohnung zählt dabei als eigene Wohneinheit.',
    options: [
      {
        id: 'klein',
        label: '1-4',
        icon: Icons.Home,
        iconColor: 'text-accent',
        nextQuestionId: 'klein-detail',
      },
      {
        id: 'groß',
        label: 'mehr als 5',
        icon: Icons.Building,
        iconColor: 'text-primary',
        nextQuestionId: 'groß-result',
      },
    ],
  },

  'klein-detail': {
    id: 'klein-detail',
    question: 'Wann wurde der Bauantrag gestellt?',
    options: [
      {
        id: 'vor_1977',
        label: 'vor dem 01.11.1977',
        icon: Icons.ChevronsLeft,
        iconColor: 'text-accent',
        nextQuestionId: 'sanierung',
      },
      {
        id: 'nach_1977',
        label: 'ab dem 01.11.1977',
        icon: Icons.ChevronsRight,
        iconColor: 'text-primary',
        nextQuestionId: 'nach_1977_final',
      },
    ],
  },

  'sanierung': {
    id: 'sanierung',
    question: 'Wurde Ihre Immobilie bereits saniert*?',
    description:
      '*Unter Sanierung nach Wärmeschutzverordnung versteht man zusammengefasst die nachträgliche Dämmung von Fassade und Dach sowie den Austausch von Fenstern mit 2-fach Verglasung.',
    options: [
      {
        id: 'sanierung_ja',
        label: 'mit Sanierung nach WärmeschutzV von 1977',
        icon: Icons.Check,
        iconColor: 'text-primary',
        nextQuestionId: 'sanierung_ja_final',
      },
      {
        id: 'sanierung_nein',
        label: 'ohne Sanierung nach WärmeschutzV von 1977',
        icon: Icons.CircleX,
        iconColor: 'text-red-500',
        nextQuestionId: 'sanierung_nein_final',
      },
    ],
  },

  'groß-result': {
    id: 'groß-result',
    question: 'Bedarfsausweis oder Verbrauchsausweis möglich!',
    options: [
      {
        id: 'groß-bedarf',
        label: 'Bedarfsausweis',
        icon: Icons.ClipboardList,
        iconColor: 'text-accent',
        isTerminal: true,
      },
      {
        id: 'groß-verbrauch',
        label: 'Verbrauchsausweis',
        icon: Icons.ClipboardCheck,
        iconColor: 'text-primary',
        isTerminal: true,
      },
    ],
  },

  'sanierung_ja_final': {
    id: 'sanierung_ja_final',
    question: 'Bedarfsausweis oder Verbrauchsausweis möglich!',
    options: [
      {
        id: 'sanierung_ja_bedarf',
        label: 'Bedarfsausweis',
        icon: Icons.ClipboardList,
        iconColor: 'text-accent',
        isTerminal: true,
      },
      {
        id: 'sanierung_ja_verbrauch',
        label: 'Verbrauchsausweis',
        icon: Icons.ClipboardCheck,
        iconColor: 'text-accent',
        isTerminal: true,
      },
    ],
  },

  'sanierung_nein_final': {
    id: 'sanierung_nein_final',
    question: 'NUR Bedarfsausweis möglich!',
    options: [
      {
        id: 'sanierung_nein_bedarf',
        label: 'Bedarfsausweis',
        icon: Icons.ClipboardList,
        iconColor: 'text-primary',
        isTerminal: true,
      },
    ],
  },

  'nach_1977_final': {
    id: 'nach_1977_final',
    question: 'Bedarfsausweis oder Verbrauchsausweis möglich!',
    options: [
      {
        id: 'nach_1977_bedarf',
        label: 'Bedarfsausweis',
        icon: Icons.ClipboardList,
        iconColor: 'text-accent',
        isTerminal: true,
      },
      {
        id: 'nach_1977_verbrauch',
        label: 'Verbrauchsausweis',
        icon: Icons.ClipboardCheck,
        iconColor: 'text-primary',
        isTerminal: true,
      },
    ],
  },
};

export default function DynamicForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [formState, setFormState] = useState<FormState>(() => {
    const savedState = searchParams.get('state');
    if (savedState) {
      try {
        return JSON.parse(atob(savedState));
      } catch {
        return {
          currentQuestionId: 'start',
          answers: {},
          completed: false,
        };
      }
    }
    
    return {
      currentQuestionId: 'start',
      answers: {},
      completed: false,
    };
  });

  const currentQuestion = formQuestions[formState.currentQuestionId];

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    params.set('state', btoa(JSON.stringify(formState)));
    router.replace(`/ausweistyp?${params.toString()}`, { scroll: false });
  }, [formState, router, searchParams]);

  const handleAnswer = (option: FormOption) => {
    if (option.isTerminal) return;
    
    const newAnswers = {
      ...formState.answers,
      [formState.currentQuestionId]: option.id,
    };

    if (option.isTerminal) {
      setFormState({
        ...formState,
        answers: newAnswers,
        completed: true,
      });
    } else if (option.nextQuestionId) {
      setFormState({
        ...formState,
        answers: newAnswers,
        currentQuestionId: option.nextQuestionId,
      });
    }
  };

  const resetForm = () => {
    setFormState({
      currentQuestionId: 'start',
      answers: {},
      completed: false,
    });
  };

  const goBack = () => {
    const answerEntries = Object.entries(formState.answers);
    if (answerEntries.length > 0) {
      const lastAnswer = answerEntries[answerEntries.length - 1];
      const previousQuestionId = lastAnswer[0];
      
      setFormState({
        ...formState,
        answers: Object.fromEntries(answerEntries.slice(0, -1)),
        currentQuestionId: previousQuestionId,
        completed: false,
      });
    }
  };

  if (!currentQuestion) {
    return (
      <div className="max-w-2xl mx-auto p-6">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 text-center">
          <p className="text-red-600 font-medium">Fehler: Frage nicht gefunden</p>
          <button
            onClick={resetForm}
            className="mt-4 bg-green-800 text-white px-6 py-2 rounded-xl hover:bg-green-900 transition-colors hover:cursor-pointer"
          >
            Fragebogen zurücksetzen
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="mb-6 flex justify-between items-center">
        <button
          onClick={goBack}
          disabled={formState.currentQuestionId === 'start'}
          className="text-gray-600 hover:text-green-800 disabled:opacity-50 disabled:cursor-not-allowed font-medium transition-colors duration-200 hover:cursor-pointer"
        >
          ← Zurück
        </button>
        <button
          onClick={resetForm}
          className="text-sm text-gray-500 hover:text-green-800 transition-colors duration-200 hover:cursor-pointer"
        >
          Zurücksetzen
        </button>
      </div>
      
      <FormQuestion
        question={currentQuestion}
        onAnswer={handleAnswer}
        currentStep={Object.keys(formState.answers).length + 1}
        disableAll={currentQuestion.options.every((o) => o.isTerminal)}
      />
    </div>
  );
}