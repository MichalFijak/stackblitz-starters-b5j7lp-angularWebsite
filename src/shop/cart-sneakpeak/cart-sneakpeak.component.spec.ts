import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartSneakpeakComponent } from './cart-sneakpeak.component';

describe('CartSneakpeakComponent', () => {
  let component: CartSneakpeakComponent;
  let fixture: ComponentFixture<CartSneakpeakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartSneakpeakComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartSneakpeakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
