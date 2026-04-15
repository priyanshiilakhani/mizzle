import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { blogListData } from '../../data';

@Component({
  selector: 'blog-list-our-blogs',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './our-blogs.html',
  styles: ``,
})
export class OurBlogs {
  blogListData = blogListData;
}
