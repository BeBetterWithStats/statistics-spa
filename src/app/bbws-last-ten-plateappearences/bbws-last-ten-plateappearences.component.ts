import { Component, OnInit } from '@angular/core';
import { BbwsPlateappearancesService} from '../bbws-plateappearances.service';
import { stringify } from '@angular/core/src/render3/util';

@Component({
  selector: 'bbws-bbws-last-ten-plateappearences',
  templateUrl: './bbws-last-ten-plateappearences.component.html',
  styleUrls: ['./bbws-last-ten-plateappearences.component.css']
})
export class BbwsLastTenPlateappearencesComponent implements OnInit {

  private error = { isError: false, message: ''};
  private plateAppearances = [];

  constructor( private service:BbwsPlateappearancesService) { }

  ngOnInit() {
  }
  
  search() {
    console.log( "BbwsLastTenPlateappearencesComponent.search.DEBUG -> IN = " 
                      + " player: " + this.service.playerID);
    
    this.service.listLastTen(this.service.playerID).subscribe(
      data => {

        this.plateAppearances = data;

        if (this.plateAppearances.length === 0) {
          this.error.isError = true;
          this.error.message = "No result for " + this.service.playerID;
          console.log( "BbwsLastTenPlateappearencesComponent.search.DEBUG -> OUT = " + this.error.message); 
        } else {
          this.error.isError = false;
          this.error.message = "";

          this.plateAppearances.forEach(element => {
            console.log( "BbwsLastTenPlateappearencesComponent.search.DEBUG -> OUT = " 
                            + " what: " + element.what 
                            + " where:" + element.where);
          });
        }
      }
    );
  }
}
