import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule}from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { ALLAPPComponent } from './allapp/allapp.component';
import { HomeNavBarComponent } from './1AllComponent/home-nav-bar/home-nav-bar.component';
import { AboutMeComponent } from './1AllComponent/about-me/about-me.component';
import { ResumeComponent } from './1AllComponent/resume/resume.component';
import { PortfiloComponent } from './1AllComponent/portfilo/portfilo.component';
import { BlogComponent } from './1AllComponent/blog/blog.component';
import { ContactComponent } from './1AllComponent/contact/contact.component';
import { ExtraComponent } from './1AllComponent/extra/extra.component';
import { SocialMediaComponent } from './1AllComponent/social-media/social-media.component';
import { WidthServiceService } from './services/width-service.service';
import { NonComponen404Component } from './1AllComponent/non-componen404/non-componen404.component';
import { AboutDropDownMEnuComponent } from './1AllComponent/SUBCOmponent/about-drop-down-menu/about-drop-down-menu.component';
import { PortFiloDropMenuComponent } from './1AllComponent/SUBCOmponent/port-filo-drop-menu/port-filo-drop-menu.component';
import { BlogDropDownMenuComponent } from './1AllComponent/SUBCOmponent/blog-drop-down-menu/blog-drop-down-menu.component';
import { AboutIntroPhotoComponent } from './1AllComponent/SUBCOmponent/about-intro-photo/about-intro-photo.component';
import { WhatIDoComponent } from './1AllComponent/SUBCOmponent/what-ido/what-ido.component';
import { TitleComponentComponent } from './1AllComponent/SUBCOmponent/title-component/title-component.component';
import { PeopleOpenionComponent } from './1AllComponent/SUBCOmponent/people-openion/people-openion.component';
import { ClientsComponent } from './1AllComponent/SUBCOmponent/clients/clients.component';
import { FactsComponent } from './1AllComponent/SUBCOmponent/facts/facts.component';
import { SocialMediaComponentComponent } from './1AllComponent/SUBCOmponent/social-media-component/social-media-component.component';
import { PageHeadersComponent } from './1AllComponent/SUBCOmponent/page-headers/page-headers.component';
import { EducationComponent } from './1AllComponent/SUBCOmponent/education/education.component';
import { ExperienceComponent } from './1AllComponent/SUBCOmponent/experience/experience.component';
import { CertificationComponent } from './1AllComponent/SUBCOmponent/certification/certification.component';
import { SkillsComponent } from './1AllComponent/SUBCOmponent/skills/skills.component';
import { PortfolioWorkComponent } from './1AllComponent/SUBCOmponent/portfolio-work/portfolio-work.component';
import { ContactWithMEComponent } from './1AllComponent/SUBCOmponent/contact-with-me/contact-with-me.component';
import { GetDataFromJsonFileService } from './services/get-data-from-json-file.service';
import { TrytypescriptComponent } from './1AllComponent/SUBCOmponent/trytypescript/trytypescript.component';

@NgModule({
  declarations: [
    AppComponent,
    ALLAPPComponent,
    HomeNavBarComponent,
    AboutMeComponent,
    ResumeComponent,
    PortfiloComponent,
    BlogComponent,
    ContactComponent,
    ExtraComponent,
    SocialMediaComponent,
    NonComponen404Component,
    AboutDropDownMEnuComponent,
    PortFiloDropMenuComponent,
    BlogDropDownMenuComponent,
    AboutIntroPhotoComponent,
    WhatIDoComponent,
    TitleComponentComponent,
    PeopleOpenionComponent,
    ClientsComponent,
    FactsComponent,
    SocialMediaComponentComponent,
    PageHeadersComponent,
    EducationComponent,
    ExperienceComponent,
    CertificationComponent,
    SkillsComponent,
    PortfolioWorkComponent,
    ContactWithMEComponent,
    TrytypescriptComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    BrowserAnimationsModule , 
    HttpClientModule , 
    IvyCarouselModule , 
    FormsModule , 
    ReactiveFormsModule
  ],
  providers: [WidthServiceService , GetDataFromJsonFileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
