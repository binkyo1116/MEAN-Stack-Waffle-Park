import { Component, OnInit , Inject} from '@angular/core';
import {FormGroup, FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {OpenDialogService} from '../open-dialog.service';
import {LoginComponent} from '../login/login.component';
import {FormSubmitService} from '../form-submit.service';
import {SessionsService} from '../sessions.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['../login/login.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
    private _openDialogService: OpenDialogService,
    private _formSubmitService: FormSubmitService,
    private _sessionsService: SessionsService
  ) { }

  SignupForm :any;
  color = 'primary';
  mode = 'indeterminate';
  value = 50;
  isSubmit: Boolean = false;
  message: string;

  ngOnInit() {

    this.SignupForm = new FormGroup({
      email : new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      password : new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      contact : new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
      ]),
      name : new FormControl('', [
        Validators.required
      ])
    });
  }

  get name() { return this.SignupForm.get('name'); }
  get contact() { return this.SignupForm.get('password'); }
  get email() { return this.SignupForm.get('email'); }
  get password() { return this.SignupForm.get('password'); }

  openLoginDialog():void {
    this._openDialogService.changeValue(0);
    this._openDialogService.closeDialog();
    this._openDialogService.openDialog(LoginComponent);
  }
  onNoClick(): void {
    this._openDialogService.closeDialog();
  }

  onSubmit():void{
    this.isSubmit = true;
    this._formSubmitService.signup(this.SignupForm.value).subscribe(res =>{
      this.isSubmit = false;
      if(res.status == 0){
        this.message = res.message;
      }

      else if(res.status == 1){
        console.log(res);
        this._openDialogService.closeDialog();
        this._formSubmitService.getSession.emit(true);
        this._formSubmitService.getUser.emit(res.data);
      }
      else{
        this.message = "Something went wrong";
      }

    });
  }


}
