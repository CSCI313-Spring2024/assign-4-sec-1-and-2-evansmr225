import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Contact } from '../../contact';
import { RouterModule, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-contact-card',
  imports: [RouterModule, RouterLink, RouterOutlet],
  templateUrl: './contact-card.component.html',
  styleUrl: './contact-card.component.css'
})
export class ContactCardComponent {
  @Input() contact!: Contact;
  @Input() id!: number;
  @Output() deleteOutput : EventEmitter<void> = new EventEmitter();

  sendDelete()
  {
    this.deleteOutput.emit();
  }
}
