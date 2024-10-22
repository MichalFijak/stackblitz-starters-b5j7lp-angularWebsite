import { Component, OnDestroy, OnInit } from '@angular/core';
import { ItemModel } from '../ItemModel';
import { Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ShopListService } from '../shopList.service';

@Component({
  selector: 'app-cart-sneakpeak',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './cart-sneakpeak.component.html',
  styleUrls: ['./cart-sneakpeak.component.css']
})
export class CartSneakpeakComponent implements OnInit, OnDestroy {
  private shopListSubscription!: Subscription;
  protected shopCart: ItemModel[] = [];
  filteredItems: ItemModel[] = [];
  protected filteredItem: string = '';

  constructor(private shopListService: ShopListService) {
  }

  ngOnInit(): void {

    this.shopListSubscription = this.shopListService.shopListSubject.subscribe((items: ItemModel[]) => {
      this.shopCart = items;
      this.filteredItems = items;
      console.log(this.shopCart, 'shopCart from cart-sneakpeak');
    });
  }

  ngOnDestroy(): void {
    if (this.shopListSubscription) {
      this.shopListSubscription.unsubscribe();
    }
  }

  trackByName(index: number, item: ItemModel): string {
    return item.name;
  }

  filter() {
    if (this.filteredItem) {
      this.filteredItems = this.shopCart.filter(item =>
        item.name.toLowerCase().includes(this.filteredItem.toLowerCase())
      );
    } else {
      this.filteredItems = this.shopCart;
    }
  }
}
