import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { technicalLeftData, technicalRightData } from '../../data';

@Component({
  selector: 'landing-product-technical-detail',
  imports: [LucideAngularModule],
  templateUrl: './technical-detail.html',
  styles: ``,
})
export class TechnicalDetail {
  technicalLeftData = technicalLeftData;
  technicalRightData = technicalRightData;
}
