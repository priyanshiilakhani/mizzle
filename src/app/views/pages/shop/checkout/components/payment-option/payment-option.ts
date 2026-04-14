import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { RouterLink } from '@angular/router';
import { paymentData } from '../../data';

@Component({
  selector: 'checkout-payment-option',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './payment-option.html',
  styles: ``,
})
export class PaymentOption {
  paymentData = paymentData;
}
