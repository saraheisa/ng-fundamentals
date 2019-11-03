import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'vote',
    template: `
    <div class="votingWidgetContainer pointable" (click)="onClick()">
        <div class="well votingWidget">
            <div class="votingButton">
                <i [style.color]="iconColor" class="glyphicon glyphicon-heart"></i>
            </div>
            <div class="badge badge-inverse votingCount">
                <div>{{count}}</div>
            </div>
        </div>
    </div>
    `,
    styleUrls: ['/vote.component.css']
})

export class VoteComponent {
    iconColor;
    @Input() set voted(v: string) {
        this.iconColor = v ? '#ff5858' : '#aca8a8';
    }
    @Input() count: number;
    @Output() vote = new EventEmitter();

    onClick() {
        this.vote.emit();
    }
}
