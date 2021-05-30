import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-extra-blog-blog-form',
  templateUrl: './extra-blog-blog-form.component.html',
  styleUrls: ['./extra-blog-blog-form.component.scss']
})
export class ExtraBlogBlogFormComponent implements OnInit {

  constructor() { }

  //data={header :"" , date:"" , imageurl:"" , details:""} ; 
  ngOnInit(): void {
  }
  
  sendData(blogform: NgForm)
  {
    //console.log(this.data);
    console.log(blogform.value.data ) ;
    alert("data sended successfully") ; 
  }

}
