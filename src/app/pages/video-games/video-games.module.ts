import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VideoGamesRoutingModule } from './video-games-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { VideoGamesStateService } from './video-games-state.service';
import { VideoGamesComponent } from './video-games.component';
import { FilterComponent } from './filter/filter.component';
import { VideoGameListItemComponent } from './video-game-list-item/video-game-list-item.component';

@NgModule({
  declarations: [VideoGamesComponent, FilterComponent, VideoGameListItemComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, VideoGamesRoutingModule, SharedModule],
  providers: [VideoGamesStateService],
})
export class VideoGamesModule {}