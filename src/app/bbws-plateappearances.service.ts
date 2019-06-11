import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { API } from './api';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BbwsPlateappearancesService {

  public plateAppeareances: any;
  requestUrl: string;
  submitted = false;
  sort = '';

  constructor(private http: HttpClient) { }

  listLastTen(playerID: string): Observable<any> {

    if ( playerID === undefined ) {
      return of([]);
    }
    this.requestUrl = `${API.BASE_URL}${API.PLATE_APPEARANCES}?search=${playerID}&limit=100&sort=${this.sort}`;
    this.submitted = true;

    this.http.get(this.requestUrl).subscribe(data => {
      this.plateAppeareances = data;
    });
  }

  listAll(){
    
    this.requestUrl = `${API.BASE_URL}${API.PLAYERS}`;
        
    return this.http.get(this.requestUrl).pipe(
      map(data => {
        console.log(data);
        return data;
      })
    );
  }
}
