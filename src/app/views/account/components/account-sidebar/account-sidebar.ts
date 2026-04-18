import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LucideAngularModule } from "lucide-angular";
import { sidebarData } from './data';

@Component({
  selector: 'app-account-sidebar',
  imports: [RouterLink, LucideAngularModule, RouterLinkActive],
  templateUrl: './account-sidebar.html',
  styles: ``,
})
  
export class AccountSidebar {
  sidebarData = sidebarData;
}
