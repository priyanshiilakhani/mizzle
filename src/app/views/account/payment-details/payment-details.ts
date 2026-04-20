import { Component } from '@angular/core';
import { LucideAngularModule } from "lucide-angular";
import { AccountSidebar } from "../components/account-sidebar/account-sidebar";
import { RouterLink } from '@angular/router';
import { paymentData, transitionData } from './data';

@Component({
  selector: 'app-payment-details',
  imports: [LucideAngularModule, AccountSidebar, RouterLink],
  templateUrl: './payment-details.html',
  styles: ``,
})
  
export class PaymentDetails {
  paymentData = paymentData;
  transitionData = transitionData;
}
