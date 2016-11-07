import { AppGitPage } from './app.po';

describe('app-git App', function() {
  let page: AppGitPage;

  beforeEach(() => {
    page = new AppGitPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
