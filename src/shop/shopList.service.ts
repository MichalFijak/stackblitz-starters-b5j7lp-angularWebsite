import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ItemModel } from './ItemModel';

@Injectable({
  providedIn: 'root'
})
export class ShopListService {
  private shopList: ItemModel[] = [];
  private shopListSubject: Subject<ItemModel[]> = new Subject<ItemModel[]>

  constructor() {}

  getItems(): ItemModel[] {
    return this.shopList;
  }

  addItem(item: ItemModel): void {
    this.shopList = [...this.shopList, item]; // Ensure a new array instance
    this.shopListSubject.next(this.shopList);
    console.log(this.shopList,'from service')
  }

  removeItem(item: ItemModel): void {
    this.shopList = this.shopList.filter(i => i !== item); // Filter out the item to ensure new array
    this.shopListSubject.next(this.shopList);
  }
}
