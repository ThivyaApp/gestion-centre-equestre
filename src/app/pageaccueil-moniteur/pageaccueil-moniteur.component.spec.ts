import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageaccueilMoniteurComponent } from './pageaccueil-moniteur.component';

describe('PageaccueilMoniteurComponent', () => {
  let component: PageaccueilMoniteurComponent;
  let fixture: ComponentFixture<PageaccueilMoniteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageaccueilMoniteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageaccueilMoniteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
