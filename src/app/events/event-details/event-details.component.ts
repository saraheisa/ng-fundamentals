import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event-service';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: 'event-detail.component.html',
    styles: [`.container { padding-left: 20px; padding-right: 20px; }
              .event-image { height: 100px; }`]
})

export class EventDetailsComponent implements OnInit {
    event: any;
    constructor( private eventService: EventService,
        private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.event = this.eventService.getEventByID(+this.route.snapshot.params['id']);
    }
}
