import { StoneParkApartmentAppPage } from './app.po';

describe('stone-park-apartment-app App', () => {
  let page: StoneParkApartmentAppPage;

  beforeEach(() => {
    page = new StoneParkApartmentAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
