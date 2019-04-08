import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {LoginComponent} from './views/user/login/login.component';
import {ProfileComponent} from './views/user/profile/profile.component';
import {RegisterComponent} from './views/user/register/register.component';
import {WebsiteNewComponent} from './views/website/website-new/website-new.component';
import {WebsiteListComponent} from './views/website/website-list/website-list.component';
import {WebsiteEditComponent} from './views/website/website-edit/website-edit.component';
import {PageNewComponent} from './views/page/page-new/page-new.component';
import {PageListComponent} from './views/page/page-list/page-list.component';
import {PageEditComponent} from './views/page/page-edit/page-edit.component';
import {WidgetChooserComponent} from './views/widget/widget-chooser/widget-chooser.component';
import {WidgetHeaderComponent} from './views/widget/widget-edit/widget-header/widget-header.component';
import {WidgetImageComponent} from './views/widget/widget-edit/widget-image/widget-image.component';
import {WidgetListComponent} from './views/widget/widget-list/widget-list.component';
import {WidgetYoutubeComponent} from './views/widget/widget-edit/widget-youtube/widget-youtube.component';
import {TodosComponent} from './views/todolist/todos/todos.component';
import {AboutComponent} from './views/todolist/about/about.component';
import {TodoItemComponent} from './views/todolist/todo-item/todo-item.component';
import {HeaderComponent} from './views/todolist/header/header.component';
import {AddTodoComponent} from './views/todolist/add-todo/add-todo.component';
import {WidgetEditComponent} from './views/widget/widget-edit/widget-edit/widget-edit.component';
import {FlickrImageSearchComponent} from './views/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component';
import {WidgetHtmlComponent} from './views/widget/widget-edit/widget-html/widget-html.component';
import {WidgetTextComponent} from './views/widget/widget-edit/widget-text/widget-text.component';
import {AuthGuardService} from './services/auth-guard.service';


// The custom routes of the Angular app.
const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'user/:uid', component: ProfileComponent, canActivate: [AuthGuardService]},
  {path: 'user/:uid/website', component: WebsiteListComponent},
  {path: 'user/:uid/website/new', component: WebsiteNewComponent},
  {path: 'user/:uid/website/:wid', component: WebsiteEditComponent},
  {path: 'user/:uid/website/:wid/page', component: PageListComponent},
  {path: 'user/:uid/website/:wid/page/new', component: PageNewComponent},
  {path: 'user/:uid/website/:wid/page/:pid', component: PageEditComponent},
  {path: 'user/:uid/website/:wid/page/:pid/widget', component: WidgetListComponent},
  {path: 'user/:uid/website/:wid/page/:pid/widget/new', component: WidgetChooserComponent},
  {path: 'user/:uid/website/:wid/page/:pid/widget/header', component: WidgetHeaderComponent},
  {path: 'user/:uid/website/:wid/page/:pid/widget/image', component: WidgetImageComponent},
  {path: 'user/:uid/website/:wid/page/:pid/widget/youtube', component: WidgetYoutubeComponent},
  {path: 'website/:wid/page/:pid/widget/header', component: WidgetHeaderComponent, canActivate: [AuthGuardService]},
  {path: 'website/:wid/page/:pid/widget/image', component: WidgetImageComponent, canActivate: [AuthGuardService]},
  {path: 'website/:wid/page/:pid/widget/youtube', component: WidgetYoutubeComponent, canActivate: [AuthGuardService]},
  {path: 'user/:uid/website/:wid/page/:pid/widget/:wgid', component: WidgetEditComponent},
  {path: 'user/:uid/website/:wid/page/:pid/widget/:wgid/search', component: FlickrImageSearchComponent},
  {path: 'todos', component: TodosComponent},
  {path: 'about', component: AboutComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService]},
  {path: 'website', component: WebsiteListComponent, canActivate: [AuthGuardService]},
  {path: 'website/new', component: WebsiteNewComponent, canActivate: [AuthGuardService]},
  {path: 'website/:wid', component: WebsiteEditComponent, canActivate: [AuthGuardService]},
  {path: 'website/:wid/page', component: PageListComponent, canActivate: [AuthGuardService]},
  {path: 'website/:wid/page/new', component: PageNewComponent, canActivate: [AuthGuardService]},
  {path: 'website/:wid/page/:pid', component: PageEditComponent, canActivate: [AuthGuardService]},
  {path: 'website/:wid/page/:pid/widget', component: WidgetListComponent, canActivate: [AuthGuardService]},
  {path: 'website/:wid/page/:pid/widget/new', component: WidgetChooserComponent, canActivate: [AuthGuardService]},
  {path: 'website/:wid/page/:pid/widget/:wgid', component: WidgetEditComponent, canActivate: [AuthGuardService]},
  {path: 'website/:wid/page/:pid/widget/:wgid/search', component: FlickrImageSearchComponent, canActivate: [AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})

export class AppRoutingModule {
}

// export const routing = RouterModule.forRoot(routes);

// import all views here and export, and then import in the app.module.ts file
// to prevent duplicate imports
export const routingComponents =
  [LoginComponent,
    ProfileComponent,
    RegisterComponent,
    PageEditComponent,
    PageListComponent,
    PageNewComponent,
    WebsiteNewComponent,
    WebsiteEditComponent,
    WebsiteListComponent,
    WidgetChooserComponent,
    WidgetListComponent,
    WidgetYoutubeComponent,
    WidgetImageComponent,
    WidgetHeaderComponent,
    WidgetEditComponent,
    FlickrImageSearchComponent,
    WidgetHtmlComponent,
    WidgetTextComponent,
    TodosComponent,
    TodoItemComponent,
    HeaderComponent,
    AddTodoComponent,
    AboutComponent
  ];
