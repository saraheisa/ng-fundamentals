import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { appRoutes } from './routes';

import {
  EventsListComponent,
  EventThumbnailComponent,
  EventDetailsComponent,
  EventService,
  CreateEventComponent,
  EventRouteActivatorService,
  EventListResolverService,
  CreateSessionComponent,
  SessionListComponent,
  DurationPipe
} from './events/index';

import { AppComponent } from './app.component';
import { NavbarComponent } from './nav/navbar.component';
import { Error404Component } from './errors/404.component';
import { CollapsibleWellComponent } from './common/collapsible-well.component';

import { TOASTR_TOKEN, Toastr } from './common/toastr.service';
import { SimpleModalComponent } from './common/simple-modal.component';
import { JQ_TOKEN } from './common/jquery.service';

import { AuthService } from './user/auth.service';
import { ModalTriggerDirective } from './common/modal-trigger.directive';

const toastr: Toastr = window['toastr'];
const jQuery = window['$'];


@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService,
    {
      provide: TOASTR_TOKEN,
      useValue: toastr
    },
    EventRouteActivatorService,
    EventListResolverService,
    AuthService,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: isCreateEventDirty
    },
    {
      provide: JQ_TOKEN,
      useValue: jQuery
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
