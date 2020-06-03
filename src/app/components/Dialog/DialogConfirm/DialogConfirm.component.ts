import {Component, Inject, Input} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
@Component({
    templateUrl: 'DialogConfirm.component.html',
  })
  export class DialogConfirmComponent {
    constructor(
        public dialogRef: MatDialogRef<DialogConfirmComponent>,
        @Inject(MAT_DIALOG_DATA) public data) {
    }
    onNoClick(): void {
        this.dialogRef.close();
    }
  }
