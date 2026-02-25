import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from "lucide-angular";
import { register } from 'swiper/element/bundle';
import { blogData } from '../../data';

register();

@Component({
  selector: 'saas-v5-blogs',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './blogs.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Blogs {
  blogData = blogData;
}