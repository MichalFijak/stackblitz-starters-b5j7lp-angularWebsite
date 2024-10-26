import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, Signal, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CurrencyCalculatorService, CurrencyModel } from './currencyCalculator.service';
import { Subscriber, Subscription } from 'rxjs';

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
  //currencyModel!:Signal<CurrencyModel[]>;
  constructor(private currencyCalculatorService: CurrencyCalculatorService)
  {
  }

  ngOnInit()
  {
    let x = computed(() => this.currencyCalculatorService.getCurrencyModels$)
    let y = this.currencyCalculatorService.getCurrencyModels();
    console.log(x());
    console.log(y);
    

  }

  ngOnDestroy(): void {
    this.currencyService$.unsubscribe();
  }

  calculate()
  {
    this.exchangedMoney=this.exchangeRate*(+this.moneyToExchange);
  }
}
