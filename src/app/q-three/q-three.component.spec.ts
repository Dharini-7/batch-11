import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QThreeComponent } from './q-three.component';

describe('QThreeComponent', () => {
  let component: QThreeComponent;
  let fixture: ComponentFixture<QThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
