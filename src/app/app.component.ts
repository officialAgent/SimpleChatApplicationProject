// app.component.ts
import {Component} from '@angular/core';
import {ChatService} from './services/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  people: number[] = [];
  messages: { name: string; message: string }[] = [];

  constructor(private chatService: ChatService) {
  }

  addNewPerson() {
    if (this.people.length < 9) {
      this.people.push(this.people.length + 1);
    } else {
      alert('Chat room is full, max capacity is 9 people.');
    }
  }

  clearChat() {
    this.messages = [];
  }

  ngOnInit() {
    this.chatService.messages$.subscribe(message => {
      if ('name' in message && 'message' in message) {
        this.messages.push({name: message.name, message: message.message});
      }
    });
  }
}
