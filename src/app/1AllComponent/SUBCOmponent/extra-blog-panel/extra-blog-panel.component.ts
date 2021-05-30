import { Component, OnInit } from '@angular/core';
import { GetDataFromJsonFileService } from 'src/app/services/get-data-from-json-file.service';

@Component({
  selector: 'app-extra-blog-panel',
  templateUrl: './extra-blog-panel.component.html',
  styleUrls: ['./extra-blog-panel.component.scss']
})
export class ExtraBlogPanelComponent implements OnInit {

  panelCOntent;
  defaultview:string="blog" ; 

  constructor(private getdata : GetDataFromJsonFileService) { }

  ngOnInit(): void {
    this.getdata.getdataFun().subscribe((result)=>
    {this.panelCOntent =result[13].panelBlogHeader ; }) 
  }

  Setview(whatview)
  {
    this.defaultview=whatview ; 
  }

}
