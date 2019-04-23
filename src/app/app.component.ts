import { Component } from '@angular/core';
import { EventService } from './event.service';
import { EventPage, SubHeader } from './EventPage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = '';
  eventPage: EventPage;
  subHeaderData: SubHeader;


  constructor(private eventService: EventService) {

  }

  private getEventPage(): void {
    // if using server call instaed of mock 
    this.eventService.getEventPage()
      .subscribe(function (eventPage) {
        this.eventPage = eventPage;
        this.title = this.eventPage.MainTitle;
      });

    this.eventPage = this.eventService.getEventPage1();


  }

  ngOnInit(): void {
    this.getEventPage();
    this.title = this.eventPage.MainTitle;
    this.subHeaderData = this.eventPage.SubHeader;
    console.log("hell " + this.eventPage.SubHeader.Title);
  }
}
