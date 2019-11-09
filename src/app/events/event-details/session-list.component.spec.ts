import { SessionListComponent } from "./session-list.component";
import { ISession } from '../shared';

describe('sessionList', () => {
    let component: SessionListComponent,
        authService,
        toastr,
        votingService;

    beforeEach(() => {
        component = new SessionListComponent(authService, toastr, votingService);
    });

    describe('onChanges', () => {
        it('should filter the sessions correctly', () => {
            component.sessions = <ISession[]>[
                { name: 'session 2', level: 'all' },
                { name: 'session 1', level: 'intermediate' },
                { name: 'session 3', level: 'begginer' },
                { name: 'session 5', level: 'advanced' },
                { name: 'session 4', level: 'all' },
            ];
            component.eventId = 1;
            component.filterBy = 'begginer';
            component.sortBy = 'name';

            component.ngOnChanges();

            expect(component.visibleSessions.length).toBe(1);
        });

        it('should sort the sessions correctly', () => {
            component.sessions = <ISession[]>[
                { name: 'session 2', level: 'all' },
                { name: 'session 1', level: 'intermediate' },
                { name: 'session 3', level: 'begginer' },
                { name: 'session 5', level: 'advanced' },
                { name: 'session 4', level: 'all' },
            ];
            component.eventId = 1;
            component.filterBy = 'all';
            component.sortBy = 'names';

            component.ngOnChanges();

            expect(component.visibleSessions[4].name).toBe('session 5');
        });
    });
});
