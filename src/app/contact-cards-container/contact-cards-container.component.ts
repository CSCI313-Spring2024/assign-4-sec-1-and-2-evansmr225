import { Component, inject } from '@angular/core';
import { ContactService } from '../contact.service';
import { ContactCardComponent } from '../contact-card/contact-card.component';

@Component({
  selector: 'app-contact-cards-container',
  imports: [ContactCardComponent],
  templateUrl: './contact-cards-container.component.html',
  styleUrl: './contact-cards-container.component.css'
})
export class ContactCardsContainerComponent {
  contactService = inject(ContactService)
  
  deleteCard(index: number)
  {
    this.contactService.removeContact(index);
  }
}
