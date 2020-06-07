import { Component, OnInit, ComponentFactoryResolver, OnDestroy, Input, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { SidebarService } from '../../services/sidebar.service';
import { DialogService } from '../../services/dialog.service';
import { HelperService } from '../../services/helper.service';
import { VehicleService } from '../../services/vehicle.service';
import { MatTableDataSource } from '@angular/material/table';
import { DialogLoginComponent } from 'src/app/components/Dialog/DialogLogin/DialogLogin.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
export interface IActionItem {
  label: string;
  action: any;
  icon?;
  className?: string;
}
@Component({
    templateUrl: './vehicle-info.component.html',
    styleUrls: ['./vehicle-info.component.scss'],
  })
export class VehicleInfoComponent implements OnInit, OnDestroy {
  dataSource = new MatTableDataSource();
  isLoading = true;
  constructor(
    public sidebarService: SidebarService,
    public vehicleService: VehicleService,
    public http: HttpClient,
    public router: Router,
    public resolver: ComponentFactoryResolver,
    public dialogService: DialogService,
    public helperService: HelperService,
    public dialogRef: MatDialogRef<VehicleInfoComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {
  }
  ngOnInit() {
    console.log(this.data,'HERE INIT VEHICLE INFO');
  }
  ngOnDestroy() {

  }
  onNoClick(): void {
    this.dialogRef.close();
}
}
