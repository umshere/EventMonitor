import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { EventService } from 'src/app/event.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {

  id:string;

  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private eventService: EventService

  ) { }

  ngOnInit() {

    // this.eventService.getEventById()

    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => 
        this.id =  params.get('id')
        
      ));

      console.log("hhh" , this.id)
  }

}
