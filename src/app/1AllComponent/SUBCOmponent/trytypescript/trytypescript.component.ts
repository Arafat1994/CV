import { Component, OnInit } from '@angular/core';
import { isArray } from 'util';

@Component({
  selector: 'app-trytypescript',
  templateUrl: './trytypescript.component.html',
  styleUrls: ['./trytypescript.component.scss']
})
export class TrytypescriptComponent implements OnInit {

  Array1: string[] = ["Sass ", "Jquery"]
  Array2: string[] = ["html ", " css ", "  Javascript  ", "  angula  "];


  Arrayone = typeof (this.Array2);
  Arrayresult2 = this.Array2.join(" and ");


  Arrayresult3 = this.Array2.pop(); //remove Angular //last ele
  
  
  Arrayresult4 = this.Array1.push("Bootstrap"); // add to lasst inndex



  Arrayresult5 = this.Array2.shift(); //remove html



  Arrayresult6 = this.Array2.unshift("Angular JS ");



  Arrayresult7 = this.Array2.length;


  Arrayresult8 = delete this.Array1[0];


  Arrayresult9 = this.Array2.splice(1, 0, " SQL ", "javascript", "REACT JS ");





  Array3: string[] = ["html ", " css ", "  Javascript  ", "  angula  "];
  Arrayresult10 = this.Array3.splice(0, 2);





  Array5: string[] = ["Sass ", "Jquery"]
  Array6: string[] = ["html ", " css ", "  Javascript  ", "  angula  "];
  Arrayresult11 = (this.Array5.concat(this.Array6)).join("  and   ");




  Array7: string[] = ["html ", " css ", "  Javascript  ", "  angula  "];
  Arrayresult12 = this.Array7.slice(1, 3);





  mydate = new Date();
  result1 = this.mydate.toString();
  result2 = this.mydate.toLocaleString();





  Array8: number[] = [10, 5, 1, 3, 64, 94]
  Array9: number[] = [10, 5, 1, 3, 64, 94]
  Arrayresult13 = this.Array8.sort();
  Arrayresult14 = this.Array9.reverse();





  Array10 = ["html", "css", "Javascript", "css", "angula"];
  Arrayresult15 = this.Array10.indexOf("css", 2);
  Arrayresult16 = this.Array10[this.Arrayresult15]





  Arrayresult17 = this.Array10.lastIndexOf("css");




  //Arrayresult18 =this.Array10.isArray()




  Arrayresult18 = Array.of("arafat", "Ali", "Ali", "mohameed", "Younes ");
  Arrayresult19 = this.Arrayresult18.length





  Array11: number[] = [10, 5, 1, 3, 64, 94];
  Arrayresult20 = Array.from(this.Array11, numers => numers * 2)
  constructor() { }

  ngOnInit(): void {
  }




  Arrtostring = typeof (this.Array2.toString());
  // loop of every element insise this array and apply a func on every ele 




  //Arrayresult21 = this.Arrayresult18.fill("mohammed") ; make all element mohammed 
  Arrayresult21 = this.Arrayresult18.fill("mohammed", 3, 4);  // make edit ot Array 




  Array12: number[] = [10, 5, 1, 3, 94, 62];
  Arrayresult22 = this.Array12.find((el) => el > 12);
  //Arrayresult23 = this.Array12.findIndex(this.Arrayresult22) ; 




  Array13 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];
  Arrayresult24 = this.Array13.copyWithin(1, 7, 10);
  Array14 = [
    { name: "ali", age: 30 },
    { name: "younes", age: 40 },
    { name: "gomma", age: 60 },
    { name: "ramadan", age: 30 }
  ] ; 
//every element inside array the map func mapit to ele you can make a func call on it 
  Arrayresult25=(this.Array14.map((ele)=> {
    if(ele.age > 30 )
    {
      return ele.age+20  ; 
    }
  })).join('   &&   ');





  Array15= [
    { name: "ali", age: 30 },
    { name: "younes", age: 40 },
    { name: "gomma", age: 60 },
    { name: "ramadan", age: 30 }
  ] ; 
  Arrayresult26=this.Array15.filter((elem) => {
    elem.age>=30;
    return elem.age
  }
 ); 




Array16=[
  { name: "ali", age: 30 },
  { name: "younes", age: 40 },
  { name: "gomma", age: 60 },
  { name: "ramadan", age: 30 }
] ; 
 arr17:any;
Arrayresult27 = this.Array16.forEach(ele  => { 
 // this.arr17.push(ele )  ;
 console.log(ele)
}) ; 
/*Array16.array.foreach((element) => {
  this.arr17.push(element)
  
};*/




Array18=[
  { name: "ali", age: 30 },
  { name: "younes", age: 40 },
  { name: "gomma", age: 60 },
  { name: "ramadan", age: 30 }
] ; 
//all of them > 10 so all true so every true 
Arrayresult29=this.Array18.every(ele =>
  ele.age>10) ;

//two of 4 true so true 
  Arrayresult30=this.Array18.some(ele =>
    ele.age>30) ;
    
  }
  



