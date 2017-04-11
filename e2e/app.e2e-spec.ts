import { MoodswingsAppPage } from './app.po';

describe('moodswings-app App', () => {
  let page: MoodswingsAppPage;

  beforeEach(() => {
    page = new MoodswingsAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
