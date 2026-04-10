import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { GlightboxDirective } from '@core/directive/glightbox.directive';
import { ratingData, reviewData, reviewImageData } from '../../data';

@Component({
  selector: 'shop-single-rating',
  imports: [LucideAngularModule, GlightboxDirective],
  templateUrl: './rating.html',
  styles: ``,
})
export class Rating {
  ratingData = ratingData;
  reviewImageData = reviewImageData;
  reviewData = reviewData;
}
