import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PageService} from '../../../services/page.service';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-page-new',
  templateUrl: './page-new.component.html',
  styleUrls: ['./page-new.component.css']
})
export class PageNewComponent implements OnInit {
  // properties
  private _userId: string;
  private _websiteId: string;
  private _name: string;
  private _title: string;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _pageService: PageService,
    private _sharedService: SharedService
  ) {
  }

  ngOnInit() {
    this._userId = this._sharedService.user._id;
    // update properties with parameters of the route
    this._activatedRoute.params.subscribe(params => {
      console.log(params);
      this._websiteId = params.wid;
    });
  }

  onCreateNewPage() {
    const newPage = {
      _id: '',
      name: this._name,
      websiteId: this._websiteId,
      title: this._title
    };
    this._pageService.createPage(this._websiteId, newPage).subscribe(data => {
      console.log('Created the new page: ');
      console.log(data);
    });
  }
}
