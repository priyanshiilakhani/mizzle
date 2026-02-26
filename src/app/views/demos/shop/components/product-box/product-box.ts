import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { LucideAngularModule } from "lucide-angular";

@Component({
  selector: 'shop-product-box',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './product-box.html',
  styles: ``,
})
export class ProductBox {

}
