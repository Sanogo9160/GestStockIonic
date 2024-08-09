import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MotifPage } from './motif.page';

describe('MotifPage', () => {
  let component: MotifPage;
  let fixture: ComponentFixture<MotifPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MotifPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
