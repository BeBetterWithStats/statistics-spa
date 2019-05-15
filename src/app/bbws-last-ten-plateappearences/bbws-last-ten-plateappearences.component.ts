import {Component, OnChanges, OnInit} from '@angular/core';
import { BbwsPlateappearancesService} from '../bbws-plateappearances.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';

export interface StateGroup {
  letter: string;
  names: string[];
}

export const _filter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();

  return opt.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
};


@Component({
  selector: 'bbws-bbws-last-ten-plateappearences',
  templateUrl: './bbws-last-ten-plateappearences.component.html',
  styleUrls: ['./bbws-last-ten-plateappearences.component.css']
})
export class BbwsLastTenPlateappearencesComponent implements OnInit {

  stateForm: FormGroup = this.fb.group({
    stateGroup: '',
  });

  stateGroups: StateGroup[] = [
     {letter: 'J',
    names: ['JACKSON','JIMENEZ','JENKINS']
  }, {
      letter: 'M',
      names: ['MEDINA','MONTAS']
  }, {
      letter: 'R',
      names: ['ROQUET']
  }, {
      letter: 'G',
      names: ['GRIMALDI','GONZALEZ']
  }, {
      letter: 'B',
      names: ['BODET','BAOUI','BISSON']
  }, {
      letter: 'P',
      names: ['PERDOMO']
  }, {
      letter: 'L',
      names: ['LEMESTRE']
  }, {
      letter: 'Z',
      names: ['ZOIA']
    },];

  stateGroupOptions: Observable<StateGroup[]>;
  private error = { isError: false, message: ''};
  public plateAppearances = [];


  constructor( private service: BbwsPlateappearancesService, private fb: FormBuilder) { }



  ngOnInit() {
    this.stateGroupOptions = this.stateForm.get('stateGroup')!.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filterGroup(value))
      );
  }
  refresh(): void {
    window.location.reload();
  }
  private _filterGroup(value: string): StateGroup[] {
    if (value) {
      return this.stateGroups
        .map(group => ({letter: group.letter, names: _filter(group.names, value)}))
        .filter(group => group.names.length > 0);
    }

    return this.stateGroups;
  }

  search() {
    console.log( 'BbwsLastTenPlateappearencesComponent.search.DEBUG -> IN = '
                      + ' player: ' + this.service.playerID);

    this.service.listLastTen(this.service.playerID).subscribe(
      data => {

        this.plateAppearances = data;

        if (this.plateAppearances.length === 0) {
          this.error.isError = true;
          this.error.message = 'No result for ' + this.service.playerID;
          console.log( 'BbwsLastTenPlateappearencesComponent.search.DEBUG -> OUT = ' + this.error.message);
        } else {
          this.error.isError = false;
          this.error.message = '';

           this.plateAppearances.forEach(element => {
            console.log( 'BbwsLastTenPlateappearencesComponent.search.DEBUG -> OUT = '
             + ' what: ' + element.what
                            + ' where:' + element.where );

          });
        }
      }
    );



}
  search2() {
    console.log( 'BbwsLastTenPlateappearencesComponent.search.DEBUG -> IN = '
      + ' player: ' + this.service.playerID);

    this.service.listLastTenDesc(this.service.playerID).subscribe(
      data => {

        this.plateAppearances = data;

        if (this.plateAppearances.length === 0) {
          this.error.isError = true;
          this.error.message = 'No result for ' + this.service.playerID;
          console.log( 'BbwsLastTenPlateappearencesComponent.search.DEBUG -> OUT = ' + this.error.message);
        } else {
          this.error.isError = false;
          this.error.message = '';

          this.plateAppearances.forEach(element => {
            console.log( 'BbwsLastTenPlateappearencesComponent.search.DEBUG -> OUT = '
              + ' what: ' + element.what
              + ' where:' + element.where );

          });
        }
      }
    );



  }

}

