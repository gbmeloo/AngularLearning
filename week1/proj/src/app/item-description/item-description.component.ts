import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-item-description',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './item-description.component.html',
  styleUrl: './item-description.component.css'
})
export class ItemDescriptionComponent {
  @Input() item: string | undefined;
  @Output() itemChange = new EventEmitter<string>();

  outputItem(): void {
    this.itemChange.emit(this.item);
  }
}