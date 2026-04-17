import { Component } from '@angular/core';
import { LucideAngularModule } from "lucide-angular";
import { faqData } from '../../data';

@Component({
  selector: 'faq-list',
  imports: [LucideAngularModule],
  templateUrl: './list.html',
  styles: ``,
})
  
export class List {
  faqData = faqData;
}
