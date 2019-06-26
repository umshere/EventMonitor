import { Component, OnInit, Input } from '@angular/core';
import { SubHeader, Link, EventPage } from '.././EventPage';
import { EventService } from '../event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.css']
})
export class SubHeaderComponent implements OnInit {

  eventPage: EventPage;
  subHeaderData: SubHeader;
  // @Input() subHeaderData: SubHeader;
  title: string;
  links: Link[];

  tableData: object[] = [
    { id:1, first: 'Event1', last: '12:35 1-Oct-2019', username: '@mdo', email: 'markotto@gmail.com', country: 'USA', city: 'San Francisco' },
    { id:2, first: 'Event2', last: '12:35 1-Oct-2019', username: '@fat', email: 'jacobt@gmail.com', country: 'France', city: 'Paris' },
    { id:3, first: 'Event3', last: '12:35 1-Oct-2019', username: '@twitter', email: 'larrybird@gmail.com', country: 'Germany', city: 'Berlin' },
    { id:4, first: 'Event4', last: '12:35 1-Oct-2019', username: '@P_Topolski', email: 'ptopolski@gmail.com', country: 'Poland', city: 'Warsaw' },
    { id:5, first: 'Event5', last: '12:35 1-Oct-2019', username: '@andy', email: 'annadoe@gmail.com', country: 'Spain', city: 'Madrid' }
  ];
  private sorted = false;


  constructor(private eventService: EventService, private router: Router, ) { }


  private getEventPage(): void {
    // if using server call instaed of mock 
    this.eventService.getEventPage()
      .subscribe(function (eventPage) {
        this.eventPage = eventPage;
        this.title = this.eventPage.MainTitle;
      });

    this.eventPage = this.eventService.getEventPage1();
  }

  ngOnInit() {

    this.getEventPage();
    this.title = this.eventPage.MainTitle;
    this.subHeaderData = this.eventPage.SubHeader;
    console.log("hell " + this.eventPage.SubHeader.Title);
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

  onSelect(data: any) {
    console.log(data.first);
    this.router.navigate(['/event',data.id]); 
  }

}
