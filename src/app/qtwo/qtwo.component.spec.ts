import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QtwoComponent } from './qtwo.component';

describe('QtwoComponent', () => {
  let component: QtwoComponent;
  let fixture: ComponentFixture<QtwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QtwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QtwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
