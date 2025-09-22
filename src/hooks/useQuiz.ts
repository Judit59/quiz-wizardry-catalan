import { useState, useEffect } from 'react';
import { Question, UserAnswer, QuizState, QuizResults } from '../types/quiz';

export const useQuiz = (questions: Question[]) => {
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestion: 0,
    answers: [],
    isCompleted: false,
    score: 0,
    timeSpent: 0,
  });

  const [startTime, setStartTime] = useState<Date | null>(null);

  useEffect(() => {
    if (startTime) {
      const interval = setInterval(() => {
        setQuizState(prev => ({
          ...prev,
          timeSpent: Math.floor((Date.now() - startTime.getTime()) / 1000)
        }));
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [startTime]);

  const startQuiz = () => {
    setStartTime(new Date());
    setQuizState({
      currentQuestion: 0,
      answers: [],
      isCompleted: false,
      score: 0,
      timeSpent: 0,
    });
  };

  const answerQuestion = (selectedAnswer: number) => {
    const currentQ = questions[quizState.currentQuestion];
    const isCorrect = selectedAnswer === currentQ.correctAnswer;
    
    const newAnswer: UserAnswer = {
      questionId: currentQ.id,
      selectedAnswer,
      isCorrect,
    };

    const newAnswers = [...quizState.answers, newAnswer];
    const newScore = newAnswers.filter(a => a.isCorrect).length;

    setQuizState(prev => ({
      ...prev,
      answers: newAnswers,
      score: newScore,
    }));

    // Move to next question after a short delay
    setTimeout(() => {
      if (quizState.currentQuestion < questions.length - 1) {
        setQuizState(prev => ({
          ...prev,
          currentQuestion: prev.currentQuestion + 1,
        }));
      } else {
        // Quiz completed
        setQuizState(prev => ({
          ...prev,
          isCompleted: true,
        }));
      }
    }, 1500);
  };

  const getResults = (): QuizResults => {
    const categoryScores: { [category: string]: { correct: number; total: number } } = {};
    
    questions.forEach((question) => {
      if (!categoryScores[question.category]) {
        categoryScores[question.category] = { correct: 0, total: 0 };
      }
      categoryScores[question.category].total++;
      
      const answer = quizState.answers.find(a => a.questionId === question.id);
      if (answer?.isCorrect) {
        categoryScores[question.category].correct++;
      }
    });

    return {
      score: quizState.score,
      totalQuestions: questions.length,
      percentage: Math.round((quizState.score / questions.length) * 100),
      timeSpent: quizState.timeSpent,
      categoryScores,
    };
  };

  const resetQuiz = () => {
    setQuizState({
      currentQuestion: 0,
      answers: [],
      isCompleted: false,
      score: 0,
      timeSpent: 0,
    });
    setStartTime(null);
  };

  return {
    quizState,
    currentQuestion: questions[quizState.currentQuestion],
    totalQuestions: questions.length,
    startQuiz,
    answerQuestion,
    getResults,
    resetQuiz,
  };
};