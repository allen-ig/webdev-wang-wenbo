import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PageService} from '../../../services/page.service';
import {SharedService} from '../../../services/shared.service';

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

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _pageService: PageService,
    private _sharedService: SharedService
  ) {
  }

  ngOnInit() {
    this._userId = this._sharedService.user._id;
    // update the properties with route parameters
    this._activatedRoute.params.subscribe(params => {
      console.log(params);
      this._websiteId = params.wid;

      // then get the pages associated with the websiteId
      this._pageService
        .findPagesByWebsiteId(this._websiteId)
        .subscribe(data => {
          this._pages = data;
          console.log(
            'Getting the pages with website Id ' + this._websiteId + ': '
          );
          console.log(data);
        });
    });
  }
}
