import { Component, OnInit } from '@angular/core';
import { BbwsPlateappearancesService} from '../bbws-plateappearances.service';

@Component({
  selector: 'app-bbws-search-player',
  templateUrl: './bbws-search-player.component.html',
  styleUrls: ['./bbws-search-player.component.css']
})


export class BbwsSearchPlayerComponent implements OnInit {

  plateAppearances = [];

  constructor( private service:BbwsPlateappearancesService) { }

  ngOnInit() { }


  searchPAForPlayer(player:string) {
    console.log( "BbwsSearchPlayerComponent.searchPAForPlayer.INFO -> IN = " 
                      + " player: " + player);
    
    this.service.list( player).subscribe(
      data => this.plateAppearances = data
    )

    this.plateAppearances.forEach(element => {
      console.log( "BbwsSearchPlayerComponent.searchPAForPlayer.INFO -> OUT = " 
                      + " what: " + element.what 
                      + " where:" + element.where);
    });
  }
}
