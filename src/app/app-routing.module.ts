import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { HomeComponent } from './pages/home/home.component';
import { MockupsComponent } from './pages/mockups/mockups.component';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';
import { ReelsComponent } from './pages/reels/reels.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path:'gallery', component: GalleryComponent},
  {path:'mockups', component: MockupsComponent},
  {path:'reels', component: ReelsComponent},
  {path:'my profile', component: MyProfileComponent},
  {path:'**', component: HomeComponent},
  // {path:'', component:}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
