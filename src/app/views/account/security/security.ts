import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LucideAngularModule } from "lucide-angular";
import { AccountSidebar } from "../components/account-sidebar/account-sidebar";
import { Footer } from "@app/components/footer/footer";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-security',
  imports: [LucideAngularModule, AccountSidebar, Footer, RouterLink],
  templateUrl: './security.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
  
export class Security {

}
