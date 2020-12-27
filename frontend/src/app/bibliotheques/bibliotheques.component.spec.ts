import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BibliothequesComponent } from './bibliotheques.component';

describe('BibliothequesComponent', () => {
  let component: BibliothequesComponent;
  let fixture: ComponentFixture<BibliothequesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BibliothequesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BibliothequesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
