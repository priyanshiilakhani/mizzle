import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { register } from 'swiper/element';
import { swiperBlogData } from '../../data';
import { RouterLink } from "@angular/router";
register();

@Component({
  selector: 'blog-single-related-blog',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './related-blog.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class RelatedBlog {
  swiperBlogData = swiperBlogData;
}
