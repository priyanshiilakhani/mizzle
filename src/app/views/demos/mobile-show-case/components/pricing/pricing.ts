import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { pricingPlansData } from '../../data';

@Component({
  selector: 'mobile-show-case-pricing',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './pricing.html',
  styles: ``,
})
export class Pricing {
  pricingPlansData = pricingPlansData;

}
