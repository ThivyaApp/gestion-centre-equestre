import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReprisesListComponent } from './reprises-list.component';

describe('ReprisesListComponent', () => {
  let component: ReprisesListComponent;
  let fixture: ComponentFixture<ReprisesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReprisesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReprisesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
