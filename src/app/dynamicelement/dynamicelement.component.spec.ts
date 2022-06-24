import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicelementComponent } from './dynamicelement.component';

describe('DynamicelementComponent', () => {
  let component: DynamicelementComponent;
  let fixture: ComponentFixture<DynamicelementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicelementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicelementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
