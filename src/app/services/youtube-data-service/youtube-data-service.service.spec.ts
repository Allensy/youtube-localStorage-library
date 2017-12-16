import { TestBed, inject } from '@angular/core/testing';

import { YoutubeDataServiceService } from './youtube-data-service.service';

describe('YoutubeDataServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [YoutubeDataServiceService]
    });
  });

  it('should be created', inject([YoutubeDataServiceService], (service: YoutubeDataServiceService) => {
    expect(service).toBeTruthy();
  }));
});
