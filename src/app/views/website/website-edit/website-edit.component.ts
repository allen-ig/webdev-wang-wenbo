import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WebsiteService} from '../../../services/website.service';


@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {
  // properties
  private _userId: string;
  private _websiteId: string;
  private _website: any;
  private _websites = [];

  constructor(private _activatedRoute: ActivatedRoute,
              private _websiteService: WebsiteService) {
  }

  ngOnInit() {
    this._activatedRoute.params.subscribe(
      params => {
        console.log(params);
        // firstly, find both uid and wid
        this._userId = params.uid;
        this._websiteId = params.wid;
        // secondly, find the website associated with the wid
        this._website = this._websiteService.findWebsiteById(this._websiteId);
        console.log(this._website);
      }
    );
    // secondly, find the websites associated with the uid
    this._websites = this._websiteService.findWebsitesByUser(this._userId);
  }
}
