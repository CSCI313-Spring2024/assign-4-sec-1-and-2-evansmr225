import { Component, inject} from '@angular/core';
import { ContactService } from '../contact.service';
import { FormsModule } from '@angular/forms';
import { Contact } from '../../contact';

// Contains form used to add contacts

@Component({
  selector: 'app-add-contact',
  imports: [FormsModule],
  templateUrl: './add-contact.component.html',
  styleUrl: './add-contact.component.css'
})
export class AddContactComponent {
  // used to add contacts
  contactService = inject(ContactService);

  // variables link to form using two way data binding ngModel
  subFirstName: string = "";
  subLastName: string = "";
  subPhone: string = "";
  subEmail: string = "";
  
  // Called when the button to add a contact is clicked
  OnSubmit(form : any)
  {
    if (form.valid)
    {
      this.contactService.addContact(this.subFirstName, this.subLastName, this.subEmail, this.subPhone);
    }
  }
}
