import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VehicleListComponent } from './routes/vehicles/VehicleList.component';
import { AuthGuard } from './common/auth.guard';
const routes: Routes = [
  { path: '', component: VehicleListComponent , canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
