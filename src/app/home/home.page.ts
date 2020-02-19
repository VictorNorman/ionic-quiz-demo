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

  constructor(
    public quizDataSvc: QuizDataService,
  ) {
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
