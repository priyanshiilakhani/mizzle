import { Component } from '@angular/core';
import { GlightboxDirective } from '@core/directive/glightbox.directive';
import { LucideAngularModule } from "lucide-angular";
import { workData } from '../../data';

@Component({
  selector: 'finance-consulting-work',
  imports: [LucideAngularModule, GlightboxDirective],
  templateUrl: './work.html',
  styles: ``,
})
  
export class Work {
  workData = workData;
}
