import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {OpenDialogService} from '../open-dialog.service';
import {SignupComponent} from '../signup/signup.component';
import {FormSubmitService} from '../form-submit.service';
import {SessionsService} from '../sessions.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(
    private _openDialogService: OpenDialogService,
    private _formSubmitService: FormSubmitService,
    private _sessionsService: SessionsService
  ) { }
  LoginForm: any;
  color = 'primary';
  mode = 'indeterminate';
  value = 50;
  isSubmit: Boolean = false;
  message: string;

  ngOnInit() {
    this.LoginForm = new FormGroup({
    'email' : new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    'password' : new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ])
  });
  }
  get email() { return this.LoginForm.get('email'); }
  get password() { return this.LoginForm.get('password'); }


  openSignupDialog():void{
    this._openDialogService.changeValue(1);
    this._openDialogService.closeDialog();
    this._openDialogService.openDialog(SignupComponent);
  }
  onNoClick(): void {
    this._openDialogService.closeDialog();
  }

  onSubmit():void{
    this.isSubmit = true;
    this._formSubmitService.login(this.LoginForm.value).subscribe(res =>{
      this.isSubmit = false;
      if(res.status == 0){
        this.message = res.message;
      }
      else if(res.status == 1){
        console.log(res.message);
        this._openDialogService.closeDialog();
        this._formSubmitService.getSession.emit(true);
        this._formSubmitService.getUser.emit(res.data);
      }
      else{
        this.message = "Error: Something went wrong";
      }

    });
  }

}

