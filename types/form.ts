import { LucideIcon } from "lucide-react";

export interface FormOption {
  id: string;
  label: string;
  icon: LucideIcon;
  iconColor: string;
  nextQuestionId?: string;
  isTerminal?: boolean;
}

export interface FormQuestion {
  id: string;
  question: string;
  description?: string;
  options: FormOption[];
}

export interface FormState {
  currentQuestionId: string;
  answers: Record<string, string>;
  completed: boolean;
}