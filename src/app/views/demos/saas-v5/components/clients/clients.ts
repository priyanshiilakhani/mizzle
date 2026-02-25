import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { clientData } from '../../data';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'saas-v5-clients',
  imports: [],
  templateUrl: './clients.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Clients {
  clientData = clientData;
}
