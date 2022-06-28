import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DOCUMENT} from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: "root",
})
export class CartService{

  cart:any = [];


  constructor(private http: HttpClient, @Inject(DOCUMENT) private document: Document) {}


  addItems(item) :any{

    this.cart.push(item);
    var url = 'http://'+this.document.location.hostname+':3000/api/add_cart';
    return this.http.post(url, item, {
      withCredentials: true  // <=========== important!
    });
  }

   getItems(): any{

    var url = 'http://'+this.document.location.hostname+':3000/api/fetch_cart';
    return this.http.get(url, {withCredentials: true});

  }
  updateItems(item):any{
    var url = 'http://'+this.document.location.hostname+':3000/api/update_cart';
    return this.http.post(url, item, {
      withCredentials: true  // <=========== important!
    });
  }

  returnItems():any{
    return this.cart;
  }
  returnLength():number{
    return this.cart.length;
  }


}
