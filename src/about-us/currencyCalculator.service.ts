import { Injectable, Signal, signal } from "@angular/core";
import {  Subject } from "rxjs";

@Injectable({providedIn:'root'})
export class CurrencyCalculatorService
{

    private readonly currencyModels: CurrencyModel[] =
    [
        {
        firstCurrency: 'PLN',
        exchangeRate: 0.25,
        secondCurrency: 'USD'
        },
        {
        firstCurrency: 'PLN',
        exchangeRate: 0.2,
        secondCurrency: 'EUR'
        },
        {
        firstCurrency: 'USD',
        exchangeRate: 0.93,
        secondCurrency: 'EUR'
        },
        {
         firstCurrency: 'USD',
         exchangeRate: 3.99,
         secondCurrency: 'PLN'
         },
         {
         firstCurrency: 'EUR',
         exchangeRate: 4.20,
         secondCurrency: 'PLN'
         },
         {
         firstCurrency: 'EUR',
         exchangeRate: 1.05,
         secondCurrency: 'USD'
         }
    ]

    public readonly getCurrencyModels = signal<CurrencyModel[]>(this.currencyModels);
    public readonly getCurrencyModels$= new Subject<Signal<CurrencyModel[]>>();
    

}



export interface CurrencyModel
{
    secondCurrency:string,
    exchangeRate:number,
    firstCurrency:string,
}