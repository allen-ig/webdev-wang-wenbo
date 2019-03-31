import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../../services/user.service';
import {ActivatedRoute} from '@angular/router';
import {NgForm} from '@angular/forms';
import {User} from 'src/app/models/User';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  // the form reference variable
  @ViewChild('profileForm') private _form: NgForm;

  // properties
  private _userId: string;
  private _user = {
    _id: '',
    username: '',
    password: '',
    firstName: '',
    lastName: ''
  };
  // private _user: any;
  private _findUserByIdError: string;
  private _updateUserError: string;

  constructor(
    private _userService: UserService,
    private _activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
    // get uid parameter
    this._activatedRoute.params.subscribe(params => {
      console.log('User Id: ' + JSON.stringify(params));
      this._userId = params['uid'];
    });
    // use user service to find the user by Id
    this._userService.findUserById(this._userId).subscribe(
      data => {
        console.log('data: ' + JSON.stringify(data));
        this._user._id = data._id;
        this._user.username = data.username;
        this._user.password = data.password;
        this._user.firstName = data.firstName;
        this._user.lastName = data.lastName;
        this._findUserByIdError = null;
      },
      error =>
        (this._findUserByIdError =
          error.message || 'Error getting the user by Id!')
    );
  }

  // to update the user info
  onUpdateUser() {
    const newUser = {
      _id: this._userId,
      username: this._form.value.username,
      password: this._form.value.password,
      firstName: this._form.value.firstName,
      lastName: this._form.value.lastName
    };
    this._userService.updateUser(this._userId, newUser).subscribe(
      data => console.log(data),
      error => this._updateUserError = error.message || 'Error updating the user!'
    );
  }
}
