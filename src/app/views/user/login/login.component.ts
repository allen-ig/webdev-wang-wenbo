import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {ViewChild} from '@angular/core';
import {UserService} from '../../../services/user.service';
import {User} from '../../../models/User';
import {SharedService} from '../../../services/shared.service';

// Array.prototype.insert = function (index, item) {
//   this.splice(index, 0, item);
// };

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // to access the template reference variable
  @ViewChild('loginForm') form: NgForm;

  // form properties
  username: string; // accessed from ngForm property
  password: string; // accessed from ngForm property
  errorFlag: boolean;
  errorMsg = 'Invalid username or password!';
  private _bgColor = 'green';

  // the array of items to test sortable directive
  private _testSortableFlag = false;
  private _sortableItems = [
    'Xbox One', 'Xbox One X', 'PS4', 'PS4 Pro', 'Nintendo Switch', 'PC'
  ];

  constructor(private _router: Router,
              private _userService: UserService,
              private _sharedService: SharedService) {
    this.errorFlag = false;
  }

  login() {
    // firstly, access the entered form data from form reference variable
    this.username = this.form.value.username;
    this.password = this.form.value.password;
    console.log(this.username);
    console.log(this.password);
    // secondly, decide if the entered data match via the credential service, UserService
    // this._userService
    //   .findUserByCredentials(this.username, this.password)
    //   .subscribe(
    //     user => {
    //       console.log('login() return: ');
    //       console.log(user);
    //       if (user) {
    //         console.log('Login successful!');
    //         this.errorFlag = false;
    //         this._router.navigate(['/user', user._id]);
    //       } else {
    //         console.log('Login failed!');
    //         this.errorFlag = true;
    //       }
    //     },
    //     error => {
    //       console.log(error.message || 'User not found while loging in...');
    //       this.errorFlag = true;
    //     }
    //   );
    this._userService.login(this.username, this.password).subscribe(
      user => {
        console.log('login() return: ');
        console.log(user);
        if (user) {
          console.log('Login successful!');
          this.errorFlag = false;
          this._sharedService.user = user;
          // this._router.navigate(['/user', user._id]);
          this._router.navigate(['/profile']);
        } else {
          console.log('Login failed!');
          this.errorFlag = true;
          this._sharedService.user = '';
        }
      },
      error => {
        console.log(error.message || 'User not found while loging in...');
        this.errorFlag = true;
        this._sharedService.user = '';
      }
    );
  }

  reorderItems(indices) {
    console.log('Start index: ' + indices.startIndex);
    console.log('End index: ' + indices.endIndex);
    // now insert the item into the new position
    this._moveToNewPosition(indices.startIndex, indices.endIndex);
    console.log('Now the items are: ');
    console.log(this._sortableItems);
  }

  private _moveToNewPosition(start, end) {
    const item = this._sortableItems[start];
    this._sortableItems.splice(start, 1);
    this._sortableItems.splice(end, 0, item);
  }

  private _toggleTestSortable() {
    this._testSortableFlag = !this._testSortableFlag;
  }

  // use constructor to import services basically, but not use it as much as to
  // load bunch of things when the component is loaded
  // instead use ngOnInit to load things
  ngOnInit() {
  }
}
