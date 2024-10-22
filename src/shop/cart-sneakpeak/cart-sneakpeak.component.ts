import { Component, OnDestroy, OnInit } from '@angular/core';
import { ItemModel } from '../ItemModel';
import { Observable, Subscription, map } from 'rxjs';
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
  filteredItems!: Observable<ItemModel[]>;
  protected filteredItem: string = '';

  constructor(private shopListService: ShopListService) {
  }

  ngOnInit(): void {

    this.shopListSubscription = this.shopListService.shopListSubject.subscribe((items: ItemModel[]) => {
      this.shopCart = items;
      this.updateFilteredItems()
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
    this.updateFilteredItems()

  }
  updateFilteredItems()
  {
    this.filteredItems=this.shopListService.getItems().pipe(map(items=>items.filter(
      item=>item.name.toLowerCase().includes(this.filteredItem.toLowerCase()))))
  }
}
