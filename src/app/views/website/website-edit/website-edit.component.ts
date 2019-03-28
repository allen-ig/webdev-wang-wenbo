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
  private _website = {
    _id: '',
    name: '',
    developerId: '',
    description: ''
  };
  private _websites = [];

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _websiteService: WebsiteService
  ) {
  }

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      console.log(params);
      // firstly, find both uid and wid
      this._userId = params.uid;
      this._websiteId = params.wid;

      // secondly, find the website associated with the wid
      // and make the deep copy of the website
      this._websiteService.findWebsiteById(this._websiteId).subscribe(data => {
        this._website = JSON.parse(JSON.stringify(data));
        console.log('Deep copied the following website: ');
        console.log(this._website);
      });
    });

    // thirdly, find the websites associated with the uid
    this._websiteService.findWebsitesByUser(this._userId).subscribe(data => {
      console.log('Updated the websites...');
      this._websites = data;
    });
  }

  onEditWebsite() {
    const updatedWebsite = JSON.parse(JSON.stringify(this._website));
    this._websiteService
      .updateWebsite(this._websiteId, updatedWebsite)
      .subscribe(data => {
        console.log('Updated the website to: ');
        console.log(data);
      });
  }

  onDeleteWebsite() {
    this._websiteService.deleteWebsite(this._websiteId).subscribe(data => {
      console.log('Deleted the website: ');
      console.log(data);
    });
  }
}
