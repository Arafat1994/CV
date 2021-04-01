import { Component, OnInit } from '@angular/core';
import { GetDataFromJsonFileService } from 'src/app/services/get-data-from-json-file.service';

@Component({
  selector: 'app-facts',
  templateUrl: './facts.component.html',
  styleUrls: ['./facts.component.scss']
})
export class FactsComponent implements OnInit {

  FactsData;

  constructor( private getdata : GetDataFromJsonFileService) { }

  ngOnInit(): void {
    this.getdata.getdataFun().subscribe((result)=>
    {this.FactsData =result[3].facts ; }) 
  }

}
