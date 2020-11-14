import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageReprisesComponent } from './page-reprises.component';

describe('PageReprisesComponent', () => {
  let component: PageReprisesComponent;
  let fixture: ComponentFixture<PageReprisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageReprisesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageReprisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
