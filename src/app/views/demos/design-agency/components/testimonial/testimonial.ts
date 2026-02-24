import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from "lucide-angular";
import { statData, testimonialData } from '../../data';
import { register } from 'swiper/element/bundle';
import { CountUpDirective } from 'ngx-countup';

register();

@Component({
  selector: 'design-agency-testimonial',
  imports: [LucideAngularModule, RouterLink, CountUpDirective],
  templateUrl: './testimonial.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Testimonial {
  testimonialData = testimonialData;
  statData = statData;
}
