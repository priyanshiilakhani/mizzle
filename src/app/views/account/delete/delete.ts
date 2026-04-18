import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AccountSidebar } from "../components/account-sidebar/account-sidebar";
import { LucideAngularModule } from "lucide-angular";
import { Footer } from "@app/components/footer/footer";

@Component({
  selector: 'app-delete',
  imports: [RouterLink, AccountSidebar, LucideAngularModule, Footer],
  templateUrl: './delete.html',
  styles: ``,
})
  
export class Delete {

}
