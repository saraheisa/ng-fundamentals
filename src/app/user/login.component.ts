import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: 'login.component.html'
})
export class LoginComponent {
    userName;
    password;

    constructor(private router: Router) {}

    login(values) {
        console.log(values);
    }

    cancel() {
        this.router.navigate(['events']);
    }
}
