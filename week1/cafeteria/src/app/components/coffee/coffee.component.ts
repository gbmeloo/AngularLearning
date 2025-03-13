import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-coffee',
  imports: [FormsModule, MatRadioModule, MatButtonModule],
  templateUrl: './coffee.component.html',
  styleUrl: './coffee.component.css'
})
export class CoffeeComponent {
  milkPrice: number = 1.0;
  sugarPrice: number = 0.5;
  hotCoffee: boolean = false;
  milkCount: number = 0;
  sugarCount: number = 0;
  caffeine: boolean = false;
  totalQty: number = 0;

  decreamentMilk() {
    this.milkCount > 0 ? this.milkCount-- : this.milkCount = 0;
  }

  addMilk() {
    this.milkCount++;
  }

  decreamentSugar() {
    this.sugarCount > 0 ? this.sugarCount-- : this.sugarCount = 0;
  }

  addSugar() {
    this.sugarCount++;
  }

  makeCoffee() {
    alert('Order: \n' +
      (this.hotCoffee ? 'Hot' : 'Cold') + '\n' +
      'Milk: ' + this.milkCount + '\n' +
      'Sugar: ' + this.sugarCount + '\n' +
      'Caffeine: ' + (this.caffeine ? 'Yes' : 'No'));
  }
}


