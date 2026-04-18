import { Component } from '@angular/core';
import { LucideAngularModule } from "lucide-angular";
import { AccountSidebar } from "../components/account-sidebar/account-sidebar";
import { Footer } from "@app/components/footer/footer";

@Component({
  selector: 'app-detail',
  imports: [LucideAngularModule, AccountSidebar, Footer],
  templateUrl: './detail.html',
  styles: ``,
})
  
export class Detail {

}
