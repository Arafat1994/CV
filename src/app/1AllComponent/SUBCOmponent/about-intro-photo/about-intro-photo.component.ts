import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BorderMove } from 'src/app/Animation/borderAnimation';
import { GetDataFromJsonFileService } from 'src/app/services/get-data-from-json-file.service';

@Component({
  selector: 'app-about-intro-photo',
  templateUrl: './about-intro-photo.component.html',
  styleUrls: ['./about-intro-photo.component.scss'],
  animations: [BorderMove]
})
export class AboutIntroPhotoComponent implements OnInit {


  introdata ; 
  isdownloadhovered = true;
  isContacthovered = true; 

  constructor(private getdata : GetDataFromJsonFileService , private router : Router) { }

  ngOnInit(): void {
    this.getdata.getdataFun().subscribe((result)=>
    {this.introdata =result[12].myintro ; }) 
  }

  contactNavigate()
  {
    this.router.navigateByUrl("/Contact");
  }

 // AboutPhotoSrc = "./../../../assets/online-resume.png";
  

  ishoveredfunc(value2: string) {
    if (value2 === null) {
      console.log(null)
    }
    else if (value2 === 'contact') {
      this.isContacthovered = !this.isContacthovered;
    }
    else if (value2 === 'download') {
      this.isdownloadhovered = !this.isdownloadhovered;
    }

  }
  //console.log('mouseover' + this.ishovered)


}
