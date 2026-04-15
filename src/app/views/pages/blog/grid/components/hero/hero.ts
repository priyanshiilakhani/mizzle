import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { register } from 'swiper/element/bundle';
import { blogSlideData } from '../../data';

register();

@Component({
  selector: 'blog-hero',
  imports: [LucideAngularModule],
  templateUrl: './hero.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Hero {
  blogSlideData = blogSlideData;
}
