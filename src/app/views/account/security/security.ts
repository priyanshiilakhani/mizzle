import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LucideAngularModule } from "lucide-angular";
import { AccountSidebar } from "../components/account-sidebar/account-sidebar";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-security',
  imports: [LucideAngularModule, AccountSidebar, RouterLink],
  templateUrl: './security.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
  
export class Security {

}
