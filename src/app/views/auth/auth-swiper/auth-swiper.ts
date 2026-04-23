import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { register } from 'swiper/element/bundle';
register();
const auth1 = 'assets/images/auth/01.jpg';
const auth2 = 'assets/images/auth/02.jpg';
const auth3 = 'assets/images/auth/03.jpg';

type SlideType = {
  image: string;
  text: string;
  name: string;
  role: string;
  rating: number;
};

@Component({
  selector: 'app-auth-swiper',
  imports: [LucideAngularModule,CommonModule],
  templateUrl: './auth-swiper.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AuthSwiper {
  slideData: SlideType[] = [
    {
      image: auth1,
      text: `"With unwavering determination, they navigate the complexities of the industry, forging strategic partnerships and driving transformative change."`,
      name: 'Emma Watson',
      role: 'Founder, catalog',
      rating: 4.5,
    },
    {
      image: auth2,
      text: `"An exceptional agency CEO is a visionary, constantly pushing the boundaries of creativity and pushing their team to new heights. They inspire with their passion and cultivate a culture of trust and respect."`,
      name: 'Carolyn Ortiz',
      role: 'CEO, mizzle',
      rating: 4.5,
    },
    {
      image: auth3,
      text: `"Through collaboration and strategic direction, they steer the agency towards its goals, navigating the ever-evolving landscape with agility and grace."`,
      name: 'Dennis Barrett',
      role: 'Founder, catalog',
      rating: 4.5,
    },
  ];
}
