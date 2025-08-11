'use client';
import { FormQuestion as FormQuestionType, FormOption } from '@/types/form';

interface Props {
  question: FormQuestionType;
  onAnswer: (option: FormOption) => void;
  currentStep: number;
  disableAll?: boolean;
}

export default function FormQuestion({ question, onAnswer, currentStep, disableAll = false, }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
      <div className="mb-8">
        <div className="text-sm text-green-600 font-medium mb-3">Stufe {currentStep}</div>
        <h2 className="text-3xl font-bold text-text mb-3">{question.question}</h2>
        {question.description && <p className="text-text/70 text-lg">{question.description}</p>}
      </div>

      <div className={`grid gap-4 ${question.options.length === 1 ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'}`}>
        {question.options.map((opt) => {
          const Icon = opt.icon;
          return (
            <button
              key={opt.id}
              onClick={() => onAnswer(opt)}
              disabled={disableAll}
              className="flex flex-col items-center p-6 border-2 border-gray-200 rounded-xl hover:border-green-600 hover:bg-green-50 transition-all duration-300 group"
            >
              <Icon className={`w-12 h-12 mb-3 ${opt.iconColor} group-hover:scale-110 transition-transform`} />
              <span className="font-semibold text-text text-center">{opt.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}