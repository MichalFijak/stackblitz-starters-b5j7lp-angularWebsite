import { Component, OnDestroy, OnInit } from '@angular/core';
import { ItemModel } from '../ItemModel';
import { Subscription } from 'rxjs';
import { ShopListService } from '../shopList.service';

@Component({
  selector: 'app-cart-sneakpeak',
  standalone: true,
  imports: [],
  templateUrl: './cart-sneakpeak.component.html',
  styleUrls: ['./cart-sneakpeak.component.css']
})
export class CartSneakpeakComponent implements OnInit, OnDestroy {
  private shopListSubscription!: Subscription;
  protected shopCart: ItemModel[] = [];

  constructor(private shopListService: ShopListService) {}

  ngOnInit(): void {
    this.shopListSubscription = this.shopListService.getItems().subscribe((items) => {
      this.shopCart = items;
      console.log(this.shopCart, 'CartSneakpeakComponent items');
    });
  }

  ngOnDestroy(): void {
    if (this.shopListSubscription) {
      this.shopListSubscription.unsubscribe();
    }
  }
}
