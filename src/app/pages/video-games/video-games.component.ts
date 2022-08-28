import { Component, OnInit } from '@angular/core';
import { VideoGamesStateService } from './video-games-state.service';

@Component({
  selector: 'app-video-games',
  templateUrl: './video-games.component.html',
  styleUrls: ['./video-games.component.scss']
})
export class VideoGamesComponent implements OnInit {
  videoGames$ = this.videoGamesStateService.videoGames$;
  isLoading$ = this.videoGamesStateService.isLoading$;
  isLoading = false;
  constructor(private videoGamesStateService: VideoGamesStateService) {}


  ngOnInit(): void {
    this.videoGamesStateService.load();
  }

}
