import { Injectable } from '@angular/core';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
@Injectable({
  providedIn: 'root'
})
export class OpenDialogService {

  dialogComponentValue: number = 0;
  dialogComponent: any;
  screen : number;
  dialogRef: any;
  constructor(public dialog: MatDialog) {
    this.screen = window.innerWidth;
  }
  changeValue(value:number){
    this.dialogComponentValue = value;
  }


  openDialog(component):void{

    var width = '420px';
    var height = 'auto';
    if(this.screen < 600 ){
      width = '100%';
      height = '100vh';

    }

    this.dialogRef = this.dialog.open(component, {
        width: width,
        minWidth: '220px',
        maxWidth: '600px',
        height: height,
        maxHeight: '100%'
    });
  }

  closeDialog():void{
    this.dialogRef.close();
  }


}
