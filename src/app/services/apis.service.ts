import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseUrl, HEADERS } from '../constant';

@Injectable({
  providedIn: 'root'
})
export class ApisService {
  headers = HEADERS;
  constructor(
    private http: HttpClient,
  ) { }

  list() {
    return this.http.get(BaseUrl + 'Items',
      {
        headers: this.headers
      });
  }
  edit(id) {
    return this.http.put(BaseUrl + 'Items/' + id,
      {
        headers: this.headers
      });
  }
  delete(id) {
    return this.http.delete(BaseUrl + 'Items/' + id,
      {
        headers: this.headers
      });
  }
  insert(condition) {
    return this.http.post(BaseUrl + 'Items', condition, {
      headers: this.headers
    });
  }
  uploadImage(image) {
    return this.http.post(BaseUrl + 'UploadImage', image,
    {
      headers: this.headers
    });
  }
}
