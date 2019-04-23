import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-subheader-left',
  templateUrl: './subheader-left.component.html',
  styleUrls: ['./subheader-left.component.css']
})
export class SubheaderLeftComponent implements OnInit {

  @Input() title; 

  constructor() { }

  ngOnInit() {
  }

}
