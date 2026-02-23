import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { LucideAngularModule } from "lucide-angular";
register();
@Component({
  selector: 'digital-agency-testimonials',
  imports: [LucideAngularModule],
  templateUrl: './testimonials.html',
  styles: ``,
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class Testimonials {

}
