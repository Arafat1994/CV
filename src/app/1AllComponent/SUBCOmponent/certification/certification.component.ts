
import { Component, OnInit } from '@angular/core';
import { GetDataFromJsonFileService} from "../../../services/get-data-from-json-file.service"
@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.scss']
})
export class CertificationComponent implements OnInit {

  CertficateData;
  constructor( private getdata : GetDataFromJsonFileService) { }

  ngOnInit(): void {

    this.getdata.getdataFun().subscribe((result)=>
    {this.CertficateData =result[7].certification ; }) 
  }

}
