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
    this.service.list( player).subscribe(
      data => this.plateAppearances = data
    )

    this.plateAppearances.forEach(element => {
      console.log( "out.what = " + element.what + " " + element.where);
    });
    
  }
}
