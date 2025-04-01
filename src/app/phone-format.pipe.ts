import { Pipe, PipeTransform } from '@angular/core';

// A pipe used to format a phone number to XXX-XXX-XXXX 

@Pipe({
  name: 'phoneFormat'
})
export class PhoneFormatPipe implements PipeTransform {

  transform(value: string) : string {
    if (!value) return '';
    
    // Remove all characters which are not numbers
    const cleaned = value.replace(/\D/g, '');

    // Ensure the number has exactly 10 digits
    if (cleaned.length !== 10) {
      // Return as is if not a valid 10-digit number
      return value; 
    }

    // Format as xxx-xxx-xxxx and return
    return `${cleaned.slice(0, 3)}-${cleaned.slice(3, 6)}-${cleaned.slice(6)}`
  }

}
