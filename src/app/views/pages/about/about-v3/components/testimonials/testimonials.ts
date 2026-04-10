import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from "lucide-angular";
import { testimonialData } from '../../data';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'aboutV3-testimonials',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './testimonials.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Testimonials {
  testimonialData = testimonialData;
}
