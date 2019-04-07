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
  private _registerError = false;
  private _duplicateRegisterErrorMsg =
    'The username has been registered, please try with another one.';

  constructor(private _userService: UserService, private _router: Router) {
  }

  ngOnInit() {
  }

  onRegister() {
    // set the property values to the form values
    // and inspect the input values in console
    // console.log(this._form);
    this._username = this._form.value.username;
    this._password = this._form.value.passwordGroup.password;
    this._verifyPassword = this._form.value.passwordGroup.verifyPassword;
    console.log('username: ' + this._username);
    console.log('password: ' + this._password);
    console.log('verify password: ' + this._verifyPassword);

    // first, check if the username has been registered before
    this._userService.findUserByUsername(this._username).subscribe(data => {
      if (data == null) {
        this._registerError = false;
        console.log('Username is valid!');
        console.log(data);

        // call UserService API to create the new user to the server
        // const newUser = {
        //   username: this._username,
        //   password: this._password,
        //   firstName: '',
        //   lastName: ''
        // };
        // then call register service api
        this._userService.register(this._username, this._password).subscribe(
          postedUser => {
            console.log('Created new user: ');
            console.log(postedUser);
            this._newUserId = postedUser._id;
            this._router.navigate(['/user', this._newUserId]);
          }
        );
        // this._userService.createUser(newUser).subscribe(postedUser => {
        //   console.log('Created new user: ');
        //   console.log(postedUser);
        //   this._newUserId = postedUser._id;
        //   this._router.navigate(['/user', this._newUserId]);
        // });
      } else {
        this._registerError = true;
        console.log('Username is NOT valid!');
        console.log(data);

        // if has register error, then stop
        // if (this._registerError) return;
      }
    });

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
