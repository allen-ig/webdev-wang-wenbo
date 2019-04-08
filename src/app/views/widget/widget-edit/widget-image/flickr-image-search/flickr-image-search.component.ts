import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FlickrService} from '../../../../../services/flickr.service';
import {WidgetService} from '../../../../../services/widget.service';
import {SharedService} from '../../../../../services/shared.service';

@Component({
  selector: 'app-flickr-image-search',
  templateUrl: './flickr-image-search.component.html',
  styleUrls: ['./flickr-image-search.component.css']
})
export class FlickrImageSearchComponent implements OnInit {
  private _searchText: string;
  private _photos;
  private _searchPhotoError: string;

  // properties from url
  private _userId: string;
  private _websiteId: string;
  private _pageId: string;
  private _widgetId: string;

  // @Output() selectPhotoEvent = new EventEmitter();

  constructor(private _activatedRoute: ActivatedRoute,
              private _flickrService: FlickrService,
              private _router: Router,
              private _widgetService: WidgetService,
              private _sharedService: SharedService) {
  }

  ngOnInit() {
    this._userId = this._sharedService.user._id;
    // update the properties using the route parameters
    this._activatedRoute.params.subscribe(params => {
        console.log(params);
        this._websiteId = params.wid;
        this._pageId = params.pid;
        this._widgetId = params.wgid;
      }
    );
  }

  searchPhotos() {
    console.log(`Searching \'${this._searchText}\':`);
    this._flickrService.searchPhotos(this._searchText).subscribe(
      (data: any) => {
        console.log(`Done searching \'${this._searchText}\' via flickrService, got the result!`);
        // console.log(data);
        this._searchPhotoError = null;
        let val = data;
        val = val.replace('jsonFlickrApi(', '');
        val = val.substring(0, val.length - 1);
        val = JSON.parse(val);
        this._photos = val.photos.photo;
        // console.log(this._photos);
      },
      (error) => {
        console.log('Error searching photos via flickrService!');
        this._searchPhotoError = error || 'Error searching photos on Flickr, please try again!!';
      }
    );
  }

  selectPhoto(pic) {
    const url = 'https://farm' + pic.farm + '.staticflickr.com/' + pic.server + '/' + pic.id + '_' + pic.secret + '_s.jpg';
    // console.log(url);
    // this.selectPhotoEvent.emit(url);
    this._widgetService.findWidgetById(this._widgetId).subscribe(
      data => {
        const newWidget = data;
        newWidget.url = url;
        // console.log(newWidget);
        this._widgetService.updateWidget(this._widgetId, newWidget).subscribe(
          updated => {
            // console.log('Updated the image with new url after search.');
            // console.log(updated);
            this._router.navigate(['/website', this._websiteId, 'page', this._pageId, 'widget']);
          }
        );
      }
    );
  }

}
