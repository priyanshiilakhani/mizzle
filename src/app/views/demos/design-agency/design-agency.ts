import { Component } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { About } from "./components/about/about";
import { Services } from "./components/services/services";
import { Work } from "./components/work/work";
import { Testimonial } from "./components/testimonial/testimonial";
import { Awards } from "./components/awards/awards";
import { Blogs } from "./components/blogs/blogs";

@Component({
  selector: 'app-design-agency',
  imports: [Hero, About, Services, Work, Testimonial, Awards, Blogs],
  templateUrl: './design-agency.html',
  styles: ``,
})
  
export class DesignAgency {

}
