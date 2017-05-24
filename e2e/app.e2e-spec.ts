import { MummyDaddyAppPage } from './app.po';

describe('mummy-daddy-app App', () => {
  let page: MummyDaddyAppPage;

  beforeEach(() => {
    page = new MummyDaddyAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
