import { Injectable, ComponentFactoryResolver } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  constructor(public resolver: ComponentFactoryResolver) {
  }
  public sidenav: MatSidenav;
  mainMenuOpened = false;
  rightPanelOpened = false;
  rightPanelChild;
  entry;
  toggleMainMenu = () => {
    this.mainMenuOpened = !this.mainMenuOpened;
  }
  toggleRightPanel = () => {
    this.rightPanelOpened = !this.rightPanelOpened;
  }
  openRightPanel = (entry, component, data) => {
    this.entry = entry;
    const factory = this.resolver.resolveComponentFactory(component);
    const componentRef = this.entry.createComponent(factory);
    componentRef.instance.data = data;
    this.rightPanelOpened = true;
  }
  closeRightPanel = () => {
    this.rightPanelOpened = false;
    this.entry.clear();
  }
}
