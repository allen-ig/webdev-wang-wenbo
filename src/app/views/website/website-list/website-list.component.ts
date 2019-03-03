import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { WebsiteService } from "../../../services/website.service";

@Component({
  selector: "app-website-list",
  templateUrl: "./website-list.component.html",
  styleUrls: ["./website-list.component.css"]
})
export class WebsiteListComponent implements OnInit {
  // properties
  private _userId: string;
  private _websites = [];

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _websiteService: WebsiteService
  ) {}

  ngOnInit() {
    // firstly, get the userId
    this._activatedRoute.params.subscribe(params => {
      console.log(params);
      this._userId = params["uid"];
    });
    // then retrieves the websites associated with the userId
    this._websiteService.findWebsitesByUser(this._userId).subscribe(data => {
      console.log("Getting the websites of user id " + this._userId + ": ");
      this._websites = data;
      console.log(this._websites);
    });
  }
}
