import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MaterialModule } from '@angular/material';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { YoutubeDataServiceService } from "app/services/youtube-data-service/youtube-data-service.service";
import { HttpModule, Http } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { VideosContainerComponent } from './videos-container/videos-container.component';
import { LocalStorageModule } from 'angular-2-local-storage';
import { MdDialogModule } from '@angular/material';
import { YoutubePlayerComponent } from './youtube-player/youtube-player.component';

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    VideosContainerComponent,
    YoutubePlayerComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    HttpModule,
    HttpClientModule,
    LocalStorageModule.withConfig({
      prefix: 'app',
      storageType: 'localStorage'
    }),
    BrowserAnimationsModule,
    MdDialogModule
  ],
  providers: [YoutubeDataServiceService],
  bootstrap: [AppComponent],
  entryComponents: [YoutubePlayerComponent]
})
export class AppModule { }
