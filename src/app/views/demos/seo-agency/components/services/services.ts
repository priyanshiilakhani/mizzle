import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'seo-services',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './services.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Services {}
