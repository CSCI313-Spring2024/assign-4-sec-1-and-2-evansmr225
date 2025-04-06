import { Component, inject } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Router, RouterModule, RouterLink} from '@angular/router';
import { ContactService } from '../contact.service';
import { Contact } from '../../contact';
import { FormsModule } from '@angular/forms';

// Form used to update a single contact, is located on its own page separate from the home page with all contacts

@Component({
  selector: 'app-contact-update',
  imports: [FormsModule, RouterModule, RouterLink],
  templateUrl: './contact-update.component.html',
  styleUrl: './contact-update.component.css'
})
export class ContactUpdateComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  // the index of the contact in the contact list taken from the URL
  id: number = -1;
  
  contactService = inject(ContactService);
  contact: Contact;

  // form input fields which are connected using two way data binding with ngModel
  subFirstName: string;
  subLastName: string;
  subEmail: string;
  subPhone: string;
  router = inject(Router);
  
  constructor() {
    // id is taken from URL
    this.id = Number(this.route.snapshot.params['id']);
    // the contact at the index of the id in the contact list is retrieved
    this.contact = this.contactService.getContactAtIndex(this.id);

    // Set form inputs to current inputs by default
    this.subFirstName = this.contact.firstName;
    this.subLastName = this.contact.lastName;
    this.subEmail = this.contact.emailAddress;
    this.subPhone = this.contact.phoneNumber;
  }

  OnSubmit(form: any)
  {
    if (form.valid)
    {
      // replaces the contact at that index 
      this.contactService.updateContactAtIndex(this.id, this.subFirstName, this.subLastName, this.subEmail, this.subPhone);
      this.router.navigate(['']);
    }
  }
}
