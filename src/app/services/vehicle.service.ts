import { Injectable, ComponentFactoryResolver } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, generate, forkJoin } from 'rxjs';
import { MatSidenav } from '@angular/material/sidenav';
@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  constructor(public resolver: ComponentFactoryResolver, public http: HttpClient) {
  }
  public sidenav: MatSidenav;
  getAllVehicles(): Observable<any> {
    return this.http.get('/wp-json/wp/v2/userVehicles');
}
}
