import { MohitShrivastavaPage } from './app.po';

describe('mohit-shrivastava App', () => {
  let page: MohitShrivastavaPage;

  beforeEach(() => {
    page = new MohitShrivastavaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
