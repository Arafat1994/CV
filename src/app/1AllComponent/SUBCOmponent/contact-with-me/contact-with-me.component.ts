
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GetDataFromJsonFileService } from 'src/app/services/get-data-from-json-file.service';

@Component({
  selector: 'app-contact-with-me',
  templateUrl: './contact-with-me.component.html',
  styleUrls: ['./contact-with-me.component.scss']
})
export class ContactWithMEComponent implements OnInit {
  contactData;
  constructor(private getdata : GetDataFromJsonFileService) { }


  ngOnInit(): void {
    this.getdata.getdataFun().subscribe((result)=>
    {this.contactData =result[10].Contact; }) 
  }

  form =new FormGroup({
    fullname : new FormControl("" , Validators.required) ,
    subject : new FormControl("" , Validators.required) ,
    email : new FormControl("" , Validators.required) , 
    message : new FormControl("" , Validators.required) 
  }) ;

  get fullname()
  {
    return this.form.get('fullname');
  }
  get subject()
  {
    return this.form.get('subject');
  }
  get email()
  {
    return this.form.get('email');
  }
  get message()
  {
    return this.form.get('message');
  }

  submit(form){
    console.log(form); 
    alert("message sent successfully") ; 
  }

}
