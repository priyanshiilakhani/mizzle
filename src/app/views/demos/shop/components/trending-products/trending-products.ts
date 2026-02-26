import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { products } from '../../data';

@Component({
  selector: 'shop-trending-products',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './trending-products.html',
  styles: ``,
})
export class TrendingProducts {
  products = products;
}
