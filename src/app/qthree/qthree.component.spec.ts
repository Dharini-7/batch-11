import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QthreeComponent } from './qthree.component';

describe('QthreeComponent', () => {
  let component: QthreeComponent;
  let fixture: ComponentFixture<QthreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QthreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
