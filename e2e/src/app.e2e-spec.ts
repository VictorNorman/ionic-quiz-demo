import { AppPage } from './app.po';
import { browser } from 'protractor';

describe('new App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    // https://stackoverflow.com/questions/54712899/fail-loading-file-protractor-failed-script-timeout-result-was-not-received-i
    // Don't know why this is necessary, but without it I get a timeout error. 
    browser.ignoreSynchronization = true;
  });

  

  it('should have first page with correct question and answers', async () => {
    // const getCircularReplacer = () => {
    //   const seen = new WeakSet();
    //   return (key, value) => {
    //     if (typeof value === "object" && value !== null) {
    //       if (seen.has(value)) {
    //         return;
    //       }
    //       seen.add(value);
    //     }
    //     return value;
    //   };
    // };
    
    page.navigateTo();

    // browser.driver.sleep(30000);  // sleep 30 seconds.
    expect(page.getHeaderText()).toContain('Monty');
    const text = page.getQuestionText();

    expect(text).toContain('What is your name?');



    // expect(page.getRadioGroupItemCount()).toEqual(6);
  });

  // it ('should move to 2nd question when first correct answer is submitted', () => {
  //   page.navigateTo();
  //   page.selectSirBedevere();
  //   page.clickSubmitButton();
  //   expect(page.getHeaderText()).toContain('A Monty Python Quiz!');
  //   expect(page.getParagraphText()).toContain('What is your quest?');
  //   expect(page.getRadioGroupItemCount()).toEqual(4);
  // });
});
