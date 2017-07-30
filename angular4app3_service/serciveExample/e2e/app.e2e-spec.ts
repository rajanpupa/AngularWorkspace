import { SerciveExamplePage } from './app.po';

describe('sercive-example App', () => {
  let page: SerciveExamplePage;

  beforeEach(() => {
    page = new SerciveExamplePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
