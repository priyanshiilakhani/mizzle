import { Component } from '@angular/core';
import { LucideAngularModule } from "lucide-angular";
import { faqData } from '../../data';

@Component({
  selector: 'servicev2-faqs',
  imports: [LucideAngularModule],
  templateUrl: './faqs.html',
  styles: ``,
})
  
export class Faqs {
  faqData = faqData;
}
