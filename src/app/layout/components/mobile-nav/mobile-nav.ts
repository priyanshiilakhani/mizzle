import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { menuItems } from '../../data';

@Component({
  selector: 'app-mobile-nav',
  imports: [RouterLink],
  templateUrl: './mobile-nav.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class MobileNav {
  menuItems = menuItems;
  constructor(public router: Router) {}

  isMenuActive(menu: any): boolean {
    // direct url check
    if (menu.url && this.router.url.includes(menu.url)) {
      return true;
    }

    // children check
    if (menu.children) {
      return menu.children.some((child: any) => this.isMenuActive(child));
    }

    // mega menu columns check
    if (menu.columns) {
      return menu.columns.some((col: any) =>
        col.items.some((item: any) => this.router.url.includes(item.url)),
      );
    }

    // urls array check (portfolio type)
    if (menu.urls) {
      return menu.urls.some((item: any) => item.url && this.router.url.includes(item.url));
    }

    return false;
  }
}
