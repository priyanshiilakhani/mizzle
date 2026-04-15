import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { register } from 'swiper/element';
import { categorySlideData } from '../../data';
register();

@Component({
  selector: 'blog-list-category',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './category.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Category {
  categorySlideData = categorySlideData;
}
