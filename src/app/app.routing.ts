import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { YesComponent }   from './yes/yes.component';
import { GameOverComponent }   from './game-over/game-over.component';
import { AlbumDetailComponent }   from './album-detail/album-detail.component';

const appRoutes: Routes = [
  {
     path: '',
     component: WelcomeComponent
   },
  {
    path: 'yes',
    component: YesComponent
  },
  {
    path: 'game-over',
    component: GameOverComponent
  },
  {
    path: 'scenarios/:id',
    component: AlbumDetailComponent
  }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
