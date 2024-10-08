import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {

  public shopCart:ItemModel[]=[];


  onAddItem(form:NgForm)
  {
    this.shopCart.push(new ItemModel(form.value.name,+form.value.amount))
    console.log(this.shopCart)
  }
}

export class ItemModel
{
  name!:string;
  amount!:number;
  constructor(name:string,amount:number){
    this.name=name;
    this.amount=amount;
  }

}