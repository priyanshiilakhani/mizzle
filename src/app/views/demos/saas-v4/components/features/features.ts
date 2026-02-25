import { Component } from '@angular/core';
import { steps } from '../../data';

@Component({
  selector: 'saas-v4-features',
  imports: [],
  templateUrl: './features.html',
  styles: ``,
})
export class Features {
  steps = steps;
}
