import { AppPage } from './app.po';

describe('new App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should have first page with correct question and answers', () => {
    page.navigateTo();
    expect(page.getHeaderText()).toContain('A Monty Python Quiz!');

    expect(page.getParagraphText()).toContain('What is your name?');

    expect(page.getRadioGroupItemCount()).toEqual(6);
  });

  it ('should move to 2nd question when first correct answer is submitted', () => {
    page.navigateTo();
    page.selectSirBedevere();
    page.clickSubmitButton();
    expect(page.getHeaderText()).toContain('A Monty Python Quiz!');
    expect(page.getParagraphText()).toContain('What is your quest?');
    expect(page.getRadioGroupItemCount()).toEqual(4);
  });
});
