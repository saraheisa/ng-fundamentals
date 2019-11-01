import { Component, Input, OnChanges } from '@angular/core';
import { ISession } from '../shared';

@Component({
    selector: 'session-list',
    templateUrl: 'session-list.component.html'
})

export class SessionListComponent implements OnChanges {
    @Input() sessions: ISession[];
    @Input() filterBy: string;
    @Input() sortBy: string;
    visibleSessions: ISession[] = [];

    ngOnChanges() {
        if (this.sessions) {
            this.filterSessions(this.filterBy);
            this.visibleSessions = this.sortBy === 'names'
            ? this.visibleSessions.sort(sortByNamesAsc)
            : this.visibleSessions.sort(sortByVotesDes);
        }
    }

    filterSessions(filter) {
        if (filter === 'all') {
            this.visibleSessions = this.sessions.slice(0);
        } else {
            this.visibleSessions = this.sessions.filter(s => s.level.toLocaleLowerCase() === filter);
        }
    }
}


function sortByNamesAsc(s1: ISession, s2: ISession) {
    if (s1.name > s2.name) { return 1; }
    if (s1.name === s2.name) { return 0; }
    if (s1.name < s2.name) { return -1; }
}

function sortByVotesDes(s1: ISession, s2: ISession) {
    return s2.voters.length - s1.voters.length;
}
