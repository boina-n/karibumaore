export class KaribumaorePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('karibumaore-app h1')).getText();
  }
}
