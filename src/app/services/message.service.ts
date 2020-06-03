import { Injectable } from '@angular/core';
import { Observable,Subject} from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
@Injectable()
export class MessageService {
    private subject = new Subject<any>();
    constructor(public snackBar: MatSnackBar) {}
    sendMessage(message: string, duration = 2000, className = 'success') {
        this.snackBar.open(message, '', {
            duration, panelClass: [className]
        });
    }
}
