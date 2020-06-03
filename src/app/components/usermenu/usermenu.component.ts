import { Component } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';
  @Component({
    selector: 'user-menu',
    templateUrl: './UserMenu.component.html',
    styleUrls: ['./UserMenu.component.scss']
  })
export class UserMenuComponent {
  constructor(public sidebarService: SidebarService) {
  }
}
