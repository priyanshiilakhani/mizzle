import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from "lucide-angular";
import { pricingData } from '../../data';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'saas-v1-pricing',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './pricing.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Pricing {
  pricingData = pricingData;
}
