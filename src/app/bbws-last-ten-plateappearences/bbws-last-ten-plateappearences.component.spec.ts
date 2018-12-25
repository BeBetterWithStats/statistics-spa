import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BbwsLastTenPlateappearencesComponent } from './bbws-last-ten-plateappearences.component';

describe('BbwsLastTenPlateappearencesComponent', () => {
  let component: BbwsLastTenPlateappearencesComponent;
  let fixture: ComponentFixture<BbwsLastTenPlateappearencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BbwsLastTenPlateappearencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BbwsLastTenPlateappearencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
