import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class BbwsPlateappearancesService {

  public playerID = undefined;
  requestUrl: string;
  submitted = false;
   sort = 'asc';
   sort1 = '';
  private readonly base_url = 'http://localhost:8080/bbws/api';


  constructor(private http: HttpClient) { }
  list(player: string): Observable<any> {

    if ( player === undefined) {
      // if not search term, return empty array.
      console.log("BbwsPlateappearancesService.list.ERROR -> Player must not be empty");
      return of([]);
    }

    this.requestUrl = `${this.base_url}/pa?search=${player}`;
    console.log("BbwsPlateappearancesService.list.INFO -> http service: " + this.requestUrl);
    return this.http.get( this.requestUrl);
  }

  listLastTen(playerID: string): Observable<any> {

    if ( playerID === undefined ) {
      // if not search term, return empty array.
      console.log("BbwsPlateappearancesService.list.ERROR -> Player must not be empty");
      return of([]);
    }

    // this.requestUrl = `${this.base_url}/pa?search=${this.playerID}&limit=10`;
    this.requestUrl = `${this.base_url}/pa?search=${this.playerID}&limit=10&sort=${this.sort}`;
    console.log("BbwsPlateappearancesService.list.INFO -> http service: " + this.requestUrl);
    this.submitted = true;
    return this.http.get(this.requestUrl);
  }
  listLastTenDesc(playerID: string): Observable<any> {

    if ( playerID === undefined ) {
      // if not search term, return empty array.
      console.log("BbwsPlateappearancesService.list.ERROR -> Player must not be empty");
      return of([]);
    }

    // this.requestUrl = `${this.base_url}/pa?search=${this.playerID}&limit=10`;
    this.requestUrl = `${this.base_url}/pa?search=${this.playerID}&limit=10&sort=${this.sort1}`;
    console.log("BbwsPlateappearancesService.list.INFO -> http service: " + this.requestUrl);
    this.submitted = true;
    return this.http.get(this.requestUrl);
  }

}
