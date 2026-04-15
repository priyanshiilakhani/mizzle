import { Component } from '@angular/core';
import { stepData } from '../../data';

@Component({
  selector: 'service-single-work',
  imports: [],
  templateUrl: './work.html',
  styles: ``,
})
  
export class Work {
  stepData = stepData;
}
