import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { avatarData, testimonialData } from '../../data';
import { LucideAngularModule } from "lucide-angular";
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'aboutV2-testimonial',
  imports: [LucideAngularModule],
  templateUrl: './testimonial.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Testimonial {
  avatarData = avatarData;
  testimonialData = testimonialData;

  getFullStars(rating: number): number[] {
    return Array(Math.floor(rating)).fill(0);
  }

  hasHalfStar(rating: number): boolean {
    return rating % 1 !== 0;
  }
}
