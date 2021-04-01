import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './1AllComponent/about-me/about-me.component';
import { BlogComponent } from './1AllComponent/blog/blog.component';
import { ContactComponent } from './1AllComponent/contact/contact.component';
import { ExtraComponent } from './1AllComponent/extra/extra.component';
import { NonComponen404Component } from './1AllComponent/non-componen404/non-componen404.component';
import { PortfiloComponent } from './1AllComponent/portfilo/portfilo.component';
import { ResumeComponent } from './1AllComponent/resume/resume.component';
import { SocialMediaComponent } from './1AllComponent/social-media/social-media.component';

const routes : Routes = [
  {path:'' , component:AboutMeComponent } , 
  {path:'Blog' , component:BlogComponent} , 
  {path:'Contact' , component:ContactComponent} , 
  {path:'Extra' , component :ExtraComponent } , 
  {path:'Portfilo' , component:PortfiloComponent} , 
  {path:'Resume' , component:ResumeComponent} , 
  {path:'Social-media' , component:SocialMediaComponent} , 
  {path:'**' , component:NonComponen404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
