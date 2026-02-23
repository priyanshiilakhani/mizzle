import { Component } from '@angular/core';
import { approachSteps } from '../../data';

@Component({
  selector: 'seo-approches',
  imports: [],
  templateUrl: './approches.html',
  styles: ``,
})
export class Approches {
 approachStepsData = approachSteps
}
