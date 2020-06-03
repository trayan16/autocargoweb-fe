import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatTabsModule} from '@angular/material/tabs';
import { DialogService } from './services/dialog.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GridComponent } from './components/Grid/Grid.component';
import { RightPanelComponent } from './components/RightPanel/RightPanel.component';
import { UserMenuComponent } from './components/UserMenu/UserMenu.component';
import { SidebarService } from './services/sidebar.service';
import { VehicleService } from './services/vehicle.service';
import { HelperService } from './services/helper.service';
import { MessageService } from './services/message.service';
import { MessageComponent } from './components/Message/Message.component';
import { GeneralFormInputComponent } from './components/GeneralForm/GeneralFormInput.component';
import { GeneralFormComponent } from './components/GeneralForm/GeneralForm.component';
import { DialogConfirmComponent } from './components/Dialog/DialogConfirm/DialogConfirm.component';
import { DialogFormComponent } from './components/Dialog/DialogForm/DialogForm.component';
import { DialogLoginComponent } from './components/Dialog/DialogLogin/DialogLogin.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { JwtInterceptor } from './common/jwt.interceptor';
import { ErrorInterceptor } from './common/error.interceptor';
import { VehicleListComponent } from './routes/vehicles/VehicleList.component';
@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    RightPanelComponent,
    UserMenuComponent,
    MessageComponent,
    GeneralFormComponent,
    GeneralFormInputComponent,
    DialogConfirmComponent,
    DialogFormComponent,
    DialogLoginComponent,
    VehicleListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatCheckboxModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    HttpClientModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatGridListModule,
    MatSelectModule,
    MatOptionModule,
    MatDialogModule,
    MatSnackBarModule,
    DragDropModule,
    MatTabsModule,
    MatAutocompleteModule,
    MatSlideToggleModule,
    MatTooltipModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [GeneralFormComponent, MatDialogModule, MatButtonModule, DragDropModule, MatTabsModule],
  entryComponents: [AppComponent, VehicleListComponent],
  providers: [
    SidebarService,
    MessageService,
    DialogService,
    VehicleService,
    HelperService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
