import { Injectable } from '@angular/core';
import { EventPage } from './EventPage';
import { eventPage } from './mock-eventPage';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }

  getEventPage(): Observable<EventPage> {
    return of(eventPage);

  }
  getEventPage1(): EventPage {
    return eventPage;

  }
}
