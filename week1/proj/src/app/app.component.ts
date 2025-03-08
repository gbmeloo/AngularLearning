import { Component, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ItemDescriptionComponent } from "./item-description/item-description.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule, ItemDescriptionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  user = {name: "Gabriel", email: "example@example.com"};
  title = "title";
  fontColor = "black";
  searchQuery = "";
  names: string[] = [];
  newName: string = '';
  inputValue: string = ''; 
  currentItem: string | undefined;

  addName(): void {
    this.names.push(this.newName);
    this.newName = "";
    console.log(this.names);
  }

  removeName(index:number): void {
    this.names.splice(index, 1);
  }

  setCurrentItem(): void {
    this.currentItem = this.inputValue;
    alert('Item Set: ' + this.currentItem);  //debugging
  }

  onItemChange(item: string): void {
    this.currentItem = item;
  }
}
