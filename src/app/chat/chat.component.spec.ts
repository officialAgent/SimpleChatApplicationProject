import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChatComponent } from './chat.component';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

describe('ChatComponent', () => {
  let component: ChatComponent;
  let fixture: ComponentFixture<ChatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChatComponent],
      imports: [MatIconModule, MatListModule, MatButtonModule], // Import any required modules
    });
    fixture = TestBed.createComponent(ChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render messages', () => {
    component.messages = [
      { name: 'User1', message: 'Hello' },
      { name: 'User2', message: 'Hi there' },
    ];
    fixture.detectChanges();

    const messageContainers = fixture.nativeElement.querySelectorAll('.message-container');
    expect(messageContainers.length).toBe(2); // Check if two messages are rendered
  });

  it('should emit clearChat event when clear button is clicked', () => {
    spyOn(component.clearChat, 'emit');
    const clearButton = fixture.nativeElement.querySelector('.clear-button');
    clearButton.click();
    expect(component.clearChat.emit).toHaveBeenCalled();
  });
});
