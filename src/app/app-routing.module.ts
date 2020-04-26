import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ChampionshipComponent } from './pages/championship/championship.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { HomeComponent } from './pages/home/home.component';
import { UserComponent } from './pages/user/user.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  // Menu Header
  { path: 'home', component: HomeComponent },
  { path: 'championship', component: ChampionshipComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'about', component: AboutComponent },
  { path: 'user', component: UserComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
