import { Component } from "@angular/core";
import { EventService } from "./event.service";
import { EventPage, SubHeader } from "./EventPage";
import { routerTransition } from './router.animations';
import {
  transition,
  trigger,
  query,
  style,
  animate,
  group,
  animateChild
} from "@angular/animations";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  animations: [ routerTransition] // register the animations
})
export class AppComponent {
  title = "Event Monitor";
  // eventPage: EventPage;
  // subHeaderData: SubHeader;

  constructor() {}

  

  // private getEventPage(): void {
  //   // if using server call instaed of mock
  //   this.eventService.getEventPage()
  //     .subscribe(function (eventPage) {
  //       this.eventPage = eventPage;
  //       this.title = this.eventPage.MainTitle;
  //     });

  //   this.eventPage = this.eventService.getEventPage1();

  // }

  getState(outlet: { activatedRouteData: { state: any; }; }) {
    return outlet.activatedRouteData.state;
  }

  ngOnInit(): void {}
}
