import { Injectable } from '@angular/core';
import { Contact } from '../contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contacts: Contact[] = [
    {firstName: "John",
      lastName: "Doe",
      emailAddress: "john.doe@example.com",
      phoneNumber: "1234567890"
    }
  ]
  
  constructor() { }

  addContact(newContact : Contact) : void
  {
    this.contacts.push(newContact);
  }

  removeContact(index: number) : void {
    if (index >= 0 && index < this.contacts.length) {
      this.contacts.splice(index, 1);
    }
  }

  getContactAtIndex(index: number) : Contact
  {
    const errorContact : Contact = 
    {firstName: "Unknown",
      lastName: "Unknown",
      emailAddress: "Unknown",
      phoneNumber: "Unknown"
    };
    
    if (index >= 0 && index < this.contacts.length) {
      return this.contacts.at(index) ?? errorContact;
    } 
    return errorContact;
  }

  replaceContactAtIndex(index: number, contact : Contact) : void
  {
    this.contacts[index] = contact;
  }
}
