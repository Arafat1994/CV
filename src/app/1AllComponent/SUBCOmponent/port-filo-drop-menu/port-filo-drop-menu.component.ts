import { Component, OnInit } from '@angular/core';
import { GetDataFromJsonFileService } from 'src/app/services/get-data-from-json-file.service';

@Component({
  selector: 'app-port-filo-drop-menu',
  templateUrl: './port-filo-drop-menu.component.html',
  styleUrls: ['./port-filo-drop-menu.component.scss']
})
export class PortFiloDropMenuComponent implements OnInit {
  Portfilo; 
  constructor( private getdata : GetDataFromJsonFileService) { }

  ngOnInit(): void {
    this.getdata.getdataFun().subscribe((result)=>
    {this.Portfilo =result[11].navbar[1] ; }) 
  }
}
