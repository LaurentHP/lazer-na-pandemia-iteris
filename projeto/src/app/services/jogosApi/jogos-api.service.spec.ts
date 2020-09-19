import { TestBed } from '@angular/core/testing';

import { JogosApiService } from './jogos-api.service';

describe('JogosApiService', () => {
  let service: JogosApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JogosApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
