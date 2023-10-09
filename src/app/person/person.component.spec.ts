import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonComponent } from './person.component';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';
import { ChatService } from '../services/chat.service';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule} from "@angular/material/icon";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

describe('PersonComponent', () => {
  let component: PersonComponent;
  let fixture: ComponentFixture<PersonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonComponent],
      imports: [
        MatInputModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        ReactiveFormsModule,
        BrowserAnimationsModule
      ],
      providers: [FormBuilder, ChatService],
    });
    fixture = TestBed.createComponent(PersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should have a disabled send button initially', () => {
    const sendButton = fixture.nativeElement.querySelector('button[type="submit"]');
    expect(sendButton.disabled).toBeTruthy();
  });

  it('should enable send button when a message is typed', () => {
    const sendButton = fixture.nativeElement.querySelector('button[type="submit"]');
    const messageInput = fixture.nativeElement.querySelector('input');

    messageInput.value = 'Test message';
    messageInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(sendButton.disabled).toBeFalsy();
  });

});
