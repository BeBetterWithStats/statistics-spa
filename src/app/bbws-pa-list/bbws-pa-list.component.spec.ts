import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BbwsPaListComponent } from './bbws-pa-list.component';

describe('BbwsPaListComponent', () => {
  let component: BbwsPaListComponent;
  let fixture: ComponentFixture<BbwsPaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BbwsPaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BbwsPaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
