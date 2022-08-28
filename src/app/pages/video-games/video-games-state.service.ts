import { Injectable } from '@angular/core';
import { BehaviorSubject, firstValueFrom } from 'rxjs';

import { VideoGame } from '../../core/models/video-game.model';
import { VideoGameService } from '../../core/services/video-game.service';

@Injectable()
export class VideoGamesStateService {
  videoGames: VideoGame[] = [];
  videoGames$: BehaviorSubject<VideoGame[]> = new BehaviorSubject<VideoGame[]>(this.videoGames);

  isLoading = false;
  isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.isLoading);

  constructor(private videoGameService: VideoGameService) {}

  async load() {
    try {
      // Start loading spinner
      this.isLoading = true;
      this.isLoading$.next(this.isLoading);
      // Fetch the data from the API
      this.videoGames = await firstValueFrom(this.videoGameService.getVideoGames());
      this.videoGames$.next(this.videoGames);
    } catch (e) {
    } finally {
      this.isLoading = false;
      this.isLoading$.next(this.isLoading);
    }
  }
}