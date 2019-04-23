import { Component, OnInit, Input } from '@angular/core';
import { SubHeader, Link } from '.././EventPage';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.css']
})
export class SubHeaderComponent implements OnInit {
  @Input() subHeaderData: SubHeader;
  title: string;
  links: Link[];

  constructor() { }

  ngOnInit() {
    this.title = this.subHeaderData.Title;
    this.links = this.subHeaderData.Links;
  }

}
