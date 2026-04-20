import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AccountSidebar } from "../components/account-sidebar/account-sidebar";
import { LucideAngularModule } from "lucide-angular";

@Component({
  selector: 'app-delete',
  imports: [RouterLink, AccountSidebar, LucideAngularModule],
  templateUrl: './delete.html',
  styles: ``,
})
  
export class Delete {

}
