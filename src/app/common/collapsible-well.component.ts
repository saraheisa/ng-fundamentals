import { Component, Input } from "@angular/core";

@Component({
    selector: 'collapsible-well',
    template: `
    <div class="well pointable" (click) = "toggleVisibility()">
        <h4 class="well-title">{{title}}</h4>
        <ng-content *ngIf="visible"></ng-content>
    </div>
    `
})

export class CollapsibleWellComponent {
    @Input() title: string;
    visible = false;

    toggleVisibility() {
        this.visible = !this.visible;
    }
}
