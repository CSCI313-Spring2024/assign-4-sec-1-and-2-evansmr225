import { Component } from '@angular/core';
import { AddContactComponent } from '../add-contact/add-contact.component';
import { ContactCardsContainerComponent } from '../contact-cards-container/contact-cards-container.component';


@Component({
  selector: 'app-home',
  imports: [AddContactComponent, ContactCardsContainerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
