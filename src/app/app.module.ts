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
import { MatTableModule} from '@angular/material';
import { DataTableComponent } from './data-table/data-table.component';
import { DashboardComponent } from './dashboard/dashboard.component';




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

  ],
  providers: [BbwsPlateappearancesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
