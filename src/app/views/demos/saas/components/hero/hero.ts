import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TypedTextDirective } from '@core/directive/ityped.directive';
import { LucideAngularModule } from "lucide-angular";
import { register } from 'swiper/element/bundle';
import { clientData } from '../../data';

register();

@Component({
  selector: 'saas-v1-hero',
  imports: [LucideAngularModule, TypedTextDirective],
  templateUrl: './hero.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Hero {
  clientData = clientData;
}
