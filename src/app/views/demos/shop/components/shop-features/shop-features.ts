import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { features } from '../../data';

@Component({
  selector: 'shop-features',
  imports: [LucideAngularModule],
  templateUrl: './shop-features.html',
  styles: ``,
})
export class ShopFeatures {
  features = features;
}
