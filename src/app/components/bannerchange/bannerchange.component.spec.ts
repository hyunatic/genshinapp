import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerchangeComponent } from './bannerchange.component';

describe('BannerchangeComponent', () => {
  let component: BannerchangeComponent;
  let fixture: ComponentFixture<BannerchangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerchangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
