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

  tableData: object[] = [
    { first: 'Event1', last: '12:35 1-Oct-2019', username: '@mdo', email: 'markotto@gmail.com', country: 'USA', city: 'San Francisco' },
    { first: 'Event2', last: '12:35 1-Oct-2019', username: '@fat', email: 'jacobt@gmail.com', country: 'France', city: 'Paris' },
    { first: 'Event3', last: '12:35 1-Oct-2019', username: '@twitter', email: 'larrybird@gmail.com', country: 'Germany', city: 'Berlin' },
    { first: 'Event4', last: '12:35 1-Oct-2019', username: '@P_Topolski', email: 'ptopolski@gmail.com', country: 'Poland', city: 'Warsaw' },
    { first: 'Event5', last: '12:35 1-Oct-2019', username: '@andy', email: 'annadoe@gmail.com', country: 'Spain', city: 'Madrid' }
  ];
  private sorted = false;


  constructor() { }

  ngOnInit() {
    this.title = this.subHeaderData.Title;
    this.links = this.subHeaderData.Links;
  }

  sortBy(by: string | any): void {

    this.tableData.sort((a: any, b: any) => {
      if (a[by] < b[by]) {
        return this.sorted ? 1 : -1;
      }
      if (a[by] > b[by]) {
        return this.sorted ? -1 : 1;
      }

      return 0;
    });

    this.sorted = !this.sorted;
  }

  onSelect(data : any){
    console.log(data.first);
  }

}
