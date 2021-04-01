import { Component, HostListener, OnInit } from '@angular/core';
import { CollExp } from 'src/app/Animation/collapse-expand-animation';
import { WidthServiceService } from 'src/app/services/width-service.service';

@Component({
  selector: 'app-home-nav-bar',
  templateUrl: './home-nav-bar.component.html',
  styleUrls: ['./home-nav-bar.component.scss'] , 
  animations:[CollExp]
})


export class HomeNavBarComponent implements OnInit {

  listValue = ['About me' , 'Resume' , 'Portfilo' , 'Blog' , 'Contact' ,'Extra' , 'Social Media'] ; 
  Profilephotosrc="./../../../assets/online-resume.png" ;
  isExpanded : boolean = false ; 
  defaultView="About me" ;
  Width : number ; 


  constructor( private widService: WidthServiceService) { }


  ngOnInit(): void {
    this.Width = window.innerWidth ; //get width on load 
  }


  @HostListener('window:resize', ['$event']) 
  onResizefunc()
  {
   this.Width = this.widService.onResize(event) ; 
   console.log(this.Width)
  }

  

  ToggleEXPCOLL()
  {
      this.isExpanded = !this.isExpanded ;
      console.log('toggled')
  }

  
  defaultViewFun(activePage:string)
  {
    this.defaultView=activePage;
  }  
}



/*
window.addEventListener('resize' ,(event)=>
{
  var newWidth=window.innerWidth ; 
   var newheigh = window.innerHeight ; 
   console.log(newWidth)
})
*/