import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {
  moneyToExchange="";
  exchangeRate=3.45;
  exchangedMoney=0;


  calculate()
  {
    this.exchangedMoney=this.exchangeRate*(+this.moneyToExchange);
  }
}
