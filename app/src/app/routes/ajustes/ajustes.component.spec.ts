import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjustesComponent } from './ajustes.component';

describe('AjustesComponent', () => {
  let component: AjustesComponent;
  let fixture: ComponentFixture<AjustesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjustesComponent]
    });
    fixture = TestBed.createComponent(AjustesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
