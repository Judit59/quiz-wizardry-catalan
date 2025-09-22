import { Question } from '../types/quiz';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { Clock, Brain } from 'lucide-react';

interface QuizCardProps {
  question: Question;
  currentIndex: number;
  totalQuestions: number;
  onAnswer: (answer: number) => void;
  selectedAnswer: number | null;
  timeSpent: number;
}

export const QuizCard = ({
  question,
  currentIndex,
  totalQuestions,
  onAnswer,
  selectedAnswer,
  timeSpent,
}: QuizCardProps) => {
  const progress = ((currentIndex + 1) / totalQuestions) * 100;
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <Card className="w-full max-w-4xl mx-auto bg-gradient-card shadow-elegant transition-all duration-300 hover:shadow-glow">
      <CardHeader className="space-y-6">
        <div className="flex items-center justify-between">
          <Badge variant="secondary" className="text-sm font-medium">
            <Brain className="mr-2 h-4 w-4" />
            {question.category}
          </Badge>
          <div className="flex items-center text-muted-foreground">
            <Clock className="mr-2 h-4 w-4" />
            <span className="text-sm font-medium">{formatTime(timeSpent)}</span>
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>Pregunta {currentIndex + 1} de {totalQuestions}</span>
            <span>{Math.round(progress)}% completat</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <CardTitle className="text-xl md:text-2xl leading-relaxed text-foreground">
          {question.question}
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="grid gap-3">
          {question.options.map((option, index) => (
            <Button
              key={index}
              variant={selectedAnswer === index ? "default" : "outline"}
              size="lg"
              className={`
                p-4 h-auto text-left justify-start transition-all duration-200 
                ${selectedAnswer === index 
                  ? 'bg-primary text-primary-foreground shadow-md transform scale-[1.02]' 
                  : 'hover:bg-muted/50 hover:scale-[1.01]'
                }
              `}
              onClick={() => onAnswer(index)}
              disabled={selectedAnswer !== null}
            >
              <span className="flex items-center gap-3 w-full">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-muted text-muted-foreground text-sm font-semibold">
                  {String.fromCharCode(65 + index)}
                </span>
                <span className="flex-1 text-wrap">{option}</span>
              </span>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};