import { Component } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { TourVideo } from "./components/tour-video/tour-video";
import { Features } from "./components/features/features";
import { TabFeature } from "./components/tab-feature/tab-feature";
import { Integrations } from "./components/integrations/integrations";
import { Testimonials } from "./components/testimonials/testimonials";
import { Blogs } from "./components/blogs/blogs";

@Component({
  selector: 'app-saas-v4',
  imports: [Hero, TourVideo, Features, TabFeature, Integrations, Testimonials, Blogs],
  templateUrl: './saas-v4.html',
  styles: ``,
})
  
export class SaasV4 {

}
