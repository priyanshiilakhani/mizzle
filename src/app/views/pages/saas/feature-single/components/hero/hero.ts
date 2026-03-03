import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { clientData } from '../../data';
import { register } from 'swiper/element/bundle';
register()
@Component({
  selector: 'feature-single-hero',
  imports: [],
  templateUrl: './hero.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Hero {
  clientData = clientData
}
