import { Component } from '@angular/core';
import { faqData } from '../../data';
import { LucideAngularModule } from "lucide-angular";

@Component({
  selector: 'feature-single-faq',
  imports: [LucideAngularModule],
  templateUrl: './faq.html',
  styles: ``,
})
export class Faq {
  faqData = faqData;
}
