import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from './shared';

@Component({
    templateUrl: 'create-event.component.html',
    styles: [`
          .error { background-color: #f1c6c6; }
          .error::-webkit-input-placeholder {color: #333333;}
          .error::-moz-placeholder {color: #333333;}
          .error:-ms-input-placeholder {color: #333333;}
          .error:-moz-placeholder {color: #333333;}
          em { float: right; color: #f0c4c3; }
      `]
})

export class CreateEventComponent {

    isDirty = true;
    newEvent;

    constructor ( private router: Router, private eventService: EventService ) {}

    saveEvent(formData) {
        this.eventService.addEvent(formData);
        this.isDirty = false;
        console.log(formData);
        this.router.navigate(['events']);
    }

    cancel() {
        this.router.navigate(['events']);
    }

}
