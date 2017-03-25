import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, RequestOptions, Http } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {AuthService} from "app/auth.service";
import { TaskListComponent } from './task-list/task-list.component';
import { TaskFormComponent } from './task-list/task-form/task-form.component';
import {TaskListService} from "app/task-list/task-list.service";
import {AuthHttp, AuthConfig} from "angular2-jwt/angular2-jwt";

export function authHttpFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig(), http, options);
}

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    TaskListComponent,
    TaskFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    SlimLoadingBarModule
  ],
  providers: [
    AuthService,
    TaskListService,
    {
      provide: AuthHttp,
      useFactory: authHttpFactory,
      deps: [Http, RequestOptions]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
