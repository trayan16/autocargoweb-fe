import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router'; // CLI imports router
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { DialogService } from './dialog.service'
import { User } from '../common/user.model';
import { FormInputBase } from '../components/GeneralForm/InputTypes/FormInputBase';
import { Textbox } from '../components/GeneralForm/InputTypes/TextBox';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient, public dialogService: DialogService, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }
  login(username, password) {
    return this.http.post<any>(`/wp-json/jwt-auth/v1/token`, { username, password })
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
  redirectTo(uri: string) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
    this.router.navigate([uri]));
  }
}
