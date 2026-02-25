import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { blogs } from '../../data';

@Component({
  selector: 'saas-v4-blogs',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './blogs.html',
  styles: ``,
})
export class Blogs {
  blogs = blogs;
}
