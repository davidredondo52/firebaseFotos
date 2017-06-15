import { FireBaseFotosPage } from './app.po';

describe('fire-base-fotos App', () => {
  let page: FireBaseFotosPage;

  beforeEach(() => {
    page = new FireBaseFotosPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
