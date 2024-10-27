import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CurrencyCalculatorService, CurrencyModel } from './currencyCalculator.service';
import {  Subscription } from 'rxjs';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent implements OnInit, OnDestroy{
  moneyToExchange="";
  exchangeRate=3.45;
  exchangedMoney=0;
  currencyService$!:Subscription;
  currencyModel!:CurrencyModel[];
  constructor(private currencyCalculatorService: CurrencyCalculatorService)
  {
    
  }

  ngOnInit()
  {
    this.currencyService$=this.currencyCalculatorService.getCurrencyModels$.subscribe(
       (items) =>
       this.currencyModel = items()
       
       )
       this.currencyCalculatorService.getItems();

    let x = this.currencyCalculatorService.getCurrencyModels;
    console.log(x());
    console.log(this.currencyModel);
    console.log('onInit')
  }

  ngOnDestroy(): void {
    this.currencyService$.unsubscribe();
  }

  calculate()
  {
    console.log(this.currencyModel,'calcualte')
    this.exchangedMoney=this.exchangeRate*(+this.moneyToExchange);
  }
}
