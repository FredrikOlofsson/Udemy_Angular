import { MyUdemyTutorialPage } from './app.po';

describe('my-udemy-tutorial App', () => {
  let page: MyUdemyTutorialPage;

  beforeEach(() => {
    page = new MyUdemyTutorialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
