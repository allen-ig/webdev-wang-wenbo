import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../../services/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {User} from 'src/app/models/User';
import {SharedService} from '../../../services/shared.service';

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
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  };
  // private _user: any;
  private _findUserByIdError: string;
  private _updateUserError: string;
  private _deleteUserError: string;
  private _logoutError: string;

  constructor(
    private _userService: UserService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _sharedService: SharedService
  ) {
  }

  ngOnInit() {
    // get uid parameter
    // this._activatedRoute.params.subscribe(params => {
    //   console.log('User Id: ' + JSON.stringify(params));
    //   this._userId = params['uid'];
    // });
    // use user service to find the user by Id
    // this._userService.findUserById(this._userId).subscribe(
    //   data => {
    //     console.log('data: ' + JSON.stringify(data));
    //     this._user._id = data._id;
    //     this._user.username = data.username;
    //     this._user.email = data.email;
    //     this._user.firstName = data.firstName;
    //     this._user.lastName = data.lastName;
    //     this._findUserByIdError = null;
    //   },
    //   error =>
    //     (this._findUserByIdError =
    //       error.message || 'Error getting the user by Id!')
    // );
    this._user = JSON.parse(JSON.stringify(this._sharedService.user));
    this._userId = this._user._id;
    console.log('data: ' + JSON.stringify(this._user));
  }

  // to update the user info
  onUpdateUser() {
    const newUser = {
      _id: this._userId,
      username: this._form.value.username,
      firstName: this._form.value.firstName,
      lastName: this._form.value.lastName,
      email: this._form.value.email
    };
    this._userService.updateUser(this._userId, newUser).subscribe(
      data => console.log(data),
      error => this._updateUserError = error.message || 'Error updating the user!'
    );
  }

  // to delete the user completely from the database
  onDeleteUser() {
    this._userService.deleteUser(this._userId).subscribe(
      data => {
        console.log('Deleted the user with userId: ' + this._userId);
        console.log(data);
        this._deleteUserError = null;
        this._user = null;
        this._sharedService.user = null;
        this._router.navigate(['/login']);
        console.log('User successfully deleted!');
      },
      error => {
        console.log('Error deleting the user with userId: ' + this._userId);
        this._deleteUserError = error || 'Error deleting the user!';
      }
    );
  }

  // the event handler to logout user
  onLogout() {
    this._userService.logout().subscribe(
      data => {
        this._logoutError = null;
        this._user = null;
        this._sharedService.user = null;
        this._router.navigate(['/login']);
        console.log('User successfully logged out!');
      },
      error => {
        this._logoutError = error || 'Error logging out!';
      }
    );
  }
}
