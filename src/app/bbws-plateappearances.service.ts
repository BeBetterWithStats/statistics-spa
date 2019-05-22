import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { APIS} from './apis';
import { map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BbwsPlateappearancesService {


  public plateAppeareances: any;
  requestUrl: string;
  submitted = false;
   sort = 'asc';


  constructor(private http: HttpClient) { }

  listLastTen(playerID: string): Observable<any> {

    if (playerID === undefined ) {
      return of([]);
    }
    this.requestUrl = `${APIS.BASE_URL}/pa?search=${playerID}&limit=10&sort=${this.sort}`;
    this.submitted = true;

    this.http.get(this.requestUrl).subscribe(data => {
      this.plateAppeareances = data;
    });
  }

listAll(){
    return this.http.get(APIS.PLAYERS).pipe(
        map(data => {
        console.log(data);
        return data;
      })
    );
}



}
