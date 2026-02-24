import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LucideAngularModule } from "lucide-angular";
import { RouterLink } from "@angular/router";
import { register } from 'swiper/element/bundle';
import { blogs } from '../../data';

register();

@Component({
  selector: 'creative-agency-blog',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './blog.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Blog {
  blogsData = blogs;
}
