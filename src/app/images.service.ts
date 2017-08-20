import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

@Injectable()
export class ImagesService {

  constructor( @Inject(Http) private http: Http) { }
  static ENDPOINT: string = '/api/image';

  get(start, limit): Observable<any> {
    return this.http
      .get(ImagesService.ENDPOINT + '/' + start + '/' + limit)
      .map(images => images.json());
  }

  post(form_data): Observable<any> {
    return this.http
      .post(ImagesService.ENDPOINT, form_data)
      .map(result => result.json());
  }
}
