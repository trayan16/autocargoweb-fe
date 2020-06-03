import {Component, Inject, ViewChild, OnChanges, ChangeDetectorRef, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { AuthenticationService } from 'src/app/services/authentication.service';
@Component({
    templateUrl: 'DialogLogin.component.html',
  })
  export class DialogLoginComponent implements OnChanges, OnInit {
    @ViewChild('form') form;
    constructor(
        private ref: ChangeDetectorRef,
        private authenticationService: AuthenticationService,
        public dialogRef: MatDialogRef<DialogLoginComponent>,
        @Inject(MAT_DIALOG_DATA) public data) {
    }
    ngOnInit() {
      console.log(this.data,"DATA")
    }
    onNoClick(): void {
        this.dialogRef.close();
    }
    onSubmit(): void {
    this.authenticationService.login(this.form.form.value.username, this.form.form.value.password).subscribe(res => {
        console.log(res,"RES")
    }, error => {
    });
      console.log(this.form,"FORM")
    }
    ngOnChanges() {
      console.log(this.data,"DATA")
      this.ref.detectChanges();
    }
  }
