import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'blog-single-v2-sidebar',
  imports: [RouterLink],
  templateUrl: './sidebar.html',
  styles: ``,
})
export class Sidebar {
  recentPostData: string[] = [
    '5 investment doubts you should clarify',
    'Mastering Responsive Web Design with TailwindCSS',
    'Effortless Web Development with Mizzle',
    'Sleek and Responsive - Designing with TailwindCSS and Mizzle',
    'Ten questions you should answer truthfully.',
  ];
  tagData: string[] = [
    'blog',
    'business',
    'tailwindcss',
    'data science',
    'deep learning',
    'Adventure',
    'Community',
    'Tutorials',
    'Interview',
    'Photography',
    'Classic',
  ];
}
