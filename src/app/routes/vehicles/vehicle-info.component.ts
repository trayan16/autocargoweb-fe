import { Component, OnInit, ComponentFactoryResolver, OnDestroy, Input, Inject, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgxImageGalleryComponent, GALLERY_IMAGE, GALLERY_CONF } from "ngx-image-gallery";
import { SidebarService } from '../../services/sidebar.service';
import { DialogService } from '../../services/dialog.service';
import { HelperService } from '../../services/helper.service';
import { VehicleService } from '../../services/vehicle.service';
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
export class VehicleInfoComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild(NgxImageGalleryComponent) ngxImageGallery: NgxImageGalleryComponent;
  isLoading = true;
  carInfo: any = {};
  conf: GALLERY_CONF = {
    imageOffset: '0px',
    showDeleteControl: false,
    showImageTitle: false,
  };
  // gallery images
  images: GALLERY_IMAGE[] = [];
  constructor(
    private ref: ChangeDetectorRef,
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
    this.carInfo = this.data.carInfo;
    this.loadImages();
  }
  loadImages = () => {
    const imageGallery = [];
    this.carInfo.images.map(item => {
      imageGallery.push({
        url: item
      });
    });
    this.images = this.images.concat(imageGallery);
  }
  ngAfterViewInit() {
    console.log(this.data, 'HERE INIT VEHICLE INFO');
    this.ref.detectChanges();
  }
  ngOnDestroy() {

  }
  // METHODS
  // open gallery
  openGallery(index: number = 0) {
    this.ngxImageGallery.open(index);
  }

  // close gallery
  closeGallery() {
    this.ngxImageGallery.close();
  }

  // set new active(visible) image in gallery
  newImage(index: number = 0) {
    this.ngxImageGallery.setActiveImage(index);
  }

  // next image in gallery
  nextImage(index: number = 0) {
    this.ngxImageGallery.next();
  }

  // prev image in gallery
  prevImage(index: number = 0) {
    this.ngxImageGallery.prev();
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
