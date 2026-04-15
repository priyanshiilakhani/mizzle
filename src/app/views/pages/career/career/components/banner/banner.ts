import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LucideAngularModule } from "lucide-angular";
import { sliderData } from '../../data';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'career-banner',
  imports: [LucideAngularModule],
  templateUrl: './banner.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Banner {
  sliderData = sliderData;
}

