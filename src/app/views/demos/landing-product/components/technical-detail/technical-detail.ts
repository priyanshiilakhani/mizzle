import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { technicalLeft, technicalRight } from '../../data';

@Component({
  selector: 'landing-product-technical-detail',
  imports: [LucideAngularModule],
  templateUrl: './technical-detail.html',
  styles: ``,
})
export class TechnicalDetail {
  technicalLeft = technicalLeft;
  technicalRight = technicalRight;
}
