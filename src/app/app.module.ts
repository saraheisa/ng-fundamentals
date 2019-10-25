import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { appRoutes } from './routes';

import {
  EventsListComponent,
  EventThumbnailComponent,
  EventDetailsComponent,
  EventService,
  CreateEventComponent,
  EventRouteActivatorService,
  EventListResolverService
} from './events/index';

import { AppComponent } from './app.component';
import { NavbarComponent } from './nav/navbar.component';
import { Error404Component } from './errors/404.component';

import { ToastrService } from './common/toastr.service';


@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivatorService,
    EventListResolverService,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: isCreateEventDirty
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function isCreateEventDirty(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('Are you sure you want to leave?');
  }
  return true;
}
