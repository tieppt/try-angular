import { ContactNgfPage } from './app.po';

describe('contact-ngf App', () => {
  let page: ContactNgfPage;

  beforeEach(() => {
    page = new ContactNgfPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
