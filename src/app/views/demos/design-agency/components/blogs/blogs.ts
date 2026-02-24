import { Component } from '@angular/core';
import { LucideAngularModule } from "lucide-angular";
import { RouterLink } from "@angular/router";
import { blogData } from '../../data';

@Component({
  selector: 'design-agency-blogs',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './blogs.html',
  styles: ``,
})
  
export class Blogs {
  blogData = blogData;
}
