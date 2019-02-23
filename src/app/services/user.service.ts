import {Injectable} from '@angular/core';
import {GetUsersService} from './get-users.service';
import {User} from '../models/User';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _users = [
    {_id: '123', username: 'alice', password: 'alice', firstName: 'Alice', lastName: 'Wonder'},
    {_id: '234', username: 'bob', password: 'bob', firstName: 'Bob', lastName: 'Marley'},
    {_id: '345', username: 'charlie', password: 'charlie', firstName: 'Charlie', lastName: 'Garcia'},
    {_id: '456', username: 'john', password: 'john', firstName: 'John', lastName: 'Doe'}
  ];
  // private _users = [];
  // private _getUsersErrorMessage: string;

  // constructor(private _getUsersService: GetUsersService) {
  //   this._getUsersService.getUsers().subscribe(
  //     data => this._users = data,
  //     error => this._getUsersErrorMessage = error
  //   );
  // }

  // the http REST call urls
  private _postUrl = '/api/user';

  constructor(private _http: HttpClient) {
  }

  api = {
    'createUser': this.createUser,
    'findUserById': this.findUserById,
    'findUserByUsername': this.findUserByUsername,
    'findUserByCredentials': this.findUserByCredentials,
    'updateUser': this.updateUser,
    'deleteUser': this.deleteUser
  };

  // adds the user parameter instance to the local users array
  createUser(user: any) {
    const new_user = {
      _id: '',
      username: user.username,
      password: user.password,
      firstName: user.firstName,
      lastName: user.lastName
    };
    new_user._id = Math.random() + '';
    this._users.push(new_user);
    console.log('Created a new user: ' + JSON.stringify(new_user));
    return new_user;
  }

  // post new user to the database, the http version of the above method
  // createUser(user: User) {
  //   return this._http.post<User>(this._postUrl, user);
  // }

  // returns the user in local users array whose _id matches the userId parameter
  findUserById(userId: string) {
    return this._users.find(function (user) {
      return user._id === userId;
    });
  }

  // returns the user in local users array whose username matches the parameter username
  findUserByUsername(username: string) {
    return this._users.find(function (user) {
      return user.username === username;
    });
  }

  // returns the user whose username and password match the username and password parameters
  findUserByCredentials(username: string, password: string) {
    return this._users.find(function (user) {
      return user.username === username && user.password === password;
    });
  }

  // updates the user in local users array whose _id matches the userId parameter
  updateUser(userId: string, user: any) {
    for (const i in this._users) {
      if (this._users[i]._id === userId) {
        this._users[i] = user;
        console.log('Updated the user to: ' + JSON.stringify(this._users[i]));
        return user;
      }
    }
    console.log('Did not update any user!');
    return null;
  }

  // removes the user whose _id matches the userId parameter
  deleteUser(userId: string) {
    for (const i in this._users) {
      if (this._users[i]._id === userId) {
        const j = +i;
        this._users.splice(j, 1);
      }
    }
  }

  // to return the users
  getUsers(): User[] {
    return this._users;
  }

  // to return the error message while getting the users
  // getUsersErrorMessage(): string {
  //   return this._getUsersErrorMessage;
  // }
}
