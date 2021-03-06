import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthenticationService } from '../services/authentication.service';
import { DialogService } from '../services/dialog.service';
import { DialogLoginComponent } from '../components/Dialog/DialogLogin/DialogLogin.component';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService,
        public dialogService: DialogService
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        const currentUser = this.authenticationService.currentUserValue;
        if (currentUser) {
            // authorised so return true
            return true;
        }
        this.loginDialog(state.url);
        return false;
    }
    loginDialog = (stateUrl) => {
        const dialogRef = this.dialogService.open(DialogLoginComponent, {
            data: {
                form: this.authenticationService.getLoginForm(),
                hideActions: true,
                title: 'Please Login',
                returnUrl: stateUrl
            },
            disableClose : true,
        }, {});
    }
}
