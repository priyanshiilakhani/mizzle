import { Component } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { FeaturedCategory } from "./components/featured-category/featured-category";
import { TrendingProducts } from "./components/trending-products/trending-products";
import { ShopFeatures } from "./components/shop-features/shop-features";
import { LatestCollections } from "./components/latest-collections/latest-collections";
import { ProductBox } from "./components/product-box/product-box";
import { BrandCollection } from "./components/brand-collection/brand-collection";
import { Footer } from "@app/components/footer/footer";

@Component({
  selector: 'app-shop',
  imports: [Hero, FeaturedCategory, TrendingProducts, ShopFeatures, LatestCollections, ProductBox, BrandCollection, Footer],
  templateUrl: './shop.html',
  styles: ``,
})
export class Shop {

}
