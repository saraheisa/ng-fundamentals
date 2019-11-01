import { Component, Input } from '@angular/core';
import { IEvent } from './shared';

@Component({
    selector: 'event-thumbnail',
    template: `
    <div class="well hoverwell thumbnail"  [routerLink] = "['/events', event.id]">
        <h2>{{event?.name | uppercase}}</h2>
        <div>Date: {{event?.date | date}}</div>
        <div [ngSwitch]="event?.time">
            Time: {{event?.time}}
            <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
            <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
            <span *ngSwitchDefault >(Normal Start)</span>
        </div>
        <div>Price: {{event?.price | currency: USD}}</div>
        <div *ngIf="event?.location">
        <span>Location: {{event?.location?.address}} </span>
        <span class="pad-left">{{event?.location?.city}},
            {{event?.location?.country}}</span>
        </div>
    </div>
    `,
    styles: [`
        .pad-left { margin-left: 10px; }
        .well div { color: #bbb; }
        .thumbnail { min-height: 210px; }
    `]
})

export class EventThumbnailComponent {
    @Input() event: IEvent;
}
