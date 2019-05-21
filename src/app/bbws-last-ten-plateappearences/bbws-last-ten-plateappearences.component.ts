import {Component, OnInit} from '@angular/core';
import { BbwsPlateappearancesService} from '../bbws-plateappearances.service';

@Component({
  selector: 'bbws-bbws-last-ten-plateappearences',
  templateUrl: './bbws-last-ten-plateappearences.component.html',
  styleUrls: ['./bbws-last-ten-plateappearences.component.css']
})
export class BbwsLastTenPlateappearencesComponent implements OnInit {

  private error = { isError: false, message: ''};
  playersList: any;
  autoCompleteTab: any;
  inputValue: string;


  constructor( private service: BbwsPlateappearancesService) {

  }



  ngOnInit() {

      this.service.listAll().subscribe(res => {
       this.playersList = res;
        console.log('playersList', this.playersList);
        this.autoCompleteTab = Object.assign([], this.playersList);
      });
    }

  search() {
    console.log( 'BbwsLastTenPlateappearencesComponent.search.DEBUG -> IN = '
                      + ' player: ' + this.inputValue);
    this.service.listLastTen(this.inputValue);
}

  retrieveValue(value) {
    if (value) {
      this.autoCompleteTab = this.playersList.filter (p => p.includes (value.toUpperCase ()));
    } else {
      this.autoCompleteTab = Object.assign([], this.playersList);
    }
  }
}

