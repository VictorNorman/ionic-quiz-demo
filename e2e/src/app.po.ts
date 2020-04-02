import { browser, by, element, ElementArrayFinder } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }
  getParagraphText() {
    return element(by.deepCss('app-root ion-content')).getText();
  }
  getHeaderText() {
    return element(by.deepCss('app-root ion-header ion-toolbar ion-title')).getText();
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