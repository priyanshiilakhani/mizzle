import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { menuItems } from '../../data';
import { RouterLink } from "@angular/router";
import { LucideAngularModule } from "lucide-angular";

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './navbar.html',
  styles: ``,
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
  
export class Navbar {
  menuItems = menuItems;
}
