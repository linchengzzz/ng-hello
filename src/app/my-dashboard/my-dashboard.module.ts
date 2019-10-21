import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyDashboardComponent } from './my-dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { MyDashboardRoutingModule } from './my-dashboard-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [MyDashboardComponent],
    imports: [
        CommonModule,
        MatGridListModule,
        MatCardModule,
        MatMenuModule,
        MatIconModule,
        MatButtonModule,
        LayoutModule,
        MyDashboardRoutingModule,
        FormsModule
    ]
})
export class MyDashboardModule {
}
