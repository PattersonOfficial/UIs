import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempPassComponent } from './temp-pass.component';

describe('TempPassComponent', () => {
  let component: TempPassComponent;
  let fixture: ComponentFixture<TempPassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempPassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
