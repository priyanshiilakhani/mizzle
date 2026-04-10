import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { register } from 'swiper/element/bundle';
import { productData } from '../../data';
register();

@Component({
  selector: 'shop-single-similar-product',
  imports: [LucideAngularModule],
  templateUrl: './similar-product.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SimilarProduct {
  productData = productData;
}
