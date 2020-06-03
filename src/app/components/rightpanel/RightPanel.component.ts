import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';
@Component({
  selector: 'right-panel',
  templateUrl: './RightPanel.component.html',
  styleUrls: ['./RightPanel.component.scss']
})
export class RightPanelComponent {
  @Input() title = "Grid Title";
  @Input() description = "Description"
  @ViewChild('rightPanelContainer') content: ElementRef;
  constructor(public sidebarService: SidebarService) {
  }
}
