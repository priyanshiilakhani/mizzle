import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { RouterLink } from '@angular/router';
import { GlightboxDirective } from '@core/directive/glightbox.directive';
import { popularTagData } from '../../data';

@Component({
  selector: 'blog-single-detail',
  imports: [LucideAngularModule, RouterLink, GlightboxDirective],
  templateUrl: './detail.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Detail {
  popularTagData = popularTagData;
}
