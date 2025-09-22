import { useState } from 'react';
import { useQuiz } from '../hooks/useQuiz';
import { questions } from '../data/questions';
import { QuizCard } from './QuizCard';
import { QuizResults } from './QuizResults';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { BookOpen, Play, Code2, Cpu, Database } from 'lucide-react';

export const InteractiveQuiz = () => {
  const {
    quizState,
    currentQuestion,
    totalQuestions,
    startQuiz,
    answerQuestion,
    getResults,
    resetQuiz,
  } = useQuiz(questions);

  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const handleAnswer = (answer: number) => {
    setSelectedAnswer(answer);
    setTimeout(() => {
      answerQuestion(answer);
      setSelectedAnswer(null);
    }, 800);
  };

  if (!quizState.currentQuestion && !quizState.isCompleted) {
    // Welcome screen
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl bg-gradient-card shadow-elegant">
          <CardHeader className="text-center space-y-6">
            <div className="mx-auto w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center">
              <Code2 className="h-10 w-10 text-white" />
            </div>
            <CardTitle className="text-3xl md:text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              Test de Fonaments de Programació
            </CardTitle>
            <p className="text-muted-foreground text-lg max-w-md mx-auto">
              Posa a prova els teus coneixements sobre llenguatges de programació i diagrames de flux
            </p>
          </CardHeader>

          <CardContent className="space-y-8">
            {/* Quiz Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 rounded-lg bg-muted/30">
                <BookOpen className="mx-auto h-8 w-8 text-primary mb-2" />
                <div className="font-semibold">{totalQuestions} preguntes</div>
                <div className="text-sm text-muted-foreground">Total</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-muted/30">
                <Cpu className="mx-auto h-8 w-8 text-accent mb-2" />
                <div className="font-semibold">10 categories</div>
                <div className="text-sm text-muted-foreground">Diferents temes</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-muted/30">
                <Database className="mx-auto h-8 w-8 text-success mb-2" />
                <div className="font-semibold">~15 min</div>
                <div className="text-sm text-muted-foreground">Durada aproximada</div>
              </div>
            </div>

            {/* Categories Preview */}
            <div className="space-y-3">
              <h3 className="font-semibold text-lg">Categories del test:</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'Introducció a la programació',
                  'Programes i algorismes', 
                  'Llenguatges de programació',
                  'Tipus de llenguatges',
                  'Assembladors i intèrprets',
                  'Fases de desenvolupament',
                  'Disseny d\'algorismes',
                  'Dades i variables',
                  'Diagrames de flux',
                  'Casos pràctics'
                ].map((category) => (
                  <Badge key={category} variant="secondary" className="text-xs">
                    {category}
                  </Badge>
                ))}
              </div>
            </div>

            <Button 
              onClick={startQuiz} 
              size="lg" 
              className="w-full bg-gradient-hero hover:opacity-90 text-white shadow-md transition-all duration-200 hover:scale-[1.02]"
            >
              <Play className="mr-2 h-5 w-5" />
              Començar test
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (quizState.isCompleted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background flex items-center justify-center p-4">
        <QuizResults results={getResults()} onRestart={resetQuiz} />
      </div>
    );
  }

  // Quiz in progress
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background flex items-center justify-center p-4">
      <QuizCard
        question={currentQuestion}
        currentIndex={quizState.currentQuestion}
        totalQuestions={totalQuestions}
        onAnswer={handleAnswer}
        selectedAnswer={selectedAnswer}
        timeSpent={quizState.timeSpent}
      />
    </div>
  );
};