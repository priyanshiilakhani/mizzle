import { Component } from '@angular/core';
import { testimonialData } from '../../data';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'mobile-show-case-testimonial',
  imports: [LucideAngularModule],
  templateUrl: './testimonial.html',
  styles: ``,
})
export class Testimonial {
  testimonialData = testimonialData;
  getFullStars(rating: number): number[] {
    return Array(Math.floor(rating)).fill(0);
  }

  hasHalfStar(rating: number): boolean {
    return rating % 1 !== 0;
  }

  getEmptyStars(rating: number): number[] {
    const total = 5;
    const full = Math.floor(rating);
    const half = this.hasHalfStar(rating) ? 1 : 0;
    return Array(total - full - half).fill(0);
  }
}
