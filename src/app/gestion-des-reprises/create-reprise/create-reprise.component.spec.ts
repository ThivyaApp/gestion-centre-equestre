import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRepriseComponent } from './create-reprise.component';

describe('CreateRepriseComponent', () => {
  let component: CreateRepriseComponent;
  let fixture: ComponentFixture<CreateRepriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateRepriseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
