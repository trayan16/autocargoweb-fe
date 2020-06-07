import { Component, OnInit, ComponentFactoryResolver, OnDestroy, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { SidebarService } from '../../services/sidebar.service';
import { DialogService } from '../../services/dialog.service';
import { HelperService } from '../../services/helper.service';
import { VehicleService } from '../../services/vehicle.service';
import { MatTableDataSource } from '@angular/material/table';
import { DialogLoginComponent } from 'src/app/components/Dialog/DialogLogin/DialogLogin.component';
import { VehicleInfoComponent } from './vehicle-info.component';
export interface IActionItem {
  label: string;
  action: any;
  icon?;
  className?: string;
}
@Component({
    templateUrl: './VehicleList.component.html',
    styleUrls: ['./VehicleList.component.scss'],
  })
export class VehicleListComponent implements OnInit, OnDestroy {
  title = 'My Vehicles';
  displayedColumns: string[] = ['post_title', 'vin' , 'shipped_date', 'delivery_date', 'actions'];
  notFoundIcon = 'direction_car';
  gridActions = [];

  rowActions: IActionItem[] = [
    {
      label : 'Edit',
      action: row => {
      },
      icon : 'create',
    },
    {
      label: 'Delete',
      action: row => {
      },
      icon : 'delete',
    },
  ];
  tableDef: Array<any> = [
    {
      key: 'post_title',
      header: 'Title',
    },
    {
      key: 'vin',
      header: 'VIN',
    },
    {
      key: 'shipped_date',
      header: 'Shipped Date',
    },
    {
      key: 'delivery_date',
      header: 'Delivery Date',
    },
    {
      key: 'actions',
      header: 'Actions'
    }
  ];
  dataSource = new MatTableDataSource();
  isLoading = true;
  constructor(
    public sidebarService: SidebarService,
    public vehicleService: VehicleService,
    public http: HttpClient,
    public router: Router,
    public resolver: ComponentFactoryResolver,
    public dialogService: DialogService,
    public helperService: HelperService

    ) {
  }
  ngOnInit() {
    this.loadVehicles();
    console.log('HERE INIT VEHICLES');
  }
  getRowActions = (row) => {
    const rowActions: IActionItem[] = [
      {
        label : 'View',
        action: row => {
          this.viewVehicle(row);
        },
        icon : 'remove_red_eye',
      },
    ];
    return rowActions;
  }
  viewVehicle = row => {
    console.log(row,"ROW")
    const dialogRef = this.dialogService.open(VehicleInfoComponent, {
      data: {
          carInfo : row,
      },
  }, {});
  }
  loadVehicles = () => {
    this.vehicleService.getAllVehicles().subscribe(res => {
      const filteredResult = res.map(item => {
           item.vin = item.vin.toUpperCase();
          // item.placeOfDelivery = item.place_of_delivery;
          // item.terminal = item.terminal;
          // item.shippedDate = item.shipped_date
           item.rowActions = this.getRowActions(item);
           return item;
      });
      this.dataSource = new MatTableDataSource(filteredResult);
      this.isLoading = false;
    }, error => {
      this.isLoading = false;
    });
  }
  ngOnDestroy() {

  }
}
