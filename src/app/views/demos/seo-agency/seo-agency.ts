import { Component } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { Services } from "./components/services/services";
import { About } from "./components/about/about";
import { Testimonial } from "./components/testimonial/testimonial";
import { CaseStudies } from "./components/case-studies/case-studies";
import { Approches } from "./components/approches/approches";
import { Team } from "./components/team/team";
import { Cta } from "./components/cta/cta";

@Component({
  selector: 'app-seo-agency',
  imports: [Hero, Services, About, Testimonial, CaseStudies, Approches, Team, Cta],
  templateUrl: './seo-agency.html',
  styles: ``,
})
  
export class SeoAgency {

}
