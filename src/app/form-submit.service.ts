import {EventEmitter, Inject, Injectable, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DOCUMENT} from '@angular/platform-browser';
@Injectable({
  providedIn: 'root'
})
export class FormSubmitService {

  @Output() getSession: EventEmitter<any> = new EventEmitter();
  @Output() getUser: EventEmitter<any> = new EventEmitter();
  @Output() getAddress: EventEmitter<any> = new EventEmitter();
  constructor(
    private http:HttpClient,
    @Inject(DOCUMENT) private document: Document
  ) { }

  signup(data:any):any{

    var url = 'http://'+this.document.location.hostname+':3000/api/signup';
    return this.http.post(url, data, {
      withCredentials: true  // <=========== important!
    });
  }

  login(data:any):any{

    var url = 'http://'+this.document.location.hostname+':3000/api/login';
    return this.http.post(url, data, {
      withCredentials: true  // <=========== important!
    });
  }

  logout():any{

    var url = 'http://'+this.document.location.hostname+':3000/api/logout';
    return this.http.get(url, {
      withCredentials: true  // <=========== important!
    });
  }

  fetchAddress():any{

    var url = 'http://'+this.document.location.hostname+':3000/api/fetch_address';
    return this.http.get(url, {
      withCredentials: true  // <=========== important!
    });
  }
  addAddress(add):any{

    var url = 'http://'+this.document.location.hostname+':3000/api/add_address';
    return this.http.post(url, add, {
      withCredentials: true  // <=========== important!
    });
  }

}
