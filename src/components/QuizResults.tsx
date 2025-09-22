import { QuizResults as QuizResultsType } from '../types/quiz';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Trophy, Clock, Target, RotateCcw, BookOpen } from 'lucide-react';

interface QuizResultsProps {
  results: QuizResultsType;
  onRestart: () => void;
}

export const QuizResults = ({ results, onRestart }: QuizResultsProps) => {
  const getPerformanceLevel = (percentage: number) => {
    if (percentage >= 90) return { level: 'Excel·lent', color: 'success', icon: '🏆' };
    if (percentage >= 80) return { level: 'Molt bé', color: 'primary', icon: '🥇' };
    if (percentage >= 70) return { level: 'Bé', color: 'warning', icon: '👍' };
    if (percentage >= 60) return { level: 'Suficient', color: 'warning', icon: '📚' };
    return { level: 'Cal millorar', color: 'destructive', icon: '💪' };
  };

  const performance = getPerformanceLevel(results.percentage);
  
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* Main Results Card */}
      <Card className="bg-gradient-hero text-white shadow-glow">
        <CardHeader className="text-center pb-6">
          <div className="text-6xl mb-4">{performance.icon}</div>
          <CardTitle className="text-3xl md:text-4xl font-bold mb-2">
            {performance.level}!
          </CardTitle>
          <p className="text-xl opacity-90">
            Has completat el test de Fonaments de Programació
          </p>
        </CardHeader>
        <CardContent className="text-center space-y-6">
          <div className="text-6xl md:text-8xl font-bold">
            {results.percentage}%
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="space-y-2">
              <Target className="mx-auto h-8 w-8" />
              <div className="text-2xl font-bold">{results.score}</div>
              <div className="text-sm opacity-80">de {results.totalQuestions} correctes</div>
            </div>
            <div className="space-y-2">
              <Clock className="mx-auto h-8 w-8" />
              <div className="text-2xl font-bold">{formatTime(results.timeSpent)}</div>
              <div className="text-sm opacity-80">temps total</div>
            </div>
            <div className="space-y-2">
              <Trophy className="mx-auto h-8 w-8" />
              <div className="text-2xl font-bold">{Math.round(results.timeSpent / results.totalQuestions)}</div>
              <div className="text-sm opacity-80">segons per pregunta</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Category Breakdown */}
      <Card className="shadow-elegant">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            Resultats per categoria
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {Object.entries(results.categoryScores).map(([category, scores]) => {
            const categoryPercentage = (scores.correct / scores.total) * 100;
            return (
              <div key={category} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-sm">{category}</span>
                  <Badge variant={categoryPercentage >= 70 ? 'default' : 'secondary'}>
                    {scores.correct}/{scores.total}
                  </Badge>
                </div>
                <Progress value={categoryPercentage} className="h-2" />
                <div className="text-right text-xs text-muted-foreground">
                  {Math.round(categoryPercentage)}%
                </div>
              </div>
            );
          })}
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button 
          onClick={onRestart} 
          size="lg" 
          className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-md"
        >
          <RotateCcw className="mr-2 h-5 w-5" />
          Repetir test
        </Button>
      </div>
    </div>
  );
};