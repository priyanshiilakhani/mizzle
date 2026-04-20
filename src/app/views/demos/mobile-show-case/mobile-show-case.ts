import { Component } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { About } from "./components/about/about";
import { Steps } from "./components/steps/steps";
import { Features } from "./components/features/features";
import { Pricing } from "./components/pricing/pricing";
import { Testimonial } from "./components/testimonial/testimonial";
import { Cta } from "./components/cta/cta";

@Component({
  selector: 'app-mobile-show-case',
  imports: [Hero, About, Steps, Features, Pricing, Testimonial, Cta],
  templateUrl: './mobile-show-case.html',
  styles: ``,
})
export class MobileShowCase {

}
