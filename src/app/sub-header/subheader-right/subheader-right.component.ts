import { Component, OnInit, Input } from '@angular/core';
import {Link} from '../.././EventPage';

@Component({
  selector: 'app-subheader-right',
  templateUrl: './subheader-right.component.html',
  styleUrls: ['./subheader-right.component.css']
})
export class SubheaderRightComponent implements OnInit {
  @Input() links: Link[];

  constructor() { }

  ngOnInit() {
  }

}
