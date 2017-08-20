import { Component, OnInit } from '@angular/core';
import { ImagesService } from "../images.service";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor(private imagesService: ImagesService) { }
  images;
  selected_image;

  ngOnInit() {
    this.images = {
      limit: 10, offset: 0, endOfList: false, loadingInProgress: false, list: []
    };
    this.getMoreImages();
  }

  selectImage(image) {
    this.selected_image = image;
  }

  private getMoreImages() {
    this.imagesService
      .get(this.images.offset, this.images.limit)
      .subscribe(images => {
        if (images.length === 0) {
          this.images.endOfList = true;
        } else {
          this.images.list = this.images.list.concat(images);
          this.images.offset += this.images.limit;
        }
      });
  }
}
