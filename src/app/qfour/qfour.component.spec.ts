import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QfourComponent } from './qfour.component';

describe('QfourComponent', () => {
  let component: QfourComponent;
  let fixture: ComponentFixture<QfourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QfourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QfourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
