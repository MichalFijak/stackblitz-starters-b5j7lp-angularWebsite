import { Component, OnDestroy, OnInit } from '@angular/core';
import { ItemModel } from '../ItemModel';
import { Subscription } from 'rxjs';
import { ShopListService } from '../shopList.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart-sneakpeak',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './cart-sneakpeak.component.html',
  styleUrls: ['./cart-sneakpeak.component.css']
})
export class CartSneakpeakComponent implements OnInit, OnDestroy {
  private shopListSubscription!: Subscription;
  protected shopCart!: ItemModel[];
  protected filteredItem:string="";
  constructor(private shopListService: ShopListService) {}

  ngOnInit(): void {
    this.shopListSubscription = this.shopListService.getItems().subscribe((items) => {
      this.shopCart = items;
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

  filter()
  {
    console.log(this.filteredItem);
    // here implementation of filtering throught item model so we can check if it appears on list
    // use .pipe(map())
  }
}
