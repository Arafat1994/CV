import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel-blog-card',
  templateUrl: './panel-blog-card.component.html',
  styleUrls: ['./panel-blog-card.component.scss']
})
export class PanelBlogCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input('imageurl')imageurl ; 


}
