import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

 
const httpOptions = {
  headers: new HttpHeaders({ 'Access-Control-Allow-Origin': '*' })
};

@Injectable({
  providedIn: 'root'
})
export class BbwsPlateappearancesService {

  private base_url = 'http://localhost:8080/bbws/api';

  constructor(private http: HttpClient) { }

  list(player:string):Observable<any> {

    if ( player == undefined) {
      // if not search term, return empty hero array.
      console.log("ERROR -> Player must not be empty");
      return of([]);
    }

    const url = `${this.base_url}/pa?search=${player}`;
    return this.http.get( url);
  }
}
