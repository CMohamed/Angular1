import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  loveIts = 0;
  title = "Mon Premier post";
  created_at :Date ;
  content = "This is a post about how to reslove computer problem :";

  loveItMore(){
    this.loveIts++;
  }
  loveItLess(){
    this.loveIts--;
  }

  constructor() {
    this.created_at = new Date();
  }

  ngOnInit() {
  }

}
