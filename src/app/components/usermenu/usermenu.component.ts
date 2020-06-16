import { Component } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
  @Component({
    selector: 'user-menu',
    templateUrl: './UserMenu.component.html',
    styleUrls: ['./UserMenu.component.scss']
  })
export class UserMenuComponent {
  constructor(public sidebarService: SidebarService, private authService: AuthenticationService) {
  }
  signOut = () =>{
    this.authService.logout();
  }
}
