import { browser, by, element, ElementArrayFinder } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }
  getTitleText() {
    return element(by.deepCss('.test-title')).getText();
  }

  getQuestionText() {
    // return element(by.deepCss('app-root ion-content')).getText();
    // return element(by.deepCss('.question')).getText(z);
    return element(by.deepCss('ion-item.test-question')).getText();
  }

  getRadioGroupItemCount() {
    const radioGroupItems: ElementArrayFinder =
      element.all(by.deepCss('app-root ion-content ion-list ion-radio-group ion-item'));
    return radioGroupItems.count();
  }

  selectRadioButtonAnswer(answer: string): void {
    element(by.cssContainingText('ion-item', answer)).click();
  }

  async clickSubmitButton() {
    await element(by.deepCss('ion-button[type="submit"]')).click();
  }

  getFeedbackText() {
    return element(by.deepCss('.test-feedback')).getText();
  }
}