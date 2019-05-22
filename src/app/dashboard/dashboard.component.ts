import { Component, OnInit } from '@angular/core';
import { BbwsPlateappearancesService} from '../bbws-plateappearances.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  {

  constructor(private service: BbwsPlateappearancesService) { }



}
