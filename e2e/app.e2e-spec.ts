import { RemoveWhiteSpacePage } from './app.po';

describe('remove-white-space App', () => {
  let page: RemoveWhiteSpacePage;

  beforeEach(() => {
    page = new RemoveWhiteSpacePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
