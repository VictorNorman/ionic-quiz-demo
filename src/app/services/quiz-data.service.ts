import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';

export interface QuestionAndAnswers {
  question: string;
  answers: string[];
  correctAnswer: string;
}

@Injectable({
  providedIn: 'root'
})
export class QuizDataService {


  private questionNum: number;

  private qandaCollection: AngularFirestoreCollection<QuestionAndAnswers>;

  // Store the data we pull down from firestore
  private data: QuestionAndAnswers[] = [];

  public qandasSubj: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(undefined);


  constructor(
    private db: AngularFirestore,
  ) {
    this.questionNum = 0;
    console.log('qandaCollection = ', this.qandaCollection);
  }

  async loadAllData() {
    if (this.data.length !== 0) {
      return;
    }

    this.data = [];
    this.qandaCollection = this.db.collection<QuestionAndAnswers>('qandas');

    const qandaRef = this.qandaCollection.doc('0');

    qandaRef.get().subscribe(data => {
      const qandas = data.get('qandas');
      console.log('in subscribe: qs = ', qandas);
      qandas.forEach(qanda => {
        this.data.push({
          question: qanda.question,
          correctAnswer: qanda.correctAnswer,
          // next line because I made a typo in the online database...
          answers: qanda.answers || qanda.answerds,
        });
      });

      // Tell all subscribers that the data has arrived.
      this.qandasSubj.next(true);
    });

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
