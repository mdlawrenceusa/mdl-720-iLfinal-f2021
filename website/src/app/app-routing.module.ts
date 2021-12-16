import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ArtComponent } from './art/art.component';
import { PhotoComponent } from './photo/photo.component';
import { ParallaxComponent } from './parallax/parallax.component';
import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [
  
   { path: '', component: WelcomeComponent },
   { path: 'art', component: ArtComponent },
   { path: 'photo', component: PhotoComponent },
   { path: 'parallax', component: ParallaxComponent },
   { path: 'resume', component: ResumeComponent },
  
  
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
