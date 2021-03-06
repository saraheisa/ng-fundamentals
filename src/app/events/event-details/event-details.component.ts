import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event-service';
import { ActivatedRoute, Params } from '@angular/router';
import { IEvent, ISession } from '../shared';

@Component({
    templateUrl: 'event-detail.component.html',
    styles: [`.container { padding-left: 20px; padding-right: 20px; }
              .event-image { height: 100px; }
              a { cursor: pointer }
              .sessionNav { display: flex; justify-content: space-between; margin-bottom: 10px; }
              .subBtns { display: flex; justify-content: space-between; padding: 10px;}`]
})

export class EventDetailsComponent implements OnInit {
    event: IEvent;
    addMode = false;
    filterBy = 'all';
    sortBy = 'votes';

    constructor( private eventService: EventService,
        private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.route.data.forEach((data) => {
            this.event = data['event'];
            this.addMode = false;
            this.filterBy = 'all';
            this.sortBy = 'votes';
        });
    }

    addSession() {
        this.addMode = true;
    }

    saveSession(session: ISession) {
        const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
        session.id = nextId + 1;
        this.event.sessions.push(session);
        this.eventService.saveEvent(this.event).subscribe(res => this.addMode = false);
    }

    cancelSession() {
        this.addMode = false;
    }
}
