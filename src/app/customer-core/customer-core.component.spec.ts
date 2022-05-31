import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCoreComponent } from './customer-core.component';

describe('CustomerCoreComponent', () => {
  let component: CustomerCoreComponent;
  let fixture: ComponentFixture<CustomerCoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerCoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
