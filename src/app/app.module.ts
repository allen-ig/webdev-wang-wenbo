import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule, routingComponents} from './app-routing.module';
// import { routing } from './app-routing.module';

import {AppComponent} from './app.component';
import {UserService} from './services/user.service';
import {WebsiteService} from './services/website.service';
import {PageService} from './services/page.service';
import {WidgetService} from './services/widget.service';
import {GetUsersService} from './services/get-users.service';
import { ConfirmEqualValidator } from './shared/confirm-equal.validator';
import { SafeUrlPipe } from './pipes/safe-url.pipe';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    ConfirmEqualValidator,
    SafeUrlPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // import this FormsModule in order to use ngModel directive
    FormsModule,
    HttpClientModule,
  ],
  providers: [UserService, WebsiteService, PageService, WidgetService, GetUsersService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
