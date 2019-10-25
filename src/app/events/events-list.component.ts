import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event-service';
import { ToastrService } from '../common/toastr.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared';

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

    events: IEvent[];

    constructor (private eventService: EventService, private toastrService: ToastrService, private router: ActivatedRoute) {}

    ngOnInit(): void {
        this.events = this.router.snapshot.data['events'];
    }

    showInfoToastr(message) {
        this.toastrService.info(message);
    }
}
