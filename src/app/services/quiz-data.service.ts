import { Injectable } from '@angular/core';

export interface QuestionAndAnswers {
  question: string;
  answers: string[];
  correctAnswer: string;
}

@Injectable({
  providedIn: 'root'
})
export class QuizDataService {

  private qandas: QuestionAndAnswers[] = [
    {
      question: 'What is your name?',
      answers: [
        'Sir Lancelot',
        'Sir Bedevere',
        'A Dirty Peasant',
        'A Knight Who Says Ni',
        'The Black Knight',
        'A Shrubbery',
      ],
      correctAnswer: 'Sir Bedevere',
    },
    {
      question: 'What is your quest?',
      answers: [
        'To be your king',
        'To throw the holy hand-granade',
        'To seek the Holy Grail',
      ],
      correctAnswer: 'To seek the Holy Grail',
    },
    {
      question: 'What is your favorite color?',
      answers: [
        'Blue',
        'Orange',
        'Chartreuse',
        'Red',
        'Green',
      ],
      correctAnswer: 'Red',
    },
  ];

  private questionNum: number;

  constructor(
  ) {
    this.questionNum = 0;
  }

  public getQuestion() {
    return this.qandas[this.questionNum].question;
  }

  public getAnswers() {
    return this.qandas[this.questionNum].answers;
  }

  public isAnswerCorrect(answer: string): boolean {
    return answer === this.qandas[this.questionNum].correctAnswer;
  }

  public isLastQuestion() {
    return this.questionNum === this.qandas.length - 1;
  }

  public goToNextQuestion() {
    this.questionNum++;
  }
}
