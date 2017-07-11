import { Component, OnInit } from '@angular/core';
import { Scenario } from '../scenario.model';
import { Router } from '@angular/router';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-game-over',
  templateUrl: './game-over.component.html',
  styleUrls: ['./game-over.component.css'],
  providers: [AlbumService]
})

export class GameOverComponent implements OnInit  {
  constructor(private router: Router, private albumService: AlbumService) {}

  albums: Scenario[];

  ngOnInit(){
    this.albums = this.albumService.getAlbums();
  }

  goToDetailPage(clickedAlbum: Scenario) {
  this.router.navigate(['albums', clickedAlbum.id]);
  };
}
