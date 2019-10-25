import { Injectable } from '@angular/core';
import { EventService } from '../shared/event-service';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable()

export class EventRouteActivatorService implements CanActivate {

    constructor( private eventService: EventService, private router: Router ) {}

    canActivate(route: ActivatedRouteSnapshot) {
        const eventExists = !!this.eventService.getEventByID(+route.params['id']);
        if (!eventExists) {
            this.router.navigate(['/404']);
        }
        return eventExists;
    }

}
