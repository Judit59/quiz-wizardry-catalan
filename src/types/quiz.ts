export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  category: string;
  explanation?: string;
}

export interface UserAnswer {
  questionId: number;
  selectedAnswer: number;
  isCorrect: boolean;
}

export interface QuizState {
  currentQuestion: number;
  answers: UserAnswer[];
  isCompleted: boolean;
  score: number;
  timeSpent: number;
}

export interface QuizResults {
  score: number;
  totalQuestions: number;
  percentage: number;
  timeSpent: number;
  categoryScores: { [category: string]: { correct: number; total: number } };
}