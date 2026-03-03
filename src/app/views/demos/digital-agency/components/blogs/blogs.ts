import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element';
import { blogData } from '../../data';
import { RouterLink } from "@angular/router";
import { LucideAngularModule } from "lucide-angular";
register()

@Component({
  selector: 'digital-agency-blogs',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './blogs.html',
  styles: ``,
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class Blogs {
  blogData = blogData
}
