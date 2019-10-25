import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { appRoutes } from './routes';

import { AppComponent } from './app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavbarComponent } from './nav/navbar.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { Error404Component } from './errors/404.component';

import { EventService } from './events/shared/event-service';
import { ToastrService } from './common/toastr.service';
import { CreateEventComponent } from './events/create-event.component';
import { EventRouteActivatorService } from './events/event-details/event-route-activator.service';
import { EventListResolverService } from './events/events-list-resolver.service';


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
    RouterModule.forRoot( appRoutes )
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
