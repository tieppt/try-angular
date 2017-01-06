import { ContactApplicationPage } from './app.po';

describe('contact-application App', function() {
  let page: ContactApplicationPage;

  beforeEach(() => {
    page = new ContactApplicationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
