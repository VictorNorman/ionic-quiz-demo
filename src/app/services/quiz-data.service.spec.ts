import { QuizDataService } from './quiz-data.service';
import { TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/firestore';
import { QuizDataServiceMock, FirestoreStub } from 'src/mocks/mocks';


describe('QuizDataService', () => {

  let service: QuizDataService;

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [],
      providers: [
        { provide: QuizDataService, useClass: QuizDataServiceMock },
        { provide: AngularFirestore, useClass: FirestoreStub },
      ],
    }).compileComponents();

    service = TestBed.get(QuizDataService);
  });

  it('should be created', () => {
    service.loadAllData();
    expect(service).toBeTruthy();
    expect(service.isDataLoaded()).toBeTruthy();
  });

  it('should indicate we are not at the last question', () => {
    expect(service.isLastQuestion()).toBeFalsy();
  });

  it('should be at last question when we have moved to 4th question', () => {
    service.goToNextQuestion();  // when done, at q 1
    service.goToNextQuestion();  // q 2
    service.goToNextQuestion();  // q 3
    expect(service.isLastQuestion()).toBeTruthy();
  });

  it('0th question should be correct', () => {
    expect(service.getQuestion()).toEqual('What is your name?');
  });

  it('0th question should have 6 answers', () => {
    expect(service.getAnswers().length).toEqual(6);
  });

  it('each correct answer to be in the list of answers', () => {
    while (!service.isLastQuestion()) {
      const answers: string[] = service.getAnswers();
      let foundCorrect = false;
      for (let ans of answers) {
        if (service.isAnswerCorrect(ans)) {
          foundCorrect = true;
          break;
        }
      }
      expect(foundCorrect).toBeTruthy();
      service.goToNextQuestion();
    }
  });

});
