import { Component } from '@angular/core';
import { countData } from '../../data';
import { CountUpDirective } from 'ngx-countup';

@Component({
  selector: 'about-counter',
  imports: [CountUpDirective],
  templateUrl: './counter.html',
  styles: ``,
})
  
export class Counter {
  countData = countData;
}
