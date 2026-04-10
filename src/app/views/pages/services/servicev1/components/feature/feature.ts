import { Component } from '@angular/core';
import { LucideAngularModule } from "lucide-angular";
import { featureData } from '../../data';

@Component({
  selector: 'servicev1-feature',
  imports: [LucideAngularModule],
  templateUrl: './feature.html',
  styles: ``,
})
  
export class Feature {
  featureData = featureData;
}
