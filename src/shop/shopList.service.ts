import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ItemModel } from './ItemModel';

@Injectable({
  providedIn: 'root'
})
export class ShopListService {
  private shopList: ItemModel[] = [];
  shopListSubject: BehaviorSubject<ItemModel[]> = new BehaviorSubject<ItemModel[]>(this.shopList)

  constructor() {}

  getItems(): Observable<ItemModel[]>
  {
    return this.shopListSubject.asObservable();
  }

  addItem(item: ItemModel): void {
    this.shopList = [...this.shopList, item]; // Ensure a new array instance
    this.shopListSubject.next(this.shopList);
  }

  removeItem(item: ItemModel): void {
    this.shopList = this.shopList.filter(i => i !== item); // Filter out the item to ensure new array
    this.shopListSubject.next(this.shopList);
  }
}
