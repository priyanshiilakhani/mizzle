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

  closeMobileMenu() {
    const el = document.getElementById('mobileMenuOffcanvas');
    if (!el) return;

    (window as any).HSOverlay?.close?.(el);

    el.classList.add('-translate-y-full');
    el.classList.remove('translate-y-0');

    this.closeAllMobileAccordions(el);
  }

  private closeAllMobileAccordions(el: HTMLElement) {
    const activeAccordions = el.querySelectorAll('.hs-accordion.active');
    activeAccordions.forEach((accordion) => accordion.classList.remove('active'));

    const accordionContents = el.querySelectorAll('.hs-accordion-content');
    accordionContents.forEach((content) => {
      content.classList.add('hidden');
      content.classList.remove('block');
      content.removeAttribute('style');
      content.setAttribute('aria-hidden', 'true');
    });

    const accordionToggles = el.querySelectorAll('.hs-accordion-toggle');
    accordionToggles.forEach((toggle) => {
      if (toggle instanceof HTMLElement) {
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }
}
