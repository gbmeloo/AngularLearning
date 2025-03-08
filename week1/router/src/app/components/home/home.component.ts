import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-home',
  imports: [MatTabsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  images = [1, 2, 3].map(() => `https://picsum.photos/600/400?random&t=${Math.random()}`);
}
