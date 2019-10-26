import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
    templateUrl: 'login.component.html'
})
export class LoginComponent {
    userName;
    password;

    constructor(private router: Router, private authService: AuthService) {}

    login(values) {
        this.authService.loginUser(values.userName, values.password);
        this.router.navigate(['events']);
    }

    cancel() {
        this.router.navigate(['events']);
    }
}
