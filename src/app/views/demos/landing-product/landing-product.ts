import { Component } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { TechnicalDetail } from "./components/technical-detail/technical-detail";
import { Feature } from "./components/feature/feature";
import { Features2 } from "./components/features2/features2";
import { List } from "./components/list/list";
import { Video } from "./components/video/video";
import { TestimonialCard } from "./components/testimonial-card/testimonial-card";
import { Product } from "./components/product/product";
import { Footer } from "@app/components/footer/footer";

@Component({
  selector: 'app-landing-product',
  imports: [Hero, TechnicalDetail, Feature, Features2, List, Video, TestimonialCard, Product, Footer],
  templateUrl: './landing-product.html',
  styles: ``,
})
export class LandingProduct {

}
