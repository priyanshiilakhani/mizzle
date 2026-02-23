import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { testimonials } from '../../data';
register();

@Component({
  selector: 'seo-testimonial',
  imports: [],
  templateUrl: './testimonial.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Testimonial {
    testimonials = testimonials
}
