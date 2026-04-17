import { Component } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { Feature } from "./components/feature/feature";
import { Cta } from "./components/cta/cta";
import { Faqs } from "./components/faqs/faqs";
import { Footer } from "@app/components/footer/footer";

@Component({
  selector: 'app-pricing',
  imports: [Hero, Feature, Cta, Faqs, Footer],
  templateUrl: './pricing.html',
  styles: ``,
})
export class Pricing {

}
