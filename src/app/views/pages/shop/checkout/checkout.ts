import { Component } from '@angular/core';
import { Breadcrumb } from "@app/components/breadcrumb/breadcrumb";
import { PersonalInfo } from "./components/personal-info/personal-info";
import { PaymentOption } from "./components/payment-option/payment-option";
import { PromoCode } from "./components/promo-code/promo-code";
import { Detail } from "./components/detail/detail";

@Component({
  selector: 'app-checkout',
  imports: [Breadcrumb, PersonalInfo, PaymentOption, PromoCode, Detail],
  templateUrl: './checkout.html',
  styles: ``,
})
export class Checkout {

}
