import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BbwsSearchPlayerComponent } from './bbws-search-player.component';

describe('BbwsSearchPlayerComponent', () => {
  let component: BbwsSearchPlayerComponent;
  let fixture: ComponentFixture<BbwsSearchPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BbwsSearchPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BbwsSearchPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
