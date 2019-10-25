import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event-service';
import { ToastrService } from '../common/toastr.service';

@Component({
    template: `
    <div>
        <h1>Upcoming Angular Events</h1>
        <hr />
        <div class="row">
            <div *ngFor="let event of events" class="col-md-5" >
                <event-thumbnail (click) = "showInfoToastr(event.name)" [event] = "event"></event-thumbnail>
            </div>
        </div>
    </div>
    `
})

export class EventsListComponent implements OnInit {

    events: any[];

    constructor (private eventService: EventService, private toastrService: ToastrService) {}

    ngOnInit(): void {
        this.events = this.eventService.getEvents();
    }

    showInfoToastr(message) {
        this.toastrService.info(message);
    }
}
