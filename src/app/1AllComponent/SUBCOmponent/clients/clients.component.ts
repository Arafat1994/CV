
import { Component, OnInit } from '@angular/core';

import { GetDataFromJsonFileService } from 'src/app/services/get-data-from-json-file.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  ClientData;
  constructor( private getdata : GetDataFromJsonFileService) { }

  ngOnInit(): void {
    this.getdata.getdataFun().subscribe((result)=>
    {this.ClientData =result[2].Clients ; }) 
  }

  /*
  
  index = 0;
  ShowSlide(n) {
    var myslide = Array.from(document.getElementsByClassName("clientimgdiv") as HTMLCollectionOf<HTMLElement>);
    var disbutton = document.getElementsByTagName("button") as HTMLCollectionOf<HTMLElement>;

    if (n < 0)
    {
      //prev
      console.log("oldindex" + this.index)
      myslide[this.index].style.display = "none";
      this.index++;
      console.log("newindex" + this.index);
      /*if (this.index >= 0) {
        disbutton[1].classList.remove("d-none");
      }
       if(this.index ===3)
      {
        disbutton[0].classList.add("d-none");
      }

    }


    else if (n >= 1) {
      //next
      console.log(this.index);
      myslide[this.index - 1].style.display = "flex";
      this.index--;
      console.log("newindexva"+ this.index)
      /*if (this.index === 0) {
        disbutton[1].classList.add("d-none");
        disbutton[0].classList.remove("d-none") ;
      }


    }
  }
    */


}


