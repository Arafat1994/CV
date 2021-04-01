import { Component, OnInit } from '@angular/core';
import { GetDataFromJsonFileService } from 'src/app/services/get-data-from-json-file.service';

@Component({
  selector: 'app-what-ido',
  templateUrl: './what-ido.component.html',
  styleUrls: ['./what-ido.component.scss']
})
export class WhatIDoComponent implements OnInit {

  data ; 
  constructor( private getdata : GetDataFromJsonFileService) { }
  ngOnInit(): void {
    this.getdata.getdataFun().subscribe((result)=>
    {this.data =result[0].whatido ; }) 
  }

  


}
