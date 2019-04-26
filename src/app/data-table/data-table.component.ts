import { Component, ViewChild, AfterViewInit, Input, OnInit } from '@angular/core';

import { BbwsPlateappearancesService} from '../bbws-plateappearances.service';

import {  MatSort, MatTableDataSource} from '@angular/material';

export interface PlateAppearances {
  game: Date;
  when: string;
  what: string;
  where: string;

}

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements AfterViewInit {
  displayedColumns = ['date', 'when', 'what', 'where'];
  dataSource: MatTableDataSource<PlateAppearances>;
  data: PlateAppearances[] = [];


  @Input() requestUrl: string;

  @ViewChild(MatSort) sort: MatSort;

  constructor(private service: BbwsPlateappearancesService) {
    this.dataSource = new MatTableDataSource(this.data);

  }



  ngAfterViewInit() {

    this.dataSource.sort = this.sort;


    this.service.listLastTen(this.requestUrl)

      .subscribe(data => this.data = data);

  }


  }




