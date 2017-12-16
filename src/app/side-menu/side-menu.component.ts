import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Http } from "@angular/http";
import { YoutubeDataServiceService } from "app/services/youtube-data-service/youtube-data-service.service";

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  @Output() videos: EventEmitter<any> = new EventEmitter<any>();

  private videosArr: any[] = [];
  constructor(
    private youtubeApiService: YoutubeDataServiceService,
  ) { }

  ngOnInit() {
  }

  valueChanged(event) {
    this.youtubeApiService.searchVideos(event.target.value).subscribe(res => {
      this.youtubeApiService.videosArr = res;
    })
  }
}
