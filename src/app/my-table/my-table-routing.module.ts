import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyTableComponent } from './my-table.component';

const routes: Routes = [
  {
    path: '',
    component: MyTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyTableRoutingModule { }
