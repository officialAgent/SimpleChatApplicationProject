import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private messagesSubject = new Subject<{ name: string; message: string }>();
  messages$ = this.messagesSubject.asObservable();

  sendMessage(name: string, message: string) {
    const messageObject = {name, message};
    this.messagesSubject.next(messageObject);
  }

  constructor() {
  }
}
