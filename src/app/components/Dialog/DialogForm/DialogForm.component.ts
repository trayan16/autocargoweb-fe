import {Component, Inject, ViewChild, OnChanges, ChangeDetectorRef, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
@Component({
    templateUrl: 'DialogForm.component.html',
  })
  export class DialogFormComponent implements OnChanges, OnInit {
    @ViewChild('form') form;
    constructor(
        private ref: ChangeDetectorRef,
        public dialogRef: MatDialogRef<DialogFormComponent>,
        @Inject(MAT_DIALOG_DATA) public data) {
    }
    ngOnInit() {
      console.log(this.data,"DATA")
    }
    onNoClick(): void {
        this.dialogRef.close();
    }
    onSubmit(): void {
      console.log(this.form,"FORM")
    }
    ngOnChanges() {
      console.log(this.data,"DATA")
      this.ref.detectChanges();
    }
  }
