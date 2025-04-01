import { Component, signal, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactService } from '../contact.service';

// Form used to filter contacts by only including those which match the full name provided by the user

@Component({
  selector: 'app-filter',
  imports: [FormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent 
{
  contactService = inject(ContactService);
  // an input field in the filter contacts form linked using two-way data binding with ngModel
  // is set to the filterValue signal from the contact service
  filterName = this.contactService.filterValue;
}
