import { Injectable } from '@angular/core';
import { EventService } from './shared/event-service';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()

export class EventResolverService implements Resolve<any> {

    constructor( private eventService: EventService) {}

    resolve(route: ActivatedRouteSnapshot) {
        return this.eventService.getEventByID(route.params['id']);
    }
}
