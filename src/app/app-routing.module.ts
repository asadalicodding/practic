import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './firebase-crud/dashboard/dashboard.component';
import { AddComponent } from './firebase-crud/add/add.component';
import { DisplayComponent } from './firebase-crud/display/display.component';

const routes: Routes = [
  { path: "", component: DashboardComponent, pathMatch: 'full' },
  { path: "add/:id", component: AddComponent },
  { path: "display", component: DisplayComponent },
  { path: "**", redirectTo: '', },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
