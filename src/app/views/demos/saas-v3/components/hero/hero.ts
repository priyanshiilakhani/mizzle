import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { GlightboxDirective } from '@core/directive/glightbox.directive';
import { LucideAngularModule } from "lucide-angular";
import { clientData } from '../../data';
import { register } from 'swiper/element/bundle';
import { RouterLink } from "@angular/router";

register();

@Component({
  selector: 'saas-v3-hero',
  imports: [LucideAngularModule, GlightboxDirective, RouterLink],
  templateUrl: './hero.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Hero {
  clientData = clientData;
}
