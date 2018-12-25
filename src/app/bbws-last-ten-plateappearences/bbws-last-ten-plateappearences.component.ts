import { Component, OnInit } from '@angular/core';
import { BbwsPlateappearancesService} from '../bbws-plateappearances.service';

@Component({
  selector: 'bbws-bbws-last-ten-plateappearences',
  templateUrl: './bbws-last-ten-plateappearences.component.html',
  styleUrls: ['./bbws-last-ten-plateappearences.component.css']
})
export class BbwsLastTenPlateappearencesComponent implements OnInit {

  plateAppearances = [];

  constructor(private service:BbwsPlateappearancesService) { }

  ngOnInit() {
  }

  search(player:string) {
    console.log( "BbwsLastTenPlateappearencesComponent.search.DEBUG -> IN = " 
                      + " player: " + player);
    
    this.service.listLastTen( player).subscribe(
      data => this.plateAppearances = data
    )

    this.plateAppearances.forEach(element => {
      console.log( "BbwsLastTenPlateappearencesComponent.search.DEBUG -> OUT = " 
                      + " what: " + element.what 
                      + " where:" + element.where);
    });
  }
}
