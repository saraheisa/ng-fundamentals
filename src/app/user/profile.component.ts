import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { TOASTR_TOKEN, Toastr } from '../common/toastr.service';

@Component({
  templateUrl: 'profile.component.html',
  styles: [`
        .error { background-color: #f1c6c6; }
        .error::-webkit-input-placeholder {color: #333333;}
        .error::-moz-placeholder {color: #333333;}
        .error:-ms-input-placeholder {color: #333333;}
        .error:-moz-placeholder {color: #333333;}
        em { float: right; color: #f0c4c3; }
    `]
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup;
  private firstName: FormControl;
  private lastName: FormControl;

  constructor(private authService: AuthService, private router: Router, @Inject(TOASTR_TOKEN) private toastr: Toastr) {}

  ngOnInit() {
    this.firstName = new FormControl(this.authService.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z ].*')]);
    this.lastName = new FormControl(this.authService.currentUser.lastName, Validators.required);
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    });
  }

  isFirstNameValid() {
    return this.firstName.valid;
  }

  isLastNameValid() {
    return this.lastName.valid;
  }

  saveProfile(values) {
    if (this.profileForm.valid) {
      this.authService.updateProfile(values.firstName, values.lastName);
      this.toastr.success('Profile Saved Successfully', 'Ding Ding');
    }
  }

  cancel() {
    this.router.navigate(['events']);
  }

}
