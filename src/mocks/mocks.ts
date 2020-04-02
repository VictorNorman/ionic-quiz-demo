import { BehaviorSubject } from "rxjs";
import { QuestionAndAnswers } from 'src/app/services/quiz-data.service';

// From https://github.com/angular/angularfire/issues/1706
// Not really sure why this works
//
export const FirestoreStub = {
    collection: (name: string) => ({
        doc: (_id: string) => ({
            valueChanges: () => new BehaviorSubject({ foo: 'bar' }),
            set: (_d: any) => new Promise((resolve, _reject) => resolve()),
        }),
    }),
};

export class QuizDataServiceMock {

    private data: QuestionAndAnswers[] = [];
    private questionNum: number;
  
    constructor() {
      this.questionNum = 0;
      this.data = [
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
            'Green',
            'Maroon',
            'Red',
          ],
          correctAnswer: 'Maroon',
        },
        {
          question: 'What is the best thing about Computer Sciecne at Calvin?',
          answers: [
            'The professors!',
            'This quiz!',
            'We aren\'t Hope College.',
            'All the above',
          ],
          correctAnswer: 'All of the above!',
        },
      ];
    }
  
    async loadAllData() {
      console.log('🏣🏣🏣🏣loadAllData in Mock called!!!')
    }
  
    public isDataLoaded() {
      return this.data.length !== 0;
    }
  
    public getQuestion() {
      return this.data[this.questionNum].question;
    }
  
    public getAnswers() {
      return this.data[this.questionNum].answers;
    }
  
    public isAnswerCorrect(answer: string): boolean {
      return answer === this.data[this.questionNum].correctAnswer;
    }
  
    public isLastQuestion() {
      return this.questionNum === this.data.length - 1;
    }
  
    public goToNextQuestion() {
      this.questionNum++;
    }
  }