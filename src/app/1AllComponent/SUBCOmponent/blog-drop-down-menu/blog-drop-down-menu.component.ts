
import { Component, OnInit } from '@angular/core';
import { GetDataFromJsonFileService } from 'src/app/services/get-data-from-json-file.service';

@Component({
  selector: 'app-blog-drop-down-menu',
  templateUrl: './blog-drop-down-menu.component.html',
  styleUrls: ['./blog-drop-down-menu.component.scss']
})
export class BlogDropDownMenuComponent implements OnInit {

  Blog; 
  constructor(private getdata : GetDataFromJsonFileService) { }

  ngOnInit(): void {
    this.getdata.getdataFun().subscribe((result)=>
    {this.Blog =result[11].navbar[2] ; }) 
  }


 

}
