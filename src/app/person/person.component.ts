import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';
import {ChatService} from '../services/chat.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
})
export class PersonComponent implements OnInit {
  @Input() name!: string;
  messageForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private chatService: ChatService) {
    this.messageForm = this.formBuilder.group({
      message: ['', Validators.required],
    });

  }

  ngOnInit(): void {

  }

  sendMessage() {
    const message = this.messageForm.get('message')?.value;
    if (this.messageForm.valid && message) {
      this.chatService.sendMessage(this.name, message);
      this.messageForm.reset();
      for (let control in this.messageForm.controls) {
        this.messageForm.controls[control].setErrors(null);
      }


    }
  }
}

