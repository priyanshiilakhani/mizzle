import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { cartItemData } from '../../data';

@Component({
  selector: 'cart-detail',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './detail.html',
  styles: ``,
})
export class Detail {
  cartItemData = cartItemData;
  removeItem(id: number) {
    this.cartItemData = this.cartItemData.filter((item) => item.id !== id);
  }
}
