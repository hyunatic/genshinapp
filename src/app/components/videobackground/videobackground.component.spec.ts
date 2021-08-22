import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideobackgroundComponent } from './videobackground.component';

describe('VideobackgroundComponent', () => {
  let component: VideobackgroundComponent;
  let fixture: ComponentFixture<VideobackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideobackgroundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideobackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
