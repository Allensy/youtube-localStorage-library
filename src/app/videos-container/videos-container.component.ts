import { YoutubeDataServiceService } from '../services/youtube-data-service/youtube-data-service.service';
import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import { trigger, state, style, transition, animate } from "@angular/animations";
import { MdDialog } from '@angular/material';
import { YoutubePlayerComponent } from "app/youtube-player/youtube-player.component";

@Component({
  selector: 'app-videos-container',
  templateUrl: './videos-container.component.html',
  styleUrls: ['./videos-container.component.scss'],
  animations: [
    trigger('videoChanged', [
      state('hide', style({
        transform: 'scale(0)'
      })),
      state('show', style({
        transform: 'scale(1)'
      })),
      transition('hide => show', animate('1000ms ease-in'))
    ])
  ]
})
export class VideosContainerComponent implements OnInit {

  private videosArr: any[];
  private myVideos: boolean = false;
  private watchLaterVideosKeys: string[] = [];
  private localstorageVideos: any[] = [];
  private changeToView: string = 'my videos';
  private videoState: string = 'hide';

  constructor(
    private youtubeApiService: YoutubeDataServiceService,
    private localStorageService: LocalStorageService,
    private dialog: MdDialog
  ) { }

  ngOnInit() {
    this.watchLaterVideosKeys = this.localStorageService.keys();
    //subscribed to the the updated arr of results from the service
    this.youtubeApiService.videosArrChanged.subscribe(videosArr => {
      this.videoState = (this.videoState === 'hide' ? 'show' : 'hide');
      this.myVideos = false;
      this.videosArr = videosArr;
    });

    this.updateMyVideos(this.watchLaterVideosKeys);
  }

  //this function adds to localstorage and to the arr of the localstorage videos
  addToLater(id: string, video: object) {
    this.localStorageService.set(id, video);
    this.watchLaterVideosKeys = this.localStorageService.keys();
    this.localstorageVideos.push(this.localStorageService.get(id));
  }

  //change the view from searchResults to myVidos and back,
  changeVideosContainer() {
    this.myVideos = !this.myVideos;
    this.changeToView = this.myVideos ? 'search results' : 'my videos';
  }

  //remove the video form localstorage and updates the localstorageVideo
  removeFromMyVideos(id: string) {
    this.localStorageService.remove(id);
    this.updateMyVideos(this.localStorageService.keys());
  }

  //clears the localstorageVideos and innitials it again with the correct keys in the localstorage
  updateMyVideos(keys: string[]) {
    //this is may not be very efficient but since we are talking of array of 25 items its nothing. 
    //If I'll get more time I'll change it to map and then It will be O(n).
    this.localstorageVideos = [];
    keys.forEach(key => {
      this.localstorageVideos.push(this.localStorageService.get(key));
    })
  }

  openVideoModal(id: string) {
    this.dialog.open(YoutubePlayerComponent, { data: id });
  }

}
