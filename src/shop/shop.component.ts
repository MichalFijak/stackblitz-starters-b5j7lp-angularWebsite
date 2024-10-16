import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ItemModel } from './ItemModel';
import { CartSneakpeakComponent } from './cart-sneakpeak/cart-sneakpeak.component';
import { Subscription } from 'rxjs';
import { ShopListService } from './shopList.service';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [FormsModule, CommonModule, CartSneakpeakComponent],
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnDestroy {
  protected showCart = false;
  private shopListSubscription!: Subscription;

  constructor(private shopList: ShopListService) {
    this.shopListSubscription = this.shopList.getItems().subscribe((items: ItemModel[]) => {
      console.log(items, 'ShopComponent items');
    });
  }

  ngOnDestroy(): void {
    if (this.shopListSubscription) {
      this.shopListSubscription.unsubscribe();
    }
  }

  onAddItem(form: NgForm) {
    this.shopList.addItem(new ItemModel(form.value.name, +form.value.amount));
    form.reset();
  }

  cartSneakpeek() {
    this.showCart = !this.showCart;
  }
}
