import { Component, inject } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Router, RouterModule, RouterLink, RouterOutlet } from '@angular/router';
import { ContactService } from '../contact.service';
import { Contact } from '../../contact';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-contact-update',
  imports: [FormsModule, RouterModule, RouterLink, RouterOutlet],
  templateUrl: './contact-update.component.html',
  styleUrl: './contact-update.component.css'
})
export class ContactUpdateComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  id: number = -1;
  
  contactService = inject(ContactService);
  contact: Contact;

  subFirstName: string;
  subLastName: string;
  subEmail: string;
  subPhone: string;
  router = inject(Router);
  
  constructor() {
    this.id = Number(this.route.snapshot.params['id']);
    this.contact = this.contactService.getContactAtIndex(this.id);

    this.subFirstName = this.contact.firstName;
    this.subLastName = this.contact.lastName;
    this.subEmail = this.contact.emailAddress;
    this.subPhone = this.contact.phoneNumber;
  }

  OnSubmit(form: any)
  {
    if (form.valid)
    {
      this.contact.firstName = this.subFirstName;
      this.contact.lastName = this.subLastName;
      this.contact.emailAddress = this.subEmail;
      this.contact.phoneNumber = this.subPhone;

      console.log(this.contact.emailAddress);

      this.contactService.replaceContactAtIndex(this.id, this.contact);
      this.router.navigate(['']);
    }
  }
}
