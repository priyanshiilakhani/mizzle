import { Component } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { CoreFeatures } from "./components/core-features/core-features";
import { Solution } from "./components/solution/solution";
import { Cta } from "./components/cta/cta";
import { Faq } from "./components/faq/faq";

@Component({
  selector: 'app-feature-single',
  imports: [Hero, CoreFeatures, Solution, Cta, Faq],
  templateUrl: './feature-single.html',
  styles: ``,
})
  
export class FeatureSingle {

}
