import { Component, OnInit } from '@angular/core';
import {OpenDialogService} from '../open-dialog.service';
import {LoginComponent} from '../login/login.component';
import {SignupComponent} from '../signup/signup.component';
import {FormSubmitService} from '../form-submit.service';
import {SessionsService} from '../sessions.service';
import {FormGroup, FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {MatDialogRef} from '@angular/material';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  session: boolean = false;
  issetLocation: boolean = false;
  selectedLocation: any;
  user: any = {};
  locations = [];
  pageName = "checkout";
  isCartEmpty: boolean = false;

  constructor(
    private _openDialogService: OpenDialogService,
    private _sessionsService: SessionsService,
    private _formSubmitService: FormSubmitService,
    private _cartService: CartService
  ) {
    _formSubmitService.getSession.subscribe(value => {
      this.changeSession(value);
    });
    _formSubmitService.getUser.subscribe(value =>{
      this.changeUser(value);
    });
    this._formSubmitService.getAddress.subscribe(value=>{
      console.log(value);
      console.log(this.locations);
      this.locations.push(value);
    });
  }

  ngOnInit() {

    this.checkSession();
    // this.set_locations();

    if(this.selectedLocation){
      this.issetLocation = true;
    }

  }

  openLoginDialog():void{
    this._openDialogService.openDialog(LoginComponent);
  }
  openSignupDialog():void{
    this._openDialogService.openDialog(SignupComponent);
  }
  openAddressDialog():void{
    this._openDialogService.openDialog(AddressComponent);
  }

  private changeSession(value):void{
    this.session = value;

  }
  changeAddressSession(value):void{
    this.issetLocation = value;
  }
  private changeAddress(value):void{
    this.selectedLocation = value;
  }
  private changeUser(value){
    this.user = value;
    // this.locations = value.address;
  }

  checkSession(){
    this._sessionsService.checkSession().subscribe(res=>{
      this.changeSession(res.data);
      this.changeAddressSession(res.add);
      if(res.data == true){
        this.changeUser(res.user);
      }
      if(res.add == true){
        this.changeAddress(res.address);
      }
    });
  }

  give_address(value):string{
    return value.flatNo + ", " + value.body + ", " + value.pincode;
  }

  set_location(value):void{
    this.selectedLocation = value;
    this.issetLocation = true;
    this._formSubmitService.addAddress(value).subscribe(res=>{
      console.log(res);
    });
  }

  cartLenghtHandler(value){
    this.isCartEmpty = value;
  }
  removeAddress(i):void{
    this.locations.splice(i, 1);
  }

}


@Component({
  selector: 'app-address',
  templateUrl: './address.html',
  styleUrls: ['./checkout.component.css']
})
export class AddressComponent {

  AddressForm:any;
  constructor(public dialogRef: MatDialogRef<AddressComponent>,
              private _openDialogService: OpenDialogService,
              private _formSubmitService: FormSubmitService){
  }

  ngOnInit(){
    this.AddressForm = new FormGroup({
      'body' : new FormControl("", [Validators.required]),
      'pincode' : new FormControl("", [Validators.required]),
      'flatNo' : new FormControl("", [Validators.required]),
      'label' : new FormControl("", [Validators.required])
    });


  }
  get address(){return this.AddressForm.get('body');}
  get pincode(){return this.AddressForm.get('pincode');}
  get flatNo(){return this.AddressForm.get('flatNo');}
  get label(){return this.AddressForm.get('label');}

  add_address(){
    this.dialogRef.close();
    this._formSubmitService.getAddress.emit(this.AddressForm.value);
  }
  onNoClick(): void {
    this._openDialogService.closeDialog();
  }


}
