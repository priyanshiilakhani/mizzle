import { Component } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { Feature } from "./components/feature/feature";
import { About } from "./components/about/about";
import { Work } from "./components/work/work";
import { Performance } from "./components/performance/performance";
import { Pricing } from "./components/pricing/pricing";
import { Blog } from "./components/blog/blog";
import { Footer } from "@app/components/footer/footer";

@Component({
  selector: 'app-saas',
  imports: [Hero, Feature, About, Work, Performance, Pricing, Blog, Footer],
  templateUrl: './saas.html',
  styles: ``,
})
  
export class Saas {

}
