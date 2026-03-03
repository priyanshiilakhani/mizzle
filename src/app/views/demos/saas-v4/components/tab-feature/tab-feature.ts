import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { featureData } from '../../data';

@Component({
  selector: 'saas-v4-tab-feature',
  imports: [LucideAngularModule],
  templateUrl: './tab-feature.html',
  styles: ``,
})
export class TabFeature {
  featureData = featureData;
}
