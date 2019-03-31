import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {QuillEditorModule} from 'ngx-quill-editor';
// import {QuillModule} from 'ngx-quill';

import {AppRoutingModule, routingComponents} from './app-routing.module';
// import { routing } from './app-routing.module';

import {AppComponent} from './app.component';
import {UserService} from './services/user.service';
import {WebsiteService} from './services/website.service';
import {PageService} from './services/page.service';
import {WidgetService} from './services/widget.service';
import {GetUsersService} from './services/get-users.service';
import {ConfirmEqualValidator} from './shared/confirm-equal.validator';
import {SafeUrlPipe} from './pipes/safe-url.pipe';
import {ChangeBgColorDirective} from './directives/change-bg-color.directive';
import {InputRangeValidator} from './shared/input-range.validator';
import {PercentageRangeValidator} from './shared/percentage-range.validator';
import {SortableDirective} from '../../Assignment/directives/sortable.directive';
import {FileInputValidator} from './shared/file-input.validator';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    ConfirmEqualValidator,
    SafeUrlPipe,
    ChangeBgColorDirective,
    InputRangeValidator,
    PercentageRangeValidator,
    SortableDirective,
    FileInputValidator
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // import this FormsModule in order to use ngModel directive
    FormsModule,
    HttpClientModule,
    QuillEditorModule,
    // QuillModule
  ],
  providers: [UserService, WebsiteService, PageService, WidgetService, GetUsersService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
