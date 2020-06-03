import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageService } from '../../services/message.service'

@Component({
    selector: 'app-message-component',
    templateUrl: 'Message.component.html',
    styleUrls: ['./Message.component.scss']
})

export class MessageComponent implements OnDestroy {
    message: any = {};
    subscription: Subscription;

    constructor(private messageService: MessageService) {
    }
    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    }
}
