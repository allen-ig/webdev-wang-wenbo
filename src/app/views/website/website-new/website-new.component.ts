import {Component, OnInit} from '@angular/core';
import {WebsiteService} from '../../../services/website.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-website-new',
  templateUrl: './website-new.component.html',
  styleUrls: ['./website-new.component.css']
})
export class WebsiteNewComponent implements OnInit {
  // properties
  private _userId: string;
  private _websites = [];
  private _name: string;
  private _description: string;

  constructor(private _websiteService: WebsiteService,
              private _activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    // use activatedRoute service to get the properties
    this._activatedRoute.params.subscribe(
      params => {
        console.log(params);
        // firstly, get the uid
        this._userId = params.uid;
        console.log(this._userId);
      }
    );
    // then get the websites associated with the uid
    const tempWebsites = this._websiteService.findWebsitesByUser(this._userId);
    // deep copy the websites to store locally
    for (let i = 0; i < tempWebsites.length; i++) {
      this._websites.push(JSON.parse(JSON.stringify(tempWebsites[i])));
    }
    console.log('Deep copy the websites from WebsiteService: ');
    console.log(this._websites);
  }

  onSubmitNewWebsite() {
    const newWebsite = {
      _id: '',
      name: this._name,
      developerId: '',
      description: this._description
    };
    this._websiteService.createWebsite(this._userId, newWebsite);
  }

}
