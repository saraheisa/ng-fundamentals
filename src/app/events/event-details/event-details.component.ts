import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event-service';

@Component({
    selector: 'event-details',
    templateUrl: 'event-detail.component.html',
    styles: [`.container { padding-left: 20px; padding-right: 20px; }
              .event-image { height: 100px; }`]
})

export class EventDetailsComponent implements OnInit {
    event: any;
    constructor( private eventService: EventService) {}

    ngOnInit(): void {
        this.event = this.eventService.getEventByID(1);
    }
}
