import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../services/user.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  // properties
  private _userId: string;
  private _user: any;

  constructor(private _userService: UserService, private _activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this._activatedRoute.params.subscribe(
      params => {
        console.log(params);
        this._userId = params['uid'];
      }
    );
    this._user = this._userService.findUserById(this._userId);
    console.log(this._user);
  }

}
