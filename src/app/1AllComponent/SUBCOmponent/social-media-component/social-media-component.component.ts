import { Component, OnInit } from '@angular/core';
import { GetDataFromJsonFileService } from 'src/app/services/get-data-from-json-file.service';

@Component({
  selector: 'app-social-media-component',
  templateUrl: './social-media-component.component.html',
  styleUrls: ['./social-media-component.component.scss']
})
export class SocialMediaComponentComponent implements OnInit {

  socialData;
  constructor(private getdata : GetDataFromJsonFileService) { }

  ngOnInit(): void {
    this.getdata.getdataFun().subscribe((result)=>
    {this.socialData =result[4].socialmedia ; }) 
  }

}
