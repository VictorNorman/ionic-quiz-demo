import { Component } from '@angular/core';
import { QuizDataService } from '../services/quiz-data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private selectedAnswer = '';
  public feedback = '';

  // Note if the data has been loaded from firebase into the quizDataSvc.
  // Don't call functions in quizDataSvc until it has data.
  public dataLoaded = false;

  constructor(
    public quizDataSvc: QuizDataService,
  ) {
    this.quizDataSvc.qandasSubj.subscribe(hasArrived => {
      if (hasArrived && this.quizDataSvc.isDataLoaded()) {
        this.dataLoaded = true;
      }
    });
  }

  answerSelected(value) {
    // console.log('selected = ', value.detail.value);
    this.selectedAnswer = value.detail.value;
  }

  submit() {
    if (this.quizDataSvc.isAnswerCorrect(this.selectedAnswer)) {
      this.feedback = 'Correct!';
      setTimeout(() => this.gotoNextQuestion(), 1000);
    } else {
      this.feedback = 'Sorry, no.  Try again.';
    }
  }

  private gotoNextQuestion() {
    if (this.quizDataSvc.isLastQuestion()) {
      this.feedback = 'You have finished the quiz.';
    } else {
      this.quizDataSvc.goToNextQuestion();
      this.feedback = '';
    }
  }
}
