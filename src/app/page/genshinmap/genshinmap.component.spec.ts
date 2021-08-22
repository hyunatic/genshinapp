import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenshinmapComponent } from './genshinmap.component';

describe('GenshinmapComponent', () => {
  let component: GenshinmapComponent;
  let fixture: ComponentFixture<GenshinmapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenshinmapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenshinmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
