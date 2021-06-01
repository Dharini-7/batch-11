import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QOneComponent } from './q-one.component';

describe('QOneComponent', () => {
  let component: QOneComponent;
  let fixture: ComponentFixture<QOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
