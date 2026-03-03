import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { statData } from '../../data';
import { CountUpDirective } from 'ngx-countup';

@Component({
  selector: 'mobile-show-case-about',
  imports: [RouterLink, CountUpDirective],
  templateUrl: './about.html',
  styles: ``,
})
export class About {
  statData = statData;
}
