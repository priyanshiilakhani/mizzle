import { Component } from '@angular/core';
import { Breadcrumb } from '@app/components/breadcrumb/breadcrumb';
import { Rating } from './component/rating/rating';
import { SimilarProduct } from './component/similar-product/similar-product';
import { Specification } from './component/specification/specification';
import { SingleHero } from "./component/hero/hero";

@Component({
  selector: 'app-single',
  imports: [Breadcrumb, Rating, SimilarProduct, Specification, SingleHero],
  templateUrl: './single.html',
  styles: ``,
})
  
export class Single {}
