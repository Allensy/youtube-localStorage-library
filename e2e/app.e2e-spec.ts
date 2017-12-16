import { YoutubeVideoLibraryPage } from './app.po';

describe('youtube-video-library App', () => {
  let page: YoutubeVideoLibraryPage;

  beforeEach(() => {
    page = new YoutubeVideoLibraryPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
