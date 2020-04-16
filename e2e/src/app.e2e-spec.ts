import { AppPage } from './app.po';
import { browser } from 'protractor';

describe('new App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    // https://stackoverflow.com/questions/54712899/fail-loading-file-protractor-failed-script-timeout-result-was-not-received-i
    // Don't know why this is necessary, but without it I get a timeout error. 
    browser.ignoreSynchronization = true;
    page.navigateTo();
    // sleep 1/2 sec to allow things to load from firestore
    browser.driver.sleep(500);
  });

  it('should have first page with correct question and answers', () => {
    expect(page.getTitleText()).toContain('Monty Python Quiz!');
    expect(page.getQuestionText()).toContain('What is your name?');
    expect(page.getRadioGroupItemCount()).toEqual(6);
  });

  it('should move to 2nd question when first correct answer is submitted', () => {
    page.selectRadioButtonAnswer('Sir Bedevere');
    page.clickSubmitButton();
    expect(page.getFeedbackText()).toContain('Correct!');
    browser.driver.sleep(1000);
    expect(page.getTitleText()).toContain('A Monty Python Quiz!');
    expect(page.getQuestionText()).toContain('What is your quest?');
    expect(page.getRadioGroupItemCount()).toEqual(3);
  });

  it('should indicate an error when the incorrect answer is submitted', () => {
    page.selectRadioButtonAnswer('A Shrubbery');
    page.clickSubmitButton();
    expect(page.getFeedbackText()).toContain('Sorry, no. Try again.');
    expect(page.getTitleText()).toContain('A Monty Python Quiz!');
    expect(page.getQuestionText()).toContain('What is your name?');
    expect(page.getRadioGroupItemCount()).toEqual(6);
  });

  it('should move through all questions to the end', () => {
    page.selectRadioButtonAnswer('Sir Bedevere');
    page.clickSubmitButton();
    expect(page.getFeedbackText()).toContain('Correct!');
    browser.driver.sleep(1000);
    expect(page.getTitleText()).toContain('A Monty Python Quiz!');
    expect(page.getQuestionText()).toContain('What is your quest?');
    expect(page.getRadioGroupItemCount()).toEqual(3);

    page.selectRadioButtonAnswer('To seek the holy grail');
    page.clickSubmitButton();
    expect(page.getFeedbackText()).toContain('Correct!');
    browser.driver.sleep(1000);
    expect(page.getTitleText()).toContain('A Monty Python Quiz!');
    expect(page.getQuestionText()).toContain('What is your favorite color?');
    expect(page.getRadioGroupItemCount()).toEqual(5);

    page.selectRadioButtonAnswer('Maroon');
    page.clickSubmitButton();
    expect(page.getFeedbackText()).toContain('Correct!');
    browser.driver.sleep(1000);
    expect(page.getTitleText()).toContain('A Monty Python Quiz!');
    expect(page.getQuestionText()).toContain('What is the best thing');
    expect(page.getRadioGroupItemCount()).toEqual(4);

    page.selectRadioButtonAnswer('All of the above!');
    page.clickSubmitButton();
    expect(page.getFeedbackText()).toContain('Correct!');
    browser.driver.sleep(1100);
    expect(page.getFeedbackText()).toContain('You have finished the quiz.');
  });

});
