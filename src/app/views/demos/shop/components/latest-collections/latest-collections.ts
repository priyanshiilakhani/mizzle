import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { register } from 'swiper/element/bundle';
import { testimonialData } from '../../data';
register();

@Component({
  selector: 'shop-latest-collections',
  imports: [LucideAngularModule],
  templateUrl: './latest-collections.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LatestCollections {
  testimonialData = testimonialData;
}
