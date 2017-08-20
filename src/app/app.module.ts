import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';

import { routing } from './route'
import { ImagesService } from "./images.service";

import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import { UploadComponent } from './upload/upload.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    UploadComponent
  ],
  imports: [
    InfiniteScrollModule,
    BrowserModule,
    routing,
    HttpModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    ImagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
