import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebacompounetComponent } from './pruebacompounet.component';

describe('PruebacompounetComponent', () => {
  let component: PruebacompounetComponent;
  let fixture: ComponentFixture<PruebacompounetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebacompounetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PruebacompounetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
