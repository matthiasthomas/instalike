import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ImagesService } from "../images.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  constructor(private imagesService: ImagesService, private router: Router) { }
  reader: FileReader = new FileReader();
  form_data: FormData = new FormData();
  img_src: string;
  description;
  file;

  ngOnInit() {

  }

  upload() {
    this.form_data.append('description', this.description);
    this.form_data.append('image', this.file);
    this.imagesService.post(this.form_data)
      .subscribe(result => {
        console.log(result);
        this.router.navigate(['/']);
      });
  }

  onChange(event) {
    var files = event.srcElement.files;
    if (files && files[0]) {
      this.file = files[0];
      this.reader.onload = e => {
        this.img_src = e.target['result'];
      }
      this.reader.readAsDataURL(files[0]);
    }
  }

}
