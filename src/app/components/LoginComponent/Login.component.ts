import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
@Component({
    templateUrl: 'Login.component.html',
  })
  export class LoginComponent implements OnInit {
    constructor(
        public dialogRef: MatDialogRef<LoginComponent>,
        @Inject(MAT_DIALOG_DATA) public data) {
    }
    ngOnInit() {
        
    }
    onNoClick(): void {
        this.dialogRef.close();
    }
  }
