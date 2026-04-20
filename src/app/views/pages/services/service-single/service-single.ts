import { Component } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { Video } from "./components/video/video";
import { Benefits } from "./components/benefits/benefits";
import { Work } from "./components/work/work";
import { Pricing } from "./components/pricing/pricing";
import { Cta } from "./components/cta/cta";

@Component({
  selector: 'app-service-single',
  imports: [Hero, Video, Benefits, Work, Pricing, Cta],
  templateUrl: './service-single.html',
  styles: ``,
})
  
export class ServiceSingle {

}
