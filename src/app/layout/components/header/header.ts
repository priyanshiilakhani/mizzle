import { Component, CUSTOM_ELEMENTS_SCHEMA, HostListener } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { ThemeToggler } from '../theme-toggler/theme-toggler';
import { MobileNav } from '../mobile-nav/mobile-nav';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from "lucide-angular";

@Component({
  selector: 'app-header',
  imports: [Navbar, ThemeToggler, MobileNav, RouterLink, LucideAngularModule],
  templateUrl: './header.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Header {
  theme: string = 'light';

  isSticky = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isSticky = window.scrollY > 50; 
  }
}
