import { Component } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { Feature } from "./components/feature/feature";
import { Statistics } from "./components/statistics/statistics";
import { Integration } from "./components/integration/integration";
import { Pricing } from "./components/pricing/pricing";
import { Testimonials } from "./components/testimonials/testimonials";
import { Cta } from "./components/cta/cta";
import { Footer } from "@app/components/footer/footer";

@Component({
  selector: 'app-saas-v3',
  imports: [Hero, Feature, Statistics, Integration, Pricing, Testimonials, Cta, Footer],
  templateUrl: './saas-v3.html',
  styles: ``,
})
  
export class SaasV3 {

}
