import { Component, OnInit } from '@angular/core';
import { GetDataFromJsonFileService } from 'src/app/services/get-data-from-json-file.service';

@Component({
  selector: 'app-portfolio-work',
  templateUrl: './portfolio-work.component.html',
  styleUrls: ['./portfolio-work.component.scss']
})
export class PortfolioWorkComponent implements OnInit {
  portfolioData;
  
  constructor(private getdata : GetDataFromJsonFileService) { }

  ngOnInit(): void {
    this.getdata.getdataFun().subscribe((result)=>
    {this.portfolioData =result[9].portfolio ; }) 
  }
  

}
