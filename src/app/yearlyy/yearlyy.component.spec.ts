import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearlyyComponent } from './yearlyy.component';

describe('YearlyyComponent', () => {
  let component: YearlyyComponent;
  let fixture: ComponentFixture<YearlyyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YearlyyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YearlyyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
