import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoansManagementComponent } from './loans-management.component';

describe('LoansManagementComponent', () => {
  let component: LoansManagementComponent;
  let fixture: ComponentFixture<LoansManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoansManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoansManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
