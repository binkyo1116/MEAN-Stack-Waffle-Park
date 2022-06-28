import { Component, OnInit, Inject, Input} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {DOCUMENT} from '@angular/platform-browser';
import {CartService} from '../cart.service';


export interface DialogData {
  image: string;
  title: string;
  description: string;
  price: number;
}

@Component({
  selector: 'app-waffle-card',
  templateUrl: './waffle-card.component.html',
  styleUrls: ['./waffle-card.component.css']
})
export class WaffleCardComponent implements OnInit {

  waffles: any;
  waff:any;
  color = 'primary';
  mode = 'query';
  fetching: Boolean= false;
  @Input() pageName;

  constructor(
    private http: HttpClient,
    public dialog: MatDialog,
    @Inject(DOCUMENT) private document: Document,
    private _cartService: CartService) {}

  ngOnInit() {
    this.fetching = true;
    this.http.get('http://'+this.document.location.hostname+':3000/api/waffles').subscribe((res: any) => {
      this.waffles = res;
      this.fetching = false;
    });

  }

  openDialog(id : any) : void {

    var url = 'http://' + this.document.location.hostname + ':3000/api/waffle/' + id;
    this.http.get(url).subscribe((res: any) => {

      this.waff = res;
      const dialogRef = this.dialog.open(ShowWaffleComponent, {
        width: 'auto',
        minWidth: '75%',
        maxWidth: '95%',
        height: 'auto',
        maxHeight: '100%',
        data: {id: this.waff._id,image: this.waff.image, title: this.waff.title, description: this.waff.description, price: this.waff.price, info: this.waff.item}

      });


      dialogRef.afterClosed().subscribe(res =>{
        if(res){

          this._cartService.addItems(res).subscribe(res=>{
            console.log(res);
          });
        }
      })
    });

  }

}



@Component({
  selector: 'app-show-waffle',
  templateUrl: 'show-waffle.component.html',
  styleUrls: ['./waffle-card.component.css']
})

export class ShowWaffleComponent {

  quantity:number = 1;
  constructor(public dialogRef: MatDialogRef<ShowWaffleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  incQuantity(): void{
    this.quantity++;
  }

  decQuantity(): void{
    if(this.quantity>1){
      this.quantity--;
    }
  }

  totalPrice(price:number, quantity:number): number{
    return price * quantity;
  }

  addToCart(): void{

    // this.cart.append();
    var cartitem = this.data;
    cartitem["quantity"] = this.quantity;
    this.dialogRef.close(cartitem);
  }

}
