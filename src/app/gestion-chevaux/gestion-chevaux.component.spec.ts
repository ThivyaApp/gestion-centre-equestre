import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionChevauxComponent } from './gestion-chevaux.component';

describe('GestionChevauxComponent', () => {
  let component: GestionChevauxComponent;
  let fixture: ComponentFixture<GestionChevauxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionChevauxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionChevauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
