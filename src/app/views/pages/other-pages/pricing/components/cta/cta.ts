import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { sliderData } from '../../data';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'pricing-cta',
  imports: [RouterLink],
  templateUrl: './cta.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Cta {
  sliderData = sliderData;
}
