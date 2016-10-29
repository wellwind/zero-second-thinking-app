import { ZeroSecondThinkingAppPage } from './app.po';

describe('zero-second-thinking-app App', function() {
  let page: ZeroSecondThinkingAppPage;

  beforeEach(() => {
    page = new ZeroSecondThinkingAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
