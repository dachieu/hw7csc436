import { Hw7csc436Page } from './app.po';

describe('hw7csc436 App', () => {
  let page: Hw7csc436Page;

  beforeEach(() => {
    page = new Hw7csc436Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
