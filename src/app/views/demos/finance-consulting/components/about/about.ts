import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { aboutData } from '../../data';

@Component({
  selector: 'finance-consulting-about',
  imports: [RouterLink],
  templateUrl: './about.html',
  styles: ``,
})
  
export class About {
  aboutData = aboutData;
}
