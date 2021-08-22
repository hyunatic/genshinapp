import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChardescComponent } from './chardesc.component';

describe('ChardescComponent', () => {
  let component: ChardescComponent;
  let fixture: ComponentFixture<ChardescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChardescComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChardescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
