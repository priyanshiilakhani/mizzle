import { Component } from '@angular/core';
import { Breadcrumb } from "@app/components/breadcrumb/breadcrumb";
import { Detail } from "./components/detail/detail";
import { Faq } from "./components/faq/faq";

@Component({
  selector: 'app-cart',
  imports: [Breadcrumb, Detail, Faq],
  templateUrl: './cart.html',
  styles: ``,
})

export class Cart {

}
