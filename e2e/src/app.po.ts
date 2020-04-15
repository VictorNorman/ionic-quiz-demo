import { browser, by, element, ElementArrayFinder } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }
  getQuestionText() {
    // return element(by.deepCss('app-root ion-content')).getText();
    // return element(by.deepCss('.question')).getText();
    return element(by.deepCss('ion-item .question')).getText();
  }
  getHeaderText() {
    // const el: ElementFinder  = element(by.deepCss('ion-title'));
    // console.log("😀😀😀😀 EL IS: ", el);
    return element(by.deepCss('.test-title')).getText();
  }

  getRadioGroupItemCount() {
    const radioGroupItems: ElementArrayFinder = 
        element.all(by.deepCss('app-root ion-content ion-list ion-radio-group ion-item'));
    return radioGroupItems.count();
  }

  selectSirBedevere() {

  }

  clickSubmitButton() {

  }
}