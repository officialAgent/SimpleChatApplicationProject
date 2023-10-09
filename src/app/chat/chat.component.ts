// chat.component.ts
import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  @Input() messages: { name: string; message: string }[] = [];
  @Output() clearChat = new EventEmitter<void>();
}
