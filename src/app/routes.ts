import { Routes } from '@angular/router';

import {
    EventsListComponent,
    EventDetailsComponent,
    CreateEventComponent,
    EventRouteActivatorService,
    EventListResolverService
 } from './events/index';

import { Error404Component } from './errors/404.component';

export const appRoutes: Routes = [
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events', component: EventsListComponent, resolve: { events: EventListResolverService } },
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivatorService] },
    { path: 'user', loadChildren: './user/user.module#UserModule' },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: 'events', pathMatch: 'full' }
];
