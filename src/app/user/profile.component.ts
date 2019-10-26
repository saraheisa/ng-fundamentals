import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'profile.component.html'
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    let firstName = new FormControl(this.authService.currentUser.firstName);
    let lastName = new FormControl(this.authService.currentUser.lastName);
    this.profileForm = new FormGroup({
      firstName: firstName,
      lastName: lastName
    });
  }

  saveProfile(values) {
    this.authService.updateProfile(values.firstName, values.lastName);
    this.router.navigate(['events']);
  }

  cancel() {
    this.router.navigate(['events']);
  }

}
