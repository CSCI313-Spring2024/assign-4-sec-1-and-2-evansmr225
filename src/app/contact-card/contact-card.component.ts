import { Component, Input, Output, EventEmitter} from '@angular/core';
import { PhoneFormatPipe } from '../phone-format.pipe';
import { Contact } from '../../contact';
import { RouterModule, RouterLink, RouterOutlet } from '@angular/router';

// Contains information for a single contact


@Component({
  selector: 'app-contact-card',
  imports: [RouterModule, RouterLink, RouterOutlet, PhoneFormatPipe],
  templateUrl: './contact-card.component.html',
  styleUrl: './contact-card.component.css'
})
export class ContactCardComponent {
  // Inputs the contact from the parent
  @Input() contact!: Contact;
  // Inputs index of the contact in the contact list from the parent
  @Input() id!: number;
  @Output() deleteOutput : EventEmitter<void> = new EventEmitter();

  // Emits deleteOutput event when delete button is clicked
  sendDelete()
  {
    this.deleteOutput.emit();
  }
}
