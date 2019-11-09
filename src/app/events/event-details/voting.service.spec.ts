import { VotingService } from './voting.service';
import { ISession } from '../shared';
import { of } from 'rxjs';

describe('votingService', () => {
    let votingService: VotingService,
        mockHttp;

    beforeEach(() => {
        mockHttp = jasmine.createSpyObj('mockHttp', ['delete', 'post']);
        votingService = new VotingService(mockHttp);
    });

    describe('delete voter', () => {
        it('should delete the username from the voters array', () => {
            const session = {
                id: 42,
                voters: ['sarah', 'vincent', 'jan', 'jasmine']
            };
            mockHttp.delete.and.returnValue(of(false));
            votingService.deleteVoter(1, <ISession>session, 'jan');

            expect(session.voters.length).toBe(3);
        });

        it('should call http.delete with the right parameters', () => {
            const session = {
                id: 42,
                voters: ['sarah', 'vincent', 'jan', 'jasmine']
            };
            mockHttp.delete.and.returnValue(of(false));
            votingService.deleteVoter(1, <ISession>session, 'jan');

            expect(mockHttp.delete).toHaveBeenCalledWith('/api/events/1/sessions/42/voters/jan');
        });
    });

    describe('add voter', () => {
        it('should add the username to the voters array', () => {
            const session = {
                id: 42,
                voters: ['sarah', 'vincent', 'jasmine']
            };
            mockHttp.post.and.returnValue(of(false));
            votingService.addVoter(1, <ISession>session, 'jan');

            expect(session.voters.length).toBe(4);
        });

        it('should call http.post with the right parameters', () => {
            const session = {
                id: 42,
                voters: ['sarah', 'vincent', 'jasmine']
            };
            mockHttp.post.and.returnValue(of(false));
            votingService.addVoter(1, <ISession>session, 'jan');

            expect(mockHttp.post).toHaveBeenCalledWith('/api/events/1/sessions/42/voters/jan', {}, jasmine.any(Object));
        });
    });

});
