import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoGamesRoutingModule } from './video-games-routing.module';
import { VideoGamesComponent } from './video-games.component';
import { FilterComponent } from './filter/filter.component';
import { VideoGameListItemComponent } from './video-game-list-item/video-game-list-item.component';


@NgModule({
  declarations: [
    VideoGamesComponent,
    FilterComponent,
    VideoGameListItemComponent
  ],
  imports: [
    CommonModule,
    VideoGamesRoutingModule
  ]
})
export class VideoGamesModule { }