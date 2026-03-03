import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { LucideAngularModule } from 'lucide-angular';
import { RouterLink } from '@angular/router';
import { categoryData, CategoryType } from '../../data';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
register();
@Component({
  selector: 'shop-featured-category',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './featured-category.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FeaturedCategory {
  categoryData: (CategoryType & { safeIcon: SafeHtml })[] = [];

  constructor(private sanitizer: DomSanitizer) {
    this.categoryData = categoryData.map((item) => ({
      ...item,
      safeIcon: this.sanitizer.bypassSecurityTrustHtml(item.icon),
    }));
  }
}
