
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GlightboxDirective } from '@core/directive/glightbox.directive';
import { register } from 'swiper/element/bundle';
import { LucideAngularModule } from 'lucide-angular';
import { imageData } from '../../data';
register();

@Component({
  selector: 'shop-single-hero',
  imports: [RouterLink, GlightboxDirective, LucideAngularModule],
  templateUrl: './hero.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SingleHero {
  imageData = imageData;
}
