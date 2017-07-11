import { Component, OnInit } from '@angular/core';
import { Album } from '../album.model';
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

  albums: Album[];

  ngOnInit(){
    this.albums = this.albumService.getAlbums();
  }

  goToDetailPage(clickedAlbum: Album) {
  this.router.navigate(['albums', clickedAlbum.id]);
  };
}
