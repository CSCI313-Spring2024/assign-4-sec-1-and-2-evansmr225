import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactCardsContainerComponent } from './contact-cards-container.component';

describe('ContactCardsContainerComponent', () => {
  let component: ContactCardsContainerComponent;
  let fixture: ComponentFixture<ContactCardsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactCardsContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactCardsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
