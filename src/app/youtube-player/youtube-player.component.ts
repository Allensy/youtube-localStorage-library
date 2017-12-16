import { Component, OnInit, Inject } from '@angular/core';
import { MD_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-youtube-player',
  templateUrl: './youtube-player.component.html',
  styleUrls: ['./youtube-player.component.scss']
})
export class YoutubePlayerComponent implements OnInit {
  private videoSrc: string;

  constructor( @Inject(MD_DIALOG_DATA) private data: any) { }

  ngOnInit() {
    this.videoSrc = `https://www.youtube.com/embed/${this.data}`;
    //not the best, but I had troubles with ng2 youtube players (the few that I found)
    document.getElementById('myIframe').setAttribute('src', this.videoSrc);
  }
}
