import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QFourComponent } from './q-four.component';

describe('QFourComponent', () => {
  let component: QFourComponent;
  let fixture: ComponentFixture<QFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
