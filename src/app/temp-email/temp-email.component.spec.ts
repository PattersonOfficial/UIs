import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempEmailComponent } from './temp-email.component';

describe('TempEmailComponent', () => {
  let component: TempEmailComponent;
  let fixture: ComponentFixture<TempEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
