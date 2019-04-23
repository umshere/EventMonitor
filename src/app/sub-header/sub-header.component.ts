import { Component, OnInit, Input } from '@angular/core';
import { SubHeader } from '.././EventPage';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.css']
})
export class SubHeaderComponent implements OnInit {
  @Input() subHeaderData: SubHeader;
  title: string;

  constructor() { }

  ngOnInit() {
    debugger;
    
    console.log("title",this.subHeaderData);
    this.title = "hello " + this.subHeaderData.Title;
  }

}
