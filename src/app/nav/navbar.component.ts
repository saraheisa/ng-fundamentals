import { Component, OnInit } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { ISession, EventService, IEvent } from '../events';


@Component({
    selector: 'navbar',
    templateUrl: 'navbar.component.html',
    styles: [`
        .nav.navbar-nav { font-size: 15px }
        #searchForm { margin-right: 100px }
        @media (max-width: 1200px) { #searchForm { display: none } }
        li > a.active { color: #F97924; }
    `]
})

export class NavbarComponent implements OnInit {

    searchTerm = '';
    foundSessions: object[];
    events: IEvent[];

    constructor(private authService: AuthService, private eventService: EventService) {}

    ngOnInit(): void {
        this.eventService.getEvents().subscribe(res => {
            this.events = res;
        });
    }
    searchSessions(searchTerm: string) {
        this.eventService.searchSessions(searchTerm).subscribe(sessions => {
            this.foundSessions = sessions;
        });
    }
}
