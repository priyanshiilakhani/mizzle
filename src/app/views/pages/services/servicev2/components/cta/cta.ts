import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { register } from 'swiper/element/bundle';
import { clientData } from '../../data';

register();

@Component({
  selector: 'servicev2-cta',
  imports: [RouterLink],
  templateUrl: './cta.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Cta {
  clientData = clientData;
}
