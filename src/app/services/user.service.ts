import {Injectable} from '@angular/core';
import {GetUsersService} from './get-users.service';
import {User} from '../models/User';
import {HttpClient} from '@angular/common/http';

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

  // the http REST call urls
  private _findUserByIdUrl = '/api/user/';
  private _findUserByUsernameUrl = '/api/user?username=';
  private _findUserByCredentialsUrl = '/api/user?username=';
  private _updateUserUrl = '/api/user/';
  private _deleteUserUrl = '/api/user/';
  private _createUserUrl = '/api/user';

  constructor(private _http: HttpClient) {
  }

  api = {
    createUser: this.createUser,
    findUserById: this.findUserById,
    findUserByUsername: this.findUserByUsername,
    findUserByCredentials: this.findUserByCredentials,
    updateUser: this.updateUser,
    deleteUser: this.deleteUser
  };

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
    return this._http.delete<any>(this._deleteUserUrl + userId);
  }

  // to return the error message while getting the users
  // getUsersErrorMessage(): string {
  //   return this._getUsersErrorMessage;
  // }
}
