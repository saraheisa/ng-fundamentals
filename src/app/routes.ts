import { Routes } from '@angular/router';

import {
    EventsListComponent,
    EventDetailsComponent,
    CreateEventComponent,
    EventListResolverService,
    CreateSessionComponent,
    EventResolverService
 } from './events/index';

import { Error404Component } from './errors/404.component';

export const appRoutes: Routes = [
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events/session/new', component: CreateSessionComponent },
    { path: 'events', component: EventsListComponent, resolve: { events: EventListResolverService } },
    { path: 'events/:id', component: EventDetailsComponent, resolve: { event: EventResolverService } },
    { path: 'user', loadChildren: './user/user.module#UserModule' },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: 'events', pathMatch: 'full' }
];
