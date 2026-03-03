import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { register } from 'swiper/element/bundle';
import { clientimage, testimonialData } from '../../data';
import { RouterLink } from '@angular/router';
register();
@Component({
  selector: 'saas-v2-testimonials',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './testimonials.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Testimonials {
  clientimage = clientimage;
  testimonialData = testimonialData;
}
