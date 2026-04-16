import { AuthService } from '@/app/services/auth.service';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { register } from 'swiper/element/bundle';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
register();

const auth1 = '/images/auth/01.jpg';
const auth2 = '/images/auth/02.jpg';
const auth3 = '/images/auth/03.jpg';

type SlideType = {
  image: string;
  text: string;
  name: string;
  role: string;
  rating: number;
};
@Component({
  selector: 'app-sign-in',
  imports: [RouterLink, LucideAngularModule, FormsModule, CommonModule],
  templateUrl: './sign-in.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SignIn {
  email = 'admin@example.com';
  password = 'password';
  error = '';

  constructor(
    private auth: AuthService,
    private router: Router,
  ) {}

  onSubmit() {
    const isLoggedIn = this.auth.login(this.email, this.password);

    if (isLoggedIn) {
      this.router.navigate(['']);
    } else {
      this.error = 'Invalid email or password';
    }
  }

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
