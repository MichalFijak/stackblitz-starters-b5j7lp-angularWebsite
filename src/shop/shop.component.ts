import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ItemModel } from './ItemModel';
import { CartSneakpeakComponent } from './cart-sneakpeak/cart-sneakpeak.component';
import { ShopListService } from './shopList.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [FormsModule, CommonModule, CartSneakpeakComponent],
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {

  constructor(private shopList: ShopListService, private router: Router) {
    };
  

  onAddItem(form: NgForm) {
    this.shopList.addItem(new ItemModel(form.value.name, +form.value.amount));
    form.reset();
  }

  cartSneakpeek() {
    this.router.navigate(['/cart'])
  }
}
