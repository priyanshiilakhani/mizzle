import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from "@angular/router";
import { LucideAngularModule } from "lucide-angular";
import { products } from '../../data';
import { register } from 'swiper/element/bundle';
register()

@Component({
  selector: 'landing-product-list',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './list.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class List {
products = products
}
