import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ItemModel } from './ItemModel';
import { CartSneakpeakComponent } from './cart-sneakpeak/cart-sneakpeak.component';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [FormsModule,CommonModule,CartSneakpeakComponent],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {

  protected shopCart:ItemModel[]=[];
  protected showCart=false;
  onAddItem(form:NgForm)
  {
    this.shopCart.push(new ItemModel(form.value.name,+form.value.amount))
  }

  cartSneakpeek()
  {
    this.showCart=!this.showCart;
  }
}

