import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';

import { routing } from './route'
import { ImagesService } from "./images.service";

import { NguiInfiniteListModule } from '@ngui/infinite-list';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent
  ],
  imports: [
    NguiInfiniteListModule,
    BrowserModule,
    routing,
    HttpModule
  ],
  providers: [ImagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
