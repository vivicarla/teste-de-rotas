import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Resenha } from './resenha';

describe('Resenha', () => {
  let component: Resenha;
  let fixture: ComponentFixture<Resenha>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Resenha],
    }).compileComponents();

    fixture = TestBed.createComponent(Resenha);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
