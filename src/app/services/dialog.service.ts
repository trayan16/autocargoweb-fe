import { Injectable } from '@angular/core';
import { MatDialogModule, MatDialogRef, MatDialog } from '@angular/material/dialog';

@Injectable()
export class DialogService {
  constructor(public dialog: MatDialog) {}

  open = (component, config: any, {}) => {
    let dialogRef: MatDialogRef<any>;
    dialogRef = this.dialog.open(component, config);
    return dialogRef;
  }
}
