import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { RouterLink } from '@angular/router';
import { register } from 'swiper/element/bundle';
import { client, socialLinks } from '../../data';
register();

@Component({
  selector: 'contact-v2-hero',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './hero.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Hero {
  client = client;
  socialLinks = socialLinks;
}
