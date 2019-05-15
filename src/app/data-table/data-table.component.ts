import { Component, Input, OnInit } from '@angular/core';

import { BbwsPlateappearancesService} from '../bbws-plateappearances.service';




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
export class DataTableComponent implements OnInit   {
  displayedColumns = ['date', 'when', 'what', 'where'];



  data: PlateAppearances[] = [];


  @Input () requestUrl: string;


  constructor(private service: BbwsPlateappearancesService) {


  }

  ngOnInit() {

    this.service.listLastTen (this.requestUrl).subscribe

    (data => this.data = data);

    this.service.listLastTenDesc (this.requestUrl).subscribe

    (data => this.data = data);


  }

}













