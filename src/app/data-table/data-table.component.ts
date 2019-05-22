import { Component, Input, OnInit, ViewChild } from '@angular/core';

import { BbwsPlateappearancesService} from '../bbws-plateappearances.service';


@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {


  displayedColumns = ['date', 'when', 'what', 'where'];

  @Input () requestUrl: string;


  constructor(private service: BbwsPlateappearancesService) {
  }

  ngOnInit() {

    this.service.listLastTen (this.requestUrl);


  }
}













