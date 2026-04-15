import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { socialLinkData, tagData } from '../../data';

@Component({
  selector: 'blog-list-sidebar',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './sidebar.html',
  styles: ``,
})
export class Sidebar {
  socialLinkData = socialLinkData;
  tagData = tagData;
}
