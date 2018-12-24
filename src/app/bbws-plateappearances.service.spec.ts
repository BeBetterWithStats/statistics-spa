import { TestBed } from '@angular/core/testing';

import { BbwsPlateappearancesService } from './bbws-plateappearances.service';

describe('BbwsPlateappearancesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BbwsPlateappearancesService = TestBed.get(BbwsPlateappearancesService);
    expect(service).toBeTruthy();
  });
});
