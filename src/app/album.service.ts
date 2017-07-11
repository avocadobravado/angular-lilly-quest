import { Injectable } from '@angular/core';
import { Scenario } from './scenario.model';
import { SCENARIOS } from './scenarios';

@Injectable()
export class AlbumService {

  constructor() { }

  getAlbums() {
    return SCENARIOS;
  }

  getAlbumById(albumId: number){
    for (var i = 0; i <= SCENARIOS.length - 1; i++) {
      if (SCENARIOS[i].id === albumId) {
        return SCENARIOS[i];
      }
    }
  }


}
