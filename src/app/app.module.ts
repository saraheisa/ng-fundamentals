import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { appRoutes } from './routes';

import {
  EventsListComponent,
  EventThumbnailComponent,
  EventDetailsComponent,
  EventService,
  CreateEventComponent,
  EventListResolverService,
  CreateSessionComponent,
  SessionListComponent,
  DurationPipe,
  VoteComponent,
  LocationValidatorDirective,
  EventResolverService
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
    ModalTriggerDirective,
    VoteComponent,
    LocationValidatorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [
    EventService,
    {
      provide: TOASTR_TOKEN,
      useValue: toastr
    },
    EventListResolverService,
    AuthService,
    EventResolverService,
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
