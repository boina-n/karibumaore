import { KaribumaorePage } from './app.po';

describe('karibumaore App', function() {
  let page: KaribumaorePage;

  beforeEach(() => {
    page = new KaribumaorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('karibumaore works!');
  });
});
