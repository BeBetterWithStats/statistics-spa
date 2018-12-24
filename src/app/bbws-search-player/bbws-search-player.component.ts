import { Component, OnInit } from '@angular/core';
import { BbwsPlateappearancesService} from '../bbws-plateappearances.service';

@Component({
  selector: 'app-bbws-search-player',
  templateUrl: './bbws-search-player.component.html',
  styleUrls: ['./bbws-search-player.component.css']
})


export class BbwsSearchPlayerComponent implements OnInit {

  plateAppearances = [];

  constructor( private service:BbwsPlateappearancesService) { 
  }

  ngOnInit() {
  }


  searchPAForPlayer(player:string) {
    console.log( "in = " + player);
    this.plateAppearances = this.service.list( player);

    this.plateAppearances.forEach(element => {
      console.log( "out.message = " + element.message);
      console.log( "out.what = " + element.what + " " + element.where);
    });
    
  }
}
