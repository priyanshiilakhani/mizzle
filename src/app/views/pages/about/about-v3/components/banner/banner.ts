import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from "lucide-angular";
import { clientData } from '../../data';
import { GlightboxDirective } from '@core/directive/glightbox.directive';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'aboutV3-banner',
  imports: [LucideAngularModule, RouterLink, GlightboxDirective],
  templateUrl: './banner.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Banner {
  clientData = clientData;
}
