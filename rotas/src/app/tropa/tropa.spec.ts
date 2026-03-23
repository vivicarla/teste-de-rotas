import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tropa } from './tropa';

describe('Tropa', () => {
  let component: Tropa;
  let fixture: ComponentFixture<Tropa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tropa],
    }).compileComponents();

    fixture = TestBed.createComponent(Tropa);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
