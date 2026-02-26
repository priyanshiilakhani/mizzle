import { Component } from '@angular/core';
import { Banner } from "./components/banner/banner";
import { Features } from "./components/features/features";
import { Testimonial } from "./components/testimonial/testimonial";
import { Location } from "./components/location/location";
import { Faqs } from "./components/faqs/faqs";

@Component({
  selector: 'app-about-v2',
  imports: [Banner, Features, Testimonial, Location, Faqs],
  templateUrl: './about-v2.html',
  styles: ``,
})
  
export class AboutV2 {

}
