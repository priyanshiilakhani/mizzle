import { Component } from '@angular/core';
import { Banner } from "./components/banner/banner";
import { About } from "./components/about/about";
import { Team } from "./components/team/team";
import { Installation } from "./components/installation/installation";
import { Testimonials } from "./components/testimonials/testimonials";
import { Cta } from "./components/cta/cta";
import { Footer } from "@app/components/footer/footer";

@Component({
  selector: 'app-about-v3',
  imports: [Banner, About, Team, Installation, Testimonials, Cta, Footer],
  templateUrl: './about-v3.html',
  styles: ``,
})
export class AboutV3 {

}
