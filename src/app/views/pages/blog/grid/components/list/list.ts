import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { blogGridData } from '../../data';

@Component({
  selector: 'blog-list',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './list.html',
  styles: ``,
})
export class List {
  blogGridData = blogGridData;
}
