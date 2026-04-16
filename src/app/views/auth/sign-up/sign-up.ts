import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
register();
// type SlideType = {
//   image: string;
//   text: string;
//   name: string;
//   role: string;
//   rating: number;
// };
@Component({
  selector: 'app-sign-up',
  imports: [],
  templateUrl: './sign-up.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SignUp {
  // slideData: SlideType[] = [
  //   {
  //     image: '/images/auth/01.jpg',
  //     text: `"With unwavering determination, they navigate the complexities of the industry, forging strategic partnerships and driving transformative change."`,
  //     name: 'Emma Watson',
  //     role: 'Founder, catalog',
  //   },
  //   {
  //     image: '/images/auth/02.jpg',
  //     text: `"An exceptional agency CEO is a visionary, constantly pushing the boundaries of creativity and pushing their team to new heights. They inspire with their passion and cultivate a culture of trust and respect."`,
  //     name: 'Carolyn Ortiz',
  //     role: 'CEO, mizzle',
  //   },
  //   {
  //     image: '/images/auth/03.jpg',
  //     text: `"Through collaboration and strategic direction, they steer the agency towards its goals, navigating the ever-evolving landscape with agility and grace."`,
  //     name: 'Dennis Barrett',
  //     role: 'Founder, catalog',
  //   },
  // ];
}
