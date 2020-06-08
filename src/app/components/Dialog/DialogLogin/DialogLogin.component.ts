import {Component, Inject, ViewChild, OnChanges, ChangeDetectorRef, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/services/message.service';
@Component({
    templateUrl: 'DialogLogin.component.html',
    styleUrls: ['./DialogLogin.component.scss'],
  })
  export class DialogLoginComponent implements OnChanges, OnInit {
    @ViewChild('form') form;
    constructor(
        private ref: ChangeDetectorRef,
        private authenticationService: AuthenticationService,
        private router: Router,
        public messageService: MessageService,
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
      console.log(res,"RES");
      this.dialogRef.close();
      this.messageService.sendMessage('Successfully logged in!', 3500);
      this.router.navigate([this.data.returnUrl]);

    }, error => {
    });
    }
    ngOnChanges() {
      console.log(this.data,"DATA")
      this.ref.detectChanges();
    }
  }
