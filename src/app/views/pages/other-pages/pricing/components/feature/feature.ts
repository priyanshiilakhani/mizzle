import { Component } from '@angular/core';
import { LucideAngularModule } from "lucide-angular";
import { featureData, pricing2Data } from '../../data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'pricing-feature',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './feature.html',
  styles: ``,
})
  
export class Feature {
  featureData = featureData;
  pricing2Data = pricing2Data;
}
