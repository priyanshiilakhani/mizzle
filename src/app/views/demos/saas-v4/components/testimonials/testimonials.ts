import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { counterData, testimonialData } from '../../data';
import { CountUpDirective } from 'ngx-countup';
import { LucideAngularModule } from 'lucide-angular';
import { register } from 'swiper/element/bundle';
import { RouterLink } from '@angular/router';
register();

@Component({
  selector: 'saas-v4-testimonials',
  imports: [CountUpDirective, LucideAngularModule, RouterLink],
  templateUrl: './testimonials.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Testimonials {
  counterData = counterData;
  testimonialData = testimonialData;
}
