import { Injectable, signal, computed, Signal} from '@angular/core';
import { Contact } from '../contact';

// Allows components to get the filtered list of contacts and add, delete, and update contacts

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  // List of all contacts
  // it is a signal so that when its value changes the filteredContacts which is ultimately what is displayed is updated
  contacts = signal<Contact[]>([]);
  
  constructor() 
  { 
    // Adds one contact by default
    this.addContact("John", "Doe", "johndoe@example.com", "1234567890")
  }

  // Signal used to filter contacts, when it is updated the filteredContacts is updated
  filterValue = signal("");

  // Computed signal, returns all contacts in contact array if filter is empty, otherwise includes contacts that contain filter
  // In addition to objects in it containing same data as contact objects, they also contain an index which is their index in the array
  filteredContacts = computed(() => {
    // Include all contacts if the list is empty
    if (!this.filterValue) {
      return this.contacts().map((contact, index) => ({ ...contact, index }));
    }
    
    // Include contacts which match the full name
    return this.contacts()
      .map((contact, index) => ({ ...contact, index })) 
      .filter(contact => 
        contact.fullName.toLowerCase().includes(this.filterValue().toLowerCase()) 
      );
  });

  // Adds new contact to end of contact array 
  addContact(aFirstName: string, aLastName: string, aEmailAddress: string, aPhoneNumber: string) : void
  {
    const newContact: Contact = {
      firstName: aFirstName,
      lastName: aLastName,
      fullName: `${aFirstName} ${aLastName}`,
      emailAddress: aEmailAddress,
      phoneNumber: aPhoneNumber
    }
    
    // Creates copy of array and adds it to end, must create a copy or else filtered contacts does not recognize change
    this.contacts.set([...this.contacts(), newContact]);
  }

  // Deletes contact at index
  removeContact(index: number): void {
    this.contacts.set(this.contacts().filter((_, i) => i !== index)); 
  }

  // Returns contact from list at a valid index or one with unknown values at an invalid index
  getContactAtIndex(index: number) : Contact
  {
    const errorContact : Contact = 
    { firstName: "Unknown",
      lastName: "Unknown",
      fullName: "Unknown",
      emailAddress: "Unknown",
      phoneNumber: "Unknown"
    };
    
    if (index >= 0 && index < this.contacts().length) {
      return this.contacts()[index] ?? errorContact;
    } 
    return errorContact;
  }

  // Updates the values of a contact at an index
  updateContactAtIndex(index: number, aFirstName: string, aLastName: string, aEmailAddress: string, aPhoneNumber: string) : void
  {
    let newContact: Contact = {
      firstName: aFirstName,
      lastName: aLastName,
      fullName: `${aFirstName} ${aLastName}`,
      emailAddress: aEmailAddress,
      phoneNumber: aPhoneNumber
    }

    // Sets contacts to copy of contacts array so changes are updated by the filtered contacts computed signal
    this.contacts.set([
      ...this.contacts().slice(0, index), 
      newContact,                          
      ...this.contacts().slice(index + 1)  
    ]);
  }
}
