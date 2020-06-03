import { Component, OnInit, ComponentFactoryResolver, OnDestroy, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { SidebarService } from '../../services/sidebar.service';
import { DialogService } from '../../services/dialog.service';
import { HelperService } from '../../services/helper.service';
import { VehicleService } from '../../services/vehicle.service';
import { MatTableDataSource } from '@angular/material/table';
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
  displayedColumns: string[] = ['titleRendered', 'status', 'auction', 'actions'];
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
      key: 'titleRendered',
      header: 'Title',
    },
    {
      key: 'status',
      header: 'Status',
    },
    {
      key: 'auction',
      header: 'Auction',
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
    console.log("HERE INIT VEHICLES")
  }
  loadVehicles = () => {
    this.vehicleService.getAllVehicles().subscribe(res => {
      const filteredResult = res.map(item => {
          item.titleRendered = item.title.rendered;
          item.status = item.title.rendered;
          item.auction = item.title.rendered;
        return item;
      });
      console.log(filteredResult,'filteredResult')
      this.dataSource = new MatTableDataSource(filteredResult);
      this.isLoading = false;
    }, error => {
      this.isLoading = false;
    });
  }
  ngOnDestroy() {

  }
}
