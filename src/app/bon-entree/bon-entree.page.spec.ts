import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BonEntreePage } from './bon-entree.page';

describe('BonEntreePage', () => {
  let component: BonEntreePage;
  let fixture: ComponentFixture<BonEntreePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BonEntreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
