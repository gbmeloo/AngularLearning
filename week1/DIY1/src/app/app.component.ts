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
  firstName: string= "";
  lastName: string= "";
  email: string= "";

  display(): void {
    alert("Name: " + this.firstName + "\nLast Name: " + this.lastName + "\nEmail: " +this.email);
  }
}