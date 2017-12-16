import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
// import { Observable } from "rxjs/Observable";
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from "rxjs/BehaviorSubject";

@Injectable()
export class YoutubeDataServiceService {

  private readonly YOUTUBE_API_BASE_URL: string = 'https://www.googleapis.com/youtube/v3/search';
  private readonly api_key: string = "AIzaSyD9qsoy3t1OLitJYnjBvTPMbXBASw25YJg";
  private readonly max_results: number = 25;
  public videosArrChanged: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(null);

  constructor(
    private http: Http
  ) { }

  //create a subscription to the search results so every component who need the result can subscribe and get it
  searchVideos(query) {
    return this.http.get(`${this.YOUTUBE_API_BASE_URL}?q=${query}&part=snippet&type=video&maxResults=${this.max_results}&key=${this.api_key}`)
      .map(res => { 
        this.videosArrChanged.next(res.json().items );
        return res.json().items;
      });
  }

  public set videosArr(videos: any[]) {
    this.videosArrChanged.next(videos);
  }
}
