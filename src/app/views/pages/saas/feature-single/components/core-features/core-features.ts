import { Component } from '@angular/core';
import { featuresData } from '../../data';

@Component({
  selector: 'feature-single-core-features',
  imports: [],
  templateUrl: './core-features.html',
  styles: ``,
})
export class CoreFeatures {
  featuresData = featuresData;
}
