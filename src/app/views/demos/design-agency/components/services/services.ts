import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { servicesData } from '../../data';

@Component({
  selector: 'design-agency-services',
  imports: [RouterLink],
  templateUrl: './services.html',
  styles: ``,
})
  
export class Services {
  servicesData = servicesData;
}
