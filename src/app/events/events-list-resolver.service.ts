import { Injectable } from '@angular/core';
import { EventService } from './shared/event-service';
import { Resolve } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable()

export class EventListResolverService implements Resolve<any> {

    constructor( private eventService: EventService) {}

    resolve() {
        return this.eventService.getEvents().pipe(map(events => events));
    }
}
