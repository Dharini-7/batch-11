import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QTwoComponent } from './q-two.component';

describe('QTwoComponent', () => {
  let component: QTwoComponent;
  let fixture: ComponentFixture<QTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
