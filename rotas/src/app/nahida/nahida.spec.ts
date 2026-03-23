import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nahida } from './nahida';

describe('Nahida', () => {
  let component: Nahida;
  let fixture: ComponentFixture<Nahida>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nahida],
    }).compileComponents();

    fixture = TestBed.createComponent(Nahida);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
