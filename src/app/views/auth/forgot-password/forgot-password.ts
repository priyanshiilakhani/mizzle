import { Component } from '@angular/core';
import { AuthSwiper } from "../auth-swiper/auth-swiper";
import { RouterLink } from "@angular/router";
import { LucideAngularModule } from "lucide-angular";
import { NgOtpInputComponent } from 'ng-otp-input';

@Component({
  selector: 'app-forgot-password',
  imports: [AuthSwiper, RouterLink, LucideAngularModule,NgOtpInputComponent],
  templateUrl: './forgot-password.html',
  styles: ``,
})
export class ForgotPassword {
}
