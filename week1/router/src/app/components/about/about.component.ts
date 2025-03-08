import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-about',
  imports: [MatCardModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  data: any;

  constructor() { }

  ngOnInit(): void {
    fetch('https://baconipsum.com/api/?type=meat-and-filler')
      .then(response => response.json())
      .then(fetchedData => {
        this.data = fetchedData;
        console.log(this.data);
      })
      .catch(error => console.error(error));
  }
}
