import { Component, CUSTOM_ELEMENTS_SCHEMA, HostListener } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { ThemeToggler } from '../theme-toggler/theme-toggler';
import { MobileNav } from '../mobile-nav/mobile-nav';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { LucideAngularModule } from "lucide-angular";

@Component({
  selector: 'app-header',
  imports: [Navbar, ThemeToggler, MobileNav, RouterLink, LucideAngularModule],
  templateUrl: './header.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Header {
  isDarkHeader = false;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        let route = this.router.routerState.root.firstChild;

        while (route?.firstChild) {
          route = route.firstChild;
        }

        this.isDarkHeader = route?.snapshot.data?.['headerDark'] || false;
      }
    });
  }

  isSticky = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isSticky = window.scrollY > 50; 
  }
}
