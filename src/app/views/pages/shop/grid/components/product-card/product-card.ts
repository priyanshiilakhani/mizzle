import { Component } from '@angular/core';
import { shopItemData } from '../../data';
import { RouterLink } from "@angular/router";
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'product-card',
  imports: [RouterLink,LucideAngularModule],
  templateUrl: './product-card.html',
  styles: ``,
})
export class ProductCard {
shopItemData = shopItemData
}
