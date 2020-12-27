import { TestBed } from '@angular/core/testing';

import { BibliothequesService } from './bibliotheques.service';

describe('BibliothequesService', () => {
  let service: BibliothequesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BibliothequesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});