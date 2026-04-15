import { Component } from '@angular/core';
import { LucideAngularModule } from "lucide-angular";
import { faqsData } from '../../data';

@Component({
  selector: 'help-faqs',
  imports: [LucideAngularModule],
  templateUrl: './faqs.html',
  styles: ``,
})
  
export class Faqs {
  faqsData = faqsData;
}
