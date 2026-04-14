import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { RouterLink } from '@angular/router';
import { orderItemData } from '../../data';

@Component({
  selector: 'checkout-detail',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './detail.html',
  styles: ``,
})
export class Detail {
  orderItemData = orderItemData;
}
