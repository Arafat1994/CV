
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GetDataFromJsonFileService } from 'src/app/services/get-data-from-json-file.service';

@Component({
  selector: 'app-about-drop-down-menu',
  templateUrl: './about-drop-down-menu.component.html',
  styleUrls: ['./about-drop-down-menu.component.scss']
})
export class AboutDropDownMEnuComponent implements OnInit {

  About ; 

  constructor( private getdata : GetDataFromJsonFileService) { }

  ngOnInit(): void {
    this.getdata.getdataFun().subscribe((result)=>
    {this.About =result[11].navbar[0] ; }) 
  }

   
}
