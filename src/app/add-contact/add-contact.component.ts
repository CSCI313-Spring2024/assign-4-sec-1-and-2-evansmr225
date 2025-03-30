import { Component, inject} from '@angular/core';
import { ContactService } from '../contact.service';
import { FormsModule } from '@angular/forms';
import { Contact } from '../../contact';

@Component({
  selector: 'app-add-contact',
  imports: [FormsModule],
  templateUrl: './add-contact.component.html',
  styleUrl: './add-contact.component.css'
})
export class AddContactComponent {
  contactService = inject(ContactService);

  subFirstName: string = "";
  subLastName: string = "";
  subPhone: string = "";
  subEmail: string = "";
  
  OnSubmit(form : any)
  {
    if (form.valid)
    {
      let newContact: Contact = {firstName: this.subFirstName, lastName: this.subLastName, emailAddress : this.subEmail, phoneNumber: this.subPhone}
      this.contactService.addContact(newContact);
    }
  }
}
