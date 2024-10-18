import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { ItemModel } from './ItemModel';

@Injectable({
  providedIn: 'root'
})
export class ShopListService {
  private shopList: ItemModel[] = [];
  private shopListSubject: Subject<ItemModel[]> = new Subject<ItemModel[]>

  constructor() {}

  getItems(): Observable<ItemModel[]> {
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
