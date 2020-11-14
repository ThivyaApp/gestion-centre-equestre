import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionAdministrateurComponent } from './gestion-administrateur.component';

describe('GestionAdministrateurComponent', () => {
  let component: GestionAdministrateurComponent;
  let fixture: ComponentFixture<GestionAdministrateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionAdministrateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionAdministrateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
