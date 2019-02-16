import { TestBed } from '@angular/core/testing';

import { DashbordGridsterConfigService } from './dashbord-gridster-config.service';

describe('DashbordGridsterConfigService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DashbordGridsterConfigService = TestBed.get(DashbordGridsterConfigService);
    expect(service).toBeTruthy();
  });
});
