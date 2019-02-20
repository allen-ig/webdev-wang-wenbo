import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PageService} from '../../../services/page.service';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {
  // properties
  private _userId: string;
  private _websiteId: string;
  private _pages = [];

  constructor(private _activatedRoute: ActivatedRoute,
              private _pageService: PageService) {
  }

  ngOnInit() {
    // update the properties with route parameters
    this._activatedRoute.params.subscribe(
      params => {
        console.log(params);
        this._userId = params.uid;
        this._websiteId = params.wid;
      }
    );
    // then get the page associated with the websiteId
    this._pages = this._pageService.findPagesByWebsiteId(this._websiteId);
    console.log(this._pages);
  }

}
