import { Component } from '@angular/core';
import { LucideAngularModule } from "lucide-angular";
import { RouterLink } from "@angular/router";
import { pricingData } from '../../data';

@Component({
  selector: 'saas-v5-pricing',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './pricing.html',
  styles: ``,
})
  
export class Pricing {
  pricingData = pricingData;
}
