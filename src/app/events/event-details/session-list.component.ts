import { Component, Input, OnChanges, Inject } from '@angular/core';
import { ISession } from '../shared';
import { AuthService } from 'src/app/user/auth.service';
import { TOASTR_TOKEN, Toastr } from 'src/app/common/toastr.service';
import { VotingService } from './voting.service';

@Component({
    selector: 'session-list',
    templateUrl: 'session-list.component.html'
})

export class SessionListComponent implements OnChanges {
    @Input() sessions: ISession[];
    @Input() filterBy: string;
    @Input() sortBy: string;
    @Input() eventId: number;
    visibleSessions: ISession[] = [];

    constructor(private authSerice: AuthService, @Inject(TOASTR_TOKEN) private toastr: Toastr, private votingService: VotingService) {}

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

    checkVote(session: ISession) {
        if (this.authSerice.isAuthenticated()) {
            return this.votingService.userHasVoted(session, this.authSerice.currentUser.userName);
        }
        return false;
    }

    toggleVote(session: ISession) {
        if (this.authSerice.isAuthenticated()) {
            if (this.votingService.userHasVoted(session, this.authSerice.currentUser.userName)) {
                this.votingService.deleteVoter(this.eventId, session, this.authSerice.currentUser.userName);
            } else {
                this.votingService.addVoter(this.eventId, session, this.authSerice.currentUser.userName);
            }
        } else {
            this.toastr.info('you need to login first', 'Hey You!');
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
