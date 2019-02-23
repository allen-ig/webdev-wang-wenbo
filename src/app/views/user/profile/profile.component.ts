import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../../services/user.service';
import {ActivatedRoute} from '@angular/router';
import {NgForm} from '@angular/forms';

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

  constructor(private _userService: UserService,
              private _activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this._activatedRoute.params.subscribe(
      params => {
        console.log('User Id: ' + JSON.stringify(params));
        this._userId = params['uid'];
      }
    );
    const tempUser = this._userService.findUserById(this._userId);
    this._user._id = tempUser._id;
    this._user.username = tempUser.username;
    this._user.password = tempUser.password;
    this._user.firstName = tempUser.firstName;
    this._user.lastName = tempUser.lastName;
    console.log('Current User: ' + JSON.stringify(this._user));
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
    this._userService.updateUser(this._userId, newUser);
  }

}
