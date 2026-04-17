import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from "lucide-angular";
import { pricingData, PricingPlanType } from '../../data';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'pricing-hero',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './hero.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Hero {
  pricingData = pricingData;

  getToggleData(item: PricingPlanType) {
    return JSON.stringify({
      target: '#toggle-count-switch',
      min: item.priceMin,
      max: item.priceMax,
    });
  }
}
