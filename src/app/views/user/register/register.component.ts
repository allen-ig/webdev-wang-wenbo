import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

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

  constructor() {
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
    console.log(this._username);
    console.log(this._password);
    console.log(this._verifyPassword);
  }

}
