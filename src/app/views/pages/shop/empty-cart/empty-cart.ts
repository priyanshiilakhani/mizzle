import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Footer } from "@app/components/footer/footer";

@Component({
  selector: 'app-empty-cart',
  imports: [RouterLink, Footer],
  templateUrl: './empty-cart.html',
  styles: ``,
})
export class EmptyCart {

}
