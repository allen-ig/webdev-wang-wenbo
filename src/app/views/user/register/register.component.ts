import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from '../../../services/user.service';
import {User} from '../../../models/User';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // the registerForm reference variable
  @ViewChild('registerForm') private _form: NgForm;

  // form properties
  private _username: string;
  private _password: string;
  private _verifyPassword: string;
  // capture the newUser Id
  private _newUserId: string;
  // capture the error for registering the new user
  private _registerError: string;

  constructor(private _userService: UserService,
              private _router: Router) {
  }

  ngOnInit() {
  }

  register() {
    // set the property values to the form values
    // and inspect the input values in console
    // console.log(this._form);
    this._username = this._form.value.username;
    this._password = this._form.value.passwordGroup.password;
    this._verifyPassword = this._form.value.passwordGroup.verifyPassword;
    console.log('username: ' + this._username);
    console.log('password: ' + this._password);
    console.log('verify password: ' + this._verifyPassword);

    // call UserService API to the local users array
    const newUser = {
      username: this._username,
      password: this._password,
      firstName: '',
      lastName: ''
    };
    this._newUserId = this._userService.createUser(newUser)._id;
    this._router.navigate(['/user', this._newUserId]);

    // call UserService API to the remote mongodb
    // const newUser = new User('',
    //   this._form.value.username,
    //   this._form.value.passwordGroup.password,
    //   '',
    //   '');
    // this._userService.createUser(newUser).subscribe(
    //   data => {
    //     console.log('Posted new user: ' + data);
    //     this._newUserId = data._id;
    //     console.log('New User Id: ' + data._id);
    //     this._registerError = null;
    //     // then navigate to the user profile page
    //     this._router.navigate(['/user', data._id]);
    //   },
    //   error => this._registerError = error.message || 'Error registering the new user!'
    // );
  }

}
