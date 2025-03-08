import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  fullName: string= "";
  city: string= "";
  country: string= "";
  sentence: string= "";

  display(): void {
    if (this.fullName == "" || this.city == "" || this.country == "") {
      alert("Please fill in all fields.");
      this.sentence = "";
      return;
    }
    this.sentence = `My name is ${this.fullName} and I live in ${this.city}, ${this.country}.`;
  }
}
