import { Component } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { Feature } from "./components/feature/feature";
import { Cta } from "./components/cta/cta";
import { Faqs } from "./components/faqs/faqs";

@Component({
  selector: 'app-pricing',
  imports: [Hero, Feature, Cta, Faqs],
  templateUrl: './pricing.html',
  styles: ``,
})
  
export class Pricing {

}
