import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtselectorComponent } from './artselector.component';

describe('ArtselectorComponent', () => {
  let component: ArtselectorComponent;
  let fixture: ComponentFixture<ArtselectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtselectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtselectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
