import { Component } from '@angular/core';
import { ItemModel } from '../ItemModel';
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
export class CartSneakpeakComponent{
  protected shopCart!: ItemModel[];
  filteredItems!: ItemModel[];
  protected filteredItem:string="";
  
  constructor(private shopListService: ShopListService) {
    this.shopCart = this.shopListService.getItems()
    this.filteredItems = this.shopCart

  }

  
  trackByName(index: number, item: ItemModel): string {
    return item.name;
  }

  filter()
  {
    // here implementation of filtering throught item model so we can check if it appears on list
    // use .pipe(map())
    if(this.shopCart.length>0){
    this.filteredItems=this.shopCart.filter(item=>
      item.name.toLowerCase().includes(this.filteredItem.toLowerCase())
    )
  }
   else
  {
      this.filteredItems=this.shopCart;
  }
  }
}
