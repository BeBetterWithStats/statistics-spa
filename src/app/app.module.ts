import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { DemoMaterialModule } from './material-module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BbwsMenuComponent } from './bbws-menu/bbws-menu.component';
import { BbwsPlateappearancesService} from './bbws-plateappearances.service';
import { BbwsLastTenPlateappearencesComponent } from './bbws-last-ten-plateappearences/bbws-last-ten-plateappearences.component';
import { MatTableModule, MatPaginatorModule, MatSortModule} from '@angular/material';
import { DataTableComponent } from './data-table/data-table.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Ng2OrderModule} from 'ng2-order-pipe';
import {NgxPaginationModule} from 'ngx-pagination';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ReactiveFormsModule} from  '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    BbwsMenuComponent,
    BbwsLastTenPlateappearencesComponent,
    DataTableComponent,
    DashboardComponent,







  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    Ng2OrderModule,
    NgxPaginationModule,
    HttpClientInMemoryWebApiModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatSortModule,




  ],
  providers: [BbwsPlateappearancesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
