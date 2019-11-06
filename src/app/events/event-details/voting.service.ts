import { Injectable } from '@angular/core';
import { ISession } from '../shared';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()

export class VotingService {

    constructor(private http: HttpClient) {}

    deleteVoter(eventId: number, session: ISession, username: string) {
        const url = `/api/events/${eventId}/sessions/${session.id}/voters/${username}`;
        this.http.delete(url)
        .pipe(catchError(this.handleError('delete votes')))
        .subscribe(res => {
            session.voters = session.voters.filter(v => v !== username);
        });
    }

    addVoter(eventId: number, session: ISession, username: string) {
        const url = `/api/events/${eventId}/sessions/${session.id}/voters/${username}`;
        const options = { headers: new HttpHeaders({'Content-Type': 'application/json'}) };
        this.http.post(url, {}, options)
        .pipe(catchError(this.handleError('add votes')))
        .subscribe(res => session.voters.push(username));
    }

    userHasVoted(session: ISession, username: string) {
        return session.voters.some(v => v === username);
    }

    private handleError<T> (operation= 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            return of(result as T);
        };
    }
}
