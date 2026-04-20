import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { ThemeToggler } from '../theme-toggler/theme-toggler';
import { MobileNav } from '../mobile-nav/mobile-nav';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [Navbar, ThemeToggler, MobileNav, RouterLink],
  templateUrl: './header.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Header {
  theme: string = 'light';

}
