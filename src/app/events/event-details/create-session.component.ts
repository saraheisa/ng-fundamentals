import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ISession, restrictedWords } from '../shared/index';

@Component({
    selector: 'create-session',
    templateUrl: 'create-session.component.html',
    styles: [`
        em {float: right;
            color: #f6c5c4;}
    `]
})

export class CreateSessionComponent implements OnInit {

    @Output() addNewSession = new EventEmitter();
    @Output() cancelSession = new EventEmitter();

    name: FormControl;
    presenter: FormControl;
    duration: FormControl;
    level: FormControl;
    abstract: FormControl;

    newSession: FormGroup;

    ngOnInit() {
        this.name = new FormControl('', Validators.required);
        this.presenter = new FormControl('', Validators.required);
        this.duration = new FormControl('', Validators.required);
        this.level = new FormControl('', Validators.required);
        this.abstract = new FormControl('', [Validators.required,
        Validators.maxLength(400), restrictedWords(['foo', 'bar'])]);

        this.newSession = new FormGroup({
            name: this.name,
            presenter: this.presenter,
            duration: this.duration,
            level: this.level,
            abstract: this.abstract
        });
    }

    createSession(formData) {
        let session: ISession = {
            id: undefined,
            name: formData.name,
            presenter: formData.presenter,
            duration: +formData.duration,
            abstract: formData.abstract,
            level: formData.level,
            voters: []
        };
        console.log(session);
        this.addNewSession.emit(session);
    }

    cancel() {
        this.cancelSession.emit();
    }
}
