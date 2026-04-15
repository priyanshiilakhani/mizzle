import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { pricingData, testimonialData } from '../../data';
import { LucideAngularModule } from "lucide-angular";
import { RouterLink } from '@angular/router';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'service-single-pricing',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './pricing.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Pricing {
  pricingData = pricingData;
  testimonialData = testimonialData;
}
