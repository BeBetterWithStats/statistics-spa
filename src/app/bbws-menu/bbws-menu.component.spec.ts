import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BbwsMenuComponent } from './bbws-menu.component';

describe('BbwsMenuComponent', () => {
  let component: BbwsMenuComponent;
  let fixture: ComponentFixture<BbwsMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BbwsMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BbwsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
