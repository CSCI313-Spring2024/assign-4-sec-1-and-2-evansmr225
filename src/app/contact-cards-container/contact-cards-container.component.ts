import { Component, inject } from '@angular/core';
import { ContactService } from '../contact.service';
import { ContactCardComponent } from '../contact-card/contact-card.component';

// Displays all contacts that match the full name filter

@Component({
  selector: 'app-contact-cards-container',
  imports: [ContactCardComponent],
  templateUrl: './contact-cards-container.component.html',
  styleUrl: './contact-cards-container.component.css'
})
export class ContactCardsContainerComponent {
  // used to remove contacts from contacts array
  contactService = inject(ContactService)
  
  // Linked to child contact card component using output binding
  // Called when delete button on contact card component is clicked
  deleteCard(index: number)
  {
    this.contactService.removeContact(index);
  }
}
