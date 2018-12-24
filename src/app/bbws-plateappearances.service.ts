import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BbwsPlateappearancesService {

  constructor(private http: HttpClient) { }

  list(player:string) {

    // const url = "http://localhost:8080/bbws/api/pa?search=" + player;
    //return this.http.get( url);

    if ( player.toUpperCase() == "BROWN") {
      return [{
        what: "SLUGGING_1B",
        where: "CENTER_FIELD",
        when: "6th"
      },
      {
        what: "WALK",
        where: "EMPTY",
        when: "5th"
      }];
    } else {
      return [{
        error: true, 
        message: "The player " + player + " does not exist in database."
      }];
    }
    
  }
}
