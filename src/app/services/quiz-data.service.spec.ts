import { TestBed } from '@angular/core/testing';

import { QuizDataService } from './quiz-data.service';

describe('QuizDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuizDataService = TestBed.get(QuizDataService);
    expect(service).toBeTruthy();
  });
});
