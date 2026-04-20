import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthSwiper } from "../auth-swiper/auth-swiper";

@Component({
  selector: 'app-sign-up',
  imports: [CommonModule, LucideAngularModule, RouterLink, ReactiveFormsModule, AuthSwiper],
  templateUrl: './sign-up.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SignUp {
 registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required],
        terms: [false, Validators.requiredTrue],
      },
      {
        validators: this.passwordMatchValidator,
      }
    );
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirm = form.get('confirmPassword')?.value;
    return password === confirm ? null : { mismatch: true };
  }

  onSubmit() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
    } else {
      this.registerForm.markAllAsTouched();
    }
  }

}
