import { Component } from "@angular/core";

@Component({
    selector: 'collapsible-well',
    template: `
    <div class="well pointable" (click) = "toggleVisibility()">
        <ng-content select="[well-title]"></ng-content>
        <ng-content select="[well-body]" *ngIf="visible"></ng-content>
    </div>
    `
})

export class CollapsibleWellComponent {
    visible = false;

    toggleVisibility() {
        this.visible = !this.visible;
    }
}
