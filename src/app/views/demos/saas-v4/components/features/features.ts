import { Component } from '@angular/core';
import { stepData } from '../../data';

@Component({
  selector: 'saas-v4-features',
  imports: [],
  templateUrl: './features.html',
  styles: ``,
})
export class Features {
  stepData = stepData;
}
