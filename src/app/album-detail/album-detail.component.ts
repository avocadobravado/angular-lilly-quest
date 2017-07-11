import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Scenario } from '../scenario.model';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css'],
  providers: [AlbumService]
})
export class AlbumDetailComponent implements OnInit {
  scenarioId: number;
  scenarioToDisplay: Scenario;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private albumService: AlbumService
  ) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.scenarioId = parseInt(urlParameters['id']);
    });
    this.scenarioToDisplay = this.albumService.getAlbumById(this.scenarioId);
  }

}
