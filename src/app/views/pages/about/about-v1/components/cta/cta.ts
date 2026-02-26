import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { clientData } from '../../data';

register();

@Component({
  selector: 'about-cta',
  imports: [],
  templateUrl: './cta.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Cta {
  clientData = clientData;
}
