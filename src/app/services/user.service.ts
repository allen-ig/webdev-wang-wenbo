import {Injectable} from '@angular/core';
import {GetUsersService} from './get-users.service';
import {User} from '../models/User';
import {HttpClient} from '@angular/common/http';
import {SharedService} from './shared.service';
import {map} from 'rxjs/operators';
import 'rxjs/add/operator/map';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // private _users = [];
  // private _getUsersErrorMessage: string;

  // constructor(private _getUsersService: GetUsersService) {
  //   this._getUsersService.getUsers().subscribe(
  //     data => this._users = data,
  //     error => this._getUsersErrorMessage = error
  //   );
  // }

  options = {
    withCredentials: false
  };

  // the http REST call urls
  private _findUserByIdUrl = '/api/user/';
  private _findUserByUsernameUrl = '/api/user?username=';
  private _findUserByCredentialsUrl = '/api/user?username=';
  private _updateUserUrl = '/api/user/';
  private _deleteUserUrl = '/api/user/';
  private _createUserUrl = '/api/user';
  private _loginUrl = '/api/login';
  private _logoutUrl = '/api/logout';
  private _registerUrl = '/api/register';
  private _loggedinUrl = '/api/loggedin';

  constructor(private _http: HttpClient,
              private _sharedService: SharedService,
              private _router: Router) {
  }

  api = {
    createUser: this.createUser,
    findUserById: this.findUserById,
    findUserByUsername: this.findUserByUsername,
    findUserByCredentials: this.findUserByCredentials,
    updateUser: this.updateUser,
    deleteUser: this.deleteUser,
    login: this.login,
    logout: this.logout,
    register: this.register,
    loggedIn: this.loggedIn
  };

  // login service function
  login(username: String, password: String) {
    this.options.withCredentials = true;
    const body = {
      username: username,
      password: password
    };
    return this._http.post<any>(this._loginUrl, body, this.options);
  }

  // logout service function
  logout() {
    console.log('Logging out...');
    this.options.withCredentials = false;
    return this._http.post(this._logoutUrl, '', this.options);
  }

  // register new user service function
  register(username: String, password: String) {
    this.options.withCredentials = true;
    const newUser = {
      username: username,
      password: password,
      firstName: '',
      lastName: '',
      email: '',
      phone: ''
    };
    return this._http.post<any>(this._registerUrl, newUser, this.options);
  }

  // loggedIn function to store the currently logged user in SharedService
  loggedIn() {
    this.options.withCredentials = true;
    return this._http.get<any>(this._loggedinUrl, this.options).map(
      (res: Response) => {
        const user = JSON.stringify(res);
        if (user !== '0') {
          this._sharedService.user = user;
          return true;
        } else {
          this._router.navigate(['login']);
          return false;
        }
      }
    );
  }

  // adds the user parameter instance to the local users array
  createUser(user: any) {
    const new_user = {
      username: user.username,
      password: user.password,
      firstName: user.firstName,
      lastName: user.lastName
    };
    return this._http.post<any>(this._createUserUrl, new_user);
  }

  // post new user to the database, the http version of the above method
  // createUser(user: User) {
  //   return this._http.post<User>(this._postUrl, user);
  // }

  // the http version

  // returns the user in local users array whose Id matches the parameter userId
  findUserById(userId: string) {
    return this._http.get<any>(this._findUserByIdUrl + userId);
  }

  // returns the user in local users array whose username matches the parameter username
  findUserByUsername(username: string) {
    return this._http.get<any>(this._findUserByUsernameUrl + username);
  }

  // returns the user whose username and password match the username and password parameters
  findUserByCredentials(username: string, password: string) {
    return this._http.get<any>(
      this._findUserByCredentialsUrl + username + '&password=' + password
    );
  }

  // updates the user in local users array whose _id matches the userId parameter
  updateUser(userId: string, user: any) {
    console.log('Updated the user to: ' + JSON.stringify(user));
    return this._http.put<any>(this._updateUserUrl + userId, user);
  }

  // removes the user whose _id matches the userId parameter
  deleteUser(userId: string) {
    console.log('Deleting the user with Id: ' + userId);
    this.options.withCredentials = false;
    return this._http.delete<any>(this._deleteUserUrl + userId, this.options);
  }

  // to return the error message while getting the users
  // getUsersErrorMessage(): string {
  //   return this._getUsersErrorMessage;
  // }
}
