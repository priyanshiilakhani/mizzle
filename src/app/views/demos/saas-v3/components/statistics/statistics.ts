import { Component } from '@angular/core';
import { CountUpDirective } from 'ngx-countup';
import { statData } from '../../data';

@Component({
  selector: 'saas-v3-statistics',
  imports: [CountUpDirective],
  templateUrl: './statistics.html',
  styles: ``,
})
  
export class Statistics {
  statData = statData;
}
