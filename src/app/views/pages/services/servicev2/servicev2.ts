import { Component } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { Feature } from "./components/feature/feature";
import { Faqs } from "./components/faqs/faqs";
import { Cta } from "./components/cta/cta";

@Component({
  selector: 'app-servicev2',
  imports: [Hero, Feature, Faqs, Cta],
  templateUrl: './servicev2.html',
  styles: ``,
})
  
export class Servicev2 {

}
