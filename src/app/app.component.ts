import { Component } from '@angular/core';
import { SidebarService } from './services/sidebar.service';
import {Location} from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  opened: boolean;

  constructor(
    public sidebarService: SidebarService,
    private location: Location,
    private sanitizer: DomSanitizer) {}
    image = this.sanitizer.bypassSecurityTrustStyle(`url('/assets/mediaclass-logo.png')`);
  backClicked() {
    this.location.back();
  }
}
