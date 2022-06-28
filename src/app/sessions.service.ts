import {EventEmitter, Inject, Injectable, Output} from '@angular/core';
import {DOCUMENT} from '@angular/platform-browser';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SessionsService {

  constructor(@Inject(DOCUMENT) private document: Document,
               private http:HttpClient) { }

  session: boolean;


  checkSession():any {
    var url = 'http://'+this.document.location.hostname+':3000/api/check';
    return this.http.get(url, {
      withCredentials: true  // <=========== important!
    });
  }
}
