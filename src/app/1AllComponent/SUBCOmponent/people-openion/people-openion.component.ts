import { Component, OnInit } from '@angular/core';
import { GetDataFromJsonFileService } from 'src/app/services/get-data-from-json-file.service';

@Component({
  selector: 'app-people-openion',
  templateUrl: './people-openion.component.html',
  styleUrls: ['./people-openion.component.scss']
})
export class PeopleOpenionComponent implements OnInit {

  constructor(private getdata : GetDataFromJsonFileService) { }

  activeView1="firstview" ; 
  activeView2="secondview" ; 
  activelink = 0  ; 

  data ; 
  Linkdata ;


  ngOnInit(): void {
    this.getdata.getdataFun().subscribe((result)=>
    {this.Linkdata =result[1].links ;this.data =result[1].peopleopenion ; }) 
  }



  activeview( $event , x ,whatview1  , whatview2 ? :string  )
  {
    this.activeView1=whatview1 ; 
    this.activeView2 =whatview2 ; 
    this.activelink= x ; 
    var elem = document.getElementsByClassName("contentdiv")[x] ;
    elem.parentNode.insertBefore(elem, elem.parentNode.firstChild);
    /*var element = document.getElementsByClassName("content")[0] ; 
    var addedele = document.getElementsByClassName("contentdiv")[x] ;
    var firstchild = document.getElementsByClassName("contentdiv")[0]; 
    if (x==0 || x==1 || x==2)
    {
      element.appendChild(addedele)
    }
      
   */
  }

}
