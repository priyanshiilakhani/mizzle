import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { register } from 'swiper/element/bundle';
import { clientimage } from '../../data';
import { JarallaxDirective } from "@core/directive/jarallax.directive";
register();

@Component({
  selector: 'saas-v4-tour-video',
  imports: [LucideAngularModule, JarallaxDirective],
  templateUrl: './tour-video.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TourVideo {
  clientimage = clientimage;
}
