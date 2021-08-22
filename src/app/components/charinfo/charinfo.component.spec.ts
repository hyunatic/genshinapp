import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharinfoComponent } from './charinfo.component';

describe('CharinfoComponent', () => {
  let component: CharinfoComponent;
  let fixture: ComponentFixture<CharinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
