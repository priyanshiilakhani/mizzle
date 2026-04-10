import { Component } from '@angular/core';
import { faqData } from '../../data';

@Component({
  selector: 'cart-faq',
  imports: [],
  templateUrl: './faq.html',
  styles: ``,
})
export class Faq {
  faqData = faqData;
}
