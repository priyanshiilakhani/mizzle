import { AuthService } from '@/app/services/auth.service';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthSwiper } from '../auth-swiper/auth-swiper';

@Component({
  selector: 'app-sign-in',
  imports: [RouterLink, LucideAngularModule, FormsModule, CommonModule, AuthSwiper],
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
}
