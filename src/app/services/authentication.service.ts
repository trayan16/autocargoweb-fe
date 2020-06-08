import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { DialogService } from './dialog.service'
import { User } from '../common/user.model';
import { DialogConfirmComponent } from '../components/Dialog/DialogConfirm/DialogConfirm.component';
import { FormInputBase } from '../components/GeneralForm/InputTypes/FormInputBase';
import { Textbox } from '../components/GeneralForm/InputTypes/TextBox';
import { DialogFormComponent } from '../components/Dialog/DialogForm/DialogForm.component';
import { DialogLoginComponent } from '../components/Dialog/DialogLogin/DialogLogin.component';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient, public dialogService: DialogService) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }
    login(username, password) {
        return this.http.post<any>(`api/wp-json/jwt-auth/v1/token`, { username, password })
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
                return user;
            }));
    }
    getLoginForm = () => {
        const formControls: FormInputBase<string>[] = [
          new Textbox({
            key: 'username',
            label: 'Username',
            class: 'full-width',
          }),
          new Textbox({
            type: 'password',
            key: 'password',
            label: 'Password',
            class: 'full-width',
          })
        ];
        return of(formControls.sort((a, b) => a.order - b.order));
      }
    logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}
