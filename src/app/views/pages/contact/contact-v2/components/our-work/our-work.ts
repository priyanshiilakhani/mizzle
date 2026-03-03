import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { templateItemData } from '../../data';

@Component({
  selector: 'contact-v2-our-work',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './our-work.html',
  styles: ``,
})
export class OurWork {
  templateItemData = templateItemData;
}
