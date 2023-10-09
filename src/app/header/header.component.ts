// header.component.ts
import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Output() addNewPersonClicked = new EventEmitter<void>();

  addNewPerson() {
    this.addNewPersonClicked.emit();
  }
}
