import { Component } from '@angular/core';
import { ContactCardsContainerComponent } from '../contact-cards-container/contact-cards-container.component';
import { FilterComponent } from "../filter/filter.component";
import { RouterLink, RouterOutlet } from '@angular/router';

// Contains everything on the home page including form for adding contacts, form for filtering contacts, and all contacts which match the filter

@Component({
  selector: 'app-home',
  imports: [ContactCardsContainerComponent, FilterComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
