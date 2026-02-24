import { Component } from '@angular/core';
import { LucideAngularModule } from "lucide-angular";
import { CountUpDirective } from 'ngx-countup';
import { faqData, statsData } from '../../data';

@Component({
  selector: 'saas-v1-about',
  imports: [LucideAngularModule, CountUpDirective],
  templateUrl: './about.html',
  styles: ``,
})
export class About {
  statsData = statsData;
  faqData = faqData;
}
