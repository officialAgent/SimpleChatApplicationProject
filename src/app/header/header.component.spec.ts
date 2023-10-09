import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [MatIconModule, MatButtonModule, MatDividerModule],
    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit addNewPersonClicked event when "ADD NEW PERSON" button is clicked', () => {
    spyOn(component.addNewPersonClicked, 'emit');
    const addButton = fixture.nativeElement.querySelector('.add-button');
    addButton.click();
    expect(component.addNewPersonClicked.emit).toHaveBeenCalled();
  });

  it('should render the title and "ADD NEW PERSON" button', () => {
    const titleText = fixture.nativeElement.querySelector('.title-container h1').textContent;
    const buttonText = fixture.nativeElement.querySelector('.add-button').textContent; // Get the button text

    expect(titleText).toContain('Simple Chat Application');
    expect(buttonText).toContain('ADD NEW PERSON');
  });
});
