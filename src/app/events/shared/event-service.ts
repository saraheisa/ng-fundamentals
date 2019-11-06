import { Injectable, EventEmitter } from '@angular/core';
import { Subject, Observable, of } from 'rxjs';
import { IEvent, ISession } from './event.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';


@Injectable()
export class EventService {

    constructor(private http: HttpClient) {}

    getEvents(): Observable<IEvent[]> {
        return this.http.get<IEvent[]>('/api/events')
        .pipe(catchError(this.handleError<IEvent[]>('get events', [])));
    }

    getEventByID(id: number): Observable<IEvent> {
        return this.http.get<IEvent>('/api/events/' + id)
        .pipe(catchError(this.handleError<IEvent>('get event')));
    }

    saveEvent(event) {
        const options = { headers: new HttpHeaders({'Content-Type': 'application/json'}) };
        return this.http.post<IEvent>('/api/events', event, options)
        .pipe(catchError(this.handleError<IEvent>('add/update event')));
    }

    searchSessions(searchTerm: string): Observable<ISession[]> {
        return this.http.get<ISession[]>('/api/sessions/search?search=' + searchTerm)
        .pipe(catchError(this.handleError<ISession[]>('search event')));
    }

    private handleError<T> (operation= 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            return of(result as T);
        };
    }
}
