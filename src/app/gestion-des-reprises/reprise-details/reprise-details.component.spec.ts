import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepriseDetailsComponent } from './reprise-details.component';

describe('RepriseDetailsComponent', () => {
  let component: RepriseDetailsComponent;
  let fixture: ComponentFixture<RepriseDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepriseDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepriseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
