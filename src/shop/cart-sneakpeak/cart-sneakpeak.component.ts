import { Component, Input } from '@angular/core';
import { ItemModel } from '../ItemModel';

@Component({
  selector: 'app-cart-sneakpeak',
  standalone: true,
  imports: [],
  templateUrl: './cart-sneakpeak.component.html',
  styleUrl: './cart-sneakpeak.component.css'
})
export class CartSneakpeakComponent {
  @Input() shopCart:ItemModel[]=[];

}
